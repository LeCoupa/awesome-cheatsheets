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
# Utilities
### Reset identity column back to 1
Will make it so the next insert will have an ID of 2
```sql
DBCC CHECKIDENT ('[Table]', RESEED, 1)
```
### See what is inside a stored procedure without modifying it
sp_helptext N'[Stored Procedure Name]'

### Get the last character of a column if the letter isn't displaying
```sql
select AscII (right(sku,1) ) as lastchar 
```

### Put Stored Procedure Result Into Table
```sql
declare @table Table([Object Name] varchar(100), txt varchar(500))
insert into @table Exec '[Stored Procedure Name]' @params
select * into #temp from @table
```

### No lock - We can read the table even if something else is accessing the table
```sql
SELECT COUNT(*) FROM SalesHistory WITH(NOLOCK)
```

### Read Past - Doesn't return locked records
```sql 
SELECT COUNT(*) FROM SalesHistory WITH(ReadPast)
```

### Pivot Example
```sql
select *
from (
  select convert(varchar(2), od.AddedDate, 101) as dateadded, sum(od.qty) as totalqty, UPC from Detail od
  where year(od.AddedDate) = 2017
  group by convert(varchar(2), od.AddedDate, 101), UPC
  ) as sourcetable2
PIVOT(
MAX(totalqty)
  FOR dateadded in([01],[02],[03],[04],[05],[06],[07],[08],[09],[10],[11],[12])
) as p
```

### Query Tables
```sql
select * from sys.tables order by modify_date desc
```

### Toggle Identity Insert
```sql
SET IDENTITY_INSERT TableName OFF
SET IDENTITY_INSERT TableName ON
```

### Replace a char code with anything you want
```sql
REPLACE(value,CHAR(0233),'e')
```

### Mass replace characters
```sql
update t
set mp.field = replace(mp.feild, b.Letter, b.ReplaceWithLetter)
from table t inner join ACIIRef b on (t.field like '%' +  b.Letter + '%')
```

### See a character in a column
select AscII (right(sku,1) ) as lastchar 
