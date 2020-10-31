# -*- coding:UTF-8 -*-

import threading
import time

import RPi.GPIO as GPIO

from controller import Controller


class Car(threading.Thread):
    # 小车电机引脚定义
    IN1 = 20
    IN2 = 21
    IN3 = 19
    IN4 = 26
    ENA = 16
    ENB = 13

    def __init__(self):
        threading.Thread.__init__(self)
        self._running = True
        self._speed = 0
        self._angle = 0
        self._speed_l = 0
        self._speed_r = 0

        # 设置GPIO口为BCM编码方式
        GPIO.setmode(GPIO.BCM)

        # 忽略警告信息
        GPIO.setwarnings(False)

        # 电机引脚初始化操作
        GPIO.setup(self.ENA, GPIO.OUT, initial=GPIO.HIGH)
        GPIO.setup(self.IN1, GPIO.OUT, initial=GPIO.LOW)
        GPIO.setup(self.IN2, GPIO.OUT, initial=GPIO.LOW)
        GPIO.setup(self.ENB, GPIO.OUT, initial=GPIO.HIGH)
        GPIO.setup(self.IN3, GPIO.OUT, initial=GPIO.LOW)
        GPIO.setup(self.IN4, GPIO.OUT, initial=GPIO.LOW)

        # 设置pwm引脚和频率为2000hz
        self.pwm_ENA = GPIO.PWM(self.ENA, 2000)
        self.pwm_ENB = GPIO.PWM(self.ENB, 2000)
        self.pwm_ENA.start(0)
        self.pwm_ENB.start(0)

    def destory(self):
        self.pwm_ENA.stop()
        self.pwm_ENB.stop()
        GPIO.cleanup()

    def stop(self):
        self._running = False

    @property
    def speed(self):
        return self._speed

    @speed.setter
    def speed(self, value):
        self._speed = max(-100, min(100, value))

    @property
    def angle(self):
        return self._angle

    @angle.setter
    def angle(self, value):
        self._angle = max(-100, min(100, value))

    @property
    def speed_l(self):
        return self._speed_l

    @speed_l.setter
    def speed_l(self, value):
        self._speed_l = max(-100, min(100, value))

    @property
    def speed_r(self):
        return self._speed_r

    @speed_r.setter
    def speed_r(self, value):
        self._speed_r = max(-100, min(100, value))

    @property
    def abs_speed(self):
        return abs(self._speed)

    @property
    def abs_angle(self):
        return abs(self._angle)

    @property
    def sp_ang(self):
        return max(-100, min(100, self.abs_speed - self.abs_angle))

    def run(self):
        while self._running:
            if self.speed == 0:
                self.speed_l, self.speed_r = -self.angle, self.angle
            else:
                temp_angle = -self.angle if self.speed * self.angle < 0 else self.angle
                self.speed_l = self.speed - temp_angle
                if self.speed < 0:
                    self.speed_r = min(self.speed, temp_angle)
                else:
                    self.speed_r = max(self.speed, temp_angle)
                if self.speed * self.angle < 0:
                    self.speed_l, self.speed_r = self.speed_r, self.speed_l

            print(
                f"\rspeed: {self.speed:6.2f} angle: {self.angle:6.2f} speed_l: {self.speed_l:6.2f} speed_r: {self.speed_r:6.2f}",
                end=" " * 5)

            GPIO.output(self.IN1, GPIO.LOW if self.speed_l >= 0 else GPIO.HIGH)
            GPIO.output(self.IN2, GPIO.LOW if self.speed_l <= 0 else GPIO.HIGH)
            GPIO.output(self.IN3, GPIO.LOW if self.speed_r >= 0 else GPIO.HIGH)
            GPIO.output(self.IN4, GPIO.LOW if self.speed_r <= 0 else GPIO.HIGH)
            self.pwm_ENA.ChangeDutyCycle(abs(self.speed_l))
            self.pwm_ENB.ChangeDutyCycle(abs(self.speed_r))
            time.sleep(0.01)


# noinspection PyPep8Naming
class MyController(Controller):

    def __init__(self, car, **kwargs):
        Controller.__init__(self, **kwargs)
        self.car = car

    def on_L3_up(self, value):
        self.car.speed = value * 100 / 32768

    def on_L3_down(self, value):
        self.car.speed = value * 100 / 32768

    def on_L3_y_at_rest(self):
        self.car.speed = 0

    def on_L3_left(self, value):
        self.car.angle = value * 100 / 32768

    def on_L3_right(self, value):
        self.car.angle = value * 100 / 32768

    def on_L3_x_at_rest(self):
        self.car.angle = 0


if __name__ == "__main__":
    car = Car()
    car.start()
    controller = MyController(car=car, interface="/dev/input/js0",
                              connecting_using_ds4drv=False)
    controller.listen()
    car.stop()
    car.join()
