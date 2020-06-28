```
mkdir -p /var/aria2/ /etc/aria2/
touch /var/aria2/session.lock
wget https://github.com/muumlover/scripts/raw/master/aria2/aria2.conf -O /etc/aria2/aria2.conf
```
```
wget https://github.com/muumlover/scripts/raw/master/aria2/aria2.service -O /etc/systemd/system/aria2.service
```
