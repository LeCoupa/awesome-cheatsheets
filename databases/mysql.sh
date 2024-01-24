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
# CREATE DATABASE/TABLE
# *****************************************************************************

# Creating Database
CREATE DATABASE databasename;

# Creating Table [Table's name should be in plural form (ex. users, menus)]
CREATE TABLE tablename, (column1 datatype, column2 datatype, column3 datatype,);

# For DATA TYPES check out MySQL's official documentation:
# https://dev.mysql.com/doc/refman/8.0/en/data-types.html

# *****************************************************************************
# ACCESSING THE DATABASE and TABLES
# *****************************************************************************

# Accessing the Database
USE database_name;

# Accessing a specific table
SELECT * FROM tablename

# *****************************************************************************
# SELECT (to select any data from any column from the table)
# *****************************************************************************
SELECT * FROM tablename # To select every data included from the table
SELECT column1, column2, column3 FROM tablename # You can specify certain columns to access data from it.
SELECT column1 (AS name) from tablename # To rename a column, we use an alias (AS) and name it as we want.
