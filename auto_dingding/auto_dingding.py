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


def dd_login(sess, username, password):
    activity = dd.app_current().get('activity')
    if activity == 'com.alibaba.android.user.login.SignUpWithPwdActivity':
        sess(resourceId="com.alibaba.android.rimet:id/login_mode_pwd").click()
        sess(resourceId="com.alibaba.android.rimet:id/et_phone_input").set_text(username)
        sess(resourceId="com.alibaba.android.rimet:id/et_pwd_login").set_text(password)
        sess(resourceId="com.alibaba.android.rimet:id/btn_next").click()


def dd_goto_sign(sess):
    sess(resourceId="com.alibaba.android.rimet:id/search_btn").click()
    sess(resourceId="android:id/search_src_text").set_text('智能工作助理')
    sess.xpath(
        '//*[@resource-id="com.alibaba.android.rimet:id/ll_contacts_container"]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]').click()
    sess(resourceId="com.alibaba.android.rimet:id/et_sendmessage").set_text('打卡')
    sess(resourceId="com.alibaba.android.rimet:id/btn_send").click()
    sess(description="立即打卡").click()
    sleep(3)


if __name__ == '__main__':
    d = u2.connect(DEVICE)
    # d.unlock()  # 实现的不太好
    unlock(d, DEV_PWD)

    with d.session("com.alibaba.android.rimet") as dd:
        dd_login(dd, DD_NAME, DD_PWD)
        dd_goto_sign(dd)
        if not dd(description="已进入考勤范围").exists:
            print('未找到 已进入考勤范围')

        on_duty_time = datetime.strptime(str(datetime.now().date()) + '9:00', '%Y-%m-%d%H:%M')
        off_duty_time = datetime.strptime(str(datetime.now().date()) + '18:00', '%Y-%m-%d%H:%M')

        if datetime.now() < on_duty_time:
            if not dd(description="上班打卡").exists:
                dd(description="上班打卡").click()
        else:
            print('未到达上班打卡时间')

        if datetime.now() > off_duty_time:
            if not dd(description="下班打卡").exists:
                dd(description="下班打卡").click()
        else:
            print('未到达下班打卡时间')

    if d.info.get('screenOn'):
        d.press("power")
