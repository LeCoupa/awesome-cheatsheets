*****************************************************************************
BASICS
*****************************************************************************

# Connect to Oracle Database
Establish a connection to the Oracle Database using SQL*Plus. Replace username, password, hostname, port, and service_name with the appropriate values.

sqlplus username/password@hostname:port/service_name


# Show All Schemas
Retrieve a list of all schemas in the Oracle Database.
 
SELECT username FROM all_users;

# Show Current Schema
Display the current schema (user) in use.
 
SHOW USER;

# Create Schema (User)
Create a new schema (user) in the Oracle Database.
 
CREATE USER username IDENTIFIED BY password;

# Switch Schema
Change the current schema for the session.
 
ALTER SESSION SET CURRENT_SCHEMA = username;

# Drop Schema (User)
Remove a schema (user) from the Oracle Database, including all owned objects.
 
DROP USER username CASCADE;

# Show Tables in Current Schema
Retrieve a list of tables in the current schema.
 
SELECT table_name FROM user_tables;

*****************************************************************************
CRUD
*****************************************************************************

# Create Table
Define and create a new table in the Oracle Database.
 
CREATE TABLE table_name (
  column1 datatype,
  column2 datatype,
  ...
);

# Insert Row
Add a new row with specified values into a table.
 
INSERT INTO table_name (column1, column2, ...) VALUES (value1, value2, ...);

# Select All Rows
Retrieve all rows from a table.
 
SELECT * FROM table_name;

# Select Specific Columns
Retrieve specific columns from a table.
 
SELECT column1, column2 FROM table_name;

# Update Row
Modify data in a table by updating a specific row.
 
UPDATE table_name SET column1 = value1 WHERE condition;

# Delete Row
Remove specific rows from a table based on a condition.
 
DELETE FROM table_name WHERE condition;

*****************************************************************************
OTHER FUNCTIONS
*****************************************************************************

# Sort Rows
Retrieve rows from a table sorted in ascending or descending order based on a specified column.
 
SELECT * FROM table_name ORDER BY column1 [ASC|DESC];

# Count Rows
Calculate the total number of rows in a table.
 
SELECT COUNT(*) FROM table_name;

# Limit Rows
Restrict the number of rows retrieved from a table.
 
SELECT * FROM table_name WHERE ROWNUM <= n;

# Join Tables
Combine rows from two or more tables based on a related column.
 
SELECT * FROM table1 JOIN table2 ON table1.column = table2.column;

# Group By
Group rows based on the values in a specified column and perform an aggregate function.
 
SELECT column, COUNT(*) FROM table_name GROUP BY column;

# Aggregate Functions
Perform aggregate calculations on a column, such as average, sum, minimum, and maximum.
 
SELECT AVG(column), SUM(column), MIN(column), MAX(column) FROM table_name;

# Subquery
Use the result of a subquery to filter data in the main query.
 
SELECT column1 FROM table_name WHERE column2 = (SELECT column2 FROM another_table WHERE condition);

# Index
Create an index on a column to improve query performance.
 
CREATE INDEX index_name ON table_name(column1);

# Drop Index
Remove an existing index from a table.
 
DROP INDEX index_name;

# Constraints
Enforce data integrity by adding a primary key constraint to a table.
 
ALTER TABLE table_name ADD CONSTRAINT constraint_name PRIMARY KEY (column1);

# Sequence
Create a sequence that generates unique values for a column.
 
CREATE SEQUENCE sequence_name START WITH 1 INCREMENT BY 1;

# View
Create a virtual table based on the result of a SELECT query.
 
CREATE VIEW view_name AS SELECT column1, column2 FROM table_name WHERE condition;

# Stored Procedure
Define and store a reusable set of SQL statements in the database.
 
CREATE OR REPLACE PROCEDURE procedure_name (parameter1 datatype, parameter2 datatype, ...) AS
BEGIN
  -- procedure body
END;
/

# Trigger
Associate a set of actions with a specific table event, such as before inserting a new row.
 
CREATE OR REPLACE TRIGGER trigger_name
BEFORE INSERT ON table_name
FOR EACH ROW
BEGIN
  -- trigger body
END;
/

# Partitioning
Divide a large table into smaller, more manageable pieces for improved performance and maintenance.
 
CREATE TABLE table_name
PARTITION BY RANGE (column_name)
(
  PARTITION part1 VALUES LESS THAN (value1),
  PARTITION part2 VALUES LESS THAN (value2),
  ...
);
