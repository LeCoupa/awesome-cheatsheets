## ❄ PostgreSQL CHEAT SHEET

### 🧐 What is PostgreSQL?
`PostgreSQL/Postgres` is a free open-source relational database management system(RDBMS) emphasizing extensibility and SQL compliance. It was originally named `POSTGRES`, referring to it's origins as a successor to the Ingres database developed at the University of California, Berkeley.

### 🤔 What is the use of PostgreSQL?
It is a highly stable database management  system, backend by more than 20 years of community development which has contributed to it's high levels of resilience, integrity, and correctness. PostgreSQL is used as the primary data store or data warehouse for many web, mobile, geospatial, and analytics applications.

## 📚 PostgreSQL Table of Contents 

### 1️⃣ QUERYING DATA FROM A TABLE
<details>
<summary>View Queries</summary>

```
SELECT c1, c2 FROM t;  
```
Query data in columns c1, c2 from a table
<hr>

```
SELECT * FROM t;
```
Query all rows and columns from a table
<hr>

```
SELECT c1, c2 FROM t
WHERE condition;
```
Query data and filter rows with a condition
<hr>

```
SELECT DISTINCT c1 FROM t
WHERE condition;
```
Query distinct rows from a table
<hr>

```
SELECT c1, c2 
FROM t
ORDER BY c1 ASC[DESC];
```
Sort the result set in ascending or descending order
<hr>

```
SELECT c1, c2 
FROM t
ORDER BY c1
LIMIT n OFFSET offset;
```
Skip offset of rows and return the next n rows
<hr>

```
SELECT c1, aggregate(c2)
FROM t
GROUP BY c1;
```
Group rows using in aggregate function
<hr>

```
SELECT c1, aggregate(c2)
FROM t
GROUP BY c1
HAVING condition;
```
Filter groups using HAVING clause
</details>

### 2️⃣ QUERYING FROM MULTIPLE TABLES
<details>
<summary>View Queries </summary>

```
SELECT c1, c2 
FROM t1
INNER JOIN t2 ON condition;
```
Inner join t1 and t2
<hr>

```
SELECT c1, c2
FROM t1
LEFT JOIN t2 ON condition;
```
Left join t1 and t1
<hr>

```
SELECT c1, c2
FROM t1
RIGHT JOIN t2 ON condition;
```
Right join t1 and t2
<hr>

```
SELECT c1, c2
FROM t1
FULL OUTER JOIN t2 ON condition;
```
Perform full outer join
<hr>

```
SELECT c1, c2
FROM t1
CROSS JOIN t2;
```
Produce a Cartesian product of rows in tables
<hr>

```
SELECT c1, c2
FROM t1, t2;
```
Another way to perform cross join
<hr>

```
SELECT c1, c2
FROM t1 A
INNER JOIN t2 B ON condition;
```
Join t1 to itself using INNER JOIN clause

</details>

### 3️⃣ USING SQL OPERATORS
<details>
<summary>View Queries </summary>

```
SELECT c1, c2 
FROM t1
UNION [ALL]
SELECT c1, c2 FROM t2;
```
Combine rows from two queries
<hr>

```
SELECT c1, c2 FROM t1
INTERSECT
SELECT c1, c2 FROM t2;
```
Return the intersection of two queries
<hr>

```
SELECT c1, c2 FROM t1
EXCEPT 
SELECT c1,c2 FROM t2;
```
Subtract a result set from another result set
<hr>

```
SELECT c1, c2 FROM t
WHERE c1[NOT] LIKE pattern;
```
Query rows using pattern matching %, _
<hr>

```
SELECT c1, c2 FROM t
WHERE c1[NOT] IN value_list;
```
Query rows in a list
<hr>

```
SELECT c1, c2 FROM t
WHERE c1 BETWEEN low_value AND high_value;
```
Query rows between two values
<hr>

```
SELECT c1, c2 FROM t
WHERE c1 IS [NOT]NULL;
```
Check if values in a table is NULL or not
</details>

### 4️⃣ MANAGING TABLES
<details>
<summary>View Queries</summary>

```
CREATE TABLE(
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    price NUMERIC(10,2) DEFAULT 0
);
```
Create a new table with three columns
<hr>

```
DROP TABLE t CASCADE;
```
Delete the table from the database
<hr>

```
ALTER TABLE t ADD column;
```
Add a new column to the table
<hr>

```
ALTER TABLE t DROP COLUMN c;
```
Drop column c from the table
<hr>

```
ALTER TABLE t ADD contraint;
```
Add a constraint
<hr>

```
ALTER TABLE t DROP constraint;
```
Drop a constraint
<hr>

```
ALTER TABLE t1 RENAME TO t2;
```
Rename a table from t1 to t2
<hr>

