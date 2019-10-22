#!/usr/bin/env python3
# coding:utf-8 -*-
"""
@author: SamWang
@project: zs-hospital
@file: one.py
@time: 2019/6/24 17:17
@desc: 
"""
import hashlib
import json
import os
from datetime import datetime

import openpyxl
import requests
from prompt_toolkit import prompt

FLAG = "gdz"
urlbase = "http://m.zs-hospital.sh.cn"
urlbase_version = "v110/api"
urlbase_zs_login = f'{urlbase}:8065/zslogin/{urlbase_version}'
urlbase_zs_app = f'{urlbase}:8063/zsapp/{urlbase_version}'
urlbase_zs_book = f'{urlbase}:8064/zsbook/{urlbase_version}'

url_login = urlbase_zs_login + "/login/login.action"
url_getScanReport = urlbase_zs_app + "/checkReport/getScanReport.action"
url_findVisitsRecord = urlbase_zs_app + "/visitsRecord/findVisitsRecord.action"
url_getUserStatus = urlbase_zs_app + "/user/getUserStatus.action"


# o = urlbase_zs_app + "/checkReport/getCheckReport.action"
# p = urlbase_zs_app + "/checkReport/getReportDetailsV120.action"
# q = urlbase_zs_app + "/visitsRecord/visitDetailsV120.action"
# r = urlbase_zs_app + "/checkReport/getScanReport.action"

class Unit:
    from Crypto.Cipher import AES
    aes_key = '2015-AES-KEY-HIS'
    aes = AES.new(str.encode(aes_key), AES.MODE_ECB)

    @staticmethod
    def decrypt(src):
        import base64
        return base64.b64decode(Unit.aes.decrypt(src))

    @staticmethod
    def md5(src):
        m5 = hashlib.md5()
        m5.update(src.encode())
        return m5.hexdigest()


def login(session, mobile, password):
    cmd = 'login'
    mobile = mobile
    password = Unit.md5(f'{mobile}{password}{FLAG}')
    imei = '00000000-12f5-d045-214f-f3234d6a9e12'
    client_type = 1
    sign = Unit.md5(f'{cmd}clientType={client_type}imie={imei}mobile={mobile}password={password}{FLAG}')
    return session.post(url_login, {
        'clientType': client_type,
        'imie': imei,
        'mobile': mobile,
        'password': password,
        'sign': sign
    })


def get_scan_report(session, f_card_no, f_token):
    cmd = 'getScanReport'
    f_type = 0
    sign = Unit.md5(f'{cmd}cardNo={f_card_no}token={f_token}type={f_type}{FLAG}')
    return session.post(url_getScanReport, {
        'cardNo': f_card_no,
        'token': f_token,
        'type': f_type,
        'sign': sign
    })


def dave_scan_report(data):
    work_book = openpyxl.Workbook()
    for checkReport in data['data']:
        print(checkReport)
        sheet = work_book.create_sheet(checkReport['bk'])
        row = 1
        for index, head in enumerate([
            '项目',
            '类型',
            '值',
            '参考值',
            '单位',
            '标志',
        ]):
            sheet.cell(row, index + 1, head)
        row += 1
        for checkReportDto in checkReport['checkReportDtoList']:
            print(checkReportDto)
            sheet.cell(row, 1, checkReportDto['invkind'].strip())
            sheet.cell(row, 2, checkReportDto['itemna'].strip())
            sheet.cell(row, 3, checkReportDto['pvalue'].strip())
            sheet.cell(row, 4, checkReportDto['refrence'].strip())
            sheet.cell(row, 5, checkReportDto['unit'].strip())
            sheet.cell(row, 6, checkReportDto['lmtflag'].strip())
            row += 1
    filename = f'checkReportDtoList_{datetime.now().strftime("%Y%m%d%H%M%S")}.xlsx'
    work_book.save(filename)
    return filename


def get_scan_report_by_scan(session, f_card_no, f_token):
    cmd = 'getScanReport'
    f_begin_date, f_card_no = f_card_no.split(';')
    f_type = 1
    f_sign = Unit.md5(f'{cmd}beginDate={f_begin_date}cardNo={f_card_no}token={f_token}type={f_type}{FLAG}')
    return session.post(url_getScanReport, {
        'beginDate': f_begin_date,
        'cardNo': f_card_no,
        'token': f_token,
        'type': f_type,
        'sign': f_sign
    })


