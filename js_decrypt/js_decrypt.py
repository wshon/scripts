#!/usr/bin/env python3
# encoding: utf-8

"""
@Time    : 2019/12/19 10:21
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.muumlover.com
@Project : scripts
@FileName: js_decrypt
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
import re

import js2py

var_key = '_0x17c2'
var_list = ['_a',
            '_b',
            '_c',
            '_d',
            '_e',
            '_f',
            '_g',
            '_h',
            '_i',
            '_j', ]

js = js2py.get_file_contents('./vfed/asset/js/global.js')
js_eval = js2py.EvalJs()
for line in js.splitlines()[:20]:
    if var_key not in line:
        continue
    if 'var' in line and line[-1] in [',', ';']:
        if line[-1] == ',':
            line = line[:-1] + ';'
        js_eval.execute(line)
    for var in var_list:
        if ' ' + var + ' ' in line:
            if line[-1] == ',':
                line = line[:-1] + ';'
            if 'var' not in line:
                line = 'var ' + line
            js_eval.execute(line)
            break
        # if ' ' + var + '[' in line:
        #     line_list = line.split()
        #     line_list = [js_eval.eval(x) if x[0] == '_' and x[-1] == ']' else x for x in line_list]
        #     out_line = ' '.join(line_list)


def change(value):
    return '\'' + js_eval.eval(value.group()) + '\''


js_out = re.sub(r"_[abcdefghij]\[\d+\]", change, js)
with open('tmp-1.js', 'w') as fp:
    fp.write(js_out)
pass
