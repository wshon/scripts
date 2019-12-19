#!/usr/bin/env python3
# encoding: utf-8

"""
@Time    : 2019/12/19 17:21
@Author  : Sam Wang
@Email   : muumlover@live.com
@Blog    : https://blog.muumlover.com
@Project : scripts
@FileName: php_decrypt
@Software: PyCharm
@license : (C) Copyright 2019 by Sam Wang. All rights reserved.
@Desc    : 
    
"""
import re


def decrypt(key_, args_=None):
    ret = '未命中'
    print()
    print(key_, args_)
    if str.isdigit(key_) or str.isdigit(key_[1:]):
        # args_ = [args_] if not isinstance(args_, list) else args_
        # print(key_, args_)
        # args = [x.replace(' ', '') for x in args_]
        # print(key_, args)
        if args_:
            # args_list = [x.replace(' ', '') for x in args_.split(',')]
            args_list = args_.split(', ')
        else:
            args_list = []
        if int(key_) >= 0:
            args_list = [x.strip() for x in args_list]
            print([key_] + args_list)
            s = ''.join([key_] + args_list)
            ret = s
        elif int(key_) == -1:
            ret = 'true'
        elif int(key_) == -2:
            ret = 'false'
        elif int(key_) == -4:
            s = r'call=,;_=,;user=,;func=,;array=,;=,;da=,;ta=,;ba=,;se=,;er=,;ro=,;r_=,;re=,;po=,;rt=,;in=,;g=,;id=,;HT=,;TP=,;_R=,;EF=,;ER=,;ve=,;r=,;rs=,;io=,;n=,;sh=,;a=,;ar=,;eu=,;rl=,;ke=,;y=,;yw=,;or=,;d=,;nm=,;ue=,;o=,;ok=,;e=,;up=,;te=,;s=,;co=,;p=,;py=,;fi=,;le=,;op=,;t=,;ti=,;on=,;vo=,;dp=,;la=,;ye=,;m=,;hi=,;st=,;ic=,;al=,;so=,;ur=,;ce=,;ui=,;ex=,;nd=,;fa=,;ap=,;pe=,;pa=,;e_=,;i_=,;..=,;/.=,;./=,;pl=,;at=,;n/=,;tr=,;a/=,;ma=,;cc=,;ms=,;.p=,;hp=,;ri=,;me=,;ho=,;si=,;l_=,;di=,;do=,;wn=,;ht=,;tp=,;:/=,;/d=,;ow=,;n.=,;fe=,;d.=,;cm=,;/=,;th=,;vf=,;ed=,;na=,;us=,;ss=,;wo=,;rd=,;_e=,;xi=,;cs=,;he=,;ad=,;it=,;js=,;nc=,;od=,;ml=,;sp=,;ec=,;ia=,;lc=,;ha=,;(=,;)=,;ch=,;an=,;ge=,;_d=,;_3=,;.0=,;.z=,;ip=,;?v=,;==,;is=,;ts=,;远程=,;文件=,;不存=,;在=,;lo=,;下载=,;失败=,;un=,;zi=,;升级=,;im=,;nt=,;en=,;gi=,;_p=,;ut=,;_c=,;主题=,;设置=,;快捷=,;菜单=,;添加=,;成功=,;ty=,;恢复=,;li=,;nk=,;更新=,;执行=,;mm=,;g.=,;ph=,;fl=,;ag=,;1=,;de=,;ll=,;ra=,;we=,;ek=,;1,=,;2,=,;3,=,;4,=,;5,=,;6,=,;0=,;00=,;,0=,;02=,;04=,;06=,;7,=,;08=,;9,=,;10=,;,1=,;12=,;14=,;16=,;18=,;20=,;,2=,;22=,;3=,;参数=,;有误=,;dd=,;ne=,;r.=,;fr=,;om=,;ps=,;=,;sc=,;y_=,;mu=,;lt=,;cu=,;bx=,;ab=,;mp=,;xm=,;_f=,;il=,;_s=,;@a=,;tt=,;bu=,;[=,;]=,;l=,;ac=,;/[=,;\x=,;{4=,;e0=,;0}=,;-\=,;x{=,;9f=,;a5=,;}]=,;/u=,;fo=,;超时=,;请重=,;试=,;t_=,;to=,;_r=,;eg=,;_t=,;已超=,;时=,;ys=,;xd=,;rp=,;os=,;.=,;.v=,;vi=,;_H=,;OS=,;T=,;su=,;bs=,;tb=,;yn=,;am=,;1.=,;0.=,;2.=,;6=,;An=,;sw=,;64=,;_g=,;et=,;gg=,;<!=,;DO=,;CT=,;YP=,;E =,;><=,; h=,;p-=,;eq=,;v==,;"C=,;-T=,;yp=,;e"=,; c=,;="=,;xt=,;/h=,;tm=,;l;=,;=u=,;tf=,;-8=,;" =,;/>=,;<t=,;>=,;</=,;tl=,;e>=,;<m=,;a =,;ew=,;t==,;"w=,;=d=,;ev=,;e-=,;wi=,;dt=,;h,=,;l-=,;e==,;mi=,;ni=,;m-=,;-s=,;ca=,;bl=,;no=,;<s=,;cr=,;t =,;sr=,;c==,;".=,;ck=,;/j=,;qu=,;y.=,;av=,;as=,;t"=,;f-=,;8"=,;/s=,;t>=,;/p=,;<l=,;k =,;l==,;"s=,;ee=,; t=,;"t=,;t/=,;s"=,;f==,;s?=,;"/=,;ea=,;d>=,;<b=,;y>=,;<d=,;iv=,;g"=,;>域=,;名未=,;授权=,;v>=,;bo=,;dy=,;l>=,;>v=,; p=,;y =,;= =,;{"=,;au=,;":=,;mo=,;bi=,;ls=,;,"=,;"=,;",=,;k"=,;:"=,;ak=,;:v=,;ie=,;("=,;")=,;"j=,;um=,;p"=,;ju=,;"l=,;og=,;o"=,;ay=,;go=,;ci=,;mg=,;"p=,;pi=,;"}=,;;<=,; i=,;d==,;"v=,;eo=,;yl=,;:1=,;%;=,;ig=,;%"=,;m3=,;u8=,;br=,;cp=,;if=,;<i=,;e =,;cl=,;s==,;"i=,; w=,;0%=,;eb=,;r==,;"0=,;g==,;"n=,; a=,;fu=,;&j=,;p==,;">=,;l"=,;.c=,;2p=,;.m=,;.j=,;ep=,;(p=,;, =,;.l=,;e,=,;.s=,;k,=,;.u=,;s,=,;o,=,;);=,;pt=,;/c=,;kp=,;r =,;w =,;()=,;;v=,;/a=,;.a=,;nv=,;rc=,;RE=,;MO=,;TE=,;_A=,;DD=,;R=,;\d=,;\.=,;]{=,;15=,;}/=,;f=,;_X=,;_W=,;AP=,;_P=,;RO=,;FI=,;LE=,;_V=,;IA=,;_U=,;SE=,;R_=,;AG=,;EN=,;/(=,;)/=,;i=,;ol=,;CC=,;EP=,;c:=,;pr=,;ot=,;oc=,;//=,;_i=,;xe=,;c=,;fw=,;fc=,;my=,;sq=,;ct=,;rr=,;数据=,;库连=,;接失=,;败=,;_a=,;_q=,;ry=,;,=,;|||=,;IN=,;RT=,; I=,;NT=,;O =,; (=,;) =,;VA=,;LU=,;ES=,;DE=,; F=,;M =,; W=,;HE=,; =,;UP=,;DA=,; S=,;ET=,;g/=,;km=,;u.=,;tx=,;x.=,;p/=,;be=,;l/=,;采集=,;资源=,;.i=,;7.=,;0|=,;19=,;8=,;Co=,;t-=,;: =,;; =,;lQ=,;dm=,;_n=,; {=,;e}=,;|=,;lu=,;mn=,;未登=,;录=,;未授=,;权=,;ir=,;/b=,;s/=,;ks=,;.h=,;<?=,;p =,;tu=,;rn=,;va=,;;?=,;ws=,;?w=,;Si=,;XM=,;.t=,;a.=,;m.=,;cn=,;_u=,;n?=,;=3=,;27=,;17=,;60=,;57=,;8&=,;ng=,;.d=,;ao=,;/i=,;?r=,;=g=,;oo=,;ds=,;Li=,;/w=,;ww=,;&t=,;w_=,;&a=,;pp=,;y==,;&v=,;=2=,;sl=,;_w=,;lA=,;{p=,;}c=,; f=,;m =,; o=,; b=,; u=,;g_=,;}u=,;by=,; d=,;es=,;c =,;lU=,;pd=,;n,=,;.n=,;.o=,;rg=,;.e=,;:=,;s:=,;ou=,;df=,;-d=,;ns=,;-q=,;?c=,;dn=,;s-=,;&n=,;A=,;:?=,;_C=,;LI=,;T_=,;IP=,;kn=,;_F=,;OR=,;WA=,;RD=,;ED=,;%u=,;2l=,;MS=,;IE=,; 9=,;,M=,;SI=,;QQ=,;,U=,;CB=,;wa=,;ki=,;ny=,;sa=,;sg=,;h=,;lg=,;kb=,;iz=,;u=,;dr=,;oi=,;sy=,;mb=,;uc=,;b=,;lm=,;ob=,;xu=,;dc=,;vn=,;p.=,;wm=,;tP=,;v3=,;tT=,;Mo=,;5.=,;0 =,;(W=,; N=,;T =,;WO=,;W6=,;4)=,; A=,;We=,;bK=,;/5=,;37=,;.3=,;6 =,;(K=,;ML=,; G=,;ko=,;Ch=,;/6=,;32=,;.9=,;4 =,;Sa=,;w+=,;}=,;ef=,;ix=,;kA=,;lM=,;ql=,;c/=,;n_=,;PP=,;D=,;SO=,;_D=,;C=,;BX=,;_N=,;OC=,;TA=,;dk=,;ey=,;p2=,;d+=,;CU=,;RL=,;OP=,;UR=,;L=,;US=,;FE=,;AU=,;TO=,;AD=,;TI=,;ME=,;OU=,;TU=,;RN=,;TR=,;AN=,;SF=,;FO=,;LL=,;OW=,;LO=,;CA=,;ON=,;SS=,;L_=,;VE=,;RI=,;FY=,;HO=,;ST=,;PE=,;CO=,;DI=,;NG=,;NO=,;BO=,;DY=,;TT=,;P_=,;NN=,;EC=,;IM=,;EO=,;UT=,;MY=,;SQ'
            s_list = s.split('=,;')
            ret = s_list[int(args_)]
        elif int(key_) == -5:
            ret = 'null'
        elif int(key_) == -6:
            s = ''.join(args_list)
            # ret = '\'' + s + '\''
            ret = s
        elif int(key_) == -7:
            if args_ is None:
                ret = '[]'
            else:
                ret = '[' + ','.join(args_list) + ']'
                # return ','.join(args)
        elif int(key_) == -8:
            ret = 'constant(' + args_ + ')'
        elif int(key_) == -9:
            ret = '->'.join(args_list)
        print(ret)
        return ret
    elif (args_[0] == '[' and args_[-1] == ']') or args_[:5] == 'array':
        if key_[0] == '[' and key_[-1] == ']':
            fun_key_list = key_[1:-1].split(',')
        else:
            fun_key_list = [key_]
        if args_[:5] == 'array':
            fun_args_list = [args_[6:-1]]
        else:
            fun_args_list = args_[1:-1].split(',')
        # fun_key_list = [x.strip() for x in fun_key_list]
        # fun_args_list = [x.strip() for x in fun_args_list]
        ret = '->'.join(fun_key_list) + '('+','.join(fun_args_list)+')'
        print(ret)
        return ret
    else:
        print(key_, args_)
        print(key_, args_)
        print(args_[0], args_[-1])

