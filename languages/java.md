# JAVA CHEATSHEET 👻

## Hello World

```java
// File name: HelloWorld.java
public class HelloWorld {
    // main() is the entry point method
    public static void main(String[] args) {
        // Prints "Hello World" in the terminal window
        System.out.println("Hello World");
    }
}
```

## Compilation & Executing Java Code

Go to your program directory in the terminal (assuming JAVA path is set).

Compile your code:
```
javac HelloWorld.java
```

Run the program:
```
java HelloWorld
```

---

## Data Types

| Type    | Category                | Range / Size                       | Operators   |
|---------|-------------------------|------------------------------------|-------------|
| byte    | integer                 | -128 to 127                        | + - * / %   |
| short   | integer                 | -2^15 to (2^15)-1                  | + - * / %   |
| int     | integer                 | -2^31 to (2^31)-1                  | + - * / %   |
| long    | integer                 | -2^63 to (2^63)-1                  | + - * / %   |
| float   | floating-point number   | 32-bit real number                 | + - * /     |
| double  | floating-point number   | 64-bit real number                 | + - * /     |
| boolean | boolean value           | true or false                      | && \|\| !   |
| char    | character               | 16-bit Unicode character           |             |
| String  | sequence of characters  | not a primitive type               |             |

---

## Declaration and Assignment Statements

```java
// Declaration statement
int a, b;

// Assignment statement
a = 13212; // assigns literal 13212 to variable a

// Initialization statement
int c = 10;

// Compound assignment expressions
a += b;  // equivalent to: a = a + b
a -= b;  // equivalent to: a = a - b
a *= b;  // equivalent to: a = a * b
a /= b;  // equivalent to: a = a / b
a %= b;  // equivalent to: a = a % b
a ^= b;  // equivalent to: a = a ^ b  (bitwise XOR)
a &= b;  // equivalent to: a = a & b  (bitwise AND)
a |= b;  // equivalent to: a = a | b  (bitwise OR)
```

### Increment & Decrement Operators

```java
i++;  // post-increment: use i, then add 1
++i;  // pre-increment:  add 1, then use i
i--;  // post-decrement: use i, then subtract 1
--i;  // pre-decrement:  subtract 1, then use i
```

---

## Comparison Operators

| Operator | Meaning               |
|----------|-----------------------|
| ==       | equal to              |
| !=       | not equal to          |
| <        | less than             |
| >        | greater than          |
| <=       | less than or equal to |
| >=       | greater than or equal |

---

## Printing

```java
String s = "Happy Coding Folks!!";
System.out.print(s);    // print s (no newline)
System.out.println(s);  // print s followed by a newline
System.out.println();   // print a blank line

// Formatted output (printf-style)
System.out.printf("Name: %s, Age: %d%n", name, age);
```

---

## Parsing Command-Line Arguments

```java
String s = "Java is the best!!";
int i        = Integer.parseInt("42");         // convert String to int
double d     = Double.parseDouble("3.14");     // convert String to double
long l       = Long.parseLong("9876543210");   // convert String to long
boolean bool = Boolean.parseBoolean("true");   // convert String to boolean
```

---

## Math Library

```java
Math.abs(double a)                // absolute value of a
Math.max(double a, double b)      // maximum of a and b
Math.min(double a, double b)      // minimum of a and b
Math.sin(double theta)            // sine of theta (radians)
Math.cos(double theta)            // cosine of theta (radians)
Math.tan(double theta)            // tangent of theta (radians)
Math.toRadians(double degrees)    // convert degrees to radians
Math.toDegrees(double radians)    // convert radians to degrees
Math.exp(double a)                // e raised to the power a
Math.log(double a)                // natural logarithm of a
Math.log10(double a)              // base-10 logarithm of a
Math.pow(double a, double b)      // a raised to the power b
Math.sqrt(double a)               // square root of a
Math.floor(double a)              // largest integer ≤ a
Math.ceil(double a)               // smallest integer ≥ a
Math.round(double a)              // round to nearest integer
Math.random()                     // random double in [0.0, 1.0)
Math.PI                           // π ≈ 3.14159265358979
Math.E                            // e ≈ 2.71828182845904
```

---

## Type Conversion

| Expression              | Result Type | Result Value |
|-------------------------|-------------|--------------|
| (1 + 2 + 3 + 4) / 4.0  | double      | 2.5          |
| Math.sqrt(4)            | double      | 2.0          |
| "12334" + 99            | String      | "1233499"    |
| 11 * 0.25               | double      | 2.75         |
| (int) 11 * 0.25         | double      | 2.75         |
| 11 * (int) 0.25         | int         | 0            |
| (int) (11 * 0.25)       | int         | 2            |

