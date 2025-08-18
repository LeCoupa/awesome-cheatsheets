# TypeScript

* TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript

* It adds optional static type definitions to JavaScript, enabling better tooling and error detection

* In TypeScript, types are checked at compile-time, not runtime

* A TypeScript file has an extension of .ts (or .tsx for React components)

* TypeScript follows JavaScript syntax but adds type annotations and advanced features

* We can compile and run a TypeScript file by the following commands:

    `$ tsc filename.ts` (compile to JavaScript)
    `$ node filename.js` (run the compiled JavaScript)
    
    Or directly: `$ ts-node filename.ts`

#### TypeScript requires compilation to JavaScript before execution.

## Create and execute a program

1. Install TypeScript globally: `npm install -g typescript`
1. Create the program: `touch program.ts`
1. Write the TypeScript code and save it
1. Compile: `tsc program.ts`
1. Run: `node program.js`

<br>

### Basic Data Types

| Data Type | Description | Example |
| --------- | ----------- | ------- |
| number | Integer and floating point values | `42`, `3.14`, `-7` |
| string | Text values | `"hello"`, `'world'`, `` `template` `` |
| boolean | True/false values | `true`, `false` |
| undefined | Undefined value | `undefined` |
| null | Null value | `null` |
| any | Any type (disables type checking) | Can be anything |
| unknown | Type-safe counterpart of any | Requires type checking |
| void | Absence of any type | Function return type |
| never | Type that never occurs | Functions that throw errors |
| object | Non-primitive types | `{}`, `[]`, functions |

<br>

## Keywords and Reserved Words
<br>

- TypeScript includes all JavaScript keywords plus additional TypeScript-specific ones

| Keyword | Description  | Category |
|---------- | ---------- | --------- |
| let | Declares a block-scoped variable | Variable Declaration |
| const | Declares a block-scoped constant | Variable Declaration |
| var | Declares a function-scoped variable | Variable Declaration |
| function | Declares a function | Function |
| class | Declares a class | Class |
| interface | Declares an interface | Type Definition |
| type | Declares a type alias | Type Definition |
| enum | Declares an enumeration | Type Definition |
| namespace | Declares a namespace | Module System |
| module | Declares a module | Module System |
| import | Imports from another module | Module System |
| export | Exports from current module | Module System |
| extends | Class/interface inheritance | Inheritance |
| implements | Class implements interface | Inheritance |
| public | Public access modifier | Access Modifier |
| private | Private access modifier | Access Modifier |
| protected | Protected access modifier | Access Modifier |
| readonly | Read-only property | Access Modifier |
| static | Static class member | Class Member |
| abstract | Abstract class/method | Class |
| async | Asynchronous function | Async Programming |
| await | Awaits a promise | Async Programming |
| new | Creates new instance | Object Creation |
| this | Current object reference | Object Reference |
| super | Parent class reference | Inheritance |
| typeof | Gets type of variable | Type Operation |
| keyof | Gets keys of type | Type Operation |
| in | Property existence check | Type Guard |
| instanceof | Instance type check | Type Guard |
| as | Type assertion | Type Assertion |
| is | Type predicate | Type Guard |
| infer | Infers type in conditional types | Advanced Types |
| declare | Ambient declarations | Declaration |
| get | Property getter | Accessor |
| set | Property setter | Accessor |
| yield | Generator yield | Generator |

<br>

## Operators

<br>

| Operator | Description |
|-|-|
|  ( )	|  Grouping, function call, type assertion |
|  [ ]	|  Array indexing, array/tuple types |
|  .	|  Property access |
|  ?.   | 	Optional chaining |
| !   |	Non-null assertion, logical not |
|  ~   | 	Bitwise not |
| \-   |	Unary minus, arithmetic subtraction |
|  \+   | 	Unary plus, arithmetic addition |
|  \*   |	Multiplication |
|  /   	| Division |
|  %    |	Modulo |
|  \*\* | Exponentiation |
| <<   | Left shift |
| \>>   |	Right shift |
| \>>>   |	Unsigned right shift |
 | <    |	Less than |
