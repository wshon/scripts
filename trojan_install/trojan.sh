apt update
apt install -y socat cron curl
apt install -y libcap2-bin xz-utils nano
apt install -y nginx

systemctl start cron
systemctl enable cron

$hostname="sub.hostname.com"
$cerroot="/var/www/certificate/trojan"
$wwwroot="/var/www/wwwroot/trojan"

mkdir -p $cerroot
mkdir -p $wwwroot

rm "/etc/nginx/sites-enabled/default"

cat > "/etc/nginx/sites-available/$hostname" << EOF
server {
    listen 127.0.0.1:80 default_server;
    server_name $hostname;
    location / {
        proxy_pass https://www.ietf.org;
    }

}

server {
    listen 127.0.0.1:80;
    server_name 107.150.5.202;
    return 301 https://$hostname\$request_uri;
}

server {
    listen 0.0.0.0:80;
    listen [::]:80;
    server_name _;
    location / {
        return 301 https://$host\$request_uri;
    }
    location /.well-known/acme-challenge {
        root /var/www/wwwroot/trojan;
    }
}
EOF 

ln -s "/etc/nginx/sites-available/$hostname" "/etc/nginx/sites-enabled/"
systemctl restart nginx
systemctl status nginx
# 测试网站
# todo
acme.sh --issue -d "$hostname" -w "$wwwroot"
acme.sh --install-cert -d "$hostname" --key-file "$cerroot/private.key" --fullchain-file "$cerroot/certificate.crt"
acme.sh --upgrade --auto-upgrade
bash -c "$(curl -fsSL https://raw.githubusercontent.com/trojan-gfw/trojan-quickstart/master/trojan-quickstart.sh)"

$trojan_cfg="/usr/local/etc/trojan/config.json"
#sed -i  's#\("cert": "\).*#\1'"$cerroot/certificate.crt"'",#g' $trojan_cfg
#sed -i  's#\("key": "\).*#\1'"$cerroot/private.key"'",#g' $trojan_cfg
sed -i  's#\/path/to/certificate.crt#'"$cerroot/certificate.crt"'#g' $trojan_cfg
sed -i  's#\/path/to/private.key#'"$cerroot/private.key"'#g' $trojan_cfg

systemctl restart trojan
systemctl status trojan

crontab -e
0 0 1 * * killall -s SIGUSR1 trojan
crontab -l

systemctl enable trojan
systemctl enable nginx