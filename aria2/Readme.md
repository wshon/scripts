```bash
mkdir -p /etc/aria2/
touch /etc/aria2/aria2.session
wget https://github.com/muumlover/scripts/raw/master/aria2/aria2.conf -O /etc/aria2/aria2.conf
wget https://github.com/muumlover/scripts/raw/master/aria2/aria2.service -O /etc/systemd/system/aria2.service
systemctl daemon-reload
```
