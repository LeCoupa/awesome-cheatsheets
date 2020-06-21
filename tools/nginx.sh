##############################################################################
# NGINX
# DOCUMENTATION: https://nginx.org/en/docs/
##############################################################################

sudo nginx -t # Check syntax
sudo systemctl reload nginx # Reload nginx
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/ # Link website
