import sys
from argparse import ArgumentParser, ONE_OR_MORE
from textwrap import dedent

from .client import Cow

parser = ArgumentParser(
    prog='cowtransfer',
    description='',
)
positional = parser.add_argument_group(
    title='Positional Arguments',
    description=dedent('''
        These arguments come after any flags and in the order they are listed here.
    ''')
)

positional.add_argument(
    dest='files',
    metavar='FILES',
    default=None,
    nargs=ONE_OR_MORE,
    help=dedent('''
    Save output to FILE when method is set to 'download'.
    Choose a File from local address when method is set to 'upload'.
    ''')
)

network = parser.add_argument_group(title='Network')

network.add_argument(
    '--proxy',
    dest='proxy',
    metavar="PROXY",
    default=None,
    help='''
    proxy.

    '''
)


def main():
    parse_args = parser.parse_args(sys.argv[1:])
    res = Cow(proxies=parse_args.proxies).upload(file=parse_args.file)
    print(res.recv_code)
    print(res.share_url)


if __name__ == '__main__':
    main()
