# *****************************************************************************
# Introduction to TypeScript
# *****************************************************************************

# What is TypeScript?
# TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
# It's a superset of JavaScript, which means all JavaScript code is valid TypeScript, but TypeScript has additional features like static typing, interfaces, and generics.

# Why Use TypeScript?
# - Provides type safety on top of the JavaScript, reducing runtime errors.
# - Makes the code more readable and maintainable.
# - Offers great tooling support with IntelliSense in popular editors.
# - Facilitates easier refactoring and debugging.

# *****************************************************************************
# Installing TypeScript
# *****************************************************************************

# Prerequisites:
# - Ensure Node.js is installed on your system. If not, download and install it from https://nodejs.org/

# Installation:
# - TypeScript can be installed as a Node.js package globally or in your project using npm (Node Package Manager).
# - To install TypeScript globally, use the following command in your terminal:
npm install -g typescript

# Checking Installation:
# - To verify that TypeScript has been installed correctly, you can check its version:
tsc --version

# Compiling TypeScript to JavaScript:
# - Once installed, you can compile .ts files to .js using the TypeScript compiler. For example:
tsc hello.ts

# *****************************************************************************
# Basic Syntax and Data Types
# *****************************************************************************

// Boolean type
let isDone: boolean = false;

// Number type
let decimal: number = 6;

// String type
let color: string = "blue";

// Array type
let list: number[] = [1, 2, 3];

// Tuple type
let tuple: [string, number] = ["hello", 10];

// Enum type
enum Color { Red, Green, Blue }

// Any type
let notSure: any = 4;

// Void type
let unusable: void = undefined;

// Null and Undefined
let u: undefined = undefined;
let n: null = null;

# *****************************************************************************
# Functions
# *****************************************************************************

// Function with no return type
function warnUser(): void { /* ... */ }

// Function with return type
function buildName(firstName: string, lastName: string): string { /* ... */ }

// Function with optional parameters
function buildNameOptional(firstName: string, lastName?: string): string { /* ... */ }

// Function with default parameters
function buildNameDefault(firstName: string, lastName = "Smith"): string { /* ... */ }

# *****************************************************************************
# Interfaces
# *****************************************************************************

// Simple interface
interface LabelledValue {
    label: string;
}

// Function in an interface
interface SearchFunc {
    (source: string, subString: string): boolean;
}

// Indexable types
interface StringArray {
    [index: number]: string;
}

// Class types in interfaces
interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
}

# *****************************************************************************
# Classes
# *****************************************************************************

// Basic class
class Greeter {
    greeting: string;
    constructor(message: string) { this.greeting = message; }
    greet() { return "Hello, " + this.greeting; }
}

// Inheritance
class Animal {
    move(distanceInMeters: number = 0) { /* ... */ }
}
class Dog extends Animal {
    bark() { /* ... */ }
}

// Class with interfaces
class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date) { this.currentTime = d; }
}

# *****************************************************************************
# Advanced Types
# *****************************************************************************

// Union types
function padLeft(value: string, padding: string | number) { /* ... */ }

// Intersection types
interface BusinessPartner {
    name: string;
    credit: number;
}
type Contact = BusinessPartner & { email: string };

// Type guards
function isFish(pet: Fish | Bird): pet is Fish { /* ... */ }

// Nullable types
function f(sn: string | null): string { /* ... */ }

// Type Aliases
type NameOrNameArray = string | string[];

// Generics
function identity<T>(arg: T): T { return arg; }

# *****************************************************************************
# Enums and Namespaces
# *****************************************************************************

// Numeric enums
enum Direction { Up = 1, Down, Left, Right }

// String enums
enum Response { No = "NO", Yes = "YES" }

// Namespaces
namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }
}

# *****************************************************************************
# Modules
# *****************************************************************************

// Importing modules
import { moduleName } from "module";

// Exporting from modules
export function someFunction() { /* ... */ }

// Default exports
export default class SomeType { /* ... */ }

# *****************************************************************************
# Decorators
# *****************************************************************************

// Class decorator
function sealed(constructor: Function) { /* ... */ }

// Method decorator
function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) { /* ... */ };
}

// Accessor decorator
function configurable(value: boolean) { /* ... */ }

# *****************************************************************************
# Type Assertions
# *****************************************************************************

let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

# *****************************************************************************
# Miscellaneous
# *****************************************************************************

// Type inference
let x = 3; // `x` will be inferred as `number`

// Type compatibility
interface Named {
    name: string;
}
let x: Named;
let y = { name: "Alice", location: "Seattle" };
x = y; // OK

// Ambient declarations
declare var $: JQuery;
