# NumPy Cheat Sheet

[NumPy](http://www.numpy.org) is the fundamental package for scientific computing with Python.

### Installation
If you don't already have it **installed**, you can do so using Pip or Anaconda:
```
$ pip install numpy
```
or
```
$ conda install numpy
```

This cheat sheet acts as a intro to Python for data science. 

## Index
1. [Basics](#basics)
    - [Placeholders](#place)
    - [Examples](#ex)
2. [Arrays](#arrays)
    - [Properties](#props)
    - [Copying/Sorting](#gops)
      * [Examples](#array-example)
    - [Array Manipulation](#man)
      * [Adding/Removing Elements](#addrem)
        + [Examples](#array-elements-examples)
      * [Combining Arrays](#comb)
        + [Examples](#array-combine-examples)
      * [Splitting Arrays](#split)
        + [Examples](#array-split-examples)
      * [Shaping](#shape)
      * [Misc](#misc)
3. [Mathematics](#maths)
    - [Arithmetic Operations](#ops)
      * [Examples](#operations-examples)
    - [Comparison](#comparison)
      * [Examples](#comparison-example)
    - [Basic Statistics](#stats)
      * [Examples](#stats-examples)
    - [More](#more)
4. [Slicing and Subsetting](#ss)
    - [Examples](#exp)
5. [Tricks](#tricks)
6. [Credits](#creds)

</br>

## Basics <a name="basics"></a>

One of the most commonly used functions of NumPy are *NumPy arrays*: The essential difference between *lists* and *NumPy arrays* is functionality and speed. *lists* give you basic operation, but *NumPy* adds FFTs, convolutions, fast searching, basic statistics, linear algebra, histograms, etc.</br>
The most important difference for data science is the ability to do **element-wise calculations** with *NumPy arrays*.

`axis 0` always refers to row </br>
`axis 1` always refers to column

| Operator     | Description   | Documentation |
| :------------- | :------------- | :--------|
|`np.array([1,2,3])`|1d array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.array.html#numpy.array)|
|`np.array([(1,2,3),(4,5,6)])`|2d array|see above|
|`np.arange(start,stop,step)`|range array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.arange.html)|

### Placeholders <a name="place"></a>
| Operators | Description |Documentation|
| :------------- | :------------- |:---------- |
|`np.linspace(0,2,9)`|Add evenly spaced values btw interval to array of length |[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.linspace.html)|
|`np.zeros((1,2))`|Create and array filled with zeros|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.zeros.html)|
|`np.ones((1,2))`|Creates an array filled with ones|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.ones.html#numpy.ones)|
|`np.random.random((5,5))`|Creates random array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.random.random.html)|
|`np.empty((2,2))`|Creates an empty array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.empty.html)|

### Examples <a name="ex"></a>

```python
import numpy as np

# 1 dimensional
x = np.array([1,2,3])
# 2 dimensional
y = np.array([(1,2,3),(4,5,6)])

x = np.arange(3)
>>> array([0, 1, 2])

y = np.arange(3.0)
>>> array([ 0.,  1.,  2.])

x = np.arange(3,7)
>>> array([3, 4, 5, 6])

y = np.arange(3,7,2)
>>> array([3, 5])
```

</br>

## Array <a name="arrays"></a>
### Array Properties <a name="props"></a>
|Syntax|Description|Documentation|
|:-------------|:-------------|:-----------|
|`array.shape`|Dimensions (Rows,Columns)|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.shape.html)|
|`len(array)`|Length of Array|[link](https://docs.python.org/3.5/library/functions.html#len)|
|`array.ndim`|Number of Array Dimensions|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.ndim.html)|
|`array.size`|Number of Array Elements|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.size.html)|
|`array.dtype`|Data Type|[link](https://docs.scipy.org/doc/numpy/reference/arrays.dtypes.html)|
|`array.astype(type)`|Converts to Data Type|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.astype.html)|
|`type(array)`|Type of Array|[link](https://docs.scipy.org/doc/numpy/user/basics.types.html)|

### Copying/Sorting <a name="gops"></a>
| Operators | Descriptions     | Documentation |
| :------------- | :------------- | :----------- |
|`np.copy(array)`|Creates copy of array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.copy.html)|
|`other = array.copy()`|Creates deep copy of array|see above|
|`array.sort()`|Sorts an array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.sort.html)|
|`array.sort(axis=0)`|Sorts axis of array|see above|

#### Examples <a name="array-example"></a>
```python
import numpy as np
# Sort sorts in ascending order
y = np.array([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])
y.sort()
print(y)
>>> [ 1  2  3  4  5  6  7  8  9  10]
```

## Array Manipulation Routines <a name="man"></a>

### Adding or Removing Elements <a name="addrem"></a>
|Operator|Description|Documentation|
|:-----------|:--------|:---------|
|`np.append(a,b)`|Append items to array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.append.html)|
|`np.insert(array, 1, 2, axis)`|Insert items into array at axis 0 or 1|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.insert.html)|
|`np.resize((2,4))`|Resize array to shape(2,4)|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.resize.html)|
|`np.delete(array,1,axis)`|Deletes items from array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.delete.html)|

#### Example <a name="array-elements-examples"></a>
```python
import numpy as np
# Append items to array
a = np.array([(1, 2, 3),(4, 5, 6)])
b = np.append(a, [(7, 8, 9)])
print(b)
>>> [1 2 3 4 5 6 7 8 9]

# Remove index 2 from previous array
print(np.delete(b, 2))
>>> [1 2 4 5 6 7 8 9]
```

### Combining Arrays <a name="comb"></a>
|Operator|Description|Documentation|
|:---------|:-------|:---------|
|`np.concatenate((a,b),axis=0)`|Concatenates 2 arrays, adds to end|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.concatenate.html)|
|`np.vstack((a,b))`|Stack array row-wise|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.vstack.html)|
|`np.hstack((a,b))`|Stack array column wise|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.hstack.html#numpy.hstack)|

#### Example <a name="array-combine-examples"></a>
```python
import numpy as np
a = np.array([1, 3, 5])
b = np.array([2, 4, 6])

# Stack two arrays row-wise
print(np.vstack((a,b)))
>>> [[1 3 5]
     [2 4 6]]

# Stack two arrays column-wise
print(np.hstack((a,b)))
>>> [1 3 5 2 4 6]
```

### Splitting Arrays <a name="split"></a>
|Operator|Description|Documentation|
|:---------|:-------|:------|
|`numpy.split()`||[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.split.html)|
|`np.array_split(array, 3)`|Split an array in sub-arrays of (nearly) identical size|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.array_split.html#numpy.array_split)|
|`numpy.hsplit(array, 3)`|Split the array horizontally at 3rd index|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.hsplit.html#numpy.hsplit)|

#### Example <a name="array-split-examples"></a>
```python
# Split array into groups of ~3
a = np.array([1, 2, 3, 4, 5, 6, 7, 8])
print(np.array_split(a, 3))
>>> [array([1, 2, 3]), array([4, 5, 6]), array([7, 8])]
```
### Shaping Arrays <a name="shape"></a>
##### TODO
|Operator|Description|Documentation|
|:---------|:-------|:------|
|`other = ndarray.flatten()`|Flattens a 2d array to 1d|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.flatten.html)|
|numpy.flip()|Flips order of elements in 1D array||
|np.ndarray[::-1]|Same as above||
|reshape|||
|squeeze|||
|expand_dims|||

### Misc <a name="misc"></a>
|Operator|Description|Documentation|
|:--------|:--------|:--------|
|`other = ndarray.flatten()`|Flattens a 2d array to 1d|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.flatten.html)|
|`array = np.transpose(other)`</br> `array.T` |Transpose array|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.transpose.html)|
|`inverse = np.linalg.inv(matrix)`|Inverse of a given matrix|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.linalg.inv.html) |
</br>

#### Example <a name="inverse of a matrix"></a>
```python
# Find inverse of a given matrix
>>> np.linalg.inv([[3,1],[2,4]])
array([[ 0.4, -0.1],
       [-0.2,  0.3]])
```

## Mathematics <a name="maths"></a>

### Operations <a name="ops"></a>
| Operator | Description     |Documentation|
| :------------- | :------------- |:---------|
|`np.add(x,y)`<br/>`x + y`|Addition|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.add.html)|
|`np.substract(x,y)`<br/>`x - y`|Subtraction|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.subtract.html#numpy.subtract)|
|`np.divide(x,y)`<br/>`x / y`|Division|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.divide.html#numpy.divide)|
|`np.multiply(x,y)`<br/>`x @ y`|Multiplication|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.multiply.html#numpy.multiply)|
|`np.sqrt(x)`|Square Root|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.sqrt.html#numpy.sqrt)|
|`np.sin(x)`|Element-wise sine|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.sin.html#numpy.sin)|
|`np.cos(x)`|Element-wise cosine|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.cos.html#numpy.cos)|
|`np.log(x)`|Element-wise natural log|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.log.html#numpy.log)|
|`np.dot(x,y)`|Dot product|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.dot.html)|
|`np.roots([1,0,-4])`|Roots of a given polynomial coefficients|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.roots.html)|

Remember: NumPy array operations work element-wise.

#### Example <a name="operations-examples"></a>
```python
# If a 1d array is added to a 2d array (or the other way), NumPy
# chooses the array with smaller dimension and adds it to the one
# with bigger dimension
a = np.array([1, 2, 3])
b = np.array([(1, 2, 3), (4, 5, 6)])
print(np.add(a, b))
>>> [[2 4 6]
     [5 7 9]]
     
# Example of np.roots
# Consider a polynomial function (x-1)^2 = x^2 - 2*x + 1
# Whose roots are 1,1
>>> np.roots([1,-2,1])
array([1., 1.])
# Similarly x^2 - 4 = 0 has roots as x=±2
>>> np.roots([1,0,-4])
array([-2.,  2.])
```

### Comparison
| Operator | Description | Documentation |
| :------------- | :------------- |:---------|
|`==`|Equal|[link](https://docs.python.org/2/library/stdtypes.html)|
|`!=`|Not equal|[link](https://docs.python.org/2/library/stdtypes.html)|
|`<`|Smaller than|[link](https://docs.python.org/2/library/stdtypes.html)|
|`>`|Greater than|[link](https://docs.python.org/2/library/stdtypes.html)|
|`<=`|Smaller than or equal|[link](https://docs.python.org/2/library/stdtypes.html)|
|`>=`|Greater than or equal|[link](https://docs.python.org/2/library/stdtypes.html)|
|`np.array_equal(x,y)`|Array-wise comparison|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.array_equal.html)|

#### Example <a name="comparison-example"></a>
```python
# Using comparison operators will create boolean NumPy arrays
z = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
c = z < 6
print(c)
>>> [ True  True  True  True  True False False False False False]
```
### Basic Statistics <a name="stats"></a>
| Operator | Description    | Documentation |
| :------------- | :------------- |:--------- |
|`np.mean(array)`|Mean|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.mean.html#numpy.mean)|
|`np.median(array)`|Median|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.median.html#numpy.median)|
|`array.corrcoef()`|Correlation Coefficient|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.corrcoef.html#numpy.corrcoef)|
|`np.std(array)`|Standard Deviation|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.std.html#numpy.std)|

#### Example <a name="stats-examples"></a>
```python
# Statistics of an array
a = np.array([1, 1, 2, 5, 8, 10, 11, 12])

# Standard deviation
print(np.std(a))
>>> 4.2938910093294167

# Median
print(np.median(a))
>>> 6.5
```


### More <a name="more"></a>
| Operator | Description    | Documentation |
| :------------- | :------------- |:--------- |
|`array.sum()`|Array-wise sum|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.sum.html)|
|`array.min()`|Array-wise minimum value|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.ndarray.min.html)|
|`array.max(axis=0)`|Maximum value of specified axis||
|`array.cumsum(axis=0)`|Cumulative sum of specified axis|[link](https://docs.scipy.org/doc/numpy/reference/generated/numpy.cumsum.html)|

</br>

## Slicing and Subsetting <a name="ss"></a>
|Operator|Description|Documentation|
| :------------- | :------------- | :------------- |
|`array[i]`|1d array at index i|[link](https://docs.scipy.org/doc/numpy/reference/arrays.indexing.html)|
|`array[i,j]`|2d array at index[i][j]|see above|
|`array[i<4]`|Boolean Indexing, see [Tricks](#tricks)|see above|
|`array[0:3]`|Select items of index 0, 1 and 2|see above|
|`array[0:2,1]`|Select items of rows 0 and 1 at column 1|see above|
|`array[:1]`|Select items of row 0 (equals array[0:1, :])|see above|
|`array[1:2, :]`|Select items of row 1|see above|
[comment]: <> (|`array[1,...]`|equals array[1,:,:]|see above|)
|`array[ : :-1]`|Reverses `array`|see above|


#### Examples <a name="exp"></a>
```python
b = np.array([(1, 2, 3), (4, 5, 6)])

# The index *before* the comma refers to *rows*,
# the index *after* the comma refers to *columns*
print(b[0:1, 2])
>>> [3]

print(b[:len(b), 2])
>>> [3 6]

print(b[0, :])
>>> [1 2 3]

print(b[0, 2:])
>>> [3]

print(b[:, 0])
>>> [1 4]

c = np.array([(1, 2, 3), (4, 5, 6)])
d = c[1:2, 0:2]
print(d)
>>> [[4 5]]

```

</br>

## Tricks <a name="tricks"></a>
This is a growing list of examples. Know a good trick? Let me know in a issue or fork it and create a pull request.

*boolean indexing*
```python
# Index trick when working with two np-arrays
a = np.array([1,2,3,6,1,4,1])
b = np.array([5,6,7,8,3,1,2])

# Only saves a at index where b == 1
other_a = a[b == 1]
#Saves every spot in a except at index where b != 1
other_other_a = a[b != 1]
```

```python
import numpy as np
x = np.array([4,6,8,1,2,6,9])
y = x > 5
print(x[y])
>>> [6 8 6 9]

# Even shorter
x = np.array([1, 2, 3, 4, 4, 35, 212, 5, 5, 6])
print(x[x < 5])
>>> [1 2 3 4 4]

```

</br>
