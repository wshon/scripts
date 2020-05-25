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
import logging
from datetime import datetime
from time import sleep

import requests
import uiautomator2 as u2

DEVICE = ''
DEV_PASSWORD = ''
DT_USERNAME = ''
DT_PASSWORD = ''

SC_KEY = ''

MAX_TRY = 5

logging.basicConfig(
    format='%(levelname)s: %(asctime)s [%(pathname)s:%(lineno)d] %(message)s',
    level=logging.INFO
)


def notice(text, desp=''):
    if SC_KEY:
        requests.post('https://sc.ftqq.com/{sc_key}.send'.format(sc_key=SC_KEY), {
            'text': text,
            'desp': desp or text,
        })
    pass


def unlock(d, password=None):
    if not d.info.get('screenOn'):
        logging.info('准备点亮屏幕')
        d.screen_on()
        sleep(1)
    else:
        logging.info('屏幕已经处于点亮状态，【跳过】点亮屏幕')
        d.press("home")

    if d(resourceId="com.android.systemui:id/notification_panel").exists(timeout=3):
        logging.info('上划解锁')
        d.swipe(0.5, 0.8, 0.5, 0.2)
        # d.swipe_ext('up')
    else:
        logging.info('未找到锁屏页面，【跳过】上划解锁')

    if d(resourceId="com.android.systemui:id/keyguard_pin_view").exists(timeout=3):
        logging.info('找到密码输入页面，准备输入密码')
        if not password:
            raise Exception('【错误】找到锁屏密码，但是未设置锁屏密码')
        for word in password:
            d(resourceId=f'com.android.systemui:id/key{word}').click()
        logging.info('密码输入完毕')
    else:
        logging.info('未找到密码输入页面，【跳过】输入密码')


def dt_login(sess, username, password):
    sleep(1)
    activity = sess.app_current().get('activity')
    if activity == 'com.alibaba.android.user.login.SignUpWithPwdActivity':
        if sess(resourceId="com.alibaba.android.rimet:id/btn_facebox_next").exists:
            logging.info('当前登录方式为人脸识别登录，切换到密码登录方式')
            sess(resourceId="com.alibaba.android.rimet:id/login_mode_pwd").click()

        logging.info('输入用户名')
        sess(resourceId="com.alibaba.android.rimet:id/et_phone_input").set_text(username)

        logging.info('输入密码')
        sess(resourceId="com.alibaba.android.rimet:id/et_pwd_login").set_text(password)

        logging.info('点击登录按钮')
        sess(resourceId="com.alibaba.android.rimet:id/btn_next").click()
    else:
        logging.info('未找到钉钉登陆页面，【跳过】登录过程')


def dt_goto_sign(sess):
    logging.info('点击搜索框')
    sess(resourceId="com.alibaba.android.rimet:id/search_btn").must_wait()
    sess(resourceId="com.alibaba.android.rimet:id/search_btn").click_gone()

    logging.info('输入搜索文本')
    sess(resourceId="android:id/search_src_text").set_text('智能工作助理')

    logging.info('点击第一个搜索结果')
    sess.xpath(
        '//*[@resource-id="com.alibaba.android.rimet:id/ll_contacts_container"]/android.widget.LinearLayout[1]/android.widget.LinearLayout[1]/android.widget.RelativeLayout[1]').click()

    logging.info('等待工作助理加载完成')
    sess(resourceId="com.alibaba.android.rimet:id/tv_tips").wait()
    if sess(resourceId="com.alibaba.android.rimet:id/tv_tips").wait_gone():
        sess(resourceId="com.alibaba.android.rimet:id/title").wait()
        sleep(1)
        logging.info('点击打卡按钮')
        sess(description="打卡").click_gone()
    else:
        logging.warning('工作助理加载失败')


if __name__ == '__main__':
    logging.info('准备连接到远程设备')
    dev = u2.connect(DEVICE)

    logging.info(f'开始打卡，最大尝试次数为{MAX_TRY}次')
    for i in range(MAX_TRY):
        logging.info(f'第{i}次尝试打卡')
        try:
            logging.info('开始解锁远程设备')
            # d.unlock()  # 实现的不太好
            unlock(dev, DEV_PASSWORD)

            logging.info('开始连接到钉钉')
            dt = dev.session("com.alibaba.android.rimet")

            logging.info('等待钉钉加载完成')
            dt(resourceId="com.alibaba.android.rimet:id/action_bar_root").wait()

            logging.info('开始登录钉钉')
            dt_login(dt, DT_USERNAME, DT_PASSWORD)

            logging.info('开始切换到打卡页面')
            dt_goto_sign(dt)

            logging.info('等待打卡页面加载完成')
            dt(resourceId="com.alibaba.android.rimet:id/title").wait()

            logging.info('开始检查打卡条件')

            on_duty_time = datetime.strptime(str(datetime.now().date()) + '09:00', '%Y-%m-%d%H:%M')
            off_duty_time = datetime.strptime(str(datetime.now().date()) + '18:00', '%Y-%m-%d%H:%M')

            if datetime.now() < on_duty_time:
                logging.info('开始上班打卡')

                if dt(description="上班打卡").click_exists():
                    logging.info('上班打卡【成功】')
                    notice('上班卡手动打卡成功')
                    break
                elif dt(description="上班时间09:00").sibling(description="打卡时间").exists:
                    logging.info('上班打卡已被完成')
                    notice('上班卡已经通过其他方式打好了')
                    break
                else:
                    logging.info('找不到上班打卡按钮')
            elif datetime.now() > off_duty_time:
                logging.info('开始下班打卡')
                if dt(description="下班打卡").click_exists():
                    logging.info('下班打卡【成功】')
                    notice('下班卡手动打卡成功')
                    break
                elif dt(description="下班时间18:00").sibling(description="打卡时间").exists:
                    logging.info('下班打卡已被完成')
                    notice('下班卡已经通过其他方式打好了')
                    break
                else:
                    logging.info('找不到下班打卡按钮')
            else:
                logging.info('未到达上班打卡或下班打卡时间')
                break

        except Exception as err:
            logging.exception(err)

        logging.info('重新启动钉钉')
        dt.restart()
    else:
        logging.info(f'已经尝试{MAX_TRY}次，依旧无法打卡')

    logging.info('关闭钉钉')
    dt.close()

    logging.info('锁定设备')
    if dev.info.get('screenOn'):
        dev.press("power")
