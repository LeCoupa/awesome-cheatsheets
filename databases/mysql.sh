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

# *****************************************************************************
# Database and Table Operations
# *****************************************************************************

CREATE DATABASE database_name; # Create a new database
DROP DATABASE database_name; # Delete a database
CREATE TABLE table_name (column1 datatype, column2 datatype, ...); # Create a new table
DROP TABLE table_name; # Delete a table
SHOW TABLES; # Display all tables in the current database
DESCRIBE table_name; # Show the structure of a table

# *****************************************************************************
# Data Manipulation
# *****************************************************************************

INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...); # Insert data into a table
UPDATE table_name SET column1 = value1, column2 = value2, ... WHERE condition; # Update existing data in a table
DELETE FROM table_name WHERE condition; # Delete data from a table
SELECT column1, column2, ... FROM table_name WHERE condition; # Select data from a table

# *****************************************************************************
# Backup and Restore
# *****************************************************************************

mysqldump -u username -p database_name table1 table2 > file.sql # Backup specific tables
mysql -u username -p database_name < file.sql # Restore specific tables

# *****************************************************************************
# User Management and Security
# *****************************************************************************

REVOKE privilege_type ON database_name.table_name FROM 'username'@'hostname'; # Revoke privileges from a user
DROP USER 'username'@'hostname'; # Delete a user
ALTER USER 'username'@'hostname' IDENTIFIED BY 'newpassword'; # Reset a user's password

# *****************************************************************************
# Performance and Maintenance
# *****************************************************************************

OPTIMIZE TABLE table_name; # Optimize a table
ANALYZE TABLE table_name; # Analyze a table for key distribution and storage optimization
CHECK TABLE table_name; # Check a table for errors
REPAIR TABLE table_name; # Repair a corrupted table

# *****************************************************************************
# Advanced Queries
# *****************************************************************************

SELECT ... FROM table1 JOIN table2 ON table1.column = table2.column; # Perform a join operation between two tables
SELECT ... FROM (SELECT ... FROM table_name) AS subquery; # Use a subquery within another query
SELECT column, COUNT(*) FROM table_name GROUP BY column; # Group results and use aggregate functions

# *****************************************************************************
# System Information
# *****************************************************************************

SELECT VERSION(); # Show the current version of MySQL
SELECT User, Host FROM mysql.user; # List all current MySQL users

# *****************************************************************************
# Miscellaneous
# *****************************************************************************

SET GLOBAL general_log = 'ON'; # Enable query logging
SHOW FULL PROCESSLIST; # Show the last queries executed in MySQL
