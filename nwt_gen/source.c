uint64 *sub_5EEBC0() {
    uint64 *result; // eax

    sub_631880(g_pSQLiteDatebase, g_pOnlieInfo);
    result = &g_pOnlieInfo->Score;
    if (g_pOnlieInfo->Score >= 500000000)
        g_bTooManyScore = 1;
    *result += (unsigned int)dword_B31FD8;
    return result;
}

{
    if (v62) {
        v29 = 0;
        i = 0;
        ret = sub_5EE630(&v29, (basic_string *)&strNoAdvCode, (void **)&i);
        if (ret != 1 && v29) {
            if (ret == 2) {
                string::string((basic_string *)&v50, L"IDS_REMOVE_ADVERTISEMENT_CODE_ADDED"); // 免广告码已添加过。
                LOBYTE(v64) = 7;
                v8 = SkinUI::GetString((basic_string *)&v51, (basic_string *)&v50);
                LOBYTE(v64) = 8;
                string::substr((basic_string *)&v53, v8, 0, 0xFFFFFFFF);
                string::dtor((basic_string *)&v51);
                LOBYTE(v64) = 2;
                string::dtor((basic_string *)&v50);
            } else {
                string::string((basic_string *)&v50, L"IDS_REMOVE_ADVERTISEMENT_SUCCESS_FORMAT"); // 开通成功，到期时间为：%s。
                LOBYTE(v64) = 9;
                SkinUI::GetString((basic_string *)&v57, (basic_string *)&v50);
                LOBYTE(v64) = 11;
                string::dtor((basic_string *)&v50);
                string::string((basic_string *)&v33, (void *)&WindowName);
                LOBYTE(v64) = 12;
                string::string((basic_string *)&v41, (void *)&WindowName);
                LOBYTE(v64) = 13;
                string::string((basic_string *)&v37, (void *)&WindowName);
                LOBYTE(v64) = 14;
                string::string((basic_string *)&v45, (void *)&WindowName);
                LOBYTE(v64) = 15;
                v9 = sub_4B0580((basic_string *)&v52, (unsigned int)i);
                LOBYTE(v64) = 16;
                if (v9->_Myres < 8)
                    v10 = (int)&v9->Buf.pBuf;
                else
                    v10 = (int)v9->Buf.pBuf;
                v11 = Format;
                if (v59 < 8)
                    v11 = (wchar_t *)&Format;
                v12 = SkinUI::StringFormat((basic_string *)&v51, v11, v10);
                LOBYTE(v64) = 17;
                SkinUI::MsgBox(v12, v32[144], &v45, 0, &v37, &v41, &v33, 0);
                string::dtor((basic_string *)&v51);
                string::dtor((basic_string *)&v52);
                string::dtor((basic_string *)&v45);
                string::dtor((basic_string *)&v37);
                string::dtor((basic_string *)&v41);
                string::dtor((basic_string *)&v33);
                LOBYTE(v64) = 2;
                string::dtor((basic_string *)&v57);
            }
        } else {
            string::string((basic_string *)&v37, L"IDS_REMOVE_ADVERTISEMENT_CODE_INVALID"); // 无效的免广告码。
            LOBYTE(v64) = 5;
            v13 = SkinUI::GetString((basic_string *)&v41, (basic_string *)&v37);
            //......
        }
    }
}

