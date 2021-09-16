#!/usr/bin/env python
# -*- coding: utf-8 -*-
# ┬ ┬┌─┐┬ ┬┌─┐┌┐┌ ┌─┐┌─┐┌┬┐
# │││└─┐├─┤│ ││││ │  │ ││││
# └┴┘└─┘┴ ┴└─┘┘└┘o└─┘└─┘┴ ┴
import base64


def decrypt(b64):
    return b''.join([b64[x + 3:x + 6] + b64[x:x + 3] for x in range(0, len(b64), 6)])


def decode(code):
    c_b64 = decrypt(code)
    c_byte = base64.b64decode(c_b64)
    return c_byte


if __name__ == '__main__':
    import sys

    if len(sys.argv) == 1:
        print('need license file')
        sys.stdin.read(1)
        exit(0)
    for file in sys.argv[1:]:
        with open(file, 'rb') as fp:
            e_b64 = fp.read()
        licence = decode(e_b64)
        file_decode = file + '_decode'
        with open(file_decode, 'wb') as fp:
            fp.write(licence)
