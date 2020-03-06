#!/usr/bin/env python3
# encoding: utf-8

"""
@Time    : 2019/12/24 17:23
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.muumlover.com
@Project : scripts
@FileName: test3
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""

# 使用VGG16模型
from keras import Input, Model
from keras.applications.vgg16 import VGG16
from keras.layers import Flatten, Dense

print('Start build VGG16 -------')

# 获取vgg16的卷积部分，如果要获取整个vgg16网络需要设置:include_top=True
model_vgg16_conv = VGG16(weights='imagenet', include_top=False)
model_vgg16_conv.summary()

# 创建自己的输入格式
# if K.image_data_format() == 'channels_first':
#   input_shape = (3, img_width, img_height)
# else:
#   input_shape = (img_width, img_height, 3)

input = Input(input_shape, name = 'image_input') # 注意，Keras有个层就是Input层

# 将vgg16模型原始输入转换成自己的输入
output_vgg16_conv = model_vgg16_conv(input)

# output_vgg16_conv是包含了vgg16的卷积层，下面我需要做二分类任务，所以需要添加自己的全连接层
x = Flatten(name='flatten')(output_vgg16_conv)
x = Dense(4096, activation='relu', name='fc1')(x)
x = Dense(512, activation='relu', name='fc2')(x)
x = Dense(128, activation='relu', name='fc3')(x)
x = Dense(1, activation='softmax', name='predictions')(x)

# 最终创建出自己的vgg16模型
my_model = Model(input=input, output=x)

# 下面的模型输出中，vgg16的层和参数不会显示出，但是这些参数在训练的时候会更改
print('\nThis is my vgg16 model for the task')
my_model.summary()