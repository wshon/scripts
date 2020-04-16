#!/usr/bin/env python
# encoding: utf-8

"""
@Time    : 2020/4/16 10:30
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.ronpy.com
@Project : scripts
@FileName: auto_dingding
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
from datetime import datetime
from time import sleep

import uiautomator2 as u2

DEVICE = ''
DEV_PWD = ''
DD_NAME = ''
DD_PWD = ''

MAX_TRY = 5


def unlock(dev, password=None):
    if dev.info.get('screenOn'):
        return
    dev.screen_on()
    sleep(1)
    # self.d.swipe(0.5, 0.8, 0.5, 0.2)
    dev.swipe_ext('up')
    if not password:
        return
    for x in password:
        dev(resourceId=f'com.android.systemui:id/key{x}').click()


def dt_login(sess, username, password):
    activity = sess.app_current().get('activity')
    if activity == 'com.alibaba.android.user.login.SignUpWithPwdActivity':
        sess(resourceId="com.alibaba.android.rimet:id/login_mode_pwd").click()
        sess(resourceId="com.alibaba.android.rimet:id/et_phone_input").set_text(username)
        sess(resourceId="com.alibaba.android.rimet:id/et_pwd_login").set_text(password)
        sess(resourceId="com.alibaba.android.rimet:id/btn_next").click()


def dt_goto_sign(sess):
    sess(resourceId="com.alibaba.android.rimet:id/search_btn").click()
    sess(resourceId="android:id/search_src_text").set_text('智能工作助理')
    sess.xpath(
        '//*[@resource-id="com.alibaba.android.rimet:id/ll_contacts_container"]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]').click()
    # sess(resourceId="com.alibaba.android.rimet:id/et_sendmessage").set_text('打卡')
    # sess(resourceId="com.alibaba.android.rimet:id/btn_send").click()
    # sess(description="立即打卡").click()
    sess(description="打卡").must_wait()
    sess(description="打卡").click()


if __name__ == '__main__':
    dev = u2.connect(DEVICE)
    # d.unlock()  # 实现的不太好
    unlock(dev, DEV_PWD)
    dt = dev.session("com.alibaba.android.rimet")

    for x in range(MAX_TRY):
        dt_login(dt, DD_NAME, DD_PWD)
        dt_goto_sign(dt)
        if dt(description="已进入考勤范围").wait():
            break
        dt.restart()

    on_duty_time = datetime.strptime(str(datetime.now().date()) + '9:00', '%Y-%m-%d%H:%M')
    off_duty_time = datetime.strptime(str(datetime.now().date()) + '18:00', '%Y-%m-%d%H:%M')

    if datetime.now() < on_duty_time:
        if not dt(description="上班打卡").wait():
            dt(description="上班打卡").click()
        else:
            print('已打卡或找不到打卡按钮')
    else:
        print('未到达上班打卡时间')

    if datetime.now() > off_duty_time:
        if not dt(description="下班打卡").wait():
            dt(description="下班打卡").click()
        else:
            print('已打卡或找不到打卡按钮')
    else:
        print('未到达下班打卡时间')

    dt.close()

    if dev.info.get('screenOn'):
        dev.press("power")
