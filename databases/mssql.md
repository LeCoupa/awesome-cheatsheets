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
SET IDENTITY_INSERT TableName ON
-- insert ...
SET IDENTITY_INSERT TableName OFF
```

### Replace a char code with anything you want
```sql
REPLACE(value,CHAR(0233),'e')
```

### Mass replace characters
```sql
update t
set t.field = replace(t.field, b.Letter, b.ReplaceWithLetter)
from table t inner join ACIIRef b on (t.field like '%' +  b.Letter + '%')
```
# Data Formatting
### Return Full Month Name of a Date (ex: October)
```sql
SELECT DATENAME(MONTH, [Yourdatetimefield]) FROM TABLE
```

### Military Time
```sql
select convert(varchar(20),cast('Feb 18 2017 10:03AM' as datetime),20) -- result 01-18-2017 10:03:00
```

# Advanced #
### Search for fields in the current database
```sql
DECLARE @searchtext varchar(60); SET @searchtext = 'fieldname';

--Search Tables and Columns
SELECT TABLE_CATALOG as DatabaseName, TABLE_NAME AS  'TableName', COLUMN_NAME AS 'ColumnName'
FROM INFORMATION_SCHEMA.COLUMNS WHERE COLUMN_NAME LIKE '%' + @searchtext + '%' ORDER BY TableName, ColumnName

--Search Procedure Definitions
SELECT DB_NAME(st.database_id) AS DatabaseName, pr.name AS ProcedureName, pr.create_date as CreateDate, pr.modify_date AS LastModifiedDate,
    st.last_execution_time as LastExecutionDate, st.cached_time as CachedDate, st.execution_count as CountSinceCache,
    st.total_elapsed_time as ElapsedTimeSinceCache, object_definition(st.object_id) as Definition
FROM sys.dm_exec_procedure_stats AS st RIGHT OUTER JOIN sys.procedures AS pr ON st.object_id = pr.object_id
WHERE (st.database_id IS NOT NULL AND st.object_id IS NOT NULL AND object_definition(st.OBJECT_ID) LIKE '%' + @searchtext + '%')
ORDER BY st.execution_count DESC

--Get Stored Procedure Usage Stackup
SELECT DB_NAME(database_id) AS DatabaseName, OBJECT_NAME(object_id) AS StoredProcedure, cached_time as CachedTime, 
last_execution_time as LastExecutionTime, execution_count as ExecutionCount
FROM sys.dm_exec_procedure_stats WHERE DB_NAME(database_id) IS NOT NULL AND OBJECT_NAME(object_id) IS NOT NULL
ORDER BY execution_count DESC --ORDER BY last_execution_time DESC
```

# Row_Number() #
### Useful for updating records when you do not have a common key ###
```sql
select ROW_NUMBER () OVER ( order by order.orderid ) AS ROW#, c.clubid
from order o right outer join Club c on c.orderid = o.orderid
where getdate() between c.StartDate and c.EndDate
and c.id is null
```

