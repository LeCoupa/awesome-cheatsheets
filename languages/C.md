### main() Function

* The main() function is the starting point of the program: `int main (int argc, char *argv[])`
* The return type of the main() function is an integer (type int) and it is known as the `return value` of the program.
* As a rule of thumb, `value 0 means success while non-zero means an error conditions.`

---

## Include Files

* The purpose of these files is to tell the compiler about the existence of external functions which the source code will make use of.

---

## Preprocessor directives:

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

## Create and execute a program

In Linux systems: 

    1. Open up a terminal (Ctrl + Alt + T)

    2. Create the program: nano nameProgram.c

    3. Write the program and save it

    4. gcc -o nameExecutable nameProgram.c  (eg: gcc -o nameProgram_output nameProgram.c)