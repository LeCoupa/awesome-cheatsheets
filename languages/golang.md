# Golang

## Summary

- Introduction
    - [Hello World](#hello-world)
    - [Go CLI Commands](#go-cli-commands)
    - [Go Modules](#go-modules)
- Syntax
    - [Basic Types](#basic-types)
    - [Variables](#variables)

## Hello World

```go
package main 

import "fmt"

func main() {
    fmt.Println("Hello World!")
}
```

## Go CLI Commands

```bash
# Compile & Run code
$ go run [file.go]

# Compile
$ go build [file.go]
# Running compiled file
$ ./hello 

# Test packages
$ go test [folder]

# Install packages/modules
$ go install [package]

# List installed packages/modules
$ go list

# Update packages/modules
$ go fix

# Format package sources
$ go fmt

# See package documentation
$ go doc [package]

# Add dependencies and install
$ go get [module]

# See Go environment variables
$ go env

# See version
$ go version
```

## Go Modules

- Go projects are called **modules**
- Each module has multiple **packages**
- Each package should has a scoped functionality. Packages talk to each other to compose the code
- A module needs at least one package, the **main**
- The package main needs a entry function called **main**

```bash
# Create Module
$ go mod init [name] 
```
Tip: By convention, modules names has the follow structure:

domain.com/user/module/package

Example: github.com/spf13/cobra

## Basic Types

|   Type    |   Set of Values   |   Values  |
|:---------:|:-----------------:|:---------:|
| bool | boolean | true/false |
| string | array of characters | needs to be inside "" |
| int | integers | 32 or 64 bit integer |
| int8 | 8-bit integers | [ -128, 128 ] |
| int16 | 16-bit integers | [ -32768, 32767] |
| int32 | 32-bit integers | [ -2147483648, 2147483647] |
| int64 | 64-bit integers | [ -9223372036854775808, 9223372036854775807 ] |
| uint8 | 8-bit unsigned integers | [ 0, 255 ] |
| uint16 | 16-bit unsigned integers | [ 0, 65535 ] |
| uint32 | 32-bit unsigned integers | [ 0, 4294967295 ] |
| uint64 | 64-bit unsigned integers | [ 0, 18446744073709551615 ] |
| float32 | 32-bit float |  |
| float64 | 64-bit float |  |
| complex64 | 32-bit float with real and imaginary parts |  |
| complex128 | 64-bit float with real and imaginary parts |  |
| byte | sets of bits | alias for uint8  |
| rune | Unicode characters | alias for int32 |

## Variables

```go
// Declaration
var int value 

// Initialization
value = 10

// Declaration + Initialization + Type inference
var isActive = true

// Short declaration (only inside functions)
text := "Hello"

// Multi declaration
var i, j, k = 1, 2, 3

// Variable not initialized = Zero values
// Numeric: 0
// Boolean: false
// String: ""

var number int // 0
var text string // false
var boolean bool // ""

// Type conversions
// T(v) converts v to type T

i := 1.234 // float
int(i) // 1
```