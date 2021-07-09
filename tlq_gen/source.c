__time64_t __fastcall sub_4100B0(const char *a1)
{
  const char *v1; // rbx
  int v3; // eax
  int v4; // eax
  int v5; // eax
  struct tm Tm; // [rsp+20h] [rbp-48h]
  char Str[4]; // [rsp+48h] [rbp-20h]
  char v8; // [rsp+4Ch] [rbp-1Ch]

  v1 = a1;
  if ( !a1 || strlen(a1) != 10 )
    return -1i64;
  *(_QWORD *)&Tm.tm_sec = 0i64;
  *(_QWORD *)&Tm.tm_hour = 0i64;
  *(_QWORD *)&Tm.tm_mon = 0i64;
  *(_QWORD *)&Tm.tm_wday = 0i64;
  Tm.tm_isdst = 0;
  v3 = *(_DWORD *)v1;
  v8 = 0;
  *(_DWORD *)Str = v3;
  v4 = atoi(Str);
  Str[2] = 0;
  *(_QWORD *)&Tm.tm_year = (unsigned int)(v4 - 1900);
  *(_WORD *)Str = *(_WORD *)(v1 + 5);
  v5 = atoi(Str);
  Str[2] = 0;
  Tm.tm_mon = v5 - 1;
  *(_WORD *)Str = *((_WORD *)v1 + 4);
  Tm.tm_mday = atoi(Str);
  Tm.tm_isdst = -1;
  Tm.tm_hour = 0;
  Tm.tm_min = 0;
  Tm.tm_sec = 0;
  return mktime64(&Tm);
}

// Licence Struct Decode
__int64 __fastcall sub_4101C0(void *Src, __int64 a2)
{
  signed __int64 v2; // rax
  _BYTE *v3; // r13
  __int64 v4; // rsi
  int v5; // ecx
  int v7; // ebx
  signed __int64 v8; // r12
  int v9; // edi
  signed __int64 v10; // rbp
  int v11; // er14
  char v12; // al
  unsigned __int64 v13; // kr10_8
  size_t v14; // r8
  void *v15; // rcx
  char Srca; // [rsp+30h] [rbp-138h]
  char Dst; // [rsp+B0h] [rbp-B8h]

  v2 = 0i64;
  v3 = Src;
  v4 = a2;
  v5 = strlen((const char *)Src);
  if ( v5 <= 0 )
    return 0xFFFFFFFFi64;
  v7 = 0;
  v8 = v5;
  v9 = 0;
  if ( v5 >= 0 )
  {
    do
    {
      if ( v3[v2] == 61 )
        break;
      ++v2;
      ++v9;
    }
    while ( v2 <= v5 );
  }
  memset(&Dst, 0, 0x80ui64);
  v10 = v9;
  memmove(&Dst, v3, v9);
  v11 = v9 + 1;
  tlq_trim(&Dst);
  if ( v9 <= v8 )
  {
    do
    {
      v12 = v3[v10];
      if ( v12 == 13 )
        break;
      if ( v12 == 10 )
        break;
      if ( !v12 )
        break;
      ++v10;
      ++v9;
    }
    while ( v10 <= v8 );
  }
  memset(&Srca, 0, 0x80ui64);
  memmove(&Srca, &v3[v11], v9 - v11);
  tlq_trim(&Srca);
  v13 = strlen(&Dst) + 1;
  while ( memcmp(&Dst, &aCustomerName[128 * (signed __int64)v7], v13 - 1) )
  {
    if ( (unsigned int)++v7 >= 0x17 )
      return 0i64;
  }
  switch ( v7 )
  {
    case 0:
    case 1:
      v14 = strlen(&Srca);
      v15 = (void *)v4;
      goto LABEL_32;
    case 2:
      v14 = strlen(&Srca);
      v15 = (void *)(v4 + 128);
      goto LABEL_32;
    case 3:
    case 4:
      v14 = strlen(&Srca);
      v15 = (void *)(v4 + 256);
      goto LABEL_32;
    case 5:
      v14 = strlen(&Srca);
      v15 = (void *)(v4 + 384);
      goto LABEL_32;
    case 6:
      *(_QWORD *)(v4 + 560) = sub_4100B0(&Srca);
      goto LABEL_21;
    case 7:
LABEL_21:
      *(_QWORD *)(v4 + 568) = sub_4100B0(&Srca);
      return 0i64;
    case 8:
      v14 = strlen(&Srca);
      v15 = (void *)(v4 + 416);
      goto LABEL_32;
    case 9:
      v14 = strlen(&Srca);
      v15 = (void *)(v4 + 544);
      goto LABEL_32;
    case 10:
    case 11:
      *(_DWORD *)(v4 + 576) = atoi(&Srca);
      break;
    case 12:
    case 13:
      *(_DWORD *)(v4 + 580) = atoi(&Srca);
      break;
    case 14:
    case 15:
      *(_DWORD *)(v4 + 584) = atoi(&Srca);
      break;
    case 16:
    case 17:
      *(_DWORD *)(v4 + 588) = atoi(&Srca);
      break;
    case 18:
    case 19:
      *(_DWORD *)(v4 + 592) = atoi(&Srca);
      break;
    case 20:
      *(_DWORD *)(v4 + 596) = atoi(&Srca);
      break;
    case 21:
      *(_DWORD *)(v4 + 600) = atoi(&Srca);
      break;
    case 22:
      v14 = strlen(&Srca);
      v15 = (void *)(v4 + 604);
LABEL_32:
      memmove(v15, &Srca, v14);
      break;
    default:
      return 0i64;
  }
  return 0i64;
}

