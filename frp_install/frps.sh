#!/usr/bin/env bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH
#=================================================================#
#   System Required:  CentOS 6+, Debian 7+, Ubuntu 12+            #
#   Description: One click Install Frp server                     #
#   Author: muumlover <muumlover@live.com>                        #
#   Thanks: @muumlover <https://twitter.com/muumlover>            #
#   Intro:  https://blog.muumlover.com/                           #
#=================================================================#

clear
echo
echo "#############################################################"
echo "# One click Install Frp server                              #"
echo "# Intro: https://blog.muumlover.com/                        #"
echo "# Author: muumlover <muumlover@live.com>                    #"
echo "# Github: https://github.com/fatedier/frp                   #"
echo "#############################################################"
echo

# Current folder
cur_dir=`pwd`
# Color
red='\033[0;31m'
green='\033[0;32m'
yellow='\033[0;33m'
plain='\033[0m'


spruce_type=linux_amd64

# Make sure only root can run our script
[[ $EUID -ne 0 ]] && echo -e "[${red}Error${plain}] This script must be run as root!" && exit 1

# Disable selinux
disable_selinux(){
    if [ -s /etc/selinux/config ] && grep 'SELINUX=enforcing' /etc/selinux/config; then
        sed -i 's/SELINUX=enforcing/SELINUX=disabled/g' /etc/selinux/config
        setenforce 0
    fi
}

#Check system
check_sys(){
    local checkType=$1
    local value=$2

    local release=''
    local systemPackage=''

    if [[ -f /etc/redhat-release ]]; then
        release="centos"
        systemPackage="yum"
    elif grep -Eqi "debian|raspbian" /etc/issue; then
        release="debian"
        systemPackage="apt"
    elif grep -Eqi "ubuntu" /etc/issue; then
        release="ubuntu"
        systemPackage="apt"
    elif grep -Eqi "centos|red hat|redhat" /etc/issue; then
        release="centos"
        systemPackage="yum"
    elif grep -Eqi "debian|raspbian" /proc/version; then
        release="debian"
        systemPackage="apt"
    elif grep -Eqi "ubuntu" /proc/version; then
        release="ubuntu"
        systemPackage="apt"
    elif grep -Eqi "centos|red hat|redhat" /proc/version; then
        release="centos"
        systemPackage="yum"
    fi

    if [[ "${checkType}" == "sysRelease" ]]; then
        if [ "${value}" == "${release}" ]; then
            return 0
        else
            return 1
        fi
    elif [[ "${checkType}" == "packageManager" ]]; then
        if [ "${value}" == "${systemPackage}" ]; then
            return 0
        else
            return 1
        fi
    fi
}

# Get version
getversion(){
    if [[ -s /etc/redhat-release ]]; then
        grep -oE  "[0-9.]+" /etc/redhat-release
    else
        grep -oE  "[0-9.]+" /etc/issue
    fi
}

# CentOS version
centosversion(){
    if check_sys sysRelease centos; then
        local code=$1
        local version="$(getversion)"
        local main_ver=${version%%.*}
        if [ "$main_ver" == "$code" ]; then
            return 0
        else
            return 1
        fi
    else
        return 1
    fi
}

# Get public IP address
get_ip(){
    local IP=$( ip addr | egrep -o '[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}' | egrep -v "^192\.168|^172\.1[6-9]\.|^172\.2[0-9]\.|^172\.3[0-2]\.|^10\.|^127\.|^255\.|^0\." | head -n 1 )
    [ -z ${IP} ] && IP=$( wget -qO- -t1 -T2 ipv4.icanhazip.com )
    [ -z ${IP} ] && IP=$( wget -qO- -t1 -T2 ipinfo.io/ip )
    [ ! -z ${IP} ] && echo ${IP} || echo
}

