# <div style='text-align:center'><span style='color:gold;font-family:georgia'>Dictionary Methods
Python has a set of in-built methods that can be used in dictionaries. Here they are:-
<br>
## <span style='color:gold;font-family:georgia'>Clear Method
This method enables use to remove all elements of a dictionary.

```py
dic={'a':1,'b':2}
dic.clear()
#dic has now become {}
```

## <span style='color:gold;font-family:georgia'>Copy Method
Though a dictionary b can be copied to c by following way:-
```py
a={'a':1,'b':2}
b=a
#a has been copied to b
```
But a major disadvantage of this method is that if we modify b , then a also gets automatically modified beacuse b points a. Hence ideal way to copy a dictionary is:-

```py
a={'a':1,'b':2}
b=a.copy()
#True copy of a has been made
```
## <span style='color:gold;font-family:georgia'>Fromkeys Method
Suppose if we have a sequence that we want to make keys of a dictionary with a particular element as values of all keys , then use the following method:

```py
key=(1,2,3)
value='cat'
dic=dict.fromkeys(key,value)
#dic has now become {1:'cat',2:'cat',3:'cat'}
```

## <span style='color:gold;font-family:georgia'>Get Method
If we want to get the value of a specific key , then use the following method:-
```py
a={'a':1,'b':2}
b=a.get('a')#Parameter here is the key whose value we want
#b is now 1
```

## <span style='color:gold;font-family:georgia'>Items Method
If we ever want to have a list containing a tuple for each key value pair ,then use the following method:-

```py
a={'a':1,'b':2}
b=a.items()
#b is now [('a',1),('b',2)]
```
## <span style='color:gold;font-family:georgia'>Keys Method
If we ever want to have a list containing keys of a specified dictionary , then use the following method:-
```py
a={'a':1,'b':2}
b=a.keys()
#b is now ['a','b']
```
## <span style='color:gold;font-family:georgia'>Pop Method
If we ever want remove a key-value pair ,given the key , use following method:-
```py
a={'a':1,'b':2}
a.pop('a')
#a is now {'b':2}
```
## <span style='color:gold;font-family:georgia'>Popitem Method
If we ever want to remove the last inserted key value pair directly ,then use the following method:-
```py
a={'a':1,'b':2}
a.popitem()
#a is now {'a':1}
```
## <span style='color:gold;font-family:georgia'>Setdefault Method
This method returns the value of the specified key. If the key does not exist: insert the key, with the specified value.:-
```py
a={'c':1,'b':2}
b=a.setdefault(c,3)
#First parameter c means to give the value of key c ,and the second parameter 3 means that if c does not exists in a , then return the value as 3
#Therefore , here b has become 1
```
## <span style='color:gold;font-family:georgia'>Update Method
This method is used to insert specified item to dictionary.
```py
a={'c':1,'b':2}
a.update({'d':3})
#a has now become {'c':1,'b':2,'d':3}
```
## <span style='color:gold;font-family:georgia'>Values Method
This method is used to get a list of all values of dictionary.
```py
a={'c':1,'b':2}
b=a.values()
#b has now become [1,2]