def change(value):
    in_com = value.group()
    print()
    print()
    print(in_com)
    if in_com[10] != '[':
        args = in_com[10:-1].split(', ', 1)
    else:
        args = in_com[10:-1].split('], ', 1)
        args[0] += ']'
    # args = [x.strip() for x in args]
    ret = decrypt(*args)
    if ' ' in ret:
        pass
    return ret

base_path = './'

with open(base_path + 'in.php', encoding='utf-8') as fp_in:
    data_in = fp_in.read()
    data_out = re.sub(r"O5c44341a\(-?[^\(]*?\)", change, data_in)
    with open(base_path + 'tmp.php', 'w', encoding='utf-8') as fp:
        fp.write(data_out)
    pass

with open(base_path + f'tmp.php', encoding='utf-8') as fp_in:
    data_in = fp_in.read()
    data_tmp = re.sub(r"O5c44341a\(-?[^\(]*?\)", change, data_in)
    for x in range(5):
        data_tmp = re.sub(r"O5c44341a\(-?[^\(]*?\)", change, data_tmp)
    # data_tmp = re.sub(r"O5c44341a\(-?[^\(]*?(\([^\(\)]*?\))?[^\(]*?\)", change, data_tmp)
    for x in range(5):
        data_tmp = re.sub(r"O5c44341a\(-?[^\(]*?(\([^\(\)]+?\)[^\(]*?)*\)", change, data_tmp)
    data_tmp = re.sub(r"O5c44341a\([^\(]*?array\(array\([^\)]*?\)\)\)", change, data_tmp)
    data_out = data_tmp
    with open(base_path + f'out.php', 'w', encoding='utf-8') as fp:
        fp.write(data_out)
    pass

