#!/usr/bin/env python
# -*- coding: utf-8 -*-
# ┬ ┬┌─┐┬ ┬┌─┐┌┐┌ ┌─┐┌─┐┌┬┐
# │││└─┐├─┤│ ││││ │  │ ││││
# └┴┘└─┘┴ ┴└─┘┘└┘o└─┘└─┘┴ ┴
from datetime import datetime

v_type = {
    'customer_name': 'str',  # 0
    'consumer_name': 'str',
    'project_name': 'str',
    'contract_number': 'str',
    'bargain_number': 'str',
    'license_type': 'str',  # 5
    'create_date': 'date',
    'end_date': 'date',
    'TLQ_Product_Name': 'str',
    'TLQ_Version_Number': 'str',
    'tlq_SendLink_StoS': 'int',  # 10
    'TLQ_SendLink_StoS': 'int',
    'tlq_RecvLink_StoS': 'int',
    'TLQ_RecvLink_StoS': 'int',
    'tlq_Link_CtoS': 'int',
    'TLQ_Link_CtoS': 'int',  # 15
    'tlq_Qcu_MaxNum': 'int',
    'TLQ_Qcu_MaxNum': 'int',
    'tlq_AppMaxNum': 'int',
    'TLQ_AppMaxNum': 'int',
    'IsConfEncryption': 'int',  # 20
    'TLQ_CPU_COUNT': 'int',
    'MacAddress': 'str',
}


# import ctypes as c
#
#
# class Licence(c.Structure):
#     _pack_ = 1
#     _fields_ = [
#         ('customer_name', c.c_uint32),
#         ('consumer_name', c.c_uint32),
#         ('project_name', c.c_uint32),
#         ('contract_number', c.c_uint32),
#         ('bargain_number', c.c_uint32),
#         ('license_type', c.c_uint32),
#         ('create_date', c.c_uint32),
#         ('end_date', c.c_uint32),
#         ('TLQ_Product_Name', c.c_uint32),
#         ('TLQ_Version_Number', c.c_uint32),
#         ('tlq_SendLink_StoS', c.c_uint32),
#         ('TLQ_SendLink_StoS', c.c_uint32),
#         ('tlq_RecvLink_StoS', c.c_uint32),
#         ('TLQ_SendLink_StoS', c.c_uint32),
#         ('TLQ_SendLink_StoS', c.c_uint32),
#         ('tlq_RecvLink_StoS', c.c_uint32),
#     ]
class Licence:
    # +0
    customer_name = None
    consumer_name = None
    # +128
    project_name = None
    # +256
    contract_number = None
    bargain_number = None
    # +384
    license_type = None
    # +560 checked earlier
    create_date = None
    # +568 checked -1 is Nolimit
    end_date = None
    # +416 checked is TongLINK/Q
    TLQ_Product_Name = None
    # +544 checked is 8.1
    TLQ_Version_Number = None
    # +576
    tlq_SendLink_StoS = None
    TLQ_SendLink_StoS = None
    # +580
    tlq_RecvLink_StoS = None
    TLQ_RecvLink_StoS = None
    # +584
    tlq_Link_CtoS = None
    TLQ_Link_CtoS = None
    # +588
    tlq_Qcu_MaxNum = None
    TLQ_Qcu_MaxNum = None
    # +592
    tlq_AppMaxNum = None
    TLQ_AppMaxNum = None
    # +596
    IsConfEncryption = None
    # +600
    TLQ_CPU_COUNT = None
    # +604
    MacAddress = None


licence = Licence()


def sub_40FE60(LicenceText):
    v5 = len(LicenceText) + 1
    v4 = v5 - 1
    v6 = v5 - 1
    out = ''
    if v4 > 0:
        v8 = v5 - 4
        v9 = v4
        v10 = 6
        v11 = (v5 - 2) // 6 + 1
        while True:
            if v10 - 3 < v6:
                Dst = LicenceText[0:3]
                v15 = LicenceText[2]
                if v10 < v6:
                    Srca = LicenceText[3:6]
                    v13 = LicenceText[5]
                else:
                    Srca = LicenceText[3:3 + v8]
            else:
                Dst = LicenceText[:v9]
                Srca = ""
            out += Srca
            out += Dst
            v10 += 6
            v9 -= 6
            v8 -= 6
            LicenceText = LicenceText[6:]  # v2 += 6
            v11 -= 1
            if not v11:
                break
    return out


