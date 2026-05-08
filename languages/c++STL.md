
## C++ STL

STL is a collection of pre-built classes and functions that make it easy to manage data using common data structures like vectors, stacks, and maps. It saves time and effort by providing ready-to-use, efficient algorithms and containers.

### Quick Start - Include All STL Libraries

```cpp
#include <bits/stdc++.h>  // Includes all standard C++ libraries
```

**Note:** `bits/stdc++.h` is a non-standard header that includes most of the standard C++ library headers. It's commonly used in competitive programming and for quick prototyping, but should be avoided in production code for better compilation times and explicit dependencies.

## Containers

Containers are like a bucket which can store a collection of object. These containers manage the object and provides methods to access the members and perform operation on it.

### Array 

Arrays are fixed-size sequence containers: they hold a specific number of elements ordered in a strict linear sequence.


template < class T, size_t N > class array;

- array<int, 5> ar1{{3, 4, 5, 1, 2}}
- array<int, 5> ar2 = {1, 2, 3, 4, 5};
- array<string, 2> ar3 = {{string("a"), "b"}};

#### Methods:
- begin()           # return an iterator to the begining of array
- end()             # return an iterator to the end of array
- rbegin()          # return an iterator to the reverse begining
- rend()            # return an iterator to the reverse end
- cbegin()          # return an constant pointer to begining
- cend()            # return a contant pointer to end
- crbegin()         # return a contant pointer to reverse begining
- crend()           # return a constant pointer to reverse end
- size()            # return the size of the array
- empty()           # return a boolean telling whether array is empty or not. true if array is empty, false if array is not empty
- fill(value)       # fill the array with the value 

### Vector

Vectors are dynamic sized arrays that can grow and shrink at runtime. They provide random access, automatic memory management, and efficient insertion/deletion at the end.

#### Declaration & Initialization:
```cpp
vector<int> v1;                           # Empty vector
vector<int> v2(5);                        # 5 elements, all 0
vector<int> v3(5, 10);                    # 5 elements, all 10
vector<int> v4{1, 2, 3, 4, 5};            # Initialized with values
vector<int> v5(v4);                       # Copy constructor
vector<string> words(10);                 # Vector with 10 empty strings
vector<double> prices{1.99, 2.99, 3.99}; # Initialized vector
```

#### Size & Capacity:
- `size()`           # Number of elements
- `empty()`          # Check if vector is empty
- `resize(n)`        # Resize to n elements
- `resize(n, value)` # Resize to n, fill new with value

#### Element Access:
- `v[index]`         # Access element (no bounds checking)
- `v.at(index)`      # Access element (with bounds checking)
- `front()`          # First element
- `back()`           # Last element

#### Adding Elements:
- `push_back(value)`  # Add element to end
- `insert(pos, value)` # Insert value at position

#### Removing Elements:
- `pop_back()`        # Remove last element
- `erase(pos)`        # Remove element at position
- `clear()`           # Remove all elements

#### Iterators:
- `begin()`           # Iterator to first element
- `end()`             # Iterator to past-the-end
- `rbegin()`          # Reverse iterator to last element
- `rend()`            # Reverse iterator to before-first
- `cbegin()`          # Const iterator to first element
- `cend()`            # Const iterator to past-the-end
- `crbegin()`         # Const reverse iterator to last
- `crend()`           # Const reverse iterator to before-first

#### Common Algorithms (with #include <algorithm>):
- `find(v.begin(), v.end(), value)`           # Find first occurrence
- `count(v.begin(), v.end(), value)`          # Count occurrences
- `sort(v.begin(), v.end())`                  # Sort in ascending order
- `reverse(v.begin(), v.end())`               # Reverse order
- `unique(v.begin(), v.end())`                # Remove consecutive duplicates
- `binary_search(v.begin(), v.end(), value)`  # Binary search (sorted)
- `lower_bound(v.begin(), v.end(), value)`    # First element >= value
- `upper_bound(v.begin(), v.end(), value)`    # First element > value

#### Performance:
- Access: O(1)                    # constant time
- Search: O(n)                    # linear time
- Insertion at end: O(1) amortized
- Insertion at beginning/middle: O(n)
- Deletion at end: O(1)
- Deletion at beginning/middle: O(n)

### Map

Maps are associative containers that store elements in key-value pairs. Keys are unique and sorted, providing fast lookup, insertion, and deletion operations.

