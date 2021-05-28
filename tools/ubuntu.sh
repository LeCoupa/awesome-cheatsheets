##############################################################################
# UBUNTU
##############################################################################

scp /path/to/file user@server:/path/to/destination # Copy file from local to server

df -h # Check the amount of free space

sudo ufw status # Check status
sudo ufw allow from remote_IP_address to any port 3306 # Allow external ip to access port

scp user@remote_host:remote_file local_file # download: remote -> local
scp local_file user@remote_host:remote_file # upload: local -> remote

sudo -s # Log as root

cat /proc/<process_id>/maps   # Show the current virtual memory usage of a Linux process

ip r # Display ip of the server
