# Alter Table Statements #
### Remove auto increment ##
```sql
CREATE TABLE [table](col1 INT IDENTITY (1,1) NOT NULL, col2 VARCHAR(10) NULL); 
ALTER TABLE [table] ADD col3 INT NULL; 
UPDATE [table] SET col3 = col1; 
ALTER TABLE [table] DROP COLUMN col1; 
```
### Add pkey to table
```sql
-- Make sure your table has the column you want to set the pkey to is an int
ALTER TABLE [Table] ALTER COLUMN [Column] INTEGER NOT NULL
-- will add pkey to columnname1 and columnname2
ALTER TABLE [Table] ADD PRIMARY KEY(Columnname1, columnname2); 
```