if __name__ == '__main__':
    token = None
    code = None
    if os.path.exists('token'):
        with open('token', encoding='utf-8') as f:
            token = f.read()
        print('自动登陆成功')
    s = requests.Session()
    while True:
        if not token:
            phone_no = ''
            pass_wd = ''
            while not phone_no:
                phone_no = prompt('Please input phone number: ')
            while not pass_wd:
                pass_wd = prompt('Please input password: ')
            res = login(s, phone_no, pass_wd)
            if res.status_code != 200:
                prompt('remote server is error')
            phone_no = pass_wd = ''
            content = Unit.decrypt(res.content)
            data_json = json.loads(content)
            print(data_json)
            if data_json['code'] != '0':
                print(data_json['msg'])
            token = data_json['data']['token']
            with open('token', 'w', encoding='utf-8') as f:
                f.write(token)
            print('登陆成功')
        text = prompt('Please input command: ')
        if text == 'quit':
            break
        if text == 'help':
            print('''report - 
scan - 
''')
        if text == 'report':
            while not code:
                code = prompt('Please input code: ')
            res = get_scan_report(s, code, token)
            code = ''
            content = Unit.decrypt(res.content)
            data_json = json.loads(content)
            file = dave_scan_report(data_json)
            print(f'保存到 {file} 成功')
        if text == 'scan':
            while not code:
                code = prompt('Please input code: ')
            res = get_scan_report_by_scan(s, code, token)
            code = ''
            raw = Unit.decrypt(res.content)
            data_json = json.loads(raw)
            print(data_json)

# s.get('http://httpbin.org/cookies/set/sessioncookie/123456789')
# r = s.get('http://httpbin.org/cookies')
# data_ = {'code': '0',
#          'data': {
#              'token': 'd6c5bb5b-80be-4713-9ccf-00be6f666128',
#              'usersDto': {
#                  'age': 26, 'cardType': -1, 'certificateNo': '21****199****606**', 'certificateType': 1, 'email': '',
#                  'head': '', 'insuranceCard': '', 'isAutoPay': 0, 'kinship': '-1', 'kinshipName': '我',
#                  'mobile': '15******542', 'password': '', 'patientId': '', 'payCode': '94', 'push': 1,
#                  'realName': '*森',
#                  'sex': 1, 'status': 1, 'userId': 'e8ac5e5b-****-4bc5-****-17f4****607c'
#              }
#          },
#          'msg': '处理成功 ',
#          'page': {},
#          'systemTime': '2019-06-25 22:23:40'}
# token = data['data']['token']
# res2 = get_scan_report(s, '<code>', token)
# raw2 = Unit.decrypt(res2.content)
# data2 = Unit.json_loads(raw2)
# print(data)
# res3 = get_scan_report_by_scan(s, '2019-06-24 08:19;6016061465165265048181578032', token)
# raw3 = Unit.decrypt(res3.content)
# data3 = Unit.json_loads(raw3)
# print(data)
# pass
'2019-06-24 08:19;6016061465165265048181578032;qr'
'''
  public static int a = 10;
  public static String b = "/Zs/image";
  public static String c = "/Zs/apk/";
  public static String d = "/Zs/";
  public static int e = 0;
  public static String f = "appid=54c058fd";
  public static String g = "http://m.zs-hospital.sh.cn";
  public static String h = g + ":8065/zslogin/";
  public static String i = g + ":8063/zsapp/";
  public static String j = g + ":8064/zsbook/";
  public static String k = "v110/api";
  public static String l = "m.zs-hospital.sh.cn";
  public static Integer m = Integer.valueOf(18082);
  public static String n = "gdz";
  public static HashMap<String, String> o = new HashMap();
  
  static
  {
    o.put("askdr", "0003");
    o.put("anzhuo", "0004");
    o.put("anzhi", "0005");
    o.put("baidu", "0006");
    o.put("i360", "0007");
    o.put("i91", "0009");
    o.put("yyb", "0010");
  }
'''