> **Note:** Casting with `(int)` truncates (rounds toward zero), it does not round.

---

## String Methods

```java
String s = "Hello, World!";
s.length()                    // 13
s.charAt(0)                   // 'H'
s.indexOf("World")            // 7
s.substring(7)                // "World!"
s.substring(7, 12)            // "World"
s.toLowerCase()               // "hello, world!"
s.toUpperCase()               // "HELLO, WORLD!"
s.trim()                      // remove leading/trailing whitespace
s.replace("World", "Java")    // "Hello, Java!"
s.contains("World")           // true
s.startsWith("Hello")         // true
s.endsWith("!")               // true
s.equals("Hello, World!")     // true  (use this, not ==)
s.equalsIgnoreCase("hello, world!") // true
s.split(", ")                 // String[] {"Hello", "World!"}
String.valueOf(42)            // "42"  (int to String)
```

---

## Conditional Statements

### if Statement

```java
if (x > y) {
    // executes when x > y
    x = y;
}
```

### if-else Statement

```java
if (booleanExpression) {
    // executes when true
} else {
    // executes when false
}
```

### if-else if-else (Nested)

```java
if (booleanExpression) {
    // ...
} else if (anotherExpression) {
    // ...
} else {
    // default case
}
```

### Switch Statement

```java
switch (variableToEvaluate) {
    case value1:
        // statements
        break;
    case value2:
        // statements
        break;
    default:
        // statements
        break;
}
```

**Example:**

```java
int month = 8;
String monthString;
switch (month) {
    case 1:  monthString = "January";   break;
    case 2:  monthString = "February";  break;
    case 3:  monthString = "March";     break;
    case 4:  monthString = "April";     break;
    case 5:  monthString = "May";       break;
    case 6:  monthString = "June";      break;
    case 7:  monthString = "July";      break;
    case 8:  monthString = "August";    break;
    case 9:  monthString = "September"; break;
    case 10: monthString = "October";   break;
    case 11: monthString = "November";  break;
    case 12: monthString = "December";  break;
    default: monthString = "Invalid month"; break;
}
```

### Ternary Operator

```java
// condition ? valueIfTrue : valueIfFalse
int max = (a > b) ? a : b;
String result = (score >= 50) ? "Pass" : "Fail";
```

---

## Loop Statements

### for Loop

```java
for (int i = 0; i <= n; i++) {
    System.out.println(i);
}
```

### Enhanced for Loop (for-each)

```java
int[] numbers = {100, 200, 300, 400};
for (int number : numbers) {
    System.out.println(number);
}
```

### while Loop

```java
int power = 1;
while (power <= n / 2) {
    System.out.println(power);
    power *= 2;  // don't forget to update the loop variable!
}
```

### do-while Loop

```java
int i = 1;
do {
    System.out.println(i);
    i++;
} while (i <= 10);
// Runs at least once even if condition is false
```

### Loop Control Statements

```java
break;    // exit the loop immediately
continue; // skip the current iteration, jump to next
```

---

## Arrays

### Array Declaration

```java
int[]        ai;   // array of int
short[][]    as;   // 2D array of short
Object[]     ao;   // array of Object
```

### Array Initialization

```java
// Static initialization
int[] factorial = {1, 1, 2, 6, 24, 120, 720, 5040};
char[] ac       = {'n', 'o', 't', ' ', 'a', ' ', 'S', 't', 'r', 'i', 'n', 'g'};
String[] aas    = {"array", "of", "String"};

// Dynamic initialization
int[] arr    = new int[5];           // creates an array of 5 ints (default 0)
int[][] grid = new int[3][4];        // 3 rows, 4 columns
Exception[] ae = new Exception[3];
```

### Common Array Operations

```java
int[] arr = {5, 3, 1, 4, 2};

arr.length;                          // 5 (number of elements)
Arrays.sort(arr);                    // sort in-place: [1, 2, 3, 4, 5]
Arrays.toString(arr);                // "[1, 2, 3, 4, 5]"
Arrays.fill(arr, 0);                 // fill all elements with 0
Arrays.copyOf(arr, arr.length);      // copy entire array
Arrays.copyOfRange(arr, 1, 4);       // copy index 1 to 3 (exclusive end)
Arrays.equals(arr1, arr2);           // true if contents are equal

// Requires: import java.util.Arrays;
```

