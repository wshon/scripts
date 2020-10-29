# -*- coding:UTF-8 -*-

import threading
import time

import RPi.GPIO as GPIO
from pyPS4Controller.controller import Controller


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

    @property
    def speed(self):
        return self._speed

    @speed.setter
    def speed(self, value):
        print("speed", value)
        self._speed = value

    @property
    def angle(self):
        return self._angle

    @angle.setter
    def angle(self, value):
        print("angle", value)
        self._angle = value

    def set_l_speed(self, speed=0):
        GPIO.output(self.IN1, GPIO.LOW if speed <= 0 else GPIO.HIGH)
        GPIO.output(self.IN2, GPIO.LOW if speed >= 0 else GPIO.HIGH)
        self.pwm_ENA.ChangeDutyCycle(abs(speed))

    def set_r_speed(self, speed=0):
        GPIO.output(self.IN3, GPIO.LOW if speed <= 0 else GPIO.HIGH)
        GPIO.output(self.IN4, GPIO.LOW if speed >= 0 else GPIO.HIGH)
        self.pwm_ENB.ChangeDutyCycle(abs(speed))

    def stop(self):
        self._running = False

    def run(self):
        while self._running:
            self.set_l_speed(max(-100, min(100, self.speed - self.angle)))
            self.set_r_speed(max(-100, min(100, self.speed + self.angle)))
            time.sleep(0.01)


# noinspection PyPep8Naming
class MyController(Controller):

    def __init__(self, car, **kwargs):
        Controller.__init__(self, **kwargs)
        self.car = car

    def on_L3_up(self, value):
        print("on_L3_up: {}".format(value))
        self.car.speed = value * 100 / 32768

    def on_L3_down(self, value):
        print("on_L3_down: {}".format(value))
        self.car.speed = value * 100 / 32768

    def on_L3_left(self, value):
        print("on_L3_left: {}".format(value))
        self.car.angle = value * 100 / 32768

    def on_L3_right(self, value):
        print("on_L3_right: {}".format(value))
        self.car.angle = value * 100 / 32768

    def on_L3_x_at_rest(self):
        print("on_L3_x_at_rest")
        self.car.angle = 0

    def on_L3_y_at_rest(self):
        print("on_L3_y_at_rest")
        self.car.speed = 0


if __name__ == "__main__":
    car = Car()
    car.start()
    controller = MyController(car=car, interface="/dev/input/js0",
                              connecting_using_ds4drv=False)
    controller.listen()
    car.stop()
    car.join()