signed int __fastcall sub_5EE630(_BYTE *a1, basic_string *input_code, void **a3) {
    // [COLLAPSED LOCAL DECLARATIONS. PRESS KEYPAD CTRL-"+" TO EXPAND]

    v16 = 0;
    v14 = a1;
    if (input_code->_Mysize != 64) // 输入的密钥需要是64字节长
        return 1;
    StrToHex((int)HexBuf, input_code);
    IV[0] = 0;
    *(_DWORD *)&IV[1] = 0;
    *(_DWORD *)&IV[5] = 0;
    *(_DWORD *)&IV[9] = 0;
    *(_WORD *)&IV[13] = 0;
    IV[15] = 0;
    sub_8B46C0(&Aes_ctx, (int)"rdnRk8FezbqVDOGAHL520ymb1jWEoA60", 256);
    // 对我们输入的 1234567890123456789012345678901234567890123456789012345678901234 进行解密, Key是上面的字符串
    // 得到
    // AE EB A0 12 AB 47 4C 44 93 EA D8 EB 14 A5 A4 CD
    // E9 8D 5B 07 A7 D2 C9 7E 27 16 45 20 88 C6 DE 36
    Aes((int)&Aes_ctx, 0, 32, IV, HexBuf, HexBuf);
    *(_DWORD *)&IV[4] = *(_DWORD *)&HexBuf[0x14];
    *(_DWORD *)IV = *(_DWORD *)&HexBuf[0x10];
    *(_DWORD *)&IV[8] = *(_DWORD *)&HexBuf[0x18];
    *(_DWORD *)&IV[0xC] = *(_DWORD *)&HexBuf[0x1C];
    Aes((int)&Aes_ctx, 0, 16, IV, HexBuf, HexBuf); // 对解密的前16字节再进行解密得到, 后16字节做为IV
                                                   // 7A 49 C0 9E E1 F7 03 73 7B BE E7 2B B8 FB 11 46
                                                   //             ===========
    v3 = ntohl(*(u_long *)&HexBuf[4]);
    Magic = v3;
    if (v3 != 0x8A19B74F && v3 != 0x8A19B75F) // 上面标注的4字节需要是 这二个值之一
        return 1;
    sub_594300((int)&HexBuf[8], &SelfId);
    v23 = 0;
    SelfIdNotSame = 0;
    if (sub_406D10(&SelfId, 0, SelfId._Mysize, (int)L"00000000", 8u)) // 自己的Id不为0
    {
        v4 = sub_5ED7D0((basic_string *)&strCodeId);
        LOBYTE(v23) = 1;
        v16 = 1;
        if ((unsigned __int8)sub_422A10(v4, &SelfId))
            SelfIdNotSame = 1;
    }
    v23 = 0;
    if (v16 & 1 && *((_DWORD *)&strCodeId.strCodeId.Buf.pBuf + 3) >= 8u)
        operator delete(*(void **)&strCodeId.gap_0[4]);
    if (SelfIdNotSame) {
        if (SelfId._Myres >= 8)
            operator delete(SelfId.Buf.pBuf);
        return 1;
    }
    *a3 = (void *)ntohl(*(u_long *)&HexBuf[12]);
    strIV._Myres = 7;
    strIV._Mysize = 0;
    *(_WORD *)strIV.Buf.buf = 0;
    LOBYTE(v23) = 2;
    sub_593FC0(&strIV, (unsigned __int8 *)&HexBuf[16]); // 我们用的IV值转换成字符串
    v7 = dword_B3C698;
    v8 = dword_B3C680;
    v9 = sub_61C9C0(&dword_B3C680, &v16, &strIV);
    v10 = (int)v9;
    v11 = *v9;
    if (!v11 || v11 != v8)
        CheckDebug0(v7, v8, v10);
    if (*(_DWORD *)(v10 + 4) != v7 || sub_631BC0(g_pSQLiteDatebase, &strIV)) // 用IV值查询数据库, 看能不能找到, 如果 CodeId 为 IV值的有数据记录, 则失败
                                                                             // 没有则成功
    {
        string::dtor(&strIV);
        string::dtor(&SelfId);
        result = 2;
    } else {
        sub_403FA0(&dword_B3C680);
        if (Magic == 0x8A19B74F) //添加积分码
        {
            *v14 = 0;
            v12 = &g_pOnlieInfo->u8;
            v13 = __CFADD__(*a3, g_pOnlieInfo->u8);
            *(_DWORD *)v12 += *a3;
            *((_DWORD *)v12 + 1) += v13;
            sub_5EEB80((int)&dword_B31E40);
            strCodeId.strCodeId._Myres = 7;
            strCodeId.strCodeId._Mysize = 0;
            *(_WORD *)strCodeId.strCodeId.Buf.buf = 0;
            LOBYTE(v23) = 3;
            string::substr(&strCodeId.strCodeId, &strIV, 0, 0xFFFFFFFF);
            UpdateCodeId(g_pSQLiteDatebase, (basic_string *)&strCodeId); // 重写CodeId
            sub_4C40D0(&strCodeId);
        } else if (Magic == 0x8A19B75F) {
            *v14 = 1;
            if ((unsigned int)*a3 <= (unsigned int)g_time64_NoAdv)
                *a3 = (void *)g_time64_NoAdv;
            else
                WriteNoAdvTime(*a3);
        }
        string::dtor(&strIV);
        string::dtor(&SelfId);
        result = 0;
    }
    return result;
}


{
    DWORD id = _byteswap_ulong(wcstoul(strID, NULL, 16));
    BYTE InitValue[] = {0x11, 0x22, 0x33, 0x44, 0x8A, 0x19, 0xB7, 0x5F, 0, 0, 0, 0, 0x7D, 0x0D, 0, 0x79};
    *(DWORD *)(InitValue + 8) = id;

    BYTE ivec[16] = {
        0xE9, 0x8D, 0x5B, 0x07, 0xA7, 0xD2, 0xC9, 0x7E,
        0x27, 0x16, 0x45, 0x20, 0x88, 0xC6, 0xDE, 0x36};
    BYTE ivec_src[16] = {0};
    BYTE out[64] = {0};
    BYTE src[32] = {0};
    memset(src, 0, 32);
    memcpy(src, InitValue, 16);
    memcpy(ivec_src, ivec, 16);

    AES_KEY aeskey;
    AES_set_encrypt_key((BYTE *)"rdnRk8FezbqVDOGAHL520ymb1jWEoA60", 256, &aeskey);
    AES_cbc_encrypt(InitValue, out, 16, &aeskey, ivec, 1);
    memcpy(src, out, 16);
    memcpy(src + 16, ivec_src, 16);
    memset(ivec, 0, 16);
    AES_cbc_encrypt(src, out, 32, &aeskey, ivec, 1);

    CString result;
    for (int i = 0; i < 32; i++) {
        CString tmpstr;
        tmpstr.Format(L"%02X", out[i]);
        result += tmpstr;
    }
}