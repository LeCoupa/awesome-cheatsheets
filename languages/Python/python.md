# <div style='text-align:center'><span style='color:blue;font-family:georgia;font-size:2em'>Python</span>
<p align='center'>
<img src='https://newhorizons.com.sg/wp-content/uploads/2019/04/python.png'>
</p>

****

* Python is an interpreted, high-level and general-purpose, dynamically typed programming language

* It is also Object oriented, modular oriented and a scripting language.

* In Python, everything is considered as an Object.

* A python file has an extension of .py

* Python follows Indentation to separate code blocks instead of flower brackets({}).

* We can run a python file by the following command in cmd(Windows) or shell(mac/linux).

    `python <filename.py>`

#### By default, the python doesn't require any imports to run a python file.

## <span style='color:gold;font-family:georgia;font-size:1.5em'>Create and execute a program

1. Open up a terminal/cmd
1. Create the program: nano/cat > nameProgram.py
1. Write the program and save it
1. python nameProgram.py

<br>

## <span style='color:gold;font-family:georgia;font-size:1.5em'>Basic Datatypes

| Data Type | Description |
| --------- | ----------- |
| int | Integer values [0, 1, -2, 3] |
| float | Floating point values [0.1, 4.532, -5.092] |
| char | Characters [a, b, @, !, `] |
| str | Strings [abc, AbC, A@B, sd!, `asa] |
| bool | Boolean Values [True, False] |
| char | Characters [a, b, @, !, `] |
| complex | Complex numbers [2+3j, 4-1j] |

<br>

## <span style='color:gold;font-family:georgia;font-size:1.5em'>Keywords
<br>

| Keyword | Description |
| --------- | ----------- |
| break 	| used to exit loop and used to exit|
| char	  |   basic declaration of a type character |
| const	  |   prefix declaration meaning variable can not be changed|
| continue |	go to bottom of loop in for, while loops|
| class |	to define a class|
| def |	to define a function|
| elif |	shortcut for (else if) used in else if ladder |
| else	  |  executable statement, part of "if" structure |
| float	  |  basic declaration of floating point|
| for	  |    executable statement, for loop|
| from	  |    executable statement, used to import only specific objects from a package|
| if	  |    executable statement|
| import |	to import modules|
|pass| keyword to specify noting is happening in the codeblock, generally used in classes|
|return	 | executable statement with or without a value|
|while| executable statement, while loop|
<br>

## <span style='color:gold;font-family:georgia;font-size:1.5em'>Identifiers

* Identifiers are the names given to diffrent parts of program like variables,objects,classes,functions,lists etc.
* Identifiers must be a non-keyword word with no spaces.
* Identifiers can begin with an underscore( _ ) ,alphabets ,but not with numbers
* They may contain underscore ,numbers ,aphabets.
* Python is case sensitive , therefore treats upper and lower case identifiers diffrently
## <span style='color:gold;font-family:georgia;font-size:1.5em'>Operators

<br>

| Operator | Description |
|-|-|
|  ( )	|  grouping parenthesis, function call, tuple declaration |
|  [ ]	|  array indexing, also declaring lists etc.|
|  !	|    relational not, complement, ! a  yields true or false |
|  ~   | 	bitwise not, ones complement, ~a |
| \-   |	unary minus, - a |
|  \+   | 	unary plus,  + a |
|  \*   |	multiply, a * b |
|  /   	| divide, a / b (returns floating point result)|
|  %    |	modulo, a % b |
|  \+   | 	add, a + b |
| \-   | 	subtract, a - b |
| <<   | shift left,  left operand is shifted left by right operand bits |
| \>>   |	shift right, left operand is shifted right by right operand bits|
 | <    |	less than, result is true or false,  a %lt; b
| <=   |	less than or equal, result is true or false,  a <= b
| \>    |	greater than, result is true or false,  a > b
| \>=   |	greater than or equal, result is true or false, a >= b
|  ==   |	equal, result is true or false,  a == b
| !=  | 	not equal, result is true or false,  a != b
|  & | bitwise and,  a & b
| ^ | bitwise exclusive or XOR,  a ^ b
| \| | bitwise or,  a | b
|  &&, and | relational and, result is true or false,  a < b && c >= d
| \|\|, or | relational or, result is true or false,  a < b \|\| c >= d |
| =  | store or assignment |
|  += | add and store |
|  -=  | subtract and store |
|  *= | multiply and store |
|  /= | divide and store|
|  %= | modulo and store|
| <<= | shift left and store|
|  \>>= | shift right and store|
|  &= | bitwise and and store|
|  ^= | bitwise exclusive or and store|
|  \|= | bitwise or and store|
|  , | separator as in   ( y=x,z=++x )|
<br>
## <span style='color:gold;font-family:georgia;font-size:1.5em'>Priority Order Of Operators
<br>

|Operator(In precedence order)|
|-|
|()|
|**|
|+, - ,~|
|* ,/ ,// ,%|
|+ ,-|
|<< ,>>|
|&|
|^|
| \| |
|==, !=, >, >=, < ,<=, is ,is not ,in ,not in|
|not|
|and|
|or|

<br>

## <span style='color:gold;font-family:georgia;font-size:1.5em'>Scope Of Variables

The part of a program where a variable is accessible is called its scope. 
**LEGB Rule** is the rule that descides the scope of variables. <br>
**L**=Local <br>
**E**=Enclosed<br>
**G**=Global<br>
**B**=Built-in
<br>

## <span style='color:gold;font-family:georgia;font-size:1.5em'>Basic Data Structures

### <span style='color:gold;font-family:georgia;font-size:1.5em'>List

- List is a collection which is ordered and changeable. Allows duplicate members.


- Lists are created using square brackets:

```py
thislist = ["apple", "banana", "cherry"] 
```

- List items are ordered, changeable, and allow duplicate values.

- List items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.

- List items have one more kind of index in which last item has been assigned index `[-1]` , last second item `[-2]` ,and so on.

- The list is changeable, meaning that we can change, add, and remove items in a list after it has been created.

- To determine how many items a list has, use the `len()` function.

- A list can contain different data types:
```py
list1 = ["abc", 34, True, 40, "male"]
```
- It is also possible to use the list() constructor when creating a new list
```py
thislist = list(("apple", "banana", "cherry"))  # note the double round-brackets
```
- It is also possible to slice a list in following way:
  
```py
lst=[1,2,3,4,5,6,7,8]
sliced_lst=lst[1:6:2]#Syntax: lst[start_index,stop_index,step]
#sliced_lst is now [2,5,6]
```
- Here stop_index is excluded while start_index is included

<br>

[Click to know list methods](list_methods.md)

### <span style='color:gold;font-family:georgia;font-size:1.5em'>Tuple

- Tuple is a collection which is ordered and unchangeable. Allows duplicate members.
- A tuple is a collection which is ordered and unchangeable.
- Tuples are written with round brackets.
```py
thistuple = ("apple", "banana", "cherry")
```
- Tuple items are ordered, unchangeable, and allow duplicate values.
- Tuple items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.
- When we say that tuples are ordered, it means that the items have a defined order, and that order will not change.

- Tuples are unchangeable, meaning that we cannot change, add or remove items after the tuple has been created.
- Since tuple are indexed, tuples can have items with the same value:
- Tuples allow duplicate values.

```py
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
```
- Methods count and index which are used for lists are also applicable for tuples.
- To determine how many items a tuple has, use the  `len()`function:
```py
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))
```
- To create a tuple with only one item, you have to add a comma after the item, otherwise Python will not recognize it as a tuple.
```py
thistuple = ("apple",)
print(type(thistuple))