get_char(){
    SAVEDSTTY=`stty -g`
    stty -echo
    stty cbreak
    dd if=/dev/tty bs=1 count=1 2> /dev/null
    stty -raw
    stty echo
    stty $SAVEDSTTY
}

# Pre-installation settings
pre_install(){
    if check_sys packageManager yum || check_sys packageManager apt; then
        # Not support CentOS 5
        if centosversion 5; then
            echo -e "$[{red}Error${plain}] Not supported CentOS 5, please change to CentOS 6+/Debian 7+/Ubuntu 12+ and try again."
            exit 1
        fi
    else
        echo -e "[${red}Error${plain}] Your OS is not supported. please change OS to CentOS/Debian/Ubuntu and try again."
        exit 1
    fi

    # Set frp config token
    echo "Please enter token for frps"
    read -p "(Default token: muumlover.com):" frpstoken
    [ -z "${frpstoken}" ] && frpstoken="muumlover.com"
    echo
    echo "---------------------------"
    echo "token = ${frpstoken}"
    echo "---------------------------"
    echo

    # Set frps config port
    while true
    do
    dport=$(shuf -i 9000-19999 -n 1)
    echo "Please enter a port for frps [1-65535]"
    read -p "(Default port: ${dport}):" frpsport
    [ -z "$frpsport" ] && frpsport=${dport}
    expr ${frpsport} + 1 &>/dev/null
    if [ $? -eq 0 ]; then
        if [ ${frpsport} -ge 1 ] && [ ${frpsport} -le 65535 ] && [ ${frpsport:0:1} != 0 ]; then
            echo
            echo "---------------------------"
            echo "port = ${frpsport}"
            echo "---------------------------"
            echo
            break
        fi
    fi
    echo -e "[${red}Error${plain}] Please enter a correct number [1-65535]"
    done

    echo
    echo "Press any key to start...or Press Ctrl+C to cancel"
    char=`get_char`
    # Install necessary dependencies
    if check_sys packageManager yum; then
        yum install -y jq
    elif check_sys packageManager apt; then
        apt-get -y update
        apt-get -y install jq
    fi
    cd ${cur_dir}
}

