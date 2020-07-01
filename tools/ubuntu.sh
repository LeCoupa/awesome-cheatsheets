##############################################################################
# UBUNTU
##############################################################################

scp /path/to/file user@server:/path/to/destination # Copy file from local to server

df -h # Check the amount of free space

sudo ufw status # Check status
sudo ufw allow from remote_IP_address to any port 3306 # Allow external ip to access port
