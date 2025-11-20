/****************************
 * TYPESCRIPT CHEATSHEET - Quick Reference
 * Learn more: https://www.typescriptlang.org/docs/
 * Playground: https://www.typescriptlang.org/play
 * Handbook: https://www.typescriptlang.org/handbook/
 *
 *  Table of contents
 *  -------------------
 *  01 | Basic Types
 *  02 | Variables & Arrays
 *  03 | Functions
 *  04 | Objects & Interfaces
 *  05 | Classes
 *  06 | Generics
 *  07 | Union & Literal Types
 *  08 | Type Guards & Assertions
 *  09 | Utility Types
 *  10 | Enums
 *  11 | Modules
 *  12 | Advanced Types
 *  13 | Decorators
 *  14 | Configuration
 *  15 | Common Patterns
 *****************************/

/***************************
------------ 01: Basic Types -----------
*******************************/

// Primitive Types
let str: string = "hello";
let num: number = 42;
let bool: boolean = true;
let undef: undefined = undefined;
let nul: null = null;

// Special Types
let anything: any = "can be anything";
let unknown: unknown = "type-safe any";
let nothing: void = undefined;
let never: never = (() => { throw new Error() })();

// Type Inference
let auto = "TypeScript infers string";
let nums = [1, 2, 3]; // number[]

/***************************
------------ 02: Variables & Arrays -----------
*******************************/

// Arrays
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b"];
let mixed: (string | number)[] = [1, "two"];

// Tuples
let tuple: [string, number] = ["hello", 42];
let namedTuple: [name: string, age: number] = ["John", 30];

// Destructuring
let [first, second] = tuple;
let [x, y, ...rest] = [1, 2, 3, 4, 5];

// Object Destructuring
let {name, age} = {name: "John", age: 30};
let {a: newName, b = 10} = {a: "value"}; // rename & default

/***************************
------------ 03: Functions -----------
*******************************/

// Function Declaration
function add(x: number, y: number): number {
  return x + y;
}

// Arrow Functions
const multiply = (x: number, y: number): number => x * y;
const greet = (name: string): void => console.log(`Hello ${name}`);

// Optional & Default Parameters
function build(first: string, last?: string, age = 25): string {
  return `${first} ${last || ""} (${age})`;
}

// Rest Parameters
function sum(...nums: number[]): number {
  return nums.reduce((a, b) => a + b, 0);
}

// Function Overloads
function format(x: string): string;
function format(x: number): string;
function format(x: string | number): string {
  return x.toString();
}

// Function Types
type MathOp = (x: number, y: number) => number;
const divide: MathOp = (x, y) => x / y;

/***************************
------------ 04: Objects & Interfaces -----------
*******************************/

// Object Types
let person: {name: string, age: number} = {name: "John", age: 30};

// Interface
interface User {
  readonly id: number;
  name: string;
  email?: string; // optional
  [key: string]: any; // index signature
}

// Extending Interfaces
interface Admin extends User {
  permissions: string[];
}

// Multiple Inheritance
interface Timestamped {
  createdAt: Date;
}
interface AdminUser extends User, Timestamped {
  role: "admin";
}

// Function in Interface
interface Calculator {
  add(x: number, y: number): number;
  subtract: (x: number, y: number) => number;
}

/***************************
------------ 05: Classes -----------
*******************************/

// Basic Class
class Animal {
  public name: string;
  private age: number;
  protected species: string;
  readonly id: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    this.species = "unknown";
    this.id = Math.random();
  }

  speak(): void {
    console.log(`${this.name} makes a sound`);
  }
}

// Inheritance
class Dog extends Animal {
  breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this.breed = breed;
  }

  speak(): void {
    console.log(`${this.name} barks`);
  }
}

// Abstract Class
abstract class Shape {
  abstract area(): number;
  
  display(): void {
    console.log(`Area: ${this.area()}`);
  }
}

// Static Members
class MathUtils {
  static PI = 3.14159;
  static circle(radius: number): number {
    return 2 * MathUtils.PI * radius;
  }
}

// Getters/Setters
class Person {
  private _age: number = 0;

  get age(): number {
    return this._age;
  }

  set age(value: number) {
    if (value >= 0) this._age = value;
  }
}

/***************************
------------ 06: Generics -----------
*******************************/