# Download files
download_files(){
    # Download Frp file url
    # wget -qO- https://api.github.com/repos/fatedier/frp/releases/latest | jq -r ".assets[] | select(.name | test(\"${spruce_type}\")) | .browser_download_url"
    # wget -qO- https://api.github.com/repos/fatedier/frp/releases/latest | jq -r ".assets[] | .browser_download_url | select(contains(\"${spruce_type}\"))"

    if ! URL=$(wget -qO- https://api.github.com/repos/fatedier/frp/releases/latest | jq -r ".assets[] | .browser_download_url | select(contains(\"${spruce_type}\"))"); then
        echo -e "[${red}Error${plain}] Failed to download frps url!"
        exit 1
    fi
    # Download Frp file
    if ! wget --no-check-certificate -O frp-master.tar.gz $URL; then
        echo -e "[${red}Error${plain}] Failed to download frp file from ${URL}!"
        exit 1
    fi
}

# Config frps
config_frps(){
    mkdir -p /etc/frp/
    cat > /etc/frp/frps.ini<<-EOF
[common]
bind_port = ${frpsport}
#客户端连接服务器端的口令
token = ${frpstoken}

EOF
}

# Firewall set
firewall_set(){
    echo -e "[${green}Info${plain}] firewall set start..."
    if centosversion 6; then
        /etc/init.d/iptables status > /dev/null 2>&1
        if [ $? -eq 0 ]; then
            iptables -L -n | grep -i ${frpsport} > /dev/null 2>&1
            if [ $? -ne 0 ]; then
                iptables -I INPUT -m state --state NEW -m tcp -p tcp --dport ${frpsport} -j ACCEPT
                iptables -I INPUT -m state --state NEW -m udp -p udp --dport ${frpsport} -j ACCEPT
                /etc/init.d/iptables save
                /etc/init.d/iptables restart
            else
                echo -e "[${green}Info${plain}] port ${frpsport} has already been set up."
            fi
        else
            echo -e "[${yellow}Warning${plain}] iptables looks like shutdown or not installed, please manually set it if necessary."
        fi
    elif centosversion 7; then
        systemctl status firewalld > /dev/null 2>&1
        if [ $? -eq 0 ]; then
            default_zone=$(firewall-cmd --get-default-zone)
            firewall-cmd --permanent --zone=${default_zone} --add-port=${frpsport}/tcp
            firewall-cmd --permanent --zone=${default_zone} --add-port=${frpsport}/udp
            firewall-cmd --reload
        else
            echo -e "[${yellow}Warning${plain}] firewalld looks like not running or not installed, please enable port ${frpsport} manually if necessary."
        fi
    fi
    echo -e "[${green}Info${plain}] firewall set completed..."
}

# Install Frp
install(){
    # Install Frp
    cd ${cur_dir}
    tar zxf frp-master.tar.gz
    if [ $? -ne 0 ];then
        echo -e "[${red}Error${plain}] tar zxf frp-master.tar.gz failed! please check tar command."
        install_cleanup
        exit 1
    fi

    cd ${cur_dir}/frp_*_${spruce_type}

    cp ${cur_dir}/frp_*_${spruce_type}/frps /usr/bin/frps
    if [ $? -ne 0 ];then
        echo -e "[${red}Error${plain}] tar zxf frp-master.tar.gz failed! please check tar command."
        install_cleanup
        exit 1
    fi

    cp ${cur_dir}/frp_*_${spruce_type}/systemd/frps.service /lib/systemd/system/frps.service
    if [ $? -ne 0 ];then
        echo -e "[${red}Error${plain}] tar zxf frp-master.tar.gz failed! please check tar command."
        install_cleanup
        exit 1
    fi

    if [ -f /usr/bin/frps ]; then
        systemctl start frps
        systemctl enable frps
    else
        echo
        echo -e "[${red}Error${plain}] Frps install failed! please visit https://muumlover.com and contact."
        install_cleanup
        exit 1
    fi

    # clear
    echo
    echo -e "Congratulations, frp server install completed!"
    echo -e "Your Server IP        : \033[41;37m $(get_ip) \033[0m"
    echo -e "Your Server Port      : \033[41;37m ${frpsport} \033[0m"
    echo -e "Your Token            : \033[41;37m ${frpstoken} \033[0m"
    echo
    echo "Welcome to visit:https://muumlover.com"
    echo "Enjoy it!"
    echo
}

# Install cleanup
install_cleanup(){
    cd ${cur_dir}
    rm -rf frp-master.tar.gz frp_*_${spruce_type}
}

# Uninstall Frps
uninstall_frps(){
    printf "Are you sure uninstall Frps? (y/n) "
    printf "\n"
    read -p "(Default: n):" answer
    [ -z ${answer} ] && answer="n"
    if [ "${answer}" == "y" ] || [ "${answer}" == "Y" ]; then
        ps -ef | grep -v grep | grep -i "frps" > /dev/null 2>&1
        if [ $? -eq 0 ]; then
            systemctl stop frps
        fi

        # delete config file
        rm -f /usr/bin/frps
        rm -f /lib/systemd/system/frps.service
        echo "Frps uninstall success!"
    else
        echo
        echo "uninstall cancelled, nothing to do..."
        echo
    fi
}

# Install Frps
install_frps(){
    disable_selinux
    pre_install
    download_files
    config_frps
    if check_sys packageManager yum; then
        firewall_set
    fi
    install
    install_cleanup
}

# Initialization step
action=$1
[ -z $1 ] && action=install
case "$action" in
    install|uninstall)
        ${action}_frps
        ;;
    *)
        echo "Arguments error! [${action}]"
        echo "Usage: `basename $0` [install|uninstall]"
    ;;
esac
