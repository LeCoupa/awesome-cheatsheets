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
# CRUD Operations
# *****************************************************************************

# create
CREATE DATABASE new_dateabase; # cerates new database

CREATE TABLE table_name (
col_name int # datatypes: int, varchar, char, binary, image, date, DateTime 
col_name PRIMARY KEY UNIQUE NOT NULL AUTOINCREMENT; # it will create col_name as primary key for table which is unique and  not null. AUTOINCREMENT start from 1 and it will increase after every insert


);

# Read 
SELECT * FROM table_name; # select all columns and rows from that table

SELECT col1, col2 FROM table_name WHERE condition; # select data which will satisfy all conditions and specific columns like col1 and col2

# Update 
update table_name SET col = xyz WHERE condition; # It will update specific columns for rows that meet given conditions.

# Delete
DELETE FROM table_name WHERE condition; # it will delete all rows that meet given condition.

DROP table_name; # delete the table from the database.

TRUNCATE table_name; # delete all rows and free up space in the database.