| <=   |	Less than or equal |
| \>    |	Greater than |
| \>=   |	Greater than or equal |
|  ==   |	Equality (with coercion) |
|  ===   |	Strict equality |
| !=  | 	Inequality (with coercion) |
| !==  | 	Strict inequality |
|  & | Bitwise AND |
| ^ | Bitwise XOR |
| \| | Bitwise OR, Union types |
|  && | Logical AND |
| \|\| | Logical OR |
| ??   | Nullish coalescing |
| ? :  | Ternary conditional |
| =  | Assignment |
|  += | Add and assign |
|  -=  | Subtract and assign |
|  *= | Multiply and assign |
|  /= | Divide and assign |
|  %= | Modulo and assign |
| **= | Exponentiate and assign |
| <<= | Left shift and assign |
|  \>>= | Right shift and assign |
|  &= | Bitwise AND and assign |
|  ^= | Bitwise XOR and assign |
|  \|= | Bitwise OR and assign |
|  , | Comma operator |
| => | Arrow function |
| ... | Spread/rest operator |

### Basic Data Structures

### Array

- Array is an ordered collection of elements of the same or different types.

- Arrays are created using square brackets or Array constructor:

```typescript
let numbers: number[] = [1, 2, 3, 4];
let fruits: Array<string> = ["apple", "banana", "cherry"];
let mixed: (string | number)[] = [1, "two", 3];
```

- Array elements are indexed starting from 0.

- Arrays are mutable - you can change, add, and remove elements.

- Common array methods:
```typescript
let arr = [1, 2, 3];
arr.push(4);        // Add to end: [1, 2, 3, 4]
arr.pop();          // Remove from end: [1, 2, 3]
arr.unshift(0);     // Add to start: [0, 1, 2, 3]
arr.shift();        // Remove from start: [1, 2, 3]
arr.length;         // Get length: 3
```

### Tuple

- Tuple is an array with a fixed number of elements of specific types.

- Tuples are created using square brackets with type annotations:
```typescript
let person: [string, number] = ["John", 30];
let coordinate: [number, number] = [10, 20];
```

- Tuple elements are ordered and have specific types at each position.

- You can access elements by index, but type checking ensures correctness:
```typescript
let point: [number, number] = [10, 20];
console.log(point[0]); // 10 (number)
console.log(point[1]); // 20 (number)
```

- Named tuples provide better readability:
```typescript
let user: [name: string, age: number] = ["Alice", 25];
```

- Optional and rest elements in tuples:
```typescript
let optional: [string, number?] = ["hello"];
let rest: [string, ...number[]] = ["coords", 1, 2, 3];
```

### Set

- Set is a collection of unique values of any type.

- Sets are created using the Set constructor:
```typescript
let uniqueNumbers = new Set<number>([1, 2, 3, 2]); // {1, 2, 3}
let stringSet = new Set<string>();
```

- Set operations:
```typescript
let mySet = new Set<string>();
mySet.add("apple");     // Add element
mySet.has("apple");     // Check existence: true
mySet.delete("apple");  // Remove element
mySet.clear();          // Remove all elements
mySet.size;             // Get size
```

- Iterating over Set:
```typescript
let fruits = new Set(["apple", "banana", "cherry"]);
for (let fruit of fruits) {
    console.log(fruit);
}
```

### Map

- Map is a collection of key-value pairs where keys can be any type.

- Maps are created using the Map constructor:
```typescript
let userMap = new Map<string, number>();
let mixedMap = new Map<string | number, any>();
```

- Map operations:
```typescript
let map = new Map<string, number>();
map.set("age", 30);         // Add key-value pair
map.get("age");             // Get value: 30
map.has("age");             // Check key exists: true
map.delete("age");          // Remove key-value pair
map.clear();                // Remove all entries
map.size;                   // Get size
```