```
ALTER TABLE t1 RENAME c1 to c2;
```
Rename column c1 to c2
<hr>

```
TRUNCATE TABLE t CASCADE;
```
Remove all data in a table
</details>

### 5️⃣ USING SQL CONSTRAINTS
<details>
<summary>View Queries</summary>

```
CREATE TABLE t(
    c1 INT, c2 INT, c3 VARCHAR,
    PRIMARY KEY(c1, c2)
);
```
Set c1 and c2 as a primary key
<hr>

```
CREATE TABLE t1(
    c1 SERIAL PRIMARY KEY,
    c2 INT,
    FOREIGN KEY (c2) REFERENCES ts(c2)
);
```
Set c2 column as a foreign key
<hr>

```
CREATE TABLE t(
    c1 INT, c1 INT,
    UNIQUE(c2, c3)
);
```
Make the values in c1 and c2 unique
<hr>

```
CREATE TABLE t(
    c1 INT, c INT,
    CHECK(c1 > 0 AND c1 >= c2)
);
```
Ensure c1 > 0 and values in c1 >= c2
<hr>

```
CREATE TABLE t(
    c1 SERIAL PRIMARY KEY,
    c2 VARCHAR NOT NULL
);
```
Set values in c2 column not null
</details>

### 6️⃣ MODIFIYING DATA
<details>
<summary>View Queries</summary>

```
INSERT INTO t(column_list)
VALUES(value_list);
```
Insert one row into a table
<hr>

```
INSERT INTO t(column_list)
VALUES(value_list),
        (value_list), ....;
```
Insert multiple rows into a table
<hr>

```
INSERT INTO t1(column_list)
SELECT column_list
FROM t2;
```
Insert rows from t2 into t1
<hr>

```
UPDATE t
SET c1 = new_value;
```
Update new value in the column c1 for all rows
<hr>

```
UPDATE t
SET c1 = new_value,
    c2 = new_value
WHERE condition;
```
Update values in the column c1, c2 that match the condition
<hr>

```
DELETE FROM t;
```
Delete all data in a table
<hr>

```
DELETE FROM t 
WHERE condition;
```
Delete subset of rows in a table
</details>

### 7️⃣ MANAGING VIEWS
<details>
<summary>View Queries</summary>

```
CREATE VIEW v(c1, c2)
AS 
SELECT c1, c2
FROM t;
```
Create a new view that consists of c1 and c2
<hr>

```
CREATE VIEW v(c1, c2)
AS
SELECT c1, c2
FROM t
WITH[CASCADED | LOCAL]CHECK OPTION;
```
Create a new view with check option
<hr>

```
CREATE RECURSIVE VIEW v
AS
select-statement --anchor part
UNION[ALL]
select-statement; --recursive part
```
Create a recursive view
<hr>

```
CREATE TEMPORARY VIEW v
AS
SELECT c1, c2
FROM t;
```
Create a temporary view
<hr>

```
DROP VIEW view_name;
```
Delete a view
</details>


### 8️⃣ MANAGING INDEXES
<details>
<summary>View Queries</summary>

```
CREATE INDEX inx_name
ON t(c1, c2);
```
Create an index on c1 and c2 of the table t
<hr>

```
CREATE UNIQUE INDEX inx_name
ON t(c3, c4);
```
Create unique index on c3, c4 of the table t
<hr>

```
DROP INDEX idx_name;
```
Drop an index
</details>


### 9️⃣ MANAGING TRIGGERS
<details>
<summary>View Queries</summary>

```
CREATE OR MODIFY TRIGGER trigger_name
WHEN EVENT
ON table_name TRIGGER_TYPE
EXECUTE stored_procedure;
```
Create or modify a trigger
<hr>

```
WHEN
```
- BEFORE - invoke before the event occurs
- AFTER - invoke after the event occurs
<hr>

```
EVENT
```
- INSERT - invoke for INSERT
- UPDATE - invoke for UPDATE
- DELETE - invoke for DELETE
<hr>

```
TRIGGER_TYPE
```
- FOR EACH ROW
- FOR EACH STATEMENT
<hr>

```
CREATE TRIGGER before_insert_person
BEFORE  INSERT
ON person FOR EACH ROW
EXECUTE stored_procedure;
```
Create a trigger invoked before a new row is inserted into the person table
<hr>

```
DROP TRIGGER trigger_name
```
Delete a specific trigger
</details>


### 🔟 SQL AGGREGATE FUNCTIONS
<details>
<summary>View Queries</summary>

- AVG - returns the average of a list
- COUNT - returns the number of elements of a list
- SUM - returns the total of a list
- MAX - returns the maximum value in a list
- MIN - returns the minimum value in a list
</details>