'''
a = a.k + "/login/login.action";
b = a.k + "/sms/sendVerifyCode.action";
c = a.k + "/sms/checkCode.action";
d = a.k + "/user/register.action";
e = a.k + "/user/editUser.action";
f = a.k + "/user/forgotPwd.action";
g = a.k + "/user/editMobile.action";
h = a.k + "/user/editPwd.action";
i = a.k + "/user/getCount.action";
j = a.k + "/msg/saveDeviceInfo.action";
k = a.k + "/user/isThere.action";
'''
'''
a = a.k + "/order/getOrders.action";
b = a.k + "/hospital/getDepas.action";
c = a.k + "/hospital/getOneTwoLevelDepas.action";
d = a.k + "/hospital/getDepaDetails.action";
e = a.k + "/book/findBookResource.action";
f = a.k + "/book/findBookResourceV120.action";
g = a.k + "/hospital/getDoctors.action";
h = a.k + "/hospital/getDoctorDetails.action";
i = a.k + "/visit/getReturnVisits.action";
j = a.k + "/drug/findPrescriptions.action";
k = a.k + "/file/uploadFile.action";
l = a.k + "/file/deleteFile.action";
m = a.k + "/visitsRecord/findVisitsRecord.action";
n = a.k + "/visitsRecord/visitDetails.action";
o = a.k + "/checkReport/getCheckReport.action";
p = a.k + "/checkReport/getReportDetailsV120.action";
q = a.k + "/visitsRecord/visitDetailsV120.action";
r = a.k + "/checkReport/getScanReport.action";
s = a.k + "/order/orderConfirm.action";
t = a.k + "/order/orderSubmit.action";
u = a.k + "/order/cancelOrder.action";
v = a.k + "/drug/addContinuedDrugs.action";
w = a.k + "/order/queryPatWait.action";
x = a.k + "/guide/deleteGuiDe.action";
'''
'''
a = a.k + "/login/loginOut.action";
b = a.k + "/feedback/addFeedback.action";
c = a.k + "/version/checkVersion.action";
'''
'''
a = a.k + "/book/getBooks.action";
b = a.k + "/book/getBookDetails.action";
c = a.k + "/other/getBindUseBankTypes.action";
d = a.k + "/other/getCustomService.action";
e = a.k + "/pay/authentication.action";
f = a.k + "/personal/myFamilys.action";
g = a.k + "/personal/getUser.action";
h = a.k + "/personal/addFamily.action";
i = a.k + "/personal/getKinships.action";
j = a.k + "/personal/getDefaultHeads.action";
k = a.k + "/personal/uploadHead.action";
l = a.k + "/msg/findMessageList.action";
m = a.k + "/pay/findBindCardNo.action";
n = a.k + "/pay/bindCardNo.action";
o = a.k + "/pay/unboundCardNo.action";
p = a.k + "/pay/editDefaultCardNo.action";
q = a.k + "/pay/getPayLimit.action";
r = a.k + "/pay/payLimit.action";
s = a.k + "/personal/autoPayVerify.action";
t = a.k + "/pay/defaultCardNo.action";
u = a.k + "/bills/findBills.action";
v = a.k + "/bills/billsDetail.action";
w = a.k + "/user/getUserStatus.action";
x = a.k + "/configCenter/getLawsInfo.action";
'''

