# *****************************************************************************
# BASICS
# *****************************************************************************

sudo -u postgres psql # PSQL command line interface in full admin mode

# Anything inside the angular brackets <> will be your variables

sudo -u postgres createuser <username> # Create user
sudo -u postgres createdb <dbname> # Create database

# Setting a password for a user
sudo -u postgres psql
alter user <username> with encrypted password '<password>';

grant all privileges on database <dbname> to <username>; # grant privileges on a database to a user