#### Declaration & Initialization:
```cpp
map<string, int> m1;                           # Empty map
map<string, int> m2{{"apple", 5}, {"banana", 3}}; # Initialized map
map<int, string> m3{{1, "one"}, {2, "two"}};  # Integer keys
map<string, vector<int>> m4;                   # Complex value types
map<string, int> m5(m2);                       # Copy constructor
```

#### Size & Capacity:
- `size()`           # Number of key-value pairs
- `empty()`          # Check if map is empty

#### Element Access:
- `m[key]`           # Access element (creates if not exists)
- `m.find(key)`      # Returns iterator to element or end()
- `m.count(key)`     # Returns 1 if key exists, 0 otherwise

#### Adding Elements:
- `insert(pair)`     # Insert key-value pair
- `insert({key, value})` # Insert using initializer list
- `m[key] = value`   # Assignment operator

#### Removing Elements:
- `erase(key)`       # Remove element by key
- `clear()`          # Remove all elements

#### Iterators:
- `begin()`          # Iterator to first element
- `end()`            # Iterator to past-the-end
- `rbegin()`         # Reverse iterator to last element
- `rend()`           # Reverse iterator to before-first
- `cbegin()`         # Const iterator to first element
- `cend()`           # Const iterator to past-the-end
- `crbegin()`        # Const reverse iterator to last
- `crend()`          # Const reverse iterator to before-first

#### Common Algorithms (with #include <algorithm>):
- `count_if(m.begin(), m.end(), predicate)` # Count elements matching condition
- `for_each(m.begin(), m.end(), function)`  # Apply function to each element
- `transform(m.begin(), m.end(), result, op)` # Transform elements

#### Performance:
- Access: O(log n)               # logarithmic time
- Search: O(log n)               # logarithmic time
- Insertion: O(log n)            # logarithmic time
- Deletion: O(log n)             # logarithmic time
- Space: O(n)                    # linear space

### Unordered Map

Unordered maps are hash table-based associative containers that store elements in key-value pairs. Keys are unique but **not sorted**, providing average O(1) operations for lookup, insertion, and deletion.

**Key Difference from Map:** Elements are **not ordered** by key. All methods remain the same as `map`.

#### Declaration & Initialization:
```cpp
unordered_map<string, int> um1;                    # Empty unordered map
unordered_map<string, int> um2{{"apple", 5}, {"banana", 3}}; # Initialized map
unordered_map<int, string> um3{{1, "one"}, {2, "two"}}; # Integer keys
unordered_map<string, vector<int>> um4;            # Complex value types
unordered_map<string, int> um5(um2);               # Copy constructor
```

#### Performance:
- Access: O(1) average, O(n) worst case    # constant average time
- Search: O(1) average, O(n) worst case    # constant average time
- Insertion: O(1) average, O(n) worst case # constant average time
- Deletion: O(1) average, O(n) worst case  # constant average time
- Space: O(n)                              # linear space

### Set

Sets are associative containers that store unique elements in sorted order. Elements are automatically sorted and duplicates are not allowed.

#### Declaration & Initialization:
```cpp
set<int> s1;                               # Empty set
set<int> s2{3, 1, 4, 1, 5, 9, 2, 6};      # Initialized set (duplicates removed)
set<string> s3{"apple", "banana", "cherry"}; # String set
set<int> s4(s2);                           # Copy constructor
set<int> s5(s2.begin(), s2.end());         # Range constructor
```

#### Size & Capacity:
- `size()`           # Number of elements
- `empty()`          # Check if set is empty

#### Element Access:
- `find(value)`      # Returns iterator to element or end()
- `count(value)`     # Returns 1 if element exists, 0 otherwise
- `lower_bound(value)` # First element >= value
- `upper_bound(value)` # First element > value

#### Adding Elements:
- `insert(value)`    # Insert element
- `insert({val1, val2, val3})` # Insert multiple elements

#### Removing Elements:
- `erase(value)`     # Remove element by value
- `clear()`          # Remove all elements

#### Iterators:
- `begin()`          # Iterator to first element
- `end()`            # Iterator to past-the-end
- `rbegin()`         # Reverse iterator to last element
- `rend()`           # Reverse iterator to before-first
- `cbegin()`         # Const iterator to first element
- `cend()`           # Const iterator to past-the-end
- `crbegin()`        # Const reverse iterator to last
- `crend()`          # Const reverse iterator to before-first

