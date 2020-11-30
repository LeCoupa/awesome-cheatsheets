# *****************************************************************************
# BASICS
# *****************************************************************************

mysqldump -h hostname -u username -p database_name -P port > file.sql # Export database
mysql -u username -p database_name < file.sql                         # Import database

SHOW PROCESSLIST; # Show you any queries that are currently running or in the queue to run

# *****************************************************************************
# Users and Privileges
# *****************************************************************************

# Replace 'host' with '%' to indicate any host

CREATE USER 'user'@'host'; # Create user
DROP USER 'user'@'host'; # Remove user.

GRANT ALL PRIVILEGES ON base.* TO 'user'@'host' IDENTIFIED BY 'password'; # Grant access to database using password
GRANT SELECT, INSERT, DELETE ON base.* TO 'user'@'host' IDENTIFIED BY 'password'; # Grant specific privileges to database using password
GRANT ALL PRIVILEGES ON base.* TO 'user'@'host' WITH GRANT OPTION; # Grant **all** privileges on database

REVOKE ALL PRIVILEGES ON base.* FROM 'user'@'host'; # Remove privileges on database
REVOKE ALL PRIVILEGES, GRANT OPTION FROM 'user'@'host'; # Remove **all** privileges on database

FLUSH PRIVILEGES; # Use **only** if you modify grant tables directly using statements like INSERT, UPDATE or DELETE.
