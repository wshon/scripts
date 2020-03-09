#!/usr/bin/env python3
# encoding: utf-8

"""
@Time    : 2020/3/6 11:53
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.muumlover.com
@Project : scripts
@FileName: login
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
from datetime import datetime

import requests

HOST = r'https://ame.primeton.com'
URL_VCODE_SHOW = HOST + r'/default/common/jsp/codeImage.jsp?name=verifyCode&imageHeight=21&length=1&type=number'
URL_VCODE_CHECK = HOST + r'/default/org.gocom.abframe.auth.LoginManager.verifyCode.biz.ext'
URL_LOGIN = HOST + r'/default/sso.login?SSOLOGOUT=true'
URL_WORK_TIME_ADD = HOST + r'/default/ame_common/wxworktime/com.primeton.rdmgr.labor.input.rdlabordetailbiz.saveAllRdLaborDetails1.biz.ext'
URL_WORK_TIME_LIST = HOST + r'/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.wxTimeList.biz.ext'
URL_WORK_TIME_DEL = HOST + r'/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.wxWorTimeDelete.biz.ext'


class Request:
    def __init__(self):
        self.session = requests.Session()
        self.get = self.session.get
        self.post = self.session.post

    pass


class Ame(Request):
    def __init__(self, username, password):
        super().__init__()
        self.username = username
        self.password = password

    def get_vcode(self):
        res = self.get(URL_VCODE_SHOW)
        pass

    def check_vcode(self):
        """
        :return:
        """
        res = self.post(URL_VCODE_CHECK, {
            'code': '',
            'password': self.password,
            'flag': 'true',
        })
        pass

    def login(self):
        """
        :return:
        """
        res = self.post(URL_LOGIN, {
            '_eosFlowAction': 'login',
            'loginPage': 'ame/login/login.jsp',
            'service': 'http://ame.primeton.com:443/default/ame/clipview/index.jsp',
            'username': self.username,
            'password': self.password,
            'verifyCode': ''
        })
        if '忘记密码' in res.text:
            return False
        return True

    def find_work_time(self, date_start, date_end):
        res = self.get(URL_WORK_TIME_LIST, params={'startdate': date_start, 'enddate': date_end})
        return res

    def add_work_time(self, data):
        res = self.post(URL_WORK_TIME_ADD, json=data)
        return res

    def del_work_time(self, labor_id, labor_date):
        res = self.get(URL_WORK_TIME_LIST, params={'laborDetailId': labor_id, 'labordate': labor_date})
        return res

    def make_work_time(
            self,
            cust_id,
            project_id,
            org_id,
            task_list,
            user_org_id,
            act_hours,
            rep_content,
            otw_hours,
            user_id=None,
            labor_detail_id=None,
            labor_date=None,
            status=None,
            is_days_off=None,
            tbly=None,
    ):
        return {
            "insertEntities": [
                {
                    "actHours": act_hours,
                    "userId": user_id or self.username,
                    "laborDetailId": labor_detail_id or "",
                    "laborDate": labor_date or datetime.now().strftime('%Y-%m-%d'),
                    "otwHours": otw_hours or 0,
                    "custid": cust_id,
                    "projectId": project_id,
                    "tasklist": task_list,
                    "repContent": rep_content,
                    "status": status or 0,
                    "userOrgId": user_org_id,
                    "isDaysOff": is_days_off or "0",
                    "tbly": tbly or "",
                    "omOrganization": {
                        "orgid": org_id
                    }
                }
            ]
        }


if __name__ == '__main__':
    """
    https://ame.primeton.com/default/ame_common/wxworktime/com.primeton.rdmgr.labor.input.rdlabordetailbiz.getMyLastLabor.biz.ext
    """
    ame = Ame('username', 'password')
    if not ame.login():
        print('登陆失败')
        exit(-1)
    day = datetime.now().strftime('%Y-%m-%d')
    wt_list_rsp = ame.find_work_time(date_start=day, date_end=day)
    wt_list = wt_list_rsp.json()['rdLabor']
    if len(wt_list) == 0:
        work_time = ame.make_work_time(
            cust_id=000000,  # 客户ID 【数字】
            project_id=000000,  # 项目ID 【数字】
            org_id=000000,  # 受益部门ID 【数字】
            task_list='000000',  # 项目活动ID 【字符串】
            user_org_id=000000,  # 填报部门ID 【数字】
            act_hours='8.0',  # 总工时 【等于0为数字，大于0为字符串】
            otw_hours=0,  # 其中加班 【等于0为数字，大于0为字符串】
            rep_content='******'  # 工作内容 【字符串】
        )
        ame.add_work_time(work_time)
    else:
        print('当日已存在工时')