- Object vs Map:
```typescript
// Object - string/symbol keys only
let obj: { [key: string]: number } = { "age": 30 };

// Map - any type keys
let map = new Map<any, number>();
map.set("age", 30);
map.set(42, 100);
map.set(true, 1);
```

### Object Types and Interfaces

- Objects store key-value pairs and are fundamental to TypeScript.

- Object type annotation:
```typescript
let person: { name: string; age: number } = {
    name: "John",
    age: 30
};
```

- Interface definition for better reusability:
```typescript
interface User {
    readonly id: number;    // Read-only property
    name: string;
    age?: number;          // Optional property
    [key: string]: any;    // Index signature
}

let user: User = {
    id: 1,
    name: "Alice"
};
```

- Nested objects and complex types:
```typescript
interface Address {
    street: string;
    city: string;
    country: string;
}

interface Person {
    name: string;
    address: Address;
    hobbies: string[];
}
```

### Conditional branching

```typescript
// If-else statements
if (condition) {
    // code block
} else if (anotherCondition) {
    // code block
} else {
    // code block
}

// Ternary operator
let result = condition ? valueIfTrue : valueIfFalse;

// Switch statement
switch (variable) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // code
        break;
}
```

### Loops

TypeScript supports all JavaScript loop constructs:

#### For loop
```typescript
// Traditional for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// For-of loop (iterates over values)
let fruits = ["apple", "banana", "cherry"];
for (let fruit of fruits) {
    console.log(fruit);
}

// For-in loop (iterates over keys/indices)
for (let index in fruits) {
    console.log(index, fruits[index]);
}
```

#### While loop
```typescript
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
```

#### Loop control
```typescript
for (let i = 0; i < 10; i++) {
    if (i === 3) continue;  // Skip iteration
    if (i === 7) break;     // Exit loop
    console.log(i);
}
```

### Function definition

```typescript
// Function declaration
function functionName(param1: type, param2: type): returnType {
    return value;
}

// Function expression
const functionName = function(param: type): returnType {
    return value;
};

// Arrow function
const functionName = (param: type): returnType => {
    return value;
};

// Arrow function (concise)
const functionName = (param: type): returnType => value;
```

### Function variations

```typescript
// Optional parameters
function greet(name: string, age?: number): string {
    return age ? `Hello ${name}, you are ${age}` : `Hello ${name}`;
}

// Default parameters
function multiply(a: number, b: number = 1): number {
    return a * b;
}

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, num) => total + num, 0);
}

// Function overloads
function process(input: string): string;
function process(input: number): number;
function process(input: string | number): string | number {
    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    return input * 2;
}

// Generic functions
function identity<T>(arg: T): T {
    return arg;
}

let result = identity<string>("hello"); // Type is string
let result2 = identity(42);             // Type inferred as number
```

### Function call

```typescript
functionName(argument1, argument2);

// With optional parameters
greet("John");          // "Hello John"
greet("John", 25);      // "Hello John, you are 25"

// With rest parameters
sum(1, 2, 3, 4);        // 10

// Generic function call
identity<string>("hello");
identity(42);           // Type inferred
```

### Classes

```typescript
class ClassName {
    // Properties
    public publicProperty: type;
    private privateProperty: type;
    protected protectedProperty: type;
    readonly readonlyProperty: type;
    static staticProperty: type;

    // Constructor
    constructor(param: type) {
        this.publicProperty = param;
    }

    // Methods
    public method(): returnType {
        return value;
    }

    // Getters and setters
    get property(): type {
        return this.privateProperty;
    }

    set property(value: type) {
        this.privateProperty = value;
    }

    // Static method
    static staticMethod(): returnType {
        return value;
    }
}

// Inheritance
class ChildClass extends ParentClass {
    constructor(param: type) {
        super(param); // Call parent constructor
    }

    // Override method
    method(): returnType {
        return super.method(); // Call parent method
    }
}

// Abstract class
abstract class AbstractClass {
    abstract abstractMethod(): void;
    
    concreteMethod(): void {
        console.log("This is implemented");
    }
}
```

### Key TypeScript Features