// Licence Decrypt
__int64 __fastcall sub_40FE60(void *Src, const char *a2)
{
  char *v2; // rbx
  const char *v3; // r14
  int v4; // ecx
  unsigned __int64 v5; // kr08_8
  int v6; // esi
  size_t v8; // r12
  size_t v9; // r13
  signed int v10; // ebp
  __int64 v11; // r15
  __int16 Srca; // [rsp+20h] [rbp-448h]
  char v13; // [rsp+22h] [rbp-446h]
  __int16 Dst; // [rsp+220h] [rbp-248h]
  char v15; // [rsp+222h] [rbp-246h]

  v2 = (char *)Src;
  v3 = a2;
  v5 = strlen((const char *)Src) + 1;
  v4 = v5 - 1;
  v6 = v5 - 1;
  if ( (signed int)v5 - 1 <= 0 )
    return 0xFFFFFFFFi64;
  if ( v4 > 0 )
  {
    v8 = (signed int)v5 - 4;
    v9 = v4;
    v10 = 6;
    v11 = ((signed int)v5 - 2) / 6u + 1;
    do
    {
      memset(&Dst, 0, 0x200ui64);
      memset(&Srca, 0, 0x200ui64);
      if ( v10 - 3 < v6 )
      {
        Dst = *(_WORD *)v2;
        v15 = v2[2];
        if ( v10 < v6 )
        {
          Srca = *(_WORD *)(v2 + 3);
          v13 = v2[5];
        }
        else
        {
          memmove(&Srca, v2 + 3, v8);
        }
      }
      else
      {
        memmove(&Dst, v2, v9);
        memset(&Srca, 0, 0x200ui64);
      }
      memmove((void *)&v3[strlen(v3)], &Srca, strlen((const char *)&Srca));
      memmove((void *)&v3[strlen(v3)], &Dst, strlen((const char *)&Dst));
      v10 += 6;
      v9 -= 6i64;
      v8 -= 6i64;
      v2 += 6;
      --v11;
    }
    while ( v11 );
  }
  return 0i64;
}

