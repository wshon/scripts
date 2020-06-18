#!/usr/bin/env python
# encoding: utf-8

"""
@Time    : 2020/6/8 9:17
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.ronpy.com
@Project : ckey_test
@FileName: ckey.py
@Software: PyCharm
@license : (C) Copyright 2020 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
from functools import partial

import pywasm
from pywasm import binary, convention


def match_limits(new: binary.Limits, old: binary.Limits) -> bool:
    if old.n >= new.n:
        if new.m == 0:
            return True
        if old.m != 0 and new.m != 0:
            if old.m <= new.m:
                return True
    return False


pywasm.execution.match_limits = match_limits


class MemoryInstance:
    def __init__(self, type: binary.MemoryType):
        self.type = type
        self.data = bytearray()
        self.size = 0
        # self.grow(type.limits.n)

    def grow(self, n: int):
        if self.type.limits.m and self.size + n > self.type.limits.m:
            raise Exception('pywasm: out of memory limit')
        # If len is larger than 2**16, then fail
        if self.size + n > convention.memory_page:
            raise Exception('pywasm: out of memory limit')
        self.data.extend([0x00 for _ in range(n * convention.memory_page_size)])
        self.size += n


pywasm.execution.MemoryInstance = MemoryInstance
pywasm.Memory = pywasm.execution.MemoryInstance


##################################################

def memcpy(data, ptr, length):
    vm.store.mems[0].data[ptr:ptr + length] = data.encode()


func_args = [int, str, str, str, str, int]


def getckey(*args):
    new_args = []
    for i, arg in enumerate(args):
        if func_args[i] == str:
            arg_ptr = wa_stackAlloc([len(arg) + 1])
            memcpy(arg, arg_ptr, len(arg) + 1)
            new_args.append(arg_ptr)
        else:
            new_args.append(arg)
    r = wa__getckey(new_args)
    r_end = r
    while vm.store.mems[0].data[r_end] != 0:
        r_end += 1
    return vm.store.mems[0].data[r:r_end].decode()
    pass


def cb__get_unicode_str(_):
    b = 'document.URL'[:48]
    c = 'window.navigator.userAgent'[:48]
    d = 'document.referrer'[:48]
    f = 'window.navigator.appCodeName'
    g = 'window.navigator.appName'
    h = 'window.navigator.platform'
    c = b + "|" + c + "|" + d + "|" + f + "|" + g + "|" + h
    d = len(c) + 1
    # e = wa__malloc([d])
    e = wa_stackAlloc([d])
    memcpy(c, e, len(c) + 1)
    return e


env = {
    'abort': lambda *x: 0,
    'assert': lambda *x: 0,
    'enlargeMemory': lambda *x: 0,
    'getTotalMemory': lambda *x: 5250864,
    'abortOnCannotGrowMemory': lambda *x: 0,
    'abortStackOverflow': lambda *x: 0,
    'nullFunc_ii': lambda *x: 0,
    'nullFunc_iiii': lambda *x: 0,
    'nullFunc_v': lambda *x: 0,
    'nullFunc_vi': lambda *x: 0,
    'nullFunc_viiii': lambda *x: 0,
    'nullFunc_viiiii': lambda *x: 0,
    'nullFunc_viiiiii': lambda *x: 0,
    'invoke_ii': lambda *x: 0,
    'invoke_iiii': lambda *x: 0,
    'invoke_v': lambda *x: 0,
    'invoke_vi': lambda *x: 0,
    'invoke_viiii': lambda *x: 0,
    'invoke_viiiii': lambda *x: 0,
    'invoke_viiiiii': lambda *x: 0,
    '__ZSt18uncaught_exceptionv': lambda *x: 0,
    '___cxa_find_matching_catch': lambda *x: 0,
    '___gxx_personality_v0': lambda *x: 0,
    '___lock': lambda *x: 0,
    '___resumeException': lambda *x: 0,
    '___setErrNo': lambda *x: 0,
    '___syscall140': lambda *x: 0,
    '___syscall146': lambda *x: 0,
    '___syscall54': lambda *x: 0,
    '___syscall6': lambda *x: 0,
    '___unlock': lambda *x: 0,
    '_abort': lambda *x: 0,
    '_emscripten_memcpy_big': lambda *x: 0,
    '_get_unicode_str': cb__get_unicode_str,
    'flush_NO_FILESYSTEM': lambda *x: 0,
    'DYNAMICTOP_PTR': 7968,
    'tempDoublePtr': 7952,
    'STACKTOP': 7984,
    'STACK_MAX': 5250864,

    'memoryBase': 1024,
    'tableBase': 0
}

limits = pywasm.Limits()
limits.n = 256
limits.m = 256
memory_type = pywasm.binary.MemoryType()
memory_type.limits = limits
env['memory'] = pywasm.Memory(memory_type)

limits = pywasm.Limits()
limits.n = 99
limits.m = 99
env['table'] = pywasm.Table(0, limits)

if __name__ == '__main__':
    vm = pywasm.load('ckey.wasm', {'env': env, 'global': {'NaN': None, 'Infinity': None}})
    wa_stackAlloc = partial(vm.exec, 'stackAlloc')
    wa__malloc = partial(vm.exec, '_malloc')
    wa__getckey = partial(vm.exec, '_getckey')

    # func_addr = vm.func_addr('_malloc')
    # func = vm.machine.store.function_list[func_addr]
    # func_args_1 = func.type.args

    ckey = getckey(10201, '3.5.57', 'j002024w2wg', '', '1fcb9528b79f2065c9a281a7d554edd1', 1556590422)
    print(ckey)
    a = 0
