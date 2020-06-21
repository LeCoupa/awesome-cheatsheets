# EMMET
*The essential toolkit for web-developers*

## Introduction
Emmet is a productivity toolkit for web developers that uses expressions to generate HTML snippets.

## Installation
Normally, installation for Emmet should be a straight-forward process from the package-manager, as most of the modern text editors support Emmet. If you have difficulty setting up emmet with your editor and wish to check Emmet is supported by your favourite editor or not, you can check it from here. [Emmet Installation instructions](https://emmet.io/download/)

## Usage
You can use Emmet in two ways:
* Tab Expand Way: Type your emmet code and press `Tab` key
* Interactive Method: Press `alt + ctrl + Enter` and start typing your expressions. This should automatically generate HTML snippets on the fly.

__This cheatsheet will assume that you press `Tab` after each expressions.__

## Basics

### Generating  HTML 5 DOCTYPE
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

### Class and ID
Class and Id in Emmet can be done using `.` and `#`

`div.heading`

```html
<div class="heading"></div>
```

`div#heading`

```html
<div id="heading"></div>
```

ID and Class can also be combined together

`div#heading.center`

```html
<div id="heading" class="center"></div>
```

### Adding Content inside tags
Contents inside tags can be added using `{}`

`h1{Emmet is awesome}+h2{Every front end developers should use this}+p{This is paragraph}*2`

```HTML
<h1>Emmet is awesome</h1>
<h2>Every front end developers should use this</h2>
<p>This is paragraph</p>
<p>This is paragraph</p>
```

### Attributes inside HTML tags
Attributes can be added using `[]`

`a[href=https://google.com data-toggle=something target=_blank]`

```HTML
<a href="https://google.com" data-toggle="something" target="_blank"></a>
```

### Numbering
Numbering can be done using `$`
You can use this inside tag or contents.

`h${This is so awesome $}*6`

```HTML
<h1>This is so awesome 1</h1>
<h2>This is so awesome 2</h2>
<h3>This is so awesome 3</h3>
<h4>This is so awesome 4</h4>
<h5>This is so awesome 5</h5>
<h6>This is so awesome 6</h6>
```

Use `@-` to reverse the Numbering

`img[src=image$$@-.jpg]*5`

```HTML
<img src="image05.jpg" alt="">
<img src="image04.jpg" alt="">
<img src="image03.jpg" alt="">
<img src="image02.jpg" alt="">
<img src="image01.jpg" alt="">
```

To start the numbering from specific number, use this way

`img[src=emmet$@100.jpg]*5`

```HTML
<img src="emmet100.jpg" alt="">
<img src="emmet101.jpg" alt="">
<img src="emmet102.jpg" alt="">
<img src="emmet103.jpg" alt="">
<img src="emmet104.jpg" alt="">
```

## Tips
* Use `:` to expand known abbreviations

`input:date`
```HTML
<input type="date" name="" id="">
```

`form:post`
```HTML
<form action="" method="post"></form>
```

`link:css`
```html
<link rel="stylesheet" href="style.css">
```

* Building Navbar

`.navbar>ul>li*3>a[href=#]{Item $@-}`

```HTML
<div class="navbar">
  <ul>
    <li><a href="#">Item 3</a></li>
    <li><a href="#">Item 2</a></li>
    <li><a href="#">Item 1</a></li>
  </ul>
</div>
```
