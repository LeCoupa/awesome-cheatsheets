# EMMET
*The essential toolkit for web-developers*

## Introduction
Emmet is a productivity toolkit for web developers that uses expressions to generate HTML snippets.

## Installation
Normally, Emmet installation should be a straight-forward process from the package-manager as most of the modern text editors support Emmet. If you have difficulty setting up emmet with your editor and wish to check if emmet supports your favorite editor or not, you can check from here. [Emmet Installation instructions](https://emmet.io/download/)

## Usage
You can use Emmet in two ways:
* Tab Expand Way: Type your emmet code and press `Tab` key
* Interactive Method: Press `alt + ctrl + Enter` and start typing your expressions. This should automatically generate HTML snippets on the fly.

__This cheatsheet will assume that you press `Tab` after each expressions.__

## Basics

### Generating  HTML 5 Snippet
`html:5`
Will generate

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
</head>
<body>

</body>
</html>
```

### Child items
Child items are created using `>`

`ul>li>p`

```html
<ul>
  <li>
    <p></p>
  </li>
</ul>
```

### Sibling Items
Sibling items are created using `+`

`html>head+body`

```html
<html>
<head></head>
<body>

</body>
</html>
```

### Multiplication
Items can be multiplied by `*`

`ul>li*5`

```html
<ul>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
```

### Grouping
Items can be grouped together using `()`

`table>(tr>th*5)+tr>t*5`

```html
<table>
  <tr>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
    <th></th>
  </tr>
  <tr>
    <t></t>
    <t></t>
    <t></t>
    <t></t>
    <t></t>
  </tr>
</table>
```
