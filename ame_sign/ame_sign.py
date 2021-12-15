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
import inspect
import json
from datetime import datetime

import requests


class Request:
    def __init__(self):
        session = requests.Session()
        self.session = session
        self.get = session.get
        self.post = session.post

    pass


class ApiBase(requests.Response):
    HOST = r'https://ame.primeton.com'
    URL = ''
    method = 'GET'
    data = None
    proxies = None

    # proxies = {
    #     'http': 'http://127.0.0.1:1080',
    #     'https': 'http://127.0.0.1:1080',
    # }

    # noinspection PyMissingConstructor
    def __init__(self, *args, **kwargs):
        """

        :type req: Request
        """
        self.req = args[0]

    def __call__(self, *args, **kwargs):
        url = self.HOST + self.URL
        if self.method == 'GET':
            return self.req.get(url, params=kwargs, proxies=self.proxies)
            pass
        elif self.method == 'POST':
            if self.data == 'json':
                return self.req.post(url, json=args[0], proxies=self.proxies)
            else:
                return self.req.post(url, data=kwargs, proxies=self.proxies)
            pass
        pass

    pass


class ApiGet(ApiBase):
    method = 'GET'


class ApiPost(ApiBase):
    method = 'POST'


class ApiPostJson(ApiBase):
    method = 'POST'
    data = 'json'