---

## Access Modifiers

| Modifier    | Class | Package | Subclass | World |
|-------------|:-----:|:-------:|:--------:|:-----:|
| `public`    | ✅   | ✅      | ✅       | ✅   |
| `protected` | ✅   | ✅      | ✅       | ❌   |
| default     | ✅   | ✅      | ❌       | ❌   |
| `private`   | ✅   | ❌      | ❌       | ❌   |

## Non-Access Modifiers

| Modifier       | Usage                                                   |
|----------------|---------------------------------------------------------|
| `static`       | belongs to the class, not to instances                  |
| `final`        | variable = constant, method = no override, class = no extend |
| `abstract`     | method has no body; class cannot be instantiated        |
| `synchronized` | thread-safe method or block                             |
| `transient`    | skip field during serialization                         |
| `volatile`     | variable always read from main memory (multi-threading) |

---

## Object-Oriented Programming (OOP) Concepts

### Object

```java
// Declare a variable (object reference)
String s;

// Create an object with a constructor
s = new String("Hello World");

// Invoke an instance method on the object
char c = s.charAt(4);  // 'o'
```

### Instance Variables

```java
public class Charge {
    // Instance variable declarations
    private final double rx, ry;  // position
    private final double q;       // charge
}
```

---

### Methods

```java
// return-type methodName(parameters)
public static double sum(int a, int b) {
    int result;       // local variable
    result = a + b;
    return result;    // return statement
}
```

---

### Class Declaration

```java
class MyClass {
    // fields, constructors, and methods
}
```

**Example:**

```java
public class Bicycle {
    // Fields
    public int cadence;
    public int gear;
    public int speed;

    // Constructor
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        gear    = startGear;
        cadence = startCadence;
        speed   = startSpeed;
    }

    // Methods
    public void setCadence(int newValue) { cadence = newValue; }
    public void setGear(int newValue)    { gear    = newValue; }
    public void applyBrake(int decrement){ speed  -= decrement; }
    public void speedUp(int increment)   { speed  += increment; }
}
```

### Extending a Class and Implementing an Interface

```java
class MyClass extends MySuperClass implements YourInterface {
    // MyClass inherits MySuperClass and implements YourInterface
}
```

---

### Constructors

```java
public class Bicycle {
    private int gear;
    private int cadence;
    private int speed;

    // Parameterized constructor
    public Bicycle(int startCadence, int startSpeed, int startGear) {
        gear    = startGear;
        cadence = startCadence;
        speed   = startSpeed;
    }

    // No-args constructor
    public Bicycle() {
        super();
    }
}
```

> Every class has a default no-args constructor unless you define a parameterized one, in which case you must declare the no-args constructor explicitly if you still need it.

---

### Polymorphism

Polymorphism allows an object to behave differently in different situations. There are two types:

#### 1. Compile-Time Polymorphism (Method Overloading)

Same method name, different parameter lists:

```java
public class Circle {
    public void draw() {
        System.out.println("Drawing circle with color Black, diameter 1 cm.");
    }

    public void draw(int diameter) {
        System.out.println("Drawing circle with color Black, diameter " + diameter + " cm.");
    }

    public void draw(int diameter, String color) {
        System.out.println("Drawing circle with color " + color + ", diameter " + diameter + " cm.");
    }
}
```

#### 2. Runtime Polymorphism (Method Overriding)

A subclass overrides a superclass method. Requires an **IS-A** relationship:

```java
public interface Shape {
    void draw();
}

public class Circle implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing circle");
    }
}

public class Square implements Shape {
    @Override
    public void draw() {
        System.out.println("Drawing square");
    }
}

// Runtime polymorphism in action
Shape sh = new Circle();
sh.draw();  // "Drawing circle"

Shape sh2 = new Square();
sh2.draw(); // "Drawing square"
```

---

### Inheritance

```java
public class Superclass {
    // methods and fields
}

public interface Superinterface {
    // method signatures and constants
}

// Subclass inherits Superclass and implements Superinterface
public class Subclass extends Superclass implements Superinterface {
    // methods and fields
}
```

> Use `extends` to inherit from a class, `implements` to fulfill an interface. Java supports single class inheritance but multiple interface implementation.

---

### Abstraction

#### 1. Abstract Class

