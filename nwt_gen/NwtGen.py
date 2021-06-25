#!/usr/bin/env python
# -*- coding: utf-8 -*-
# ┬ ┬┌─┐┬ ┬┌─┐┌┐┌ ┌─┐┌─┐┌┬┐
# │││└─┐├─┤│ ││││ │  │ ││││
# └┴┘└─┘┴ ┴└─┘┘└┘o└─┘└─┘┴ ┴
import random

from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

# aes_iv = bytes([
#     0xE1, 0x8D, 0x5B, 0x07, 0xA7, 0xD2, 0xC9, 0x7E,
#     0x27, 0x16, 0x45, 0x20, 0x88, 0xC6, 0xDE, 0x36
# ])

aes_key = b'rdnRk8FezbqVDOGAHL520ymb1jWEoA60'
header = b'\x11\x22\x33\x44'
score_code_flag = b'\x8A\x19\xB7\x4F'
remove_ads_flag = b'\x8A\x19\xB7\x5F'


def get_data(nwt_id, flag):
    return header + flag + nwt_id + b'\x7D\x0D\x00\x79'


def _gen_code(init_data):
    aes_iv = random.randbytes(16)
    temp_res = aes_encry(aes_key, aes_iv, init_data)
    temp_data = temp_res + aes_iv
    final_res = aes_encry(aes_key, b'\x00' * 16, temp_data)
    return final_res.hex()[:64]


def gen_score_code(nwt_id, score=300000):
    if score >= 500000000:
        return "TooManyScore"
    if not isinstance(nwt_id, bytes):
        nwt_id = bytes.fromhex(nwt_id)
    init_data = header + score_code_flag + nwt_id + score.to_bytes(4, 'big')
    return _gen_code(init_data)


def gen_remove_ads(nwt_id, date):
    if not isinstance(nwt_id, bytes):
        nwt_id = bytes.fromhex(nwt_id)
    time = int(date.timestamp())
    init_data = header + remove_ads_flag + nwt_id + time.to_bytes(4, 'big')
    return _gen_code(init_data)


def aes_encry(key, iv, value):
    # print(value.hex())
    cipher = Cipher(algorithms.AES(key), modes.CBC(iv), backend=default_backend())
    encryptor = cipher.encryptor()
    padder = padding.PKCS7(algorithms.AES.block_size).padder()
    data = padder.update(value)  # + padder.finalize()
    # print(data.hex())
    temp_res = encryptor.update(data)
    # print(temp_res.hex())
    return temp_res


if __name__ == '__main__':
    from datetime import datetime

    code = gen_score_code('35d74db0', 250000)
    print("score_code:", code)
    code = gen_remove_ads('35d74db0', datetime.strptime('2021-06-28 12:00:00', '%Y-%m-%d %H:%M:%S'))
    print("remove_ads:", code)
    # code = gen_score_code('dad98c42', True)