* **Static Typing**: Types are checked at compile-time
* **Type Inference**: TypeScript can often infer types automatically
* **Optional Typing**: You can gradually add types to existing JavaScript
* **Generics**: Create reusable components that work with multiple types
* **Interfaces**: Define contracts for objects and classes
* **Enums**: Create named constants
* **Union Types**: Variables can be one of several types
* **Intersection Types**: Combine multiple types
* **Type Guards**: Runtime type checking
* **Decorators**: Add metadata to classes and methods

### Compilation

* TypeScript code must be compiled to JavaScript before execution
* The TypeScript compiler (`tsc`) performs type checking and transpilation
* Configuration is managed through `tsconfig.json`
* TypeScript can target different JavaScript versions (ES5, ES6, etc.)
* Source maps can be generated for debugging compiled code

#### Sample TypeScript Code

**hello.ts**
```typescript
// TypeScript source code
interface User {
    name: string;
    age: number;
    isActive?: boolean;
}

class UserManager {
    private users: User[] = [];

    addUser(user: User): void {
        this.users.push(user);
        console.log(`Added user: ${user.name}`);
    }

    getActiveUsers(): User[] {
        return this.users.filter(user => user.isActive ?? true);
    }

    getUserCount(): number {
        return this.users.length;
    }
}

// Generic function
function processData<T>(data: T[], processor: (item: T) => T): T[] {
    return data.map(processor);
}

// Usage
const userManager = new UserManager();

const newUser: User = {
    name: "John Doe",
    age: 30,
    isActive: true
};

userManager.addUser(newUser);

// Arrow functions with types
const formatUser = (user: User): string => 
    `${user.name} (${user.age} years old)`;

// Union types and type guards
function displayInfo(value: string | number | boolean): string {
    if (typeof value === "string") {
        return `Text: ${value.toUpperCase()}`;
    } else if (typeof value === "number") {
        return `Number: ${value.toFixed(2)}`;
    } else {
        return `Boolean: ${value ? "Yes" : "No"}`;
    }
}

console.log(displayInfo("hello"));
console.log(displayInfo(42.567));
console.log(displayInfo(true));
```

#### Compilation Commands

```bash
# Compile single file
tsc hello.ts

# Compile with specific target
tsc hello.ts --target ES2020

# Compile with source maps
tsc hello.ts --sourceMap

# Watch mode (recompile on changes)
tsc hello.ts --watch

# Compile all files in project
tsc

# Check for errors without generating files
tsc --noEmit

# Compile with strict mode
tsc hello.ts --strict
```

#### Compiled JavaScript Output

**hello.js** (compiled from above TypeScript)
```javascript
"use strict";
// JavaScript output (target ES2017)
class UserManager {
    constructor() {
        this.users = [];
    }
    addUser(user) {
        this.users.push(user);
        console.log(`Added user: ${user.name}`);
    }
    getActiveUsers() {
        return this.users.filter(user => user.isActive ?? true);
    }
    getUserCount() {
        return this.users.length;
    }
}
// Generic function (types removed)
function processData(data, processor) {
    return data.map(processor);
}
// Usage
const userManager = new UserManager();
const newUser = {
    name: "John Doe",
    age: 30,
    isActive: true
};
userManager.addUser(newUser);
// Arrow functions
const formatUser = (user) => `${user.name} (${user.age} years old)`;
// Type guards remain as runtime checks
function displayInfo(value) {
    if (typeof value === "string") {
        return `Text: ${value.toUpperCase()}`;
    }
    else if (typeof value === "number") {
        return `Number: ${value.toFixed(2)}`;
    }
    else {
        return `Boolean: ${value ? "Yes" : "No"}`;
    }
}
console.log(displayInfo("hello"));
console.log(displayInfo(42.567));
console.log(displayInfo(true));
```

#### tsconfig.json Configuration

