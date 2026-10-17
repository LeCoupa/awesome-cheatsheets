# NestJS

## Summary

- [Introduction](#introduction)
- [CLI Commands](#cli-commands)
  - [Installation](#installation)
  - [Usages](#usages)

## Introduction

**NestJS** is a framework for building efficient, scalable Node.js server-side applications. It uses progressive **JavaScript**, supports **TypeScript** and combines the element of **OOP** (Object Oriented Programming), **FP** (Functional Programming) & **FRP** (Functional Reactive Programming).

[Back to Summary](#summary)

## CLI Commands

### Installation

```code
$ npm i -g @nestjs/cli
```

### Usages

**1) nest new**

```code
$ npm new <project_name> [options]
```

**Options**

| Option                  | Description                                                                       |
| :---------------------- | :-------------------------------------------------------------------------------- |
| _--dry-run_             | Report the changes made, but it doesn't affect the file system. <br/> Alias: _-d_ |
| _--language [language]_ | Specify programming language (TS or JS).<br/> Alias: _-l_                         |

**2) nest generate**

```code
$ nest generate <schematic> <name> [options]
$ nest g <schematic> <name> [options]
```

where,<br/>
_&lt;schematic&gt;_ - to generate. <br/>
_&lt;name&gt;_ - name of the generated component. <br/>

**Schematics**<br/>
| Name | Description |
| :---- | :---- |
|app| Generates a new application within a monorepo|
|library| Generates a new library within a monorepo|
|class|Generate a new class|
|controller|Generate a new controller|
|decorator|Generate decorator |
|filter|Generate a filter|
|gateway|Generate a gateway|
|guard|Generate a guard|
|interface|Generate an interface|
|interceptor|Generate an interceptor|
|middleware|Generate a middleware|
|module|Generate a module|
|pipe|Generate a pipe|
|provider|Generate a provider|
|resolver|Generate a resolver|
|service| Generate a service|
|resource| Generates a new CRUD resource |

**CRUD generator**

| Commands      | Description                                         |
| :------------ | :-------------------------------------------------- |
| **nest g mo** | Generates a module for groping related components   |
| **nest g co** | Generates a controller to define CRUD routes        |
| **nest g s**  | Generates a service to implement the business logic |

[Back to Summary](#summary)