def sub_4101C0(Src):
    v2 = 0
    v3 = Src
    v5 = len(Src)
    v8 = v5
    v9 = 0
    while v2 < v5:
        if v3[v2] == 61:
            break
        v2 += 1
        v9 += 1
    v10 = v9
    Dst = v3[:v9]
    v11 = v9 + 1
    if v9 <= v8:
        while v10 < v8:
            v12 = v3[v10]
            if v12 == 13:
                break
            if v12 == 10:
                break
            if not v12:
                break
            v10 += 1
            v9 += 1
    Srca = v3[v11:v9]

    # cvt py
    key = Dst.decode('gbk')
    if key not in v_type:
        print(key, Srca.decode('gbk'), 'is skip')
        return
    v_t = v_type[key]
    if v_t == 'str':
        value = Srca.decode('gbk')
    elif v_t == 'int':
        value = int(Srca.decode('gbk') or '0')
    elif v_t == 'date':
        value = datetime.strptime(Srca.decode('gbk'), '%Y-%m-%d')
    else:
        value = Srca
    licence.__setattr__(key, value)
    pass


import base64

LicenceTextOri = 'uc3Y29XJfVtZtZTbmF7qj3Jz98Lu8atfL270wcm+QpWN09qZhbWX25c+6U9yGvfo7v9LXC9uW0Ly/nP6yzkv6Cmybm2VuxpYfdHc2VT10lwZpbAcmFmVhpjcfZGdGVT0yF0ZxLTMDITI1AzLuZFCmVXRl9kYwMjPTIDYtEtMKVEMjU1ByxRX1Y3b2RmFtRfTUb2ZT1ElO5nTRClSy9V9WRMUzaWZXJ0519uXlcjbWJjEK04LRX1VExV9NFjdOdWYXhTAw09MXX0ClRWRklwQzczcmVFdf0KVvZHUHJF9OVjdlPVYW1mdXRvbKVFZWImVydfVvblc2lW1i9Od9NiZXIlRX4xCkaXX0V249RpbhbmU3RmQKRhcDb2SXNW5j5mRwdGcnlj0KlvbRX1VExmRMNlbrX1aW51M9N0bwClMTAV9SRMU2TGZWN19TluaTPTdG9ApUEwMfTGTFF19DluaTPTdG9ApUEwMfQXTFFWF4BwTtPTTnVApUEwMfQ1TFF0NPBVXUPTVU5ApOEwMfVkRVd0lPVSUMSUTl9kNFNFTFWGPUNzdplUKqVyRVZFc2tqVNMlaUN0M5p1TjWmOTFkhE5aNycSZGR2Z28rVVY2bzdllSZqTkQUMmpjhXE0MpOHN2NlV1FFW2dWcTBzFtVERoUlNy91kydWNmNDZmdVJ2lyO6ZHYkx2dYBlT3R3a0g3l4ZzS5ckZmVDVZJYWyCkSnQ19W5FVTSURVJ0xJ9OXOQ0Q0VzVuU9ZLKzbzJHZjRxR3VEZ3hlJZ5JaRQzd2RGRhJiOwTka3VWVJhtMRdkdjVTVFVLMJOVbGlGtRk0dCejNjNnd5lOV1b0R0gEpltNNPdnK2tTg5M2QCZmS01ldGJyczVnK0MUE1RJcGbDYlJHI3EvR1ekRTYndQF0QFV1WFVWgKArTXX1TkVlNJZFUfTET05U5DlDRYOURT1EU5dYdqSkOWhmNRw5dCZFSG53l4Npc4VkQmonRpJpUzS1dHRGt3A3Z4REYk4VJM1ZbDRlL0tDUro3RldkODZTZ34yTJdSVGJGgr9INHaGbVpllTtNQiZlclZldUcxS1RnZkFmNXI3RYVUMVNWxjNSV3a2TTF2c0pWLJSwSTlVdfpORSU0VkVl9MlPTFTkSUNXlGNFP5dXZG1jBwdWYYWmZndVRLlNOnSUTEtENPVkcwbkK2xkYyZVVyWHbXIStElPczVTdDIUl1JZRmdleDNmNSJWZCOEV0RzQ2JJLwR3ZENTh6hFVxZTOERUlCUrcwQUbUpUg3V1N2V0a3kUc5hIQVYUSUlThjhDQGdUWHJTNOwwWFV1Ck5VJT9WROX0SU90VOxJQ9VHQ0UTEvlSV4K3N1FExLZMaCd1d1ljVBFPSxQzd1V0xaVuKZRXcnZldCMzZJUkbzVVVBRjNXdzeERXlYkveUVGcGtkhSgvN1bkOEITdop2WleVR0ZG43hzMnZTUmhXBvUxZqMHelVldrF1WWL3ZXVkVDlsd3QTWmV1dakxMJbDMk1kVXIKTFUlX1Z05fNJTDRUTElT1Q5DR6N0SDNmNFZDUyUGcGxnZUpSTzNjdnAUdRVxcXWmcjZXJxJMSkbTOERQo=EwP'
LicenceTextOri2 = 'uc3Y29XJfVtZtZTbmF7qj3Jz98Lu8atfL270wcm+QpWN09qZhbWX25c+6U9yGvfo7v9LXC9uW0Ly/nP6yzkv6Cmybm2VuxpYfdHc2VT10lwZpbAcmFmVhpjcfZGdGVT0yF0ZxLTMDITMwA2LuZFCmVXRl9kYwMjPTIDktEtMKVEMzA1ByxRX1Y3b2RmFtRfTUb2ZT1ElO5nTRClSy9V9WRMUzaWZXJ0519uXlcjbWJjEK04LRX1VExV9NFjdOdWYXhTAw09MXX0ClRWRklwQzczcmVjcu0xMwLjMC4FdfEKVvZHUHJF9OVjdlPVYW1mdXRvbKVFZWImVydfVvblc2lW1i9Od9NiZXIlRX4xCkaXX0V249RpbhbmU3RmQKRhcDb2SXNW5j5mRwdGcnlj0wlvbMUVClRW5k9TZua1TGlG9T9TdwMAPTEFFfpUTjdkUmVmtfxpbvUzU3RDAK0xMRX0VExmtfxpbvUzQ3RDAK0xMRX0VExE1hFwc1bTeE5DAK0xMRX0VExV9DNQVOVDT1Vk5F0wCWRVV19U9OJTSJQ0X0x0U9VOQyZXdldnp3VuUwclMXBUNGFQbNVlQlRU1NRFcmSVcFFFBuc0MGeUc2tXFERseBckbHRkJIxPT6b1S0VTErZLWZVTQjhStpUwdXeWZURlRqtlYzV2WVQkpQJ5TNdWRWRVRzthOsUTb01nRKZMVCNDOGdmtyYrQSdWVHdUsyRQcKTkMzE1ZFVXXJT0UlNElD5fTDRTRU5zZ41jMXMFbkVUtKk2aKa2b0VlA4VyaLQ0WDJUprwySLZ3SzVVZnlYc2SDdmI1hkFmdWd3S0JWZQgzWZdHczRkNUcyMCd0aHVkZaRRdtZGNFJzlT1lVpZnc2hnlXc2UvelTlBjVPhHY1ZESkpERnduUCTkczlW451XO3endDQQpOdsefVkRVd0lPVSUMSUTl9kNFNFTkK3PVdTQwN2VxUmVmh2tNVoSDL2SzJWliM3N3ekTWsDU3pPN2QzdG0zVplJdwU3dEEm0yB1euVER1RHZJx4cDb0U3dmpoZFWjK0NTVDFvs4dOd2cUhlBVtoSkWXQVZHU0NtVxZiT013pittcrMDQjckgwJXVpS2VnlnlqZOTUCkbkd19W5FVTSURVJ0xJ9OXOQ0Q0VDI2U9cYYzZnpzdWlkVVVjTE93Yxk5NxVzdlVmw2BMZKeGWnBk5KZCbxZnYmV0lkRLQER1K3VVB1ZrbaZzYUtnhUFMRlZTd1JkQwc1T1dXOSslhJJ4ZkT1MEJDN6ZTdCaWM0RVcvFqaIdETzZzVUJNaNSGNXlWdQY3eoc0U0Fk4K5RUXX1TkVlNJZFUfTET05U5DlDRSWURT1kdMNBMvcna0ljUrRlTZS1TkN1JBhRQZS3b2lFFDY3ZyRVRms2VBY1Y6cmNzNTBzFwM4dmWFpGZat0drWENHkFhJxta3UmVzRG5tJXW0USc1UWoztLShSXZ2xmU3FHQFTUOEtUVk5DaVU0TWl1hq5UM0eFWFI1cyZ6ZVTAVlhVdfpORSU0VkVl9MlPTFTkSUNU53NFPYQiaFJk549vcIcEWmpE9OhSdRSkaElStTNzdvc2MWIys3Q5QnT2elRg==M9C'
V64 = sub_40FE60(LicenceTextOri)
Src = base64.b64decode(V64)
print(Src.hex())
print(Src)
print(Src.decode('gbk'))
v11 = len(Src) + 1
v12 = 0
v13 = 0
v14 = 0
v15 = 0
while True:
    v16 = Src[v15]
    if v16 == 13 or v16 == 10:
        v62 = Src[v14:v13]
        sub_4101C0(v62)
        v17 = v13 + 1
        v18 = 1
        i = 1
        while v17 <= v11:
            v20 = Src[v15 + i]
            if v20 != 13 and v20 != 10 and v20:
                break
            v17 += 1
            v18 += 1
            i += 1
        v13 += v18
        v15 += i
        v14 = v13
    else:
        v13 += 1
        v15 += 1
    if not v15 <= v11:
        break

# LicenceFp = v52;
# v5 = (__int64)v53;
