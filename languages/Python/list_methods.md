# <div style='text-align:center'><span style='color:gold;font-family:georgia'>List Methods
Lists have many built-in methods that are quite useful
<br>

## <span style='color:gold;font-family:georgia'>Append Method

This adds an element at the end of list.

```py
lst=[1,2,3,4]
lst.append(5)
#lst has now become [1,2,3,4,5]
```


## <span style='color:gold;font-family:georgia'>Clear Method

This method is used to remove all elements of a list.

```py
lst=[1,2,3,4]
lst.clear()
#lst is now equal to []
```

## <span style='color:gold;font-family:georgia'>Copy Method
If we want to make a copy of a list , then we can do this by the following way:-

```py
lst=[1,2,3,4]
lst_copy=lst
```
But a disadvantage of making a copy of list by this way is that if we modify lst_copy ,then lst also get changed automatically because lst_copy actually points to lst.<br><br>
So in order to make a true copy of any list , the following method is used:-

```py
lst=[1,2,3,4]
lst_copy=lst.copy()
#Now lst_copy has become the true copy of lst
```
<br>

## <span style='color:gold;font-family:georgia'>Count Method
Suppose if our list has elements that have been repeated multiple times and we want to count the number of times an element has been repeated , then following method helps us in doing so:-

```py
lst=[1,1,1,3,4,2,6,6,4,1]
count=lst.count(1)#Parameter inside is the element that we want to count
#Printing count would give us an output 4 which is the number of times 1 has been repeated in lst
```
<br>

## <span style='color:gold;font-family:georgia'>Extend Method

Now if we want to add elements of any list or iterable to a particular list , then use the following method:-

```py
lst=[1,2,3,4]
add_this=[5,6,7,8]
lst.extend(add_this)
#Now lst has become [1,2,3,4,5,6,7,8]
```
## <span style='color:gold;font-family:georgia'>Index Method
If we ever want to know the index of first occurrence of any element of a list ,then use the following method:-

```py
lst=[1,2,3,4,1]
index=lst.index(1)
#The value of index has now become equal to 0
```
## <span style='color:gold;font-family:georgia'>Insert Method
If we ever want to add a specific element to a list in a specified position , then use the following method:-

```py
lst=[1,2,4,5]
lst.insert(2,3)#First parameter is the index where element has to be inserted while the second parameter is the element to be inserted.
```
## <span style='color:gold;font-family:georgia'>Pop Method
If we want to remove an element from a specified index , then use the following method:-

```py
lst=[1,2,3,3,4]
lst.pop(2)#Parameter inside is the index of element to be removed
#lst is now [1,2,3,4]
```

## <span style='color:gold;font-family:georgia'>Remove Method
If we ever want to remove the first occurrence of any element of a list , then use the following method:-

```py
lst=[1,2,3,3,4]
lst.remove(3)#Parameter inside is the element whose first occurrence is to be removed
#lst is now [1,2,3,4]
```

## <span style='color:gold;font-family:georgia'>Reverse Method
If we ever want to reverse any list , then use the following method:-

```py
lst=[1,2,3,4]
lst.reverse()
#lst is now [4,3,2,1]
```

## <span style='color:gold;font-family:georgia'>Sort Method
If we ever want to sort a list , then use the following method:-

```py
lst=[1,4,3,5,2]
lst.sort()#Put parameter reverse=True to sort in descending order
#lst is now equal to [1,2,3,4,5]