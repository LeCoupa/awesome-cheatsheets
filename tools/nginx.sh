##############################################################################
# NGINX
# DOCUMENTATION: https://nginx.org/en/docs/
##############################################################################

sudo nginx -t # Check syntax
sudo systemctl status nginx # nginx current status
sudo systemctl reload nginx # Reload nginx
sudo systemctl restart nginx  # Restart nginx
sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/ # Link website

# *****************************************************************************
# General Settings
# *****************************************************************************

# Ports

server {
  # Use HTTP protocol
  listen 80;
  
  # Use HTTPS protocol
  listen 443 ssl;
  
  # Listen on port 80 using IPv6
  listen [::]:80;
  
  # Listen on port 80 using **only** IPv6
  listen [::]:80 ipv6only=on;
}

# Domain name (server_name)

server {
  # Listen to example.com
  server_name example.com;
  
  # Listen to multiple domains
  server_name example.com www.example.com;
  
  # Listen to all sub-domains
  server_name *.example.com;
  
  # Listen to all top-level domains
  server_name example.*;
  
  # Listen to unspecified hostnames (listens to IP address itself)
  server_name "";
}

# *****************************************************************************
# Serving Files 
# *****************************************************************************

# Static assets (traditional web server)

server {
    listen 80;
    server_name example.com;

    root /path/to/website;
    # root /www/data/ for example

    # If there's no 'root' inside, it will look for /www/data/index.html
    location / {
    }

    # If there's no 'root' inside, it will look for /www/data/images/index.html
    location /images/ {
    }

    # Since there's 'root' inside, it will look for /www/media/videos/index.html
    location /videos/ {
        root /www/media;
    }
}

# *****************************************************************************
# Redirects
# *****************************************************************************

# 301 Permanent

server {
    # Redirect www.example.com to example.com
    listen 80;
    server_name www.example.com;
    return 301 http://example.com$request_uri;
}

server {
    # Redirect http to https
    listen 80;
    server_name example.com;
    return 301 https://example.com$request_uri;
}

# 302 Temporary

server {
  listen 80;
  server_name yourdomain.com;
  return 302 http://otherdomain.com;
}

# *****************************************************************************
# Reverse proxy
# *****************************************************************************

# Useful for Node.js, Streamlit, Jupyter, etc

# Basic

server {
  listen 80;
  server_name example.com;
  
  location / {
    proxy_pass http://0.0.0.0:3000;
    # where 0.0.0.0:3000 is your Node.js Server bound on 0.0.0.0 listing on port 3000
  }
}

# Basic + (upstream)

upstream node_js {
  server 0.0.0.0:3000;
  # where 0.0.0.0:3000 is your Node.js Server bound on 0.0.0.0 listing on port 3000
}

server {
  listen 80;
  server_name example.com;
  
  location / {
    proxy_pass http://node_js;
  }
}

# Upgraded Connection (useful for applications with support for WebSockets)

upstream node_js {
  server 0.0.0.0:3000;
}

server {
  listen 80;
  server_name example.com;
  
  location / {
    proxy_pass http://node_js;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_set_header Host $host;
	
    }
}

# *****************************************************************************
# HTTPS Protocol
# *****************************************************************************

# The majority of SSL options depend on what your application does or needs

server {
    listen 443 ssl;
    server_name example.com;

    ssl on;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/privkey.pem;

    ssl_stapling on;
    ssl_stapling_verify on;
    ssl_trusted_certificate /path/to/fullchain.pem;

    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_session_timeout 1d;
    ssl_session_cache shared:SSL:50m;
    add_header Strict-Transport-Security max-age=15768000;
}

# Permanent redirect to HTTPS secured domain

server {
  listen 80;
  server_name yourdomain.com;
  return 301 https://$host$request_uri;
}

# You can easily secure you website/app using Let's Encrypt.
# Go https://certbot.eff.org/lets-encrypt/ubuntuxenial-nginx.html for more information

# *****************************************************************************
# Load Balancing
# *****************************************************************************

# Useful for large applications running in multiple instances. Below example is for reverse proxy
upstream node_js {
  server 0.0.0.0:3000;
  server 0.0.0.0:4000;
  server 127.155.142.421;
}

server {
  listen 80;
  server_name example.com;
  
  location / {
    proxy_pass http://node_js;
  }
}