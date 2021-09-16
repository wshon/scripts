from urllib import request as r

from bottle import request
from bottle import route, run

HOST = 'http://180.2.31.76:3040'


@route('/<path:re:.*>', ['GET', 'POST'])
def handle(path):
    url = HOST + "/" + path
    print('target url is: ', url)
    req_data_ori = request.body.read()
    print('ori req data is: ', req_data_ori)
    req_data_new = req_data_ori.decode('utf-8').encode('gbk')
    print('new req data is: ', req_data_new)
    req = r.Request(url=url, data=req_data_new, headers={"Content-Type": "application/json"}, method=request.method)
    rsp = r.urlopen(req)
    rsp_data_ori = rsp.read()
    print('ori rsp data is: ', rsp_data_ori)
    try:
        # data_out = rsp_data_ori.decode('gbk').encode('utf-8')
        data_out = rsp_data_ori
        print('new rsp data is: ', rsp_data_ori)
    except UnicodeDecodeError as e:
        data_out = rsp_data_ori
        print('convert ori rsp data fail: ', e)
    return rsp_data_ori


if __name__ == '__main__':
    run(host='localhost', port=3004, debug=True)
