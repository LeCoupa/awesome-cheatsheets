# *****************************************************************************
# BASICS
# *****************************************************************************

mysqldump -h hostname -u username -p database_name -P port > file.sql # Export database
mysql -u username -p database_name < file.sql                         # Import database

SHOW PROCESSLIST; # Show you any queries that are currently running or in the queue to run

show status where `variable_name` = 'Threads_connected'; # Show all connected threads
show variables like 'max_connections'; # Show maximum number of allowed connections
SET GLOBAL max_connections = 150; ## Set new value for maximum connections (no restart needed but for permanent change update my.cnf)

GRANT ALL PRIVILEGES ON prospectwith.* TO 'power'@'localhost' WITH GRANT OPTION; # Grant all privileges on database

CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password'; # Create user

mysql -u root -pmypassword -e "MY SQL QUERY" &>> query.log & disown # Run SQL query in the background
