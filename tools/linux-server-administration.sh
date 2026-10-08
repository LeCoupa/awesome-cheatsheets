#!/bin/bash

##############################################################################
# LINUX SERVER ADMINISTRATION CHEATSHEET
##############################################################################

# System information
uname -a
hostnamectl
uptime
who
whoami
id
cat /etc/os-release

# CPU and load
lscpu
uptime
cat /proc/loadavg
ps aux --sort=-%cpu | head
ps aux --sort=-%mem | head
top

# Memory
free -h
cat /proc/meminfo

# Disk usage
df -h
df -i
du -sh /var/* 2>/dev/null
find /var -type f -size +500M -ls 2>/dev/null

# Disk and I/O
lsblk
fdisk -l
iostat
iostat -xz 1

# Processes
ps aux
pgrep process_name
ps -fp PID
kill PID
kill -9 PID

# systemd services
systemctl list-units --type=service --state=running
systemctl status service_name
systemctl start service_name
systemctl stop service_name
systemctl restart service_name
systemctl enable service_name
systemctl disable service_name

# Logs
journalctl -xe
journalctl -f
journalctl -u service_name
journalctl --since today
journalctl -p err -b

# Networking
ip addr
ip route
ss -lntup
ss -tunap
dig example.com
ping -c 4 8.8.8.8
curl -I https://example.com

# SSH
ssh user@server
scp file user@server:/path/
scp user@server:/path/file .
ssh-keygen -t ed25519
ssh-copy-id user@server

# Files and permissions
ls -lah
stat file
chmod 644 file
chmod +x script.sh
chown user:group file
find /path -name "filename"
find /path -type f -mtime -1

# Users
whoami
cat /etc/passwd
cat /etc/group
useradd username
passwd username
usermod -aG group username

# Firewall
firewall-cmd --state
firewall-cmd --list-all
ufw status
nft list ruleset

# Troubleshooting
uptime
free -h
df -h
df -i
ss -lntup
systemctl --failed
journalctl -p err -b

# SSL certificate expiry
echo | openssl s_client -connect example.com:443 -servername example.com 2>/dev/null | openssl x509 -noout -dates

# Additional Linux server management resources:
# https://iserversupport.com/linux-server-management/
