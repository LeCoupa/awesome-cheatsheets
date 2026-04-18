# *****************************************************************************
# BASICS
# *****************************************************************************
pg_dump -h hostname -U username -p port dbname > file.sql           # Export database
psql -h hostname -U username -d dbname -f file.sql                 # Import database

psql -U username -c "SELECT pid, query, state FROM pg_stat_activity;" 
# Show running queries

psql -U username -c "SHOW max_connections;"                        # Show max connections
psql -U username -c "SHOW superuser_reserved_connections;"         # Reserved connections for superuser
ALTER SYSTEM SET max_connections = 150;                            # Change max connections (requires restart)

psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE dbname TO username;" 
# Grant all privileges to user

psql -U postgres -c "CREATE ROLE newuser LOGIN PASSWORD 'password';" 
# Create user (role with login)

# *****************************************************************************
# Database and Table Operations
# *****************************************************************************
CREATE DATABASE database_name;                        -- Create database
DROP DATABASE database_name;                          -- Delete database

CREATE TABLE table_name (
    column1 datatype,
    column2 datatype
);                                                     -- Create table

DROP TABLE table_name;                                -- Delete table
\d                                                    -- Show tables in current DB (psql)
\d table_name                                         -- Describe table structure

# *****************************************************************************
# Data Manipulation
# *****************************************************************************
INSERT INTO table_name (column1, column2) VALUES (value1, value2);   -- Insert data

UPDATE table_name SET column1 = value WHERE condition;               -- Update records

DELETE FROM table_name WHERE condition;                              -- Delete data

SELECT column1, column2 FROM table_name WHERE condition;             -- Select data

# *****************************************************************************
Backup and Restore
# *****************************************************************************
pg_dump -U username -t table1 -t table2 dbname > tables.sql     # Backup specific tables
psql -U username -d dbname -f tables.sql                        # Restore specific tables

# *****************************************************************************
# User Management and Security
# *****************************************************************************
REVOKE privilege ON table_name FROM username;                  -- Revoke privileges

DROP ROLE username;                                            -- Drop user/role

ALTER ROLE username WITH PASSWORD 'newpassword';               -- Change user password

# *****************************************************************************
# Performance and Maintenance
# *****************************************************************************
VACUUM table_name;                                             -- Clean dead tuples
VACUUM FULL table_name;                                        -- Heavy vacuum (locks table)

ANALYZE table_name;                                            -- Update stats

REINDEX TABLE table_name;                                      -- Rebuild indexes

CHECKPOINT;                                                    -- Force checkpoint

# *****************************************************************************
# Advanced Queries
# *****************************************************************************
SELECT * FROM table1 
JOIN table2 ON table1.column = table2.column;                  -- JOIN

SELECT * FROM (
    SELECT column FROM table_name
) AS sub;                                                      -- Subquery

SELECT column, COUNT(*) 
FROM table_name 
GROUP BY column;                                               -- Aggregation

# *****************************************************************************
# System Information
# *****************************************************************************
SELECT version();                                              -- PostgreSQL version
SELECT usename, usesuper FROM pg_user;                         -- List users

# *****************************************************************************
# Miscellaneous
# *****************************************************************************
SELECT * FROM pg_stat_activity;                                -- Show active queries

SET log_statement = 'all';                                     -- Enable query logging (session only)

SHOW data_directory;                                            -- Show data directory
