#!/usr/bin/env python
# -*- coding: utf-8 -*-
# ┬ ┬┌─┐┬ ┬┌─┐┌┐┌ ┌─┐┌─┐┌┬┐
# │││└─┐├─┤│ ││││ │  │ ││││
# └┴┘└─┘┴ ┴└─┘┘└┘o└─┘└─┘┴ ┴

import base64
from dataclasses import dataclass


@dataclass
class Licence:
    consumer_name: str
    project_name: str
    license_type: str
    create_date: str
    end_date: str
    TLQ_Product_Name: str
    TLQ_Version_Number: str
    TLQ_Qcu_MaxNum: str
    TW_IpAddress: str
    TW_Product_Name: str
    TW_Version_Number: str
    TW_Edition: str
    IsConfEncryption: str
    TLQ_SendLink_StoS: str
    TLQ_RecvLink_StoS: str
    TLQ_Link_CtoS: str
    TLQ_AppMaxNum: str
    TLQ_CPU_COUNT: str

    def to_bytes(self, encoding='gbk'):
        out_str = ''
        for k, v in self.__dict__.items():
            out_str += f'{k}={v}\n'
        return out_str.strip().encode(encoding)


def encrypt(b64):
    return b''.join([b64[x + 3:x + 6] + b64[x:x + 3] for x in range(0, len(b64), 6)])


if __name__ == '__main__':
    import sys

    if len(sys.argv) == 1:
        print('need license desc file')
        sys.stdin.read(1)
        exit(0)

    for file in sys.argv[1:]:
        desc = {}
        with open(file, 'r', encoding='gbk') as fp:
            for line in fp:
                if '=' not in line:
                    continue
                k, v = line.strip().split('=', 1)
                if k not in Licence.__annotations__:
                    continue
                desc[k] = v
        licence = Licence(**desc)
        print(licence)
        c_byte = licence.to_bytes('gbk')
        print(c_byte)
        c_b64 = base64.b64encode(c_byte)
        print(c_b64)
        e_b64 = encrypt(c_b64)
        print(e_b64)
        file_encode = file + '.dat'
        with open(file_encode, 'wb') as fp:
            fp.write(e_b64)
        pass
