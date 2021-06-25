#!/usr/bin/env python
# -*- coding: utf-8 -*-
# ┬ ┬┌─┐┬ ┬┌─┐┌┐┌ ┌─┐┌─┐┌┬┐
# │││└─┐├─┤│ ││││ │  │ ││││
# └┴┘└─┘┴ ┴└─┘┘└┘o└─┘└─┘┴ ┴
from cryptography.hazmat.backends import default_backend
from cryptography.hazmat.primitives import padding
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes


def get_code(nwt_id, jf=True):
    if not isinstance(nwt_id, bytes):
        nwt_id = bytes.fromhex(nwt_id)
    init_data = bytearray([
        0x11, 0x22, 0x33, 0x44,
        0x8A, 0x19, 0xB7, 0x5F,
        0, 0, 0, 0,
        0x7D, 0x0D, 0x00, 0x79
    ])
    if jf:
        init_data[7] = 0x4F
    else:
        init_data[7] = 0x5F
    init_data[8:16] = nwt_id

    aes_key = b'rdnRk8FezbqVDOGAHL520ymb1jWEoA60'
    aes_iv = bytearray([
        0xE1, 0x8D, 0x5B, 0x07, 0xA7, 0xD2, 0xC9, 0x7E,
        0x27, 0x16, 0x45, 0x20, 0x88, 0xC6, 0xDE, 0x36
    ])
    init_data = bytes(init_data)

    print(init_data.hex())
    cipher = Cipher(
        algorithms.AES(aes_key),
        modes.CBC(aes_iv),
        backend=default_backend()
    )
    encryptor = cipher.encryptor()
    padder = padding.PKCS7(algorithms.AES.block_size).padder()
    temp_res = encryptor.update(padder.update(init_data) + padder.finalize())
    print(temp_res.hex())

    temp_data = temp_res + aes_iv

    print(temp_data.hex())
    cipher = Cipher(
        algorithms.AES(aes_key),
        modes.CBC(b'\x00' * 16),
        backend=default_backend()
    )
    encryptor = cipher.encryptor()
    padder = padding.PKCS7(algorithms.AES.block_size).padder()
    final_res = encryptor.update(padder.update(temp_data) + padder.finalize())
    print(final_res.hex())

    return final_res.hex()[:64]


if __name__ == '__main__':
    code = get_code('35d74db0', 67372036)
    print(code)