// Licence Load
signed __int64 __fastcall sub_410900(__int64 a1, __int64 a2, void *a3, char *a4)
{
  char *v4; // rbx
  __int64 v5; // rbp
  __int64 v6; // rdi
  unsigned int v8; // esi
  unsigned int v9; // er14
  int v10; // eax
  __int64 v11; // r13
  unsigned int v12; // er15
  int v13; // er12
  int v14; // edi
  __int64 v15; // rsi
  char v16; // al
  int v17; // edx
  signed int v18; // edi
  signed __int64 i; // rcx
  char v20; // al
  unsigned __int64 v21; // kr08_8
  char *v22; // rcx
  char *v23; // rdx
  char v24; // al
  signed int v25; // eax
  __int64 v26; // rdx
  __int64 v27; // rcx
  char v28; // al
  int v29; // eax
  __int64 v30; // rdx
  char v31; // al
  int v32; // eax
  __int64 *v33; // rdx
  int v34; // eax
  int v35; // ecx
  char *v36; // rdx
  char v37; // al
  __int64 v38; // rdi
  unsigned __int8 *v39; // rax
  __int64 v40; // rdi
  int v41; // ecx
  int v42; // edx
  __time64_t v43; // rax
  __int64 v44; // rax
  char *v45; // rcx
  const char *v46; // rdx
  __int64 v47; // r8
  __time64_t v48; // rcx
  __int64 v49; // rax
  int v50; // edi
  __int64 v51; // rax
  unsigned int v52; // [rsp+20h] [rbp-1C08h]
  void *v53; // [rsp+28h] [rbp-1C00h]
  __int64 v54; // [rsp+30h] [rbp-1BF8h]
  __int64 v55; // [rsp+38h] [rbp-1BF0h]
  __int64 v56; // [rsp+40h] [rbp-1BE8h]
  char v57; // [rsp+50h] [rbp-1BD8h]
  char v58[128]; // [rsp+D0h] [rbp-1B58h]
  char v59; // [rsp+150h] [rbp-1AD8h]
  char v60; // [rsp+1CFh] [rbp-1A59h]
  char Dst[2048]; // [rsp+1D0h] [rbp-1A58h]
  char v62; // [rsp+9D0h] [rbp-1258h]
  char Src[2048]; // [rsp+BD0h] [rbp-1058h]
  char v64; // [rsp+13D0h] [rbp-858h]

  v4 = a4;
  v5 = (__int64)a3;
  v53 = a3;
  v55 = a2;
  v6 = a1;
  if ( !a3 )
  {
    *(_DWORD *)a4 = 1;
    *((_DWORD *)a4 + 1) = GetLastError();
    sprintf(v4 + 8, "Lic is NULL!");
    return (unsigned int)(v5 - 1);
  }
  memset(a3, 0, 0x2E0ui64);
  v8 = sub_410080(v6);
  if ( (signed int)v8 <= 0 )
  {
    *(_DWORD *)v4 = 4;
    *((_DWORD *)v4 + 1) = GetLastError();
    sprintf(v4 + 8, "Open License file [%s] error or License not exist !", v6);
    return 0xFFFFFFFFi64;
  }
  v9 = T_FileOpen(v6, 0x8000i64, 0xFFFFFFFFi64);
  v52 = v9;
  if ( (v9 & 0x80000000) != 0 )
  {
    *(_DWORD *)v4 = 4;
    *((_DWORD *)v4 + 1) = GetLastError();
    sprintf(v4 + 8, "Open License file [%s] error or License not exist !", v6);
    return 0xFFFFFFFFi64;
  }
  memset(Dst, 0, 0x800ui64);
  if ( (signed int)T_FileRead(v9, Dst, v8) < 0 )
  {
    *(_DWORD *)v4 = 6;
    *((_DWORD *)v4 + 1) = GetLastError();
    sprintf(v4 + 8, "T_FileRead file error!");
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  memset(&v64, 0, 0x800ui64);
  sub_40FE60(Dst, &v64);
  memset(Src, 0, 0x800ui64);
  v10 = sub_40FD60(&v64, Src);
  v11 = v10;
  if ( v10 <= 0 )
  {
    *((_DWORD *)v4 + 1) = GetLastError();
    sprintf(v4 + 8, "Base64Decode error!");
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  v12 = 0;
  v13 = 0;
  v14 = 0;
  v15 = 0i64;
  if ( v10 >= 0 )
  {
    do
    {
      v16 = Src[v15];
      if ( v16 == 13 || v16 == 10 )
      {
        memset(&v62, 0, 0x200ui64);
        memmove(&v62, &Src[v14], v13 - v14);
        sub_4101C0(&v62, v5);
        v17 = v13 + 1;
        v18 = 1;
        for ( i = 1i64; v17 <= (signed int)v11; ++i )
        {
          v20 = Src[v15 + i];
          if ( v20 != 13 && v20 != 10 && v20 )
            break;
          ++v17;
          ++v18;
        }
        v13 += v18;
        v15 += i;
        v14 = v13;
      }
      else
      {
        ++v13;
        ++v15;
      }
    }
    while ( v15 <= v11 );
    v9 = v52;
    v5 = (__int64)v53;
  }
  v53 = 0i64;
  v54 = 0i64;
  memset(&v57, 0, 0x80ui64);
  if ( (signed int)sub_410630(v55, &v53, &v57, v4) < 0 )
    goto LABEL_63;
  v21 = strlen((const char *)&v53) + 1;
  if ( (signed int)v21 - 1 <= 0 )
  {
    *((_DWORD *)v4 + 1) = -1;
    sprintf(v4 + 8, "Version File content is null!");
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  if ( (signed int)strlen(&v57) <= 0 )
  {
    *((_DWORD *)v4 + 1) = -1;
    sprintf(v4 + 8, "Version File content is null!");
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  qword_682780 = 0i64;
  qword_682788 = 0i64;
  memmove(&qword_682780, &v53, (signed int)v21 - 1);
  memset(Dst, 0, 0x800ui64);
  v22 = (char *)(v5 + 544);
  v55 = 0i64;
  v56 = 0i64;
  v23 = &Dst[-v5 - 544];
  do
  {
    v24 = *v22++;
    v22[(_QWORD)v23 - 1] = v24;
  }
  while ( v24 );
  LOBYTE(v23) = 46;
  v25 = sub_410600(Dst, v23);
  if ( v25 <= 0 )
  {
    *((_DWORD *)v4 + 1) = -1;
    sprintf(v4 + 8, "License Version error!");
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  if ( v25 == 1 )
  {
    v27 = 0i64;
    do
    {
      v28 = Dst[v27++];
      *((_BYTE *)&v54 + v27 + 7) = v28;
    }
    while ( v28 );
  }
  else if ( v25 > 1 )
  {
    v29 = sub_4105B0(Dst, v26, 2i64);
    if ( v29 < 0 )
    {
      *((_DWORD *)v4 + 1) = -1;
      sprintf(v4 + 8, "License Version error!");
      T_FileClose(v9);
      return 0xFFFFFFFFi64;
    }
    memmove(&v55, Dst, v29);
  }
  memset(Dst, 0, 0x800ui64);
  v30 = 0i64;
  do
  {
    v31 = *((_BYTE *)&v53 + v30++);
    *(&v60 + v30) = v31;
  }
  while ( v31 );
  LOBYTE(v30) = 46;
  v32 = sub_4105B0(Dst, v30, 2i64);
  if ( v32 < 0 )
  {
    *((_DWORD *)v4 + 1) = -1;
    sprintf(v4 + 8, "VersionFile Version error!");
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  v53 = 0i64;
  v54 = 0i64;
  memmove(&v53, Dst, v32);
  v33 = &v55;
  do
  {
    v34 = *((unsigned __int8 *)v33 + (char *)&v53 - (char *)&v55);
    v35 = *(unsigned __int8 *)v33 - v34;
    if ( *(unsigned __int8 *)v33 != v34 )
      break;
    v33 = (__int64 *)((char *)v33 + 1);
  }
  while ( v34 );
  if ( v35 )
  {
    *((_DWORD *)v4 + 1) = -1;
    sprintf(v4 + 8, "VersionFile Version not equal LicenseFile Version!");
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  memset(v58, 0, 0x80ui64);
  v36 = (char *)(v5 + 416);
  do
  {
    v37 = *v36++;
    v58[(_QWORD)v36 - 416 - v5 - 1] = v37;
  }
  while ( v37 );
  v38 = StrLowerCase(&v57);
  v39 = (unsigned __int8 *)StrLowerCase(v58);
  v40 = v38 - (_QWORD)v39;
  do
  {
    v41 = v39[v40];
    v42 = *v39 - v41;
    if ( *v39 != v41 )
      break;
    ++v39;
  }
  while ( v41 );
  if ( v42 )
  {
    *((_DWORD *)v4 + 1) = -1;
    sprintf(v4 + 8, "Version File ProductName not equal license ProductName!");
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  v43 = time64(0i64);
  if ( v43 < *(_QWORD *)(v5 + 560) )
  {
    *(_DWORD *)v4 = 1018;
    *((_DWORD *)v4 + 1) = -1;
    v44 = FmtTime(*(_QWORD *)(v5 + 560), Src);
    v45 = v4 + 8;
    v46 = "Now is earlier than your license's starttime!\n\t\t\t\t\t\tStartTime is %s";
    v47 = v44;
LABEL_62:
    sprintf(v45, v46, v47);
LABEL_63:
    T_FileClose(v9);
    return 0xFFFFFFFFi64;
  }
  v48 = *(_QWORD *)(v5 + 568);
  if ( v48 == -1 )
  {
    *((_DWORD *)v4 + 1) = -1;
    *(_DWORD *)v4 = 0;
    sprintf(v4 + 8, "License Nolimit!");
  }
  else
  {
    if ( v43 > v48 )
    {
      *(_DWORD *)v4 = 1018;
      *((_DWORD *)v4 + 1) = -1;
      v49 = FmtTime(*(_QWORD *)(v5 + 568), Src);
      v45 = v4 + 8;
      v46 = "Your license expired!\n\t\t\t\t\t\tEndTime is %s";
      v47 = v49;
      goto LABEL_62;
    }
    v50 = ((signed int)v48 - (signed int)v43 + 86399) / 86400;
    if ( v50 <= 30 )
    {
      *(_DWORD *)v4 = 0;
      *((_DWORD *)v4 + 1) = -1;
      v51 = sub_40FCF0(*(_QWORD *)(v5 + 568), &v59);
      sprintf(v4 + 8, "Warning: Your license has %d days left! EndDate is %s", (unsigned int)v50, v51, *(_QWORD *)&v52);
      v12 = 2;
    }
  }
  T_FileClose(v9);
  return v12;
}

// TLQ Init
__int64 __fastcall sub_401B20(void *Dst)
{
  char *v1; // rsi
  signed int v2; // ebx
  unsigned int v3; // ebx
  int v4; // eax
  int v5; // ST20_4
  __int64 v6; // rdx
  __int64 v7; // rcx
  __int64 v8; // r8
  __int64 v9; // rax
  __int64 v10; // rdx
  __int64 v11; // rcx
  __int64 v12; // r8
  __int64 v13; // rax
  signed int v14; // edi
  int v15; // ST20_4
  int v16; // eax
  __int64 v17; // rdx
  __int64 v18; // rcx
  __int64 v19; // r8
  int v20; // ST20_4
  int v22; // eax
  int v23; // ST20_4
  int v24; // ST20_4
  int v25; // ST20_4
  __int64 v26; // rdx
  __int64 v27; // rcx
  __int64 v28; // r8
  signed int v29; // ebp
  __int64 v30; // rdx
  void *v31; // rcx
  __int64 v32; // r8
  int v33; // er9
  signed int v34; // eax
  int v35; // eax
  __int64 v36; // rdx
  __int64 v37; // rcx
  __int64 v38; // r8
  unsigned int v39; // edi
  __int64 v40; // rbx
  __int64 v41; // rdx
  __int64 v42; // rcx
  __int64 v43; // r8
  int v44; // eax
  __int64 v45; // rcx
  __int64 v46; // rdx
  __int64 v47; // r8
  signed int v48; // edx
  int v49; // er9
  __int64 v50; // rdx
  __int64 v51; // rcx
  __int64 v52; // r8
  char v53; // [rsp+50h] [rbp-438h]

  v1 = (char *)Dst;
  v2 = 0;
  if ( (signed int)sub_411710() < 0 )
  {
    if ( dword_446018 )
      printf("TLQ get Env error!\n");
    v3 = -1;
    goto LABEL_150;
  }
  sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x1B9, -1);
  v4 = LicenseCheck((__int64)::Dst, (__int64)byte_6841E0, &qword_6824A0, v1);
  if ( v4 < 0 )
  {
    if ( dword_446018 )
      printf("TLQ get License error!\n");
    v3 = -1;
    goto LABEL_150;
  }
  if ( v4 == 2 )
  {
    v5 = *((_DWORD *)v1 + 1);
    sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x1CD, *(_DWORD *)v1);
  }
  memset(v1, 0, 0x40Cui64);
  if ( dword_446018 )
  {
    v9 = sub_41FE60(v7, v6, v8);
    sub_4110D0(::Dst, v9 + 48);
    v13 = sub_41FE60(v11, v10, v12);
    sub_411630(byte_6841E0, v13 + 48);
  }
  sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x1DA, -1);
  sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x1DD, -1);
  v14 = 1;
  if ( (signed int)sub_405270(1i64, v1) < 0 )
  {
    v15 = *((_DWORD *)v1 + 1);
    sub_404A60(8, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x1EC, *(_DWORD *)v1);
    if ( dword_446018 )
      printf("TLQ set system status error\n");
    v3 = -1;
    goto LABEL_150;
  }
  if ( (signed int)sub_40B2F0(v1) < 0 )
  {
    if ( dword_446018 )
      printf("TLQ get configure file error!\n");
    v3 = -1;
    goto LABEL_150;
  }
  if ( (signed int)sub_40B840(v1) < 0 )
  {
    if ( dword_446018 )
      printf("TLQ get user configure file error!\n");
    v3 = -1;
    goto LABEL_150;
  }
  if ( qword_446010 > 0 )
    *((_QWORD *)Memory + 31) = qword_446010 << 24;
  else
    *((_QWORD *)Memory + 31) = 104857600i64;
  *((_DWORD *)Memory + 59) = 0;
  if ( *((_DWORD *)Memory + 58) > 0 )
    *((_DWORD *)Memory + 58) <<= 10;
  v16 = time64(0i64);
  *((_DWORD *)Memory + 60) = v16;
  if ( (unsigned int)sub_40FAD0(0i64, v1) )
  {
    v22 = sub_40FCD0(v18, v17, v19);
    if ( v22 == 1 )
    {
      sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x245, 0);
    }
    else if ( v22 == 2 )
    {
      sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x247, 0);
    }
    else
    {
      sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x249, 0);
    }
    sub_40F430(v1);
    if ( (signed int)sub_41D0D0(v1) >= 0 )
    {
      if ( (signed int)sub_405EC0(qword_685408, qword_683750, v1) < 0 )
      {
        v24 = *((_DWORD *)v1 + 1);
        sub_404A60(8, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x269, *(_DWORD *)v1);
        printf("TLQ Init Client User Info is error ! \n");
      }
      if ( dword_446018 )
        printf("TLQ Create IPC resource OK!\n");
      sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x275, 0);
      if ( (signed int)sub_405270(2i64, v1) >= 0 )
      {
        if ( dword_446018 )
          printf("Starting now, maybe take a few minutes....\n");
        if ( (signed int)sub_401020(v1) >= 0 )
        {
          *(_DWORD *)(qword_67C670 + 16) = 2;
          sub_401180(v27, v26, v28);
        }
        v29 = sub_401740(0i64);
        if ( v29 >= 0 )
        {
          if ( dword_446018 )
            printf("TLQ Start process tl_moni OK!\n");
          sub_404A60(6, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x298, 0);
          v32 = (unsigned int)dword_6843E4;
          if ( dword_684658 < 100 || dword_6843E4 == 9 )
          {
            v31 = qword_682838;
            if ( qword_682838 )
            {
              v30 = *((unsigned int *)qword_682838 + 45);
              if ( (signed int)v30 > 0 )
              {
                v33 = *((_DWORD *)qword_682838 + 46);
                if ( v33 == 0xFFFF )
                  goto LABEL_154;
                if ( (signed int)v30 >= 5 )
                {
                  if ( dword_684658 )
                  {
                    switch ( dword_684658 )
                    {
                      case 1:
                        v34 = 2;
                        break;
                      case 2:
                        v34 = 4;
                        break;
                      case 3:
                        v34 = 8;
                        break;
                      case 4:
                        v34 = 16;
                        break;
                      case 5:
                        v34 = 32;
                        break;
                      case 6:
                        v34 = 64;
                        break;
                      case 7:
                        v34 = 128;
                        break;
                      case 8:
                        v34 = 256;
                        break;
                      case 10:
                        v34 = 1024;
                        break;
                      case 11:
                        v34 = 2048;
                        break;
                      default:
                        v34 = 0;
                        if ( dword_6843E4 == 9 )
                          v34 = 512;
                        break;
                    }
                  }
                  else
                  {
                    v34 = 1;
                  }
                  if ( v33 & v34 )
LABEL_154:
                    sub_404A60(5, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x29D, -1);
                }
              }
            }
          }
          v35 = sub_405260(v31, v30, v32);
          if ( v35 == 3 )
          {
LABEL_106:
            v39 = 0;
            if ( *(_DWORD *)(qword_684650 + 8) > 0 )
            {
              do
              {
                v40 = qword_6851F8 + 1184i64 * (signed int)v39;
                if ( (unsigned int)sub_405240(v39) == 4 && dword_446018 )
                  printf("QCU[%s] start OK!\n", v40 + 4);
                ++v39;
              }
              while ( (signed int)v39 < *(_DWORD *)(qword_684650 + 8) );
            }
            if ( (signed int)sub_401020(v1) >= 0 )
            {
              v44 = sub_405260(v42, v41, v43);
              v45 = qword_67C670;
              *(_DWORD *)(qword_67C670 + 16) = v44;
              *(_DWORD *)(qword_67C670 + 20) = v29;
              sub_401180(v45, v46, v47);
            }
            return 0;
          }
          while ( v35 != 8 )
          {
            ++v2;
            if ( v2 == 3 * (v2 / 3) && dword_446018 )
              printf("...");
            Sleep(0x3E8u);
            v35 = sub_405260(v37, v36, v38);
            if ( v35 == 3 )
            {
              if ( v2 >= 3 && dword_446018 )
                printf("\n");
              goto LABEL_106;
            }
          }
          *(_DWORD *)v1 = 50;
          *((_DWORD *)v1 + 1) = -1;
          *((_QWORD *)v1 + 1) = 7958534864856239188i64;
          *((_QWORD *)v1 + 2) = 2338619869403226220i64;
          v3 = -1;
          *((_QWORD *)v1 + 3) = 729975001384051046i64;
          v1[32] = 0;
          printf("\n");
          if ( !(unsigned int)sub_404430(v29) )
          {
            if ( dword_684658 < 100 || dword_6843E4 == 9 )
            {
              if ( qword_682838 )
              {
                v48 = *((_DWORD *)qword_682838 + 45);
                if ( v48 > 0 )
                {
                  v49 = *((_DWORD *)qword_682838 + 46);
                  if ( v49 == 0xFFFF )
                    goto LABEL_155;
                  if ( v48 >= 5 )
                  {
                    if ( dword_684658 )
                    {
                      switch ( dword_684658 )
                      {
                        case 1:
                          v14 = 2;
                          break;
                        case 2:
                          v14 = 4;
                          break;
                        case 3:
                          v14 = 8;
                          break;
                        case 4:
                          v14 = 16;
                          break;
                        case 5:
                          v14 = 32;
                          break;
                        case 6:
                          v14 = 64;
                          break;
                        case 7:
                          v14 = 128;
                          break;
                        case 8:
                          v14 = 256;
                          break;
                        case 10:
                          v14 = 1024;
                          break;
                        case 11:
                          v14 = 2048;
                          break;
                        default:
                          v14 = 0;
                          if ( dword_6843E4 == 9 )
                            v14 = 512;
                          break;
                      }
                    }
                    if ( v49 & v14 )
LABEL_155:
                      sub_404A60(5, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x2CE, -1);
                  }
                }
              }
            }
            sub_4043E0(v29);
          }
        }
        else
        {
          if ( dword_446018 )
            printf("TLQ failed to start kernel process.\n");
          v3 = -1;
        }
      }
      else
      {
        v25 = *((_DWORD *)v1 + 1);
        sub_404A60(8, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x279, *(_DWORD *)v1);
        if ( dword_446018 )
          printf("TLQ set system status error! \n");
        v3 = -1;
      }
      sub_41CC40(v1);
    }
    else
    {
      v23 = *((_DWORD *)v1 + 1);
      sub_404A60(8, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x25B, *(_DWORD *)v1);
      if ( dword_446018 )
        printf("TLQ Create IPC error!\n");
      v3 = -1;
    }
LABEL_150:
    if ( (signed int)sub_401020(&v53) >= 0 )
    {
      *(_DWORD *)(qword_67C670 + 16) = -1;
      sub_401180(v51, v50, v52);
    }
    return v3;
  }
  if ( (signed int)sub_404430(*(_DWORD *)(qword_682C70 + 8)) < 0 )
  {
    sub_404A60(8, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x232, -1);
    if ( dword_446018 )
      printf("TLQ check IPC error!\n");
    v3 = -1;
    goto LABEL_150;
  }
  v20 = *((_DWORD *)v1 + 1);
  sub_404A60(8, (unsigned __int64)"..\\..\\process\\tlq\\tlqinit.c", (char *)0x23A, *(_DWORD *)v1);
  if ( dword_446018 )
    printf("TLQ has started!\n");
  return 0xFFFFFFFFi64;
}