#NOT a tuple
thistuple = ("apple")
print(type(thistuple))
```
- It is also possible to use the tuple() constructor to make a tuple.
```py

thistuple = tuple(("apple", "banana", "cherry")) # note the double round-brackets
print(thistuple)
```

### <span style='color:gold;font-family:georgia;font-size:1.5em'>Set
- Set is a collection which is unordered and unindexed. No duplicate members.
- A set is a collection which is both unordered and unindexed.
```py
thisset = {"apple", "banana", "cherry"}
```
- Set items are unordered, unchangeable, and do not allow duplicate values.
- Unordered means that the items in a set do not have a defined order.

- Set items can appear in a different order every time you use them, and cannot be referred to by index or key.

- Sets are unchangeable, meaning that we cannot change the items after the set has been created.
- Duplicate values will be ignored.
- To determine how many items a set has, use the `len()` method.
```py
thisset = {"apple", "banana", "cherry"}

print(len(thisset))
```
- Set items can be of any data type:
```py
set1 = {"apple", "banana", "cherry"}
set2 = {1, 5, 7, 9, 3}
set3 = {True, False, False}
set4 = {"abc", 34, True, 40, "male"}
```
- It is also possible to use the `set()` constructor to make a set.
```py
thisset = set(("apple", "banana", "cherry")) # note the double round-brackets
```
### <span style='color:gold;font-family:georgia;font-size:1.5em'>Dictionary
- Dictionary is a collection which is unordered and changeable. No duplicate members.
- Dictionaries are used to store data values in key:value pairs.
- Dictionaries are written with curly brackets, and have keys and values:
```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
```
- Dictionary items are presented in key:value pairs, and can be referred to by using the key name.
```py
thisdict = {
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
print(thisdict["brand"])
```
- Dictionaries are changeable, meaning that we can change, add or remove items after the dictionary has been created.
- Dictionaries cannot have two items with the same key.
- Duplicate values will overwrite existing values.
- To determine how many items a dictionary has, use the `len()` function.
```py
print(len(thisdict))
```
- The values in dictionary items can be of any data type
```py
thisdict = {
  "brand": "Ford",
  "electric": False,
  "year": 1964,
  "colors": ["red", "white", "blue"]
}
```
[Click to know about dictionary methods](dictionary_methods.md)

## <span style='color:gold;font-family:georgia;font-size:1.5em'>Conditional branching

```py
    if condition:
        pass
    elif condition2:
        pass
    else:
        pass
```
## <span style='color:gold;font-family:georgia;font-size:1.5em'>Loops

 Python has two primitive loop commands:
1. while loops
2. for loops

### <span style='color:gold;font-family:georgia;font-size:1.5em'>While loop
- With the `while` loop we can execute a set of statements as long as a condition is true.
- Example: Print i as long as i is less than 6
```py
i = 1
while i < 6:
  print(i)
  i += 1
```
- The while loop requires relevant variables to be ready, in this example we need to define an indexing variable, i, which we set to 1.
- With the `break` statement we can stop the loop even if the while condition is true
- With the continue statement we can stop the current iteration, and continue with the next.

- With the else statement we can run a block of code once when the condition no longer is true.

### <span style='color:gold;font-family:georgia;font-size:1.5em'>For loop
- A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).

- This is less like the for keyword in other programming languages, and works more like an iterator method as found in other object-orientated programming languages.

- With the for loop we can execute a set of statements, once for each item in a list, tuple, set etc.
```py
fruits = ["apple", "banana", "cherry"]
for x in fruits:
  print(x)
```
- The for loop does not require an indexing variable to set beforehand.
- To loop through a set of code a specified number of times, we can use the range() function.
- The range() function returns a sequence of numbers, starting from 0 by default, and increments by 1 (by default), and ends at a specified number.
- The range() function defaults to increment the sequence by 1, however it is possible to specify the increment value by adding a third parameter: range(2, 30, 3).
- The else keyword in a for loop specifies a block of code to be executed when the loop is finished.
A nested loop is a loop inside a loop.

- The "inner loop" will be executed one time for each iteration of the "outer loop":

```py
adj = ["red", "big", "tasty"]
fruits = ["apple", "banana", "cherry"]

for x in adj:
  for y in fruits:
    print(x, y)
```
- for loops cannot be empty, but if you for some reason have a for loop with no content, put in the pass statement to avoid getting an error.

```py
for x in [0, 1, 2]:
  pass
```
## <span style='color:gold;font-family:georgia;font-size:1.5em'>Functions
* A function is a block of organized, reusable code that is used to perform a single, related action.
### <span style='color:gold;font-family:georgia;font-size:1.5em'>Function definition
```py
def function_name():

  """function docs"""

  return
```
* Values received in function definition are called parameters/formal parameters/formal arguments.
* **In a function header ,any parameter cannot have a default value unless all parameters appearing on its right have their default values.**
* Fuctions that returns something are called non void/ fruitful functions.
* Functions that do not return any value are called void/ non-fruitful functions.
* Function docs can be read through following code:
  
```py
print(functio_name__doc__)#2 underscores before and after doc
```
* Variables that are in function definition are in local scope , but can still be changed in global scope if the mutable type variables (like list) are not assigned a completely diffrent variable/datatype.

```py
lst=[1,2,3]
def example():
  lst.append(4)
example()
print(lst)
#Though lst was modified in local scope , still on printing lst ,output is [1,2,3,4]
```

### <span style='color:gold;font-family:georgia;font-size:1.5em'>Function call

```py 
function_name()
```

* We need not to specify the return type of the function.
* Functions by default return `None` 
* We can return any number of items of any datatype.

## <span style='color:gold;font-family:georgia;font-size:1.5em'>File Handling

Files are most crucial elements in running of programs because they helps in storing information permanently.



### <span style='color:gold;font-family:georgia;font-size:1.5em'>Modes Of Opening Files

<br>

|Mode|Description|
|-|-|
|r|Opens a file for reading only. The file pointer is placed at the beginning of the file. This is the default mode.|
|rb|Opens a file for reading only in binary format. The file pointer is placed at the beginning of the file. This is the default mode.|
|r+|Opens a file for both reading and writing. The file pointer placed at the beginning of the file.|
|rb+|Opens a file for both reading and writing in binary format. The file pointer placed at the beginning of the file.|
|w|Opens a file for writing only. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing.|
|wb|Opens a file for writing only in binary format. Overwrites the file if the file exists. If the file does not exist, creates a new file for writing.|
|w+|Opens a file for both writing and reading. Overwrites the existing file if the file exists. If the file does not exist, creates a new file for reading and writing.|
|wb+|Opens a file for both writing and reading in binary format. Overwrites the existing file if the file exists. If the file does not exist, creates a new file for reading and writing.|
|a|Opens a file for appending. The file pointer is at the end of the file if the file exists. That is, the file is in the append mode. If the file does not exist, it creates a new file for writing.|
|ab|Opens a file for appending in binary format. The file pointer is at the end of the file if the file exists. That is, the file is in the append mode. If the file does not exist, it creates a new file for writing.|
|a+|Opens a file for both appending and reading. The file pointer is at the end of the file if the file exists. The file opens in the append mode. If the file does not exist, it creates a new file for reading and writing.|
|ab+|Opens a file for both appending and reading in binary format. The file pointer is at the end of the file if the file exists. The file opens in the append mode. If the file does not exist, it creates a new file for reading and writing.|

<br>

### <span style='color:gold;font-family:georgia;font-size:1.5em'>Opening Files

Two ways are there in order to open files in python:

<br>

#### <span style='color:gold;font-family:georgia;font-size:1.5em'>Using With Open Method
Syntax:
```py
with open(file_name,mode):
  #operations
```
The advantage of using this method of opening file is that we do not need to close file explicitly.

<br>

#### <span style='color:gold;font-family:georgia;font-size:1.5em'>Using Open Method
Syntax:
```py
file_handle=open(file_name,mode)
#Code
file_handle.close()
```
### <span style='color:gold;font-family:georgia;font-size:1.5em'>Text Files

In this type of file, Each line of text is terminated with a special character called EOL (End of Line), which is the new line character (‘\n’) in python by default.

#### <span style='color:gold;font-family:georgia;font-size:1.5em'>Writing Into A Text File

Syntax:

```py
file_handle=open(file_name,mode)
file_handle.write(text_to_be_written)#Text shoub always be a string
file_handle.close()
```
Suppose if we have a list and we want to put all its elements into a file , then use writelines:

```py
file_handle=open(file_name,mode)
file_handle.writelines(list)
file_handle.close()
```

#### <span style='color:gold;font-family:georgia;font-size:1.5em'>Reading A Text File

* ##### <span style='color:gold;font-family:georgia;font-size:1.5em'>Read

This method enables us to read all contents of a file if no parameters is given. If any parameter (which is an integer) is given ,then that number of bytes are read.

Syntax
````py
file_handle=open(file_name,mode)
read_content=file_handle.read()
file_handle.close()
````
* ##### <span style='color:gold;font-family:georgia;font-size:1.5em'>Readline

Reads a line of the file and returns in form of a string.For specified n, reads at most n bytes. However, does not reads more than one line, even if n exceeds the length of the line.

Syntax
```py
file_handle=open(file_name,mode)
read_content=file_handle.readline()
file_handle.close()
````
* ##### <span style='color:gold;font-family:georgia;font-size:1.5em'>Readlines

Reads all the lines and return them as each line a string element in a list.

Syntax
```py
file_handle=open(file_name,mode)
read_content=file_handle.readlines()
file_handle.close()
```
**Note**: ‘\n’ is treated as a special character of two bytes

<br>

### <span style='color:gold;font-family:georgia;font-size:1.5em'>CSV Files

A csv fle is simply a kind of file wherein data is stored with commas separating them. CSV stands for Comma Separated Files.

<br>

#### <span style='color:gold;font-family:georgia;font-size:1.5em'>Writing Into CSV File

Syntax:
```py
import csv
file_handle=open(file_name,mode,newline='')
writer_object=csv.writer(file_handle)
writer.writerow([items])
file_handle.close()
```
To write contents of 2 dimensional list ,use writerows:-<br>
Syntax
```py
import csv
file_handle=open(file_name,mode,newline='')
writer_object=csv.writer(file_handle)
writer.writerows([[],[],[],,,])
file_handle.close()
```

#### <span style='color:gold;font-family:georgia;font-size:1.5em'>Reading A CSV File

Syntax:

```py
import csv
with open(file_handle, 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
```

### <span style='color:gold;font-family:georgia;font-size:1.5em'>Binary Files

#### <span style='color:gold;font-family:georgia;font-size:1.5em'>Writing Binary Files

Syntax:
```py
import pickle
file_handle=open(file_name,mode)#Mode will be like wb ,ab so on
pickle.dump(list,file_handle)
file_handle.close()
```

#### <span style='color:gold;font-family:georgia;font-size:1.5em'>Reading Binary Files

Syntax:
```py
import pickle
file_handle=open(file_name,mode)
file_content=pickle.load(file_handle)
for i in file_content:
  print(i)
file_handle.close()
```