```java
abstract class Flower {
    abstract String smell();    // abstract method — no body

    void info() {               // concrete method
        System.out.println("Flowers are beautiful.");
    }
}

public class Lily extends Flower {
    @Override
    String smell() {            // must implement abstract method
        return "Lily smells like lavender.";
    }
}
```

- Declared with the `abstract` keyword.
- Can have both abstract and concrete methods.
- Cannot be instantiated directly.
- Can have constructors and static methods.

#### 2. Interface

```java
interface Printable {
    void printPaper();  // implicitly public and abstract
}

public class A4 implements Printable {
    @Override
    public void printPaper() {
        System.out.println("A4 page printed.");
    }
}
```

- Since Java 8, interfaces can have `default` and `static` methods.
- Since Java 9, interfaces can have `private` methods.
- A class can implement multiple interfaces.

---

### Encapsulation

```java
public class User {
    private String username;  // field hidden from outside
    private String password;

    // Getter
    public String getUsername() {
        return username;
    }

    // Setter
    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
```

> Encapsulation hides internal state behind getters/setters. This is also known as **data hiding**. A class following this pattern is called a POJO (Plain Old Java Object).

---

## Exception Handling

```java
try {
    // code that may throw an exception
    int result = 10 / 0;
} catch (ArithmeticException e) {
    // handle the specific exception
    System.out.println("Cannot divide by zero: " + e.getMessage());
} catch (Exception e) {
    // handle any other exception (generic catch-all)
    System.out.println("An error occurred: " + e.getMessage());
} finally {
    // always executes, with or without an exception
    System.out.println("This always runs.");
}
```

### Throwing Exceptions

```java
public void setAge(int age) {
    if (age < 0) {
        throw new IllegalArgumentException("Age cannot be negative.");
    }
    this.age = age;
}
```

### Custom Exception

```java
public class InsufficientFundsException extends Exception {
    public InsufficientFundsException(String message) {
        super(message);
    }
}
```

### Common Exception Types

| Exception                    | Cause                                     |
|------------------------------|-------------------------------------------|
| `NullPointerException`       | Accessing a method/field on null          |
| `ArrayIndexOutOfBoundsException` | Array index < 0 or >= length         |
| `ClassCastException`         | Invalid type cast                         |
| `ArithmeticException`        | Math error (e.g., divide by zero)         |
| `NumberFormatException`      | Invalid string-to-number conversion       |
| `StackOverflowError`         | Infinite recursion                        |
| `IOException`                | I/O operation failed                      |
| `IllegalArgumentException`   | Method passed an illegal argument         |

---

## Collections Framework

```java
import java.util.*;
```

### List (ordered, allows duplicates)

```java
List<String> list = new ArrayList<>();
list.add("apple");
list.add("banana");
list.get(0);             // "apple"
list.set(1, "cherry");   // replace index 1
list.remove(0);          // remove index 0
list.size();             // number of elements
list.contains("cherry"); // true
list.isEmpty();          // false
Collections.sort(list);  // sort alphabetically
```

### Set (unordered, no duplicates)

```java
Set<String> set = new HashSet<>();
set.add("apple");
set.add("apple");    // duplicate ignored
set.contains("apple"); // true
set.size();            // 1
set.remove("apple");
```

### Map (key-value pairs)

```java
Map<String, Integer> map = new HashMap<>();
map.put("Alice", 90);
map.put("Bob", 85);
map.get("Alice");             // 90
map.containsKey("Bob");       // true
map.containsValue(85);        // true
map.remove("Bob");
map.size();                   // 1
map.getOrDefault("Carol", 0); // 0 (key not found, returns default)

// Iterate over entries
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + " -> " + entry.getValue());
}
```

### Queue (FIFO)

```java
Queue<String> queue = new LinkedList<>();
queue.offer("first");   // enqueue
queue.offer("second");
queue.peek();           // view front: "first" (no removal)
queue.poll();           // dequeue and return: "first"
queue.isEmpty();        // false
```

### Stack (LIFO)

```java
Deque<String> stack = new ArrayDeque<>();  // preferred over java.util.Stack
stack.push("bottom");
stack.push("top");
stack.peek();   // "top" (no removal)
stack.pop();    // "top" (removes and returns)
stack.isEmpty();
```

---

## Generics

Generics enable type-safe code without casting.