// Generic Functions
function identity<T>(arg: T): T { return arg; }
const result = identity<string>("hello");
const inferred = identity(42); // T inferred as number

// Multiple Type Parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Generic Interface
interface Container<T> {
  value: T;
  getValue(): T;
}

// Generic Class
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

// Constraints
interface HasLength {
  length: number;
}

function logLength<T extends HasLength>(arg: T): void {
  console.log(arg.length);
}

// Keyof Constraint
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

/***************************
------------ 07: Union & Literal Types -----------
*******************************/

// Union Types
type StringOrNumber = string | number;
type Status = "loading" | "success" | "error";

function process(id: string | number): void {
  if (typeof id === "string") {
    console.log(id.toUpperCase());
  } else {
    console.log(id.toFixed(2));
  }
}

// Intersection Types
type Person = {name: string};
type Employee = {company: string};
type Staff = Person & Employee; // has both properties

// Literal Types
type Theme = "light" | "dark";
type Port = 3000 | 8080 | 9000;
type Success = true;

// Discriminated Unions
interface Circle {
  kind: "circle";
  radius: number;
}
interface Square {
  kind: "square";
  sideLength: number;
}
type Shape = Circle | Square;

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
  }
}

/***************************
------------ 08: Type Guards & Assertions -----------
*******************************/

// Type Guards
function isString(value: any): value is string {
  return typeof value === "string";
}

function isNumber(value: any): value is number {
  return typeof value === "number";
}

// Using Type Guards
function process(value: string | number) {
  if (isString(value)) {
    console.log(value.toUpperCase()); // TypeScript knows it's string
  } else {
    console.log(value.toFixed(2)); // TypeScript knows it's number
  }
}

// in operator
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    animal.swim(); // Fish
  } else {
    animal.fly(); // Bird
  }
}

// instanceof
function handleError(error: Error | string) {
  if (error instanceof Error) {
    console.log(error.message);
  } else {
    console.log(error);
  }
}

// Type Assertions
let someValue: any = "hello world";
let strLength = (someValue as string).length;
// or: let strLength = (<string>someValue).length;

// Non-null Assertion
let name: string | null = getName();
let nameLength = name!.length; // Assert name is not null

/***************************
------------ 09: Utility Types -----------
*******************************/

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

// Partial<T> - All properties optional
type PartialTodo = Partial<Todo>;
// {title?: string, description?: string, completed?: boolean}

// Required<T> - All properties required
type RequiredTodo = Required<PartialTodo>;

// Readonly<T> - All properties readonly
type ReadonlyTodo = Readonly<Todo>;

// Pick<T, K> - Select specific properties
type TodoPreview = Pick<Todo, "title" | "completed">;

// Omit<T, K> - Exclude specific properties
type TodoInfo = Omit<Todo, "completed">;

// Record<K, T> - Create object type
type TodoStatus = Record<"pending" | "completed", Todo[]>;

// Exclude<T, U> - Remove types from union
type NonString = Exclude<string | number | boolean, string>;
// number | boolean

// Extract<T, U> - Extract types from union
type StringOnly = Extract<string | number | boolean, string>;
// string

// NonNullable<T> - Remove null/undefined
type NonNullString = NonNullable<string | null | undefined>;
// string

// ReturnType<T> - Get function return type
function getName(): string { return "John"; }
type NameType = ReturnType<typeof getName>; // string

// Parameters<T> - Get function parameters as tuple
type GetNameParams = Parameters<typeof getName>; // []

/***************************
------------ 10: Enums -----------
*******************************/

// Numeric Enum
enum Direction {
  Up,    // 0
  Down,  // 1
  Left,  // 2
  Right  // 3
}

// String Enum
enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue"
}

// Mixed Enum
enum Mixed {
  No = 0,
  Yes = "yes"
}

// Const Enum (inlined at compile time)
const enum StatusCode {
  OK = 200,
  NotFound = 404,
  Error = 500
}

// Usage
let currentDirection = Direction.Up;
let favoriteColor = Color.Blue;
let status = StatusCode.OK;

/***************************
------------ 11: Modules -----------
*******************************/

// Named Exports
export const PI = 3.14159;
export function calculate(r: number): number {
  return PI * r * r;
}
export class Calculator {
  add(x: number, y: number): number { return x + y; }
}

// Default Export
export default class Logger {
  log(message: string): void {
    console.log(message);
  }
}

