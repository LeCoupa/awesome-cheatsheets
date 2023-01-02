# *Lua Cheatsheet*

Lua is a lightweight, high-level, multi-paradigm programming language


### This is how you do hello world in lua:
```lua
print("Hello World")
```

## Datatypes in Lua
There are eight basic types in Lua: nil, boolean, number, string, function, userdata, thread, and table. 

| Data Type | Description |
| --------- | ----------- |
| number | In lua you dont have to declare if it is an int or a float|
| string | Used to represent a series of charactars |
| boolean | Boolean Values [True, False]|
| table | Can be used to represent ordinary arrays, lists, symbol tables, sets, records, graphs, trees, etc  |
| userdata | I used to allow arbitrary C data to be stored in Lua variables.  |
| thread | The type thread represents independent threads of execution and it is used to implement coroutines |
| nil | Main purpose is to represent the absence of a useful value  |


## Variable declarations in Lua
Variables in Lua are by default global
```lua
-- Global Variable (Oh yeah btw this is how you do comments)
x = 20

-- This is how you set it to local
local x = 20
```

## Operators in Lua
| Operator Type | Description |
| --------- | ----------- |
| Arithmic Operator | + , - , * , / , %, -|
| Comparision Operator | < , > , <= , >=, ~=, == |
| Logical Operator | and , or, not]|
| Misc | .. , #  |

There are no incrament Operator like ++ or -- in lua

## If statements in Lua
If:
```lua
if condition then
--code
end
```
Elif:
```lua
if conditional then
   --code
elseif conditional then
    --code
else
    --code
end
```

## Loops in Lua

While:
```lua
while(condition)
do
--code
end
```


Repeat-Until:
```lua
repeat
   --code
until( condition )
```


For:
```lua
for init,max/min value, increment
do
   --code
end
```

## Functions

```lua
function function_name( argument1, argument2, argument3........, argumentn)
--code
return --with commas seprated
end
```


... also exists if you are not sure how many arguments you need 
```lua
function example(x,y ...)
	print(x, y, ...)
end

example(2,5,21221,5,123123,55)
```


## Tables

Tables in Lua are very simple
unlike in other languages lua only has one array type


Example:
```lua
exaple = {5,"Sussy", true}
```


You can also insert values into a table with:
```lua
table.insert(example, 100)
```