```json
{
  "compilerOptions": {
    // Basic Options
    "target": "ES2020",                     // Target JavaScript version
    "module": "commonjs",                   // Module system
    "lib": ["ES2020", "DOM"],              // Include library files
    "outDir": "./dist",                     // Output directory
    "rootDir": "./src",                     // Input directory
    "strict": true,                         // Enable strict type checking
    
    // Additional Checks
    "noUnusedLocals": true,                // Error on unused variables
    "noUnusedParameters": true,            // Error on unused parameters
    "noImplicitReturns": true,             // Error on missing return statements
    "noFallthroughCasesInSwitch": true,    // Error on fallthrough cases
    
    // Module Resolution
    "moduleResolution": "node",             // Module resolution strategy
    "baseUrl": "./",                        // Base directory
    "paths": {                              // Path mapping
      "@/*": ["src/*"],
      "@utils/*": ["src/utils/*"]
    },
    
    // Source Maps & Debugging
    "sourceMap": true,                      // Generate source maps
    "inlineSourceMap": false,               // Don't inline source maps
    "declaration": true,                    // Generate .d.ts files
    "declarationMap": true,                 // Generate .d.ts.map files
    
    // Experimental
    "experimentalDecorators": true,         // Enable decorators
    "emitDecoratorMetadata": true,          // Emit decorator metadata
    
    // JavaScript Support
    "allowJs": true,                        // Allow JavaScript files
    "checkJs": false,                       // Type check JavaScript files
    
    // Other Options
    "esModuleInterop": true,               // CommonJS/ES6 interop
    "skipLibCheck": true,                  // Skip lib.d.ts type checking
    "forceConsistentCasingInFileNames": true, // Consistent file names
    "removeComments": true,                // Remove comments from output
    "noEmitOnError": true                  // Don't emit if there are errors
  },
  "include": [
    "src/**/*",                           // Include all files in src
    "tests/**/*"                          // Include test files
  ],
  "exclude": [
    "node_modules",                       // Exclude node_modules
    "dist",                               // Exclude output directory
    "**/*.test.ts",                       // Exclude test files from compilation
    "**/*.spec.ts"
  ],
  "files": [
    // Explicitly include specific files (optional)
    "src/main.ts"
  ]
}
```

#### Package.json Scripts

```json
{
  "name": "typescript-project",
  "version": "1.0.0",
  "scripts": {
    "build": "tsc",
    "start": "node dist/main.js",
    "dev": "ts-node src/main.ts",
    "watch": "tsc --watch",
    "clean": "rm -rf dist",
    "type-check": "tsc --noEmit"
  },
  "devDependencies": {
    "typescript": "^4.9.0",
    "ts-node": "^10.9.0",
    "@types/node": "^18.0.0"
  }
}
```

#### Compilation Examples with Different Targets

**Original TypeScript:**
```typescript
const greet = (name: string = "World"): string => `Hello, ${name}!`;
const user = { name: "Alice", age: 30 };
const { name, age } = user;
```

**Compiled to ES5:**
```javascript
var greet = function (name) {
    if (name === void 0) { name = "World"; }
    return "Hello, " + name + "!";
};
var user = { name: "Alice", age: 30 };
var name = user.name, age = user.age;
```

**Compiled to ES2020:**
```javascript
const greet = (name = "World") => `Hello, ${name}!`;
const user = { name: "Alice", age: 30 };
const { name, age } = user;
```

#### Error Examples

**TypeScript with errors:**
```typescript
// Type errors that prevent compilation
let message: string = 42;              // Error: Type 'number' is not assignable to type 'string'
let numbers: number[] = ["a", "b"];    // Error: Type 'string' is not assignable to type 'number'

function add(a: number, b: number): number {
    return a + b;
}

add("hello", "world");                 // Error: Argument of type 'string' is not assignable to parameter of type 'number'
```

**Compiler output:**
```bash
$ tsc error-example.ts
error-example.ts(2,5): error TS2322: Type 'number' is not assignable to type 'string'.
error-example.ts(3,5): error TS2322: Type 'string[]' is not assignable to type 'number[]'.
error-example.ts(8,5): error TS2345: Argument of type 'string' is not assignable to parameter of type 'number'.
```