// Re-exports
export { Calculator as Calc } from "./calculator";
export * from "./utilities";

// Import
import Logger from "./logger";           // default import
import { PI, calculate } from "./math";  // named imports
import * as MathUtils from "./math";     // namespace import
import { Calculator as Calc } from "./calculator"; // alias

// Dynamic Imports
const module = await import("./dynamic-module");

/***************************
------------ 12: Advanced Types -----------
*******************************/

// Mapped Types
type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

type OptionalId<T> = {
  [P in keyof T]: P extends "id" ? T[P] | undefined : T[P];
};

// Conditional Types
type IsString<T> = T extends string ? true : false;
type StringCheck = IsString<"hello">; // true

// Template Literal Types
type EventName<T extends string> = `on${Capitalize<T>}`;
type ClickEvent = EventName<"click">; // "onClick"

// Indexed Access Types
type Person = { name: string; age: number; location: string };
type PersonName = Person["name"]; // string
type PersonKeys = keyof Person;   // "name" | "age" | "location"

// Recursive Types
type Json = string | number | boolean | null | Json[] | {[key: string]: Json};

/***************************
------------ 13: Decorators -----------
*******************************/

// Class Decorator
function Component(name: string) {
  return function<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
      componentName = name;
    };
  };
}

@Component("MyComponent")
class MyClass {}

// Method Decorator
function Log(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const method = descriptor.value;
  descriptor.value = function(...args: any[]) {
    console.log(`Calling ${propertyName} with`, args);
    return method.apply(this, args);
  };
}

class Service {
  @Log
  getData(): string {
    return "data";
  }
}

// Property Decorator
function MinLength(length: number) {
  return function(target: any, propertyName: string) {
    let value: string;
    
    const getter = () => value;
    const setter = (newVal: string) => {
      if (newVal.length < length) {
        throw new Error(`${propertyName} must be at least ${length} chars`);
      }
      value = newVal;
    };
    
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter
    });
  };
}

class User {
  @MinLength(3)
  username: string;
}

/***************************
------------ 14: Configuration -----------
*******************************/

// tsconfig.json
/*
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020", "DOM"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "sourceMap": true,
    "declaration": true,
    "removeComments": true,
    "noImplicitAny": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
*/

// Compiler Options Quick Reference
// --target: ES5, ES6, ES2017, ES2018, ES2019, ES2020, ESNext
// --module: commonjs, amd, es2015, es2020, esnext, system, umd
// --lib: ES5, ES6, ES2017, DOM, WebWorker, ScriptHost
// --strict: Enable all strict type checking options

/***************************
------------ 15: Common Patterns -----------
*******************************/

// API Response Type
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

// Event Handler Pattern
type EventHandler<T = Event> = (event: T) => void;
const onClick: EventHandler<MouseEvent> = (e) => console.log(e.clientX);

// Builder Pattern
class QueryBuilder {
  private query = "";
  
  select(fields: string): this {
    this.query += `SELECT ${fields} `;
    return this;
  }
  
  from(table: string): this {
    this.query += `FROM ${table} `;
    return this;
  }
  
  build(): string {
    return this.query.trim();
  }
}

// Factory Pattern
interface Shape { area(): number; }
class Circle implements Shape {
  constructor(private radius: number) {}
  area(): number { return Math.PI * this.radius ** 2; }
}

class ShapeFactory {
  static createCircle(radius: number): Shape {
    return new Circle(radius);
  }
}

// Promise/Async Patterns
type AsyncResult<T> = Promise<T | Error>;

async function fetchUser(id: number): Promise<User | null> {
  try {
    const response = await fetch(`/api/users/${id}`);
    return await response.json();
  } catch {
    return null;
  }
}

// Type-safe Environment Variables
interface Env {
  NODE_ENV: "development" | "production" | "test";
  PORT: number;
  DATABASE_URL: string;
}

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Env {}
  }
}

/*
 * QUICK TIPS
 * ----------
 * • Use 'unknown' instead of 'any' when possible
 * • Prefer 'interface' for object shapes, 'type' for unions/computed types
 * • Enable strict mode in tsconfig.json
 * • Use const assertions: const colors = ['red', 'blue'] as const
 * • Prefer type guards over type assertions
 * • Use utility types instead of manual type manipulation
 * • Enable noImplicitAny for better type safety
 * • Use discriminated unions for complex state management
 */
