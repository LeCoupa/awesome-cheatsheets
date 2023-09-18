#### main() Function

* The main() function is the starting point of the program: `int main (int argc, char *argv[])`
* The return type of the main() function is an integer (type int) and it is known as the `return value` of the program.
* As a rule of thumb, `value 0 means success while non-zero means an error conditions.`

---

### Include Files

* The purpose of these files is to tell the compiler about the `existence of external functions which the source code will make use of.`

---

### Preprocessor directives:

| Directive                   | Description                                        |
|-----------------------------|----------------------------------------------------|
| `#include "mine.h"`         | Search current working directory first.           |
| `#include <stdio.h>`        | Search command line directory, then the system.   |
| `#define TRUE 1`            | Macro substitution, usually use capitals.         |
| `#define min(a,b)`          | Macro substitution with parameters.               |
| `#define abs(a)`            | Macro substitution.                                |
| `#define note /* comment */` | This comment gets inserted every time `note` appears. |
| `backslash \ at end of a line` | Means continue the line.                      |
| `#undef TRUE`               | Undefines a previously defined macro name.       |
| `#error`                    | Stop compiling at this point.                     |
| `#if expression`            | Conditional compilation, starts an `if` structure. |
| `#elif expression`          | Else if expression != 0, compile the following code. |
| `#else`                     | Else, compile the following code.                 |
| `#endif`                    | End of conditional compiling.                     |
| `#ifdef macroname`          | Like `#if`, compiles if `macroname` is defined.   |
| `#ifndef macroname`         | Like `#if`, compiles if `macroname` is undefined. |
| `#line number [filename]`   | Set the origin for `__LINE__` and `__FILE__`.    |
| `#pragma`                   | Gives the compiler commands.                      |

---

### Create and execute a program

In Linux systems: 

    1. Open up a terminal (Ctrl + Alt + T)

    2. Create the program: nano nameProgram.c

    3. Write the program and save it

    4. gcc -o nameExecutable nameProgram.c  (eg: gcc -o nameProgram_output nameProgram.c)

---

### Reserved words (32)

| Term       | Description                                                |
|------------|------------------------------------------------------------|
| `auto`     | Optional local declaration                                 |
| `break`    | Used to exit a loop and used to exit a `switch` statement |
| `case`     | Choice in a `switch` statement                             |
| `char`     | Basic declaration of a type character                     |
| `const`    | Prefix declaration meaning the variable cannot be changed |
| `continue` | Go to the bottom of a loop in `for`, `while`, and `do` loops |
| `default`  | Optional last case of a `switch` statement                 |
| `do`       | Executable statement, `do-while` loop                      |
| `double`   | Basic declaration of double precision floating point       |
| `else`     | Executable statement, part of an "if" structure            |
| `enum`     | Basic declaration of enumeration type                      |
| `extern`   | Prefix declaration meaning the variable is defined externally |
| `float`    | Basic declaration of floating point                        |
| `for`      | Executable statement, `for` loop                            |
| `goto`     | Jump within a function to a label                           |
| `if`       | Executable statement                                        |
| `int`      | Basic declaration of an integer                             |
| `long`     | Prefix declaration applying to many types                  |
| `register` | Prefix declaration meaning to keep a variable in a register |
| `return`   | Executable statement with or without a value               |
| `short`    | Prefix declaration applying to many types                  |
| `signed`   | Prefix declaration applying to some types                  |
| `sizeof`   | Operator applying to variables and types, gives size in bytes |
| `static`   | Prefix declaration to make a local variable static         |
| `struct`   | Declaration of a structure, like a record                  |
| `switch`   | Executable statement for cases                              |
| `typedef`  | Creates a new type name for an existing type               |
| `union`    | Declaration of variables that share the same memory locations |
| `unsigned` | Prefix declaration applying to some types                  |
| `void`     | Declaration of a typeless variable                          |
| `volatile` | Prefix declaration meaning the variable can be changed at any time |
| `while`    | Executable statement, `while` loop or `do-while` loop       |

---

### Basic types

| Type    | Description                                            |
|---------|--------------------------------------------------------|
| `char`  | Character type, usually one byte (a string is an array of `char`) |
| `int`   | Integer type, usually 2 or 4 bytes (default)         |
| `float` | Floating-point type, usually 4 bytes                  |
| `double`| Floating-point type, usually 8 bytes                  |
| `void`  | No type, typeless                                      |
| `enum`  | Enumeration type (user defines the type name)         |

---

### Type modifiers, prefix for basic types

| Modifier   | Description                                            |
|------------|--------------------------------------------------------|
| `signed`   | Has a sign (default)                                  |
| `unsigned` | No sign bit in the variable                           |
| `long`     | Longer version of a type (e.g., `long int`)           |
| `short`    | Shorter version of a type (e.g., `short int`)         |
| `const`    | Variable cannot be modified or stored into            |

---

### Storage Types

