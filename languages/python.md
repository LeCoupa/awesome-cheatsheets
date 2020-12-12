# Python

* Python is an interpreted, high-level and general-purpose, dynamically typed programming language

* It is also Object oriented, modular oriented and a scripting language.

* In Python, everything is considered as an Object.

* A python file has an extension of .py

* Python follows Indentation to separate code blocks instead of flower brackets({}).

* We can run a python file by the following command in cmd(Windows) or shell(mac/linux).

    `python <filename.py>`

#### By default, the python doesn't require any imports to run a python file.

## Create and execute a program

1. Open up a terminal/cmd
1. Create the program: nano/cat > nameProgram.py
1. Write the program and save it
1. python nameProgram.py

<br>

### Basic Datatypes

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

## Keywords
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

## Operators

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
|  /   	| divide, a / b |
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

### Basic Data Structures

### List

- List is a collection which is ordered and changeable. Allows duplicate members.


- Lists are created using square brackets:

```py
thislist = ["apple", "banana", "cherry"] 
```

- List items are ordered, changeable, and allow duplicate values.

- List items are indexed, the first item has index `[0]`, the second item has index `[1]` etc.

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
### Tuple
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
- Tuples allow duplicate values:
```py
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
```
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

### Set
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
### Dictionary
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

### Conditional branching

```py
    if condition:
        pass
    elif condition2:
        pass
    else:
        pass
```
### Loops

 Python has two primitive loop commands:
1. while loops
2. for loops

#### While loop
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

#### For loop
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

### Function definition
```py
def function_name():
    return
```
### Function call

```py 
function_name()
```

* We need not to specify the return type of the function.
* Functions by default return `None` 
* We can return any datatype.