#### Common Algorithms (with #include <algorithm>):
- `count_if(s.begin(), s.end(), predicate)` # Count elements matching condition
- `for_each(s.begin(), s.end(), function)`  # Apply function to each element
- `transform(s.begin(), s.end(), result, op)` # Transform elements

#### Performance:
- Access: O(log n)               # logarithmic time
- Search: O(log n)               # logarithmic time
- Insertion: O(log n)            # logarithmic time
- Deletion: O(log n)             # logarithmic time
- Space: O(n)                    # linear space

### Stack

Stacks are container adapters that follow LIFO (Last In, First Out) principle. Elements are added and removed only from the top of the stack.

#### Declaration & Initialization:
```cpp
stack<int> s1;                   # Empty stack
stack<int> s2;                   # Stack with default container (deque)
stack<int, vector<int>> s3;      # Stack using vector as underlying container
stack<int, list<int>> s4;        # Stack using list as underlying container
```

#### Size & Capacity:
- `size()`           # Number of elements
- `empty()`          # Check if stack is empty

#### Element Access:
- `top()`            # Access top element (does not remove)

#### Adding Elements:
- `push(value)`      # Add element to top

#### Removing Elements:
- `pop()`            # Remove top element (does not return value)

#### Performance:
- Access: O(1)                   # constant time
- Insertion: O(1)                # constant time
- Deletion: O(1)                 # constant time
- Space: O(n)                    # linear space

### Queue

Queues are container adapters that follow FIFO (First In, First Out) principle. Elements are added at the back and removed from the front.

#### Declaration & Initialization:
```cpp
queue<int> q1;                   # Empty queue
queue<int> q2;                   # Queue with default container (deque)
queue<int, list<int>> q3;        # Queue using list as underlying container
queue<int, vector<int>> q4;      # Queue using vector as underlying container
```

#### Size & Capacity:
- `size()`           # Number of elements
- `empty()`          # Check if queue is empty

#### Element Access:
- `front()`          # Access front element (does not remove)
- `back()`           # Access back element (does not remove)

#### Adding Elements:
- `push(value)`      # Add element to back

#### Removing Elements:
- `pop()`            # Remove front element (does not return value)

#### Performance:
- Access: O(1)                   # constant time
- Insertion: O(1)                # constant time
- Deletion: O(1)                 # constant time
- Space: O(n)                    # linear space

### Deque

Deque (double-ended queue) is a sequence container that allows efficient insertion and deletion at both ends. Unlike queue, deque provides random access and can grow in both directions.

**Key Differences from Queue:**
- **Random access** - Can access any element by index
- **Bidirectional growth** - Can add/remove from both ends
- **Not a container adapter** - Direct container implementation

#### Extra Methods (beyond queue):
- `push_front(value)` # Add element to front
- `pop_front()`       # Remove element from front
- `pop_back()`        # Remove element from back
- `at(index)`         # Access element at index with bounds checking
- `operator[index]`   # Access element at index
- `insert(pos, value)` # Insert element at position
- `erase(pos)`        # Remove element at position

### Priority Queue

Priority queues are container adapters that provide constant time lookup of the largest (or smallest) element. They are implemented as heaps and maintain elements in a specific order based on priority.

#### Heap Types:
- **Max Heap** - Largest element at the top (default)
- **Min Heap** - Smallest element at the top

#### Declaration & Initialization:
```cpp
// Max Heap (default)
priority_queue<int> pq1;                    # Empty max heap
priority_queue<int> pq2{3, 1, 4, 1, 5};    # Max heap with values

// Min Heap
priority_queue<int, vector<int>, greater<int>> pq3; # Empty min heap
priority_queue<int, vector<int>, greater<int>> pq4{3, 1, 4, 1, 5}; # Min heap with values

// Custom comparator
auto cmp = [](int a, int b) { return a > b; };
priority_queue<int, vector<int>, decltype(cmp)> pq5(cmp); # Custom min heap
```

#### Size & Capacity:
- `size()`           # Number of elements
- `empty()`          # Check if priority queue is empty

#### Element Access:
- `top()`            # Access top element (highest priority)

#### Adding Elements:
- `push(value)`      # Add element

#### Removing Elements:
- `pop()`            # Remove top element (does not return value)

#### Performance:
- Access: O(1)                   # constant time
- Insertion: O(log n)            # logarithmic time
- Deletion: O(log n)             # logarithmic time
- Space: O(n)                    # linear space