| Prefix    | Description                                           |
|-----------|-------------------------------------------------------|
| `auto`    | Local variable (default)                             |
| `static`  | Permanent, exists beyond function scope (not `auto`) |
| `volatile`| Can change from external influences                   |
| `extern`  | Variables are defined elsewhere, externally          |
| `register`| Suggests that the variable should be stored in a register if possible |

---
### Operators

| Operator | Description                                        |
|----------|----------------------------------------------------|
| `( )`    | Grouping parenthesis, function call                |
| `[ ]`    | Array indexing, also `[ ][ ]` etc.                 |
| `->`     | Selector, structure pointer                        |
| `.`      | Select structure element                           |
| `!`      | Relational not, complement, `!a` yields true or false |
| `~`      | Bitwise not, ones complement, `~a`                |
| `++`     | Increment, pre or post to a variable              |
| `--`     | Decrement, pre or post to a variable              |
| `-`      | Unary minus, `-a`                                 |
| `+`      | Unary plus, `+a`                                  |
| `*`      | Indirect, the value of a pointer, `*p` is the value at pointer `p` address |
| `&`      | The memory address, `&b` is the memory address of variable `b` |
| `sizeof` | Size in bytes, `sizeof a` or `sizeof (int)`        |
| `(type)` | Cast, explicit type conversion, `(float)i`, `(*fun)(a, b)`, `(int*)x` |
| `*`      | Multiply, `a * b`                                 |
| `/`      | Divide, `a / b`                                   |
| `%`      | Modulo, `a % b`                                   |
| `+`      | Add, `a + b`                                      |
| `-`      | Subtract, `a - b`                                 |
| `<<`     | Shift left, left operand is shifted left by right operand bits |
| `>>`     | Shift right, left operand is shifted right by right operand bits |
| `<`      | Less than, result is true or false, `a < b`       |
| `<=`     | Less than or equal, result is true or false, `a <= b` |
| `>`      | Greater than, result is true or false, `a > b`    |
| `>=`     | Greater than or equal, result is true or false, `a >= b` |
| `==`     | Equal, result is true or false, `a == b`          |
| `!=`     | Not equal, result is true or false, `a != b`      |
| `&`      | Bitwise and, `a & b`                              |
| `^`      | Bitwise exclusive or, `a ^ b`                     |
| &#124;      | Bitwise or, `a` &#124; `b`                               |
| `&&`     | Relational and, result is true or false, `a < b && c >= d` |
| &#124; &#124;     | Relational or, result is true or false, `a < b` &#124; &#124; `c >= d` |
| `?`      | Ternary conditional, `exp1 ? exp2 : exp3`, result is `exp2` if `exp1` is not 0, else result is `exp3` |
| `=`      | Store                                              |
| `+=`     | Add and store                                     |
| `-=`     | Subtract and store                                |
| `*=`     | Multiply and store                                |
| `/=`     | Divide and store                                  |
| `%=`     | Modulo and store                                  |
| `<<=`    | Shift left and store                              |
| `>>=`    | Shift right and store                             |
| `&=`     | Bitwise and and store                             |
| `^=`     | Bitwise exclusive or and store                    |
| &#124; =     | Bitwise or and store                              |
| `,`      | Separator, as in `(y = x, z = ++x)`               |

---
### Operator precedence
                
#### More precedence

| Associativity | Operators                                         |
|---------------|---------------------------------------------------|
| LR            | `( )`, `[ ]`, `->`, `.`, `x++`, `x--`            |
| RL            | `!`, `~`, `-`, `+`, `++x`, `--x`, `*`, `&`, `sizeof (type)` |
| LR            | `*`, `/`, `%`                                    |
| LR            | `+`, `-`                                         |
| LR            | `<<`, `>>`                                       |
| LR            | `<`, `<=`, `>`, `>=`                             |
| LR            | `==`, `!=`                                       |
| LR            | `&`                                             |
| LR            | `^`                                             |
| LR            | &#124;                                          |
| LR            | `&&`                                            |
| LR            | &#124; &#124;                                   |
| RL            | `? :`                                           |
| RL            | `=`, `+=`, `-=` ,`*=`, `/=`, `%=`, `>>=`, `<<=`, `&=`, `^=`, &#124;= |
| LR            | `,`                                             |


#### Less precedence


---
### Conditional Branching

    if ( condition ) statement ;
    else statement_2 ;            /* optional  else  clause */

---

### Switch statement

    switch ( expression )      /* constants must be unique */
      {
          case constant_1:       /* do nothing for this case */
             break;
          case constant_2:       /* drop through and do same constant_3 */
          case constant_3:
             statement_sequence  /* can have but does not need  { } */
             break;
          case constant_4:
             statement_sequence  /* does this and next statement_sequence also*/
          case constant_5:
             statement_sequence
             break;
          default:               /* default executes if no constant equals*/
             statement_sequence  /* the expression. This is optional */
     }

---