class AmeApi(Request):
    def __getattribute__(self, item):
        value = object.__getattribute__(self, item)
        if inspect.isclass(value) and issubclass(value, ApiBase):
            return value(self)
        return value

    class login(ApiPost):
        """
        params
        SSOLOGOUT=true
        return

        """
        URL = '/default/sso.login?SSOLOGOUT=true'

    class queryOwnerCusts(ApiGet):
        """
        params
        userid=<USERID>
        return
        {"custs":[{"custid":1,"custname":"普元组织级"},{"custid":2,"custname":"普元非立项"},{"custid":<CUSTID>,"custname":"<CUSTNAME>"}]}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.rdmgr.labor.labormgr.queryOwnerCusts.biz.ext'

    class getTBorg(ApiGet):
        """
        params
        return
        {"TBorgs":[{"orgid":<ORGID>,"orgname":"<ORGNAME>","parentorgid":<PARENTORGID>}]}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.getTBorg.biz.ext'

    class getLaborMinDate(ApiGet):
        """
        params
        return
        {"minDate":"2021-02-25 00:00:00"}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.getLaborMinDate.biz.ext'

    class isWorkDay(ApiGet):
        """
        params
        LaborDate=2021-03-04
        return
        {"isWorkday":"1"}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.isWorkDay.biz.ext'

    class getMyLastLabor(ApiGet):
        """
        params
        LaborDate=2021-03-04
        return
        {"labor":{"laborDetailId":<LABORDETAILID>,"laborDate":"<laborDate>","worklistId":null,"tasklist":"46","taskname":null,"userId":"<USERID>","projectId":<PROJECTID>,"actHours":8,"stdHours":null,"repContent":"<工作的具体内容>","isClose":null,"userOrgId":<ORGID>,"grade":"<grade>","cost":<cost>,"price":<price>,"insertdate":"<insertdate>","lastupdatedate":"<lastupdatedate>","org":null,"otwHours":0,"conratio":1,"concost":<concost>,"resign":null,"custid":<CUSTID>,"status":"0","benefconfq":null,"benefconfr":null,"benefconftime":null,"pmoconftime":null,"pmoconfer":null,"fincostdate":null,"finconftime":null,"finconfer":null,"standcost":<standcost>,"costremark":null,"isDaysOff":"0","benefconfer":null,"omOrganization":{"orgid":<orgid>,"orgname":"<orgname>"}}}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.rdmgr.labor.input.rdlabordetailbiz.getMyLastLabor.biz.ext'

    class queryRdProject(ApiGet):
        """
        params
        custid=<CUSTID>
        return
        {"project":[{"projectid":<PROJECTID>,"projectname":"<PROJECTNAME>"}]}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.queryRdProject.biz.ext'

    class querytasklist(ApiGet):
        """
        params
        projectid=<PROJECTID>
        return
        {"tasklists":[{"tasklist":"52","projecttype":"6","taskname":"02技术交流"},...]}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.querytasklist.biz.ext'

    class queryorg(ApiGet):
        """
        params
        projectID=<PROJECTID>
        return
        {"allorgs":[{"orgid":<orgid>,"orgname":"<orgname>","parentorgid":<parentorgid>}]}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.queryorg.biz.ext'

    class wxTimeList(ApiGet):
        """<
        params
        startdate=2021-03-04&enddate=2021-03-04
        return
        '{"rdLabor":[{"laborDetailId":<laborDetailId>,"laborDate":"<laborDate>","actHours":8,"otwHours":0,"custname":"<CUSTNAME>","projectName":"<PROJECTNAME>","salesName":"<salesName>","taskname":"<taskname>","repContent":"<工作的具体内容>","status":"0","statusname":"新增"}]}'
        >"""
        URL = '/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.wxTimeList.biz.ext'

    class wx_wtime(ApiGet):
        """
        params
        year=2021&month=3
        return
        '{"labors":[{"LABOR_DATE":"2021-03-01 00:00:00","ACT_HOURS":8,"OTW_HOURS":0,"STATUS":"0"},{"LABOR_DATE":"2021-03-02 00:00:00","ACT_HOURS":8,"OTW_HOURS":0,"STATUS":"0"},{"LABOR_DATE":"2021-03-03 00:00:00","ACT_HOURS":8,"OTW_HOURS":0,"STATUS":"0"},{"LABOR_DATE":"2021-03-04 00:00:00","ACT_HOURS":8,"OTW_HOURS":0,"STATUS":"0"}]}'
        """
        URL = '/default/ame/clipview/com.primeton.eos.ame_common.wx_worktime.wx_wtime.biz.ext'

    class saveAllRdLaborDetails1(ApiPostJson):
        """
        params
        {"insertEntities":[{"actHours":"8.0","userId":"<USERID>","laborDetailId":"","laborDate":"2021-03-04","otwHours":0,"custid":<CUSTID>,"projectId":<PROJECTID>,"tasklist":"46","repContent":"信用询价接口开发","status":0,"userOrgId":<ORGID>,"isDaysOff":"0","tbly":"","omOrganization":{"orgid":<orgid>}}]}
        return
        {}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.rdmgr.labor.input.rdlabordetailbiz.saveAllRdLaborDetails1.biz.ext'

    class wxWorTimeDelete(ApiGet):
        """
        params
        laborDetailId=1546881&labordate=2021-03-04
        return
        {"result":0}
        """
        URL = '/default/ame_common/wxworktime/com.primeton.eos.ame_common.wx_worktime.wxWorTimeDelete.biz.ext'


class Report(Request):
    def __init__(self, sc_key):
        self.sc_key = sc_key
        self.session = requests.Session()
        self.get = self.session.get
        self.post = self.session.post


class Ame(object):

    def __init__(self, username, password, sc_key=None):
        self.ame_api = AmeApi()
        self.username = username
        self.password = password
        self.sc_key = sc_key

    def report(self, text, desp=''):
        print(text, desp)
        if self.sc_key:
            self.ame_api.post('https://sc.ftqq.com/{sc_key}.send'.format(sc_key=self.sc_key), {
                'text': text,
                'desp': desp,
            })
        else:
            print("未配置通知发送")
        pass

    pass

    def login(self):
        """
        :return:
        """
        res = self.ame_api.login(
            _eosFlowAction='login',
            loginPage='ame/login/login.jsp',
            service='http://ame.primeton.com:443/default/ame/clipview/index.jsp',
            username=self.username,
            password=self.password,
            verifyCode=''
        )
        if '忘记密码' in res.text:
            return False
        return True

    def get_custs(self):
        """

        :return: [{custid,custname}]
        """
        res = self.ame_api.queryOwnerCusts(userid=username)
        data = res.json()
        return data.get('custs', [])

    def get_project(self, custid):
        """

        :param custid:
        :return: [{projectid,projectname}]
        """
        res = self.ame_api.queryRdProject(custid=custid)
        data = res.json()
        return data.get('project', [])

    def get_tasklist(self, projectid):
        """

        :param projectid:
        :return: [{tasklist,projecttype,taskname}]
        """
        res = self.ame_api.querytasklist(projectid=projectid)
        data = res.json()
        return data.get('tasklists', [])

    def get_user_org(self):
        """

        :return: [{orgid,orgname,parentorgid}]
        """
        res = self.ame_api.getTBorg()
        data = res.json()
        return data.get('TBorgs', [])

    def get_org(self, projectID):
        """

        :return: [{orgid,orgname,parentorgid}]
        """
        res = self.ame_api.queryorg(projectID=projectID)
        data = res.json()
        return data.get('allorgs', [])

    def is_workday(self, date):
        """

        :return: "0" - NoWorkday, "1" - Workday
        """
        res = self.ame_api.isWorkDay(LaborDate=date)
        data = res.json()
        return data.get('isWorkday')

    def find_work_time(self, date_start, date_end):
        res = self.ame_api.wxTimeList(startdate=date_start, enddate=date_end)
        data = res.json()
        return data.get('rdLabor', [])

    def add_work_time(self, data):
        res = self.ame_api.saveAllRdLaborDetails1(data)
        return res.json()

    def del_work_time(self, labor_id, labor_date):
        res = self.ame_api.wxWorTimeDelete(laborDetailId=labor_id, labordate=labor_date)
        data = res.json()
        return data.get('result', -1) == 0

    def make_work_time(self, act_hours, rep_content, taskid=None, taskname=None):
        # cust
        for c in self.get_custs():
            if c['custid']:
                cust = c
                for p in self.get_project(custid=c['custid']):
                    if p['projectid']:
                        project = p
                        for t in self.get_tasklist(projectid=p['projectid']):
                            if taskid == t['tasklist'] or taskname == t['tasklist']:
                                task = t
                                break
                        else:
                            continue
                        break
                else:
                    continue
                break
        else:
            raise Exception("cust NotFound")

        # project
        if not project:
            raise Exception("project NotFound")

        # task
        if not task:
            raise Exception("task NotFound")

        # user_org
        for uo in self.get_user_org():
            if uo['orgid']:
                user_org = uo
                break
        else:
            raise Exception("project NotFound")

        # org
        for o in self.get_org(projectID=project['projectid']):
            if o['orgid']:
                org = o
                break
        else:
            raise Exception("project NotFound")

        date_now = datetime.now().strftime('%Y-%m-%d')
        is_days_off = self.is_workday(date_now) == "0"
        return {
            "insertEntities": [
                {
                    "actHours": act_hours,
                    "custid": cust['custid'],
                    "isDaysOff": "1" if is_days_off else "0",
                    "laborDate": date_now,
                    "laborDetailId": "",
                    "omOrganization": {
                        "orgid": org['orgid']
                    },
                    "otwHours": act_hours - (0 if is_days_off else 8),
                    "projectId": project['projectid'],
                    "repContent": rep_content,
                    "status": 0,
                    "tasklist": task['tasklist'],
                    "tbly": "",
                    "userId": self.username,
                    "userOrgId": user_org['orgid'],
                }
            ]
        }


if __name__ == '__main__':
    import configparser

    cp = configparser.ConfigParser()
    cp.read('ame_sign.cfg')
    username = cp.get('USER', 'USERNAME')
    password = cp.get('USER', 'PASSWORD')
    sc_key = cp.get('NOTIFY', 'SC_KEY')
    taskid = cp.get('TASK', 'TASK_ID')
    content = cp.get('TASK', 'CONTENT')

    ame = Ame(username, password, sc_key)
    if not ame.login():
        print('登陆失败')
        ame.report('登陆失败')
        exit(-1)

    day = datetime.now().strftime('%Y-%m-%d')
    wt_list = ame.find_work_time(date_start=day, date_end=day)
    if len(wt_list) == 0:
        try:
            work_time = ame.make_work_time(8, content, taskid=taskid)
            res = ame.add_work_time(work_time)
            assert not res, '提交工时失败：' + str(res)
            wt_list = ame.find_work_time(date_start=day, date_end=day)
            if len(wt_list) == 1:
                ame.report('签到成功', json.dumps(work_time, ensure_ascii=False))
        except Exception as e:
            ame.report('签到失败', str(e))
    else:
        ame.report('当日已存在工时', json.dumps(wt_list[0], ensure_ascii=False))