'''
以下是2.0.6
package com.ihygeia.zs.d;

import android.content.Context;
import com.ihygeia.channel.register.c.e;
import com.ihygeia.zs.utils.AppUtils;
import java.util.HashMap;

public class a
{
  public static boolean a = false;
  public static int b = 10;
  public static String c = "/Zs/image";
  public static String d = "/Zs/apk/";
  public static String e = "/Zs/";
  public static int f = 0;
  public static String g = "appid=54c058fd";
  public static String h = "http://m.zs-hospital.sh.cn";
  public static String i = h + ":8065/zslogin/";
  public static String j = h + ":8063/zsapp/";
  public static String k = h + ":8064/zsbook/";
  public static String l = "m.zs-hospital.sh.cn";
  public static Integer m = Integer.valueOf(18082);
  public static String n = "v110/api";
  public static String o = "http://info.askdr.cn/article";
  public static String p = o + "/banner.json";
  public static String q = o + "/list.json";
  public static String r = "gdz";
  public static HashMap<String, String> s = new HashMap();
  
  static
  {
    s.put("askdr", "0003");
    s.put("anzhuo", "0004");
    s.put("anzhi", "0005");
    s.put("baidu", "0006");
    s.put("i360", "0007");
    s.put("i91", "0009");
    s.put("yyb", "0010");
  }
  
  public static String a(Context paramContext)
  {
    paramContext = AppUtils.getUMengChannelId(paramContext);
    if (e.a(paramContext)) {
      paramContext = "0003";
    }
    for (;;)
    {
      return paramContext;
      String str = (String)s.get(paramContext);
      paramContext = str;
      if (e.a(str)) {
        paramContext = "0003";
      }
    }
  }
  
  public static void a()
  {
    com.ihygeia.channel.register.a.a.a = 1;
  }
  
  public static final class a
  {
    public static final String a = a.n + "/login/login.action";
    public static final String b = a.n + "/sms/sendVerifyCode.action";
    public static final String c = a.n + "/sms/checkCode.action";
    public static final String d = a.n + "/user/register.action";
    public static final String e = a.n + "/user/editUser.action";
    public static final String f = a.n + "/user/forgotPwd.action";
    public static final String g = a.n + "/user/editMobile.action";
    public static final String h = a.n + "/user/editPwd.action";
    public static final String i = a.n + "/user/getCount.action";
    public static final String j = a.n + "/msg/saveDeviceInfo.action";
    public static final String k = a.n + "/user/isThere.action";
  }
  
  public static final class b
  {
    public static final String a = a.n + "/order/getOrders.action";
    public static final String b = a.n + "/hospital/getDepas.action";
    public static final String c = a.n + "/hospital/getOneTwoLevelDepas.action";
    public static final String d = a.n + "/hospital/getDepaDetails.action";
    public static final String e = a.n + "/hospital/getDept.action";
    public static final String f = a.n + "/book/findBookResource.action";
    public static final String g = a.n + "/book/findBookResourceV120.action";
    public static final String h = a.n + "/hospital/getDoctors.action";
    public static final String i = a.n + "/hospital/getDoctorDetails.action";
    public static final String j = a.n + "/visit/getReturnVisits.action";
    public static final String k = a.n + "/drug/findPrescriptions.action";
    public static final String l = a.n + "/file/uploadFile.action";
    public static final String m = a.n + "/file/deleteFile.action";
    public static final String n = a.n + "/visitsRecord/findVisitsRecord.action";
    public static final String o = a.n + "/visitsRecord/visitDetails.action";
    public static final String p = a.n + "/checkReport/getCheckReport.action";
    public static final String q = a.n + "/checkReport/getReportDetailsV120.action";
    public static final String r = a.n + "/visitsRecord/visitDetailsV120.action";
    public static final String s = a.n + "/checkReport/getScanReport.action";
    public static final String t = a.n + "/order/orderConfirm.action";
    public static final String u = a.n + "/order/orderSubmit.action";
    public static final String v = a.n + "/order/cancelOrder.action";
    public static final String w = a.n + "/drug/addContinuedDrugs.action";
    public static final String x = a.n + "/order/queryPatWait.action";
    public static final String y = a.n + "/guide/deleteGuiDe.action";
  }
  
  public static final class c
  {
    public static final String a = a.n + "/login/loginOut.action";
    public static final String b = a.n + "/feedback/addFeedback.action";
    public static final String c = a.n + "/version/checkVersion.action";
    public static final String d = a.n + "/hospital/hospitalGuide.action";
  }
  
  public static final class d
  {
    public static final String a = a.n + "/book/getBooks.action";
    public static final String b = a.n + "/book/getBookDetails.action";
    public static final String c = a.n + "/other/getBindUseBankTypes.action";
    public static final String d = a.n + "/other/getCustomService.action";
    public static final String e = a.n + "/pay/authentication.action";
    public static final String f = a.n + "/personal/myFamilys.action";
    public static final String g = a.n + "/personal/getUser.action";
    public static final String h = a.n + "/personal/addFamily.action";
    public static final String i = a.n + "/personal/getKinships.action";
    public static final String j = a.n + "/personal/getDefaultHeads.action";
    public static final String k = a.n + "/personal/uploadHead.action";
    public static final String l = a.n + "/msg/findMessageList.action";
    public static final String m = a.n + "/pay/findBindCardNo.action";
    public static final String n = a.n + "/pay/bindCardNo.action";
    public static final String o = a.n + "/pay/unboundCardNo.action";
    public static final String p = a.n + "/pay/editDefaultCardNo.action";
    public static final String q = a.n + "/pay/getPayLimit.action";
    public static final String r = a.n + "/pay/payLimit.action";
    public static final String s = a.n + "/personal/autoPayVerify.action";
    public static final String t = a.n + "/pay/defaultCardNo.action";
    public static final String u = a.n + "/bills/findBills.action";
    public static final String v = a.n + "/bills/billsDetail.action";
    public static final String w = a.n + "/user/getUserStatus.action";
    public static final String x = a.n + "/configCenter/getLawsInfo.action";
  }
}

'''
