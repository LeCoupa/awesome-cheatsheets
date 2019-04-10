"""
Python3 Programming Language Cheatsheet
"""

# Basics: ###

# Variables -- Python uses variables to define things that are subject to change.
# Operators -- There are several type of operators available in Python. 
#              Arithmetic operators:
#              +        ----------> Addition Operator
#              -        ----------> Subtraction Operator
#              *        ----------> Multiplication Operator
#              /        ----------> Division Operator
#              %        ----------> Modulus Operator
#              **        ----------> Exponent Operator
#              //        ----------> Floor division Operator

#              Comparision Operators:
#              ==        ----------> Equals
#              !=        ----------> Not equal to
#              >        ----------> Greater than
#              <        ----------> Less than
#              >=        ----------> Greater than or equal to
#              <=       ----------> Less than or equal to

#              Assignment Operators:
#              =        ----------> Assigns value
#              +=        ----------> Shorthand for addition to itself
#              -=        ----------> Shorthand for subtraction to itself
#              *=        ----------> Shorthand for multiplication to itself
#              /=        ----------> Shorthand for division to itself
#              %=        ----------> Shorthand for modulus of itself
#              **=        ----------> Shorthand for exponent of itself
#              //=        ----------> Shorthand for floor division to itself

#              Bitwise Operators:
#              &        ----------> Binary AND
#              |        ----------> Binary OR
#              ^        ----------> Binary XOR
#              ~        ----------> Binary NOT
#              <<        ----------> Binary left shift
#              >>        ----------> Binary Right Shift


# Strings -- Strings in python are denoted by either '' or "". Some list operations are:
# ex: a = "Manoj"
# a[0]                 =>'M'
# a[1]                 => 'a'
# a[1:]                => Will print rest of characters from 1 to other
# a[:3]                => Will print 0 to 2nd position
# a[:]                 => Will print whole string
# a[:-1]               => Grab everything but the last letter
# a[::2]               => Grab everything but go in step sizes of 2
# a[::-1]              => We can use this to print a string backwards

##### Strings have a property named immutability. It means once a string is created, the elements within it cann't be changed or replaced.
##### We can use multiplication symbol to create repetition. ex: letter = 'z', letter*10 will print 'zzzzzzzzzz'.
##### Similarly there are many methods that are applicable on strings:
# ex: a = 'Hello'
# a.upper()            => converts string into upper case ==> 'HELLO'
# a.lower()            => converts string into lower case ==> 'hello'
# a.title()            => title case a string ==> 'Hello'
# a.rstrip()           => Right trim white spaces
# a.lstrip()           => Left trim white spaces
# a.strip()            => completely trim the white spaces
# a.split()            => split a string by blank spaces
# a.split("value")     => split the string after some specific value
# a.isalnum()          => True if string consists of only alphanum characters (No symbols).
# a.isalpha()          => True if string consists of only alphabetic characters (No symbols).
# a.islower()          => True if string's alphabetic characters are all lower case.
# a.isnumeric()        => True if string consists of only numeric characters.
# a.isspace()          => True if string consists of only whitespace characters.
# a.istitle()          => True if string is in title case
# a.isupper()          => True if string's alphabetic characters are all upper case.

##### Some other useful string methods or functions that are available in python are:
# .replace("first_string", "second_string") => first_string will be replaced by second_string
# .startswith("") => search for a particular character in the starting of a string
# .endswith("") => search for a particular character in the end of a string
# .capitalize() => capitalize the first word of the string
# .swapcase() => swap the case of caharacter in a string


# Lists -- [a1, a2, "Some String", [b1, "some other string"]], This is an example of the list.
# There are several List Operations like
# a = 
