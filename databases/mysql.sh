# *****************************************************************************
# BASICS
# *****************************************************************************

# Export database
mysqldump -h hostname -u username -p database_name -P port > file.sql 

# Import database
mysql -u username -p database_name < file.sql                         

# Show any queries currently running or in the queue
SHOW PROCESSLIST;

# Show all connected threads
show status where `variable_name` = 'Threads_connected';

# Show maximum number of allowed connections
show variables like 'max_connections';

# Set new value for maximum connections (no restart needed but for permanent change update my.cnf)
SET GLOBAL max_connections = 150;

# Grant all privileges on database
GRANT ALL PRIVILEGES ON prospectwith.* TO 'power'@'localhost' WITH GRANT OPTION;

# Create user
CREATE USER 'newuser'@'localhost' IDENTIFIED BY 'password';

# Run SQL query in the background and log output
mysql -u root -pmypassword -e "MY SQL QUERY" &>> query.log & disown 
