# *****************************************************************************
# BASICS
# *****************************************************************************

mysqldump -h hostname -u username -p database_name -P port > file.sql # Export database
mysql -u username -p database_name < file.sql                         # Import database