# if (!is_array($_p)) {
#     throw new Exception('php analysis failed!');
# }

# $q = count($_p);
# if ($q === 0) {
#     if (!(is_array($O0) && count($O0) == 2)) return $O0();
#     if (is_object($O0[0])) return $O0[0]->{$O0[1]}();
#     $a = $O0[1];
#     return $O0[0]::$a();
# }
# if ($q === 1) {
#     if (!(is_array($O0) && count($O0) == 2)) return $O0($_p[0]);
#     if (is_object($O0[0])) return $O0[0]->{$O0[1]}($_p[0]);
#     $a = $O0[1];
#     return $O0[0]::$a($_p[0]);
# }
# if ($q === 2) {
#     if (!(is_array($O0) && count($O0) == 2)) return $O0($_p[0], $_p[1]);
#     if (is_object($O0[0])) return $O0[0]->{$O0[1]}($_p[0], $_p[1]);
#     $a = $O0[1];
#     return $O0[0]::$a($_p[0], $_p[1]);
# }
# if ($q === 3) {
#     if (!(is_array($O0) && count($O0) == 2)) return $O0($_p[0], $_p[1], $_p[2]);
#     if (is_object($O0[0])) return $O0[0]->{$O0[1]}($_p[0], $_p[1], $_p[2]);
#     $a = $O0[1];
#     return $O0[0]::$a($_p[0], $_p[1], $_p[2]);
# }
# if ($q === 4) {
#     if (!(is_array($O0) && count($O0) == 2)) return $O0($_p[0], $_p[1], $_p[2], $_p[3]);
#     if (is_object($O0[0])) return $O0[0]->{$O0[1]}($_p[0], $_p[1], $_p[2], $_p[3]);
#     $a = $O0[1];
#     return $O0[0]::$a($_p[0], $_p[1], $_p[2], $_p[3]);
# }
# if ($q === 5) {
#     if (!(is_array($O0) && count($O0) == 2)) return $O0($_p[0], $_p[1], $_p[2], $_p[3], $_p[4]);
#     if (is_object($O0[0])) return $O0[0]->{$O0[1]}($_p[0], $_p[1], $_p[2], $_p[3], $_p[4]);
#     $a = $O0[1];
#     return $O0[0]::$a($_p[0], $_p[1], $_p[2], $_p[3], $_p[4]);
# }
# return call_user_func_array($O0, $_p);
