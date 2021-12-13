#!/usr/bin/env python
# -*- coding: utf-8 -*-
# ┬ ┬┌─┐┬ ┬┌─┐┌┐┌ ┌─┐┌─┐┌┬┐
# │││└─┐├─┤│ ││││ │  │ ││││
# └┴┘└─┘┴ ┴└─┘┘└┘o└─┘└─┘┴ ┴
from datetime import datetime

from sqlite_utils import Database

import pycoc

db = Database("daqin.db")


def print_hi(name):
    api = pycoc.COCApi(
        # "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjYzM2E0MGM3LTUxNGQtNDRkMC1hY2ExLTA2Mzg4ZWZhNDFlNyIsImlhdCI6MTYzNDA4OTI2Miwic3ViIjoiZGV2ZWxvcGVyL2MzMjM5ZGEwLTcyNjMtMWQ5NC1jMGQ2LTM2MDlkMWY1OTJjZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjE4My4xOTIuNTkuMjUwIl0sInR5cGUiOiJjbGllbnQifV19.ksseGs4dkWJTANW_rEAz0V-JiehZ8Wd6Q8XPjFfgsXpxrBXnUDDU-jm7lUiHXrzzvADtuTkeTkWNv1tFxHOCGA",
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjFkOTU1MzAzLWRmNjEtNGEyYS05ODM1LTExOGE3MjJiY2E0YyIsImlhdCI6MTYzNDA5MDkwMCwic3ViIjoiZGV2ZWxvcGVyL2MzMjM5ZGEwLTcyNjMtMWQ5NC1jMGQ2LTM2MDlkMWY1OTJjZCIsInNjb3BlcyI6WyJjbGFzaCJdLCJsaW1pdHMiOlt7InRpZXIiOiJkZXZlbG9wZXIvc2lsdmVyIiwidHlwZSI6InRocm90dGxpbmcifSx7ImNpZHJzIjpbIjExNy43NC4xMzAuMTk0Il0sInR5cGUiOiJjbGllbnQifV19.CliVcr5RIqoptsOHWE6NVcbRKuDwjP6dN_O8sz2s9O877AOAIKaiyOFFzycSAXub5w4NjiQz-qDFKlzA6ju8Sw",
        # proxies={'https': '127.0.0.1:1080'}
    )
    clan = api.clan_tag("#2PCY80V8R")
    time_now = datetime.now()
    # print(clan)

    if clan.get("result") == "error":
        print(time_now, 'error')
        exit(-1)

    memberList = clan["memberList"]
    for member in memberList:

        league = member['league']
        if league:
            db["league"].upsert(league, pk='id')
        member['league'] = member.get("league", {}).get("id")

        db["member"].upsert(member, pk='tag')
        member['time'] = time_now
        db["log_member"].insert(member, pk=['time', 'tag'])
    del clan["memberList"]

    location = clan["location"]
    if location:
        db["location"].upsert(location, pk='id')
    clan["location"] = clan.get("location", {}).get("id")

    labels = clan["labels"]
    for label in labels:
        db["label"].upsert(label, pk='id')
    clan["labels"] = [label.get("id") for label in clan.get("labels", [])]

    warLeague = clan["warLeague"]
    if warLeague:
        db["warLeague"].upsert(warLeague, pk='id')
    clan["warLeague"] = clan.get("warLeague", {}).get("id")

    chatLanguage = clan["chatLanguage"]
    if chatLanguage:
        db["chatLanguage"].upsert(chatLanguage, pk='id')
    clan["chatLanguage"] = clan.get("chatLanguage", {}).get("id")

    db["clan"].upsert(clan, pk='tag')
    clan['time'] = time_now
    db["log_clan"].insert(clan, pk=['time', 'tag'])

    print(time_now, 'success')


# Press the green button in the gutter to run the script.
if __name__ == "__main__":
    print_hi("PyCharm")

# See PyCharm help at https://www.jetbrains.com/help/pychar