```java
// Generic method
public static <T> void printArray(T[] arr) {
    for (T element : arr) {
        System.out.print(element + " ");
    }
}

// Generic class
public class Pair<A, B> {
    private A first;
    private B second;

    public Pair(A first, B second) {
        this.first  = first;
        this.second = second;
    }

    public A getFirst()  { return first; }
    public B getSecond() { return second; }
}

// Usage
Pair<String, Integer> pair = new Pair<>("Age", 25);
```

### Bounded Type Parameters

```java
// Upper bound: T must be a Number or subclass
public static <T extends Number> double sum(List<T> list) {
    double total = 0;
    for (T t : list) total += t.doubleValue();
    return total;
}
```

---

## Lambda Expressions & Functional Interfaces (Java 8+)

```java
import java.util.*;
import java.util.function.*;

// Lambda syntax: (parameters) -> expression or block
Runnable r = () -> System.out.println("Running!");
r.run();

// Common functional interfaces
Predicate<Integer> isEven = n -> n % 2 == 0;
isEven.test(4);   // true

Function<String, Integer> length = s -> s.length();
length.apply("hello");  // 5

Consumer<String> printer = s -> System.out.println(s);
printer.accept("Hi!");

Supplier<Double> random = () -> Math.random();
random.get();  // some double in [0.0, 1.0)

// Sort a list with a lambda comparator
List<String> names = Arrays.asList("Charlie", "Alice", "Bob");
Collections.sort(names, (a, b) -> a.compareTo(b));
```

---

## Streams API (Java 8+)

```java
import java.util.*;
import java.util.stream.*;

List<Integer> numbers = Arrays.asList(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// filter, map, collect
List<Integer> evens = numbers.stream()
    .filter(n -> n % 2 == 0)    // keep even numbers
    .collect(Collectors.toList());
// [2, 4, 6, 8, 10]

// map to transform elements
List<String> strings = numbers.stream()
    .map(n -> "num" + n)
    .collect(Collectors.toList());

// reduce to accumulate
int sum = numbers.stream()
    .reduce(0, Integer::sum);  // 55

// sorted, distinct, limit, skip
numbers.stream()
    .sorted()
    .distinct()
    .limit(5)
    .forEach(System.out::println);

// count, min, max, average
long count = numbers.stream().count();  // 10
Optional<Integer> max = numbers.stream().max(Integer::compare); // 10
double avg = numbers.stream().mapToInt(Integer::intValue).average().orElse(0.0);
```

---

## Advanced Data Types

### Stack Data Type

```java
public class Stack<Item> implements Iterable<Item> {
    Stack()               // create an empty stack
    boolean isEmpty()     // true if stack is empty
    void push(Item item)  // push item onto the top
    Item pop()            // remove and return the top item
    Item peek()           // return (but don't remove) the top item
    int size()            // number of items on the stack
}
```

### Queue Data Type

```java
public class Queue<Item> implements Iterable<Item> {
    Queue()                   // create an empty queue
    boolean isEmpty()         // true if queue is empty
    void enqueue(Item item)   // insert item at the rear
    Item dequeue()            // remove and return the front item
    Item peek()               // return (but don't remove) the front item
    int size()                // number of items in the queue
}
```

### Iterable

```java
import java.util.Iterator;

public class Queue<Item> implements Iterable<Item> {
    private Node first;  // front of queue
    private Node last;   // rear of queue

    private class Node {
        Item item;
        Node next;
    }

    public void enqueue(Item item) { /* ... */ }
    public Item dequeue()          { /* ... */ }

    @Override
    public Iterator<Item> iterator() {
        return new Iterator<Item>() {
            Node current = first;
            public boolean hasNext() { return current != null; }
            public Item next() {
                Item item = current.item;
                current = current.next;
                return item;
            }
        };
    }
}
```

### Symbol Table (Map) Data Type

```java
public class ST<Key extends Comparable<Key>, Value> {
    ST()                              // create an empty symbol table
    void put(Key key, Value val)      // associate val with key
    Value get(Key key)                // value paired with key (null if absent)
    void remove(Key key)              // remove key and its value
    boolean contains(Key key)         // true if key has an associated value
    int size()                        // number of key-value pairs
    Iterable<Key> keys()              // all keys in the symbol table
}
```

### Set Data Type

```java
public class Set<Key extends Comparable<Key>> implements Iterable<Key> {
    Set()                    // create an empty set
    boolean isEmpty()        // true if set is empty
    void add(Key key)        // add key to the set
    void remove(Key key)     // remove key from the set
    boolean contains(Key key)// true if key is in the set
    int size()               // number of elements in set
}
```
