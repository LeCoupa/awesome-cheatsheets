## Basics

Font

There are many properties related to the font, such as the face, weight, style, etc. These properties allow you to change the style or complete look of your text.

Font-Family
```css
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
```
Font-Style
```css
font-style: italic;
```
Font-Variant
```css
font-variant: small-caps;
```
Font-Weight
```css
font-weight: bold;
```
Font-Size
```css
font-size: larger;
```
Font
```css
font: style variant weight size family;
```

Text

Text properties allow one to manipulate alignment, spacing, decoration, indentation, etc., in the document.

Text-Align
```css
text-align: justify;
```
Letter-Spacing
```css
letter-spacing: .15em;
```
Text-Decoration
```css
text-decoration: underline;
```
Word-Spacing
```css
word-spacing: 0.25em;
```
Text-Transform
```css
text-transform: uppercase;
```
Text-Indent
```css
text-indent: 0.5cm;
```
Line-Height
```css
line-height: normal;
```
Background

As the name suggests, these properties are related to background, i.e., you can change the color, image, position, size, etc., of the document.

Background-Image
```css
background-image: url("Path");
```
Background-Position
```css
background-position: right top;
```
Background-Size
```css
background-size: cover;
```
Background-Repeat
```css
background-repeat: no-repeat;
```
Background-Attachment
```css
background-attachment: scroll;
```
Background-Color
```css
background-color: fuchsia;
```
Background
```css
background: color image repeat attachment position;
```
Border

Border properties are used to change the style, radius, color, etc., of buttons or other items of the document.

Border-Width
```css
border-width: 5px;
```
Border-Style
```css
border-style: solid;
```
Border-Color
```css
border-color: aqua;
```
Border-Radius
```css
border-radius: 15px;
```
Border
```css
border: width style color;
```
Box Model

In laymen's terms, the CSS box model is a container that wraps around every HTML element. It consists of margins, borders, padding, and the actual content. It is used to create the design and layout of web pages.

Float
```css
float: none;
```
Clear
```css
clear: both;
```
Display
```css
display: block;
```
Height
```css
height: fit-content;
```
Width
```css
width: auto;
```
Margin
```css
margin: top right bottom left;
```
Padding
```css
padding: top right bottom left;
```
Overflow
```css
overflow: hidden;
```
Visibility
```css
visibility: visible;
```
Colors

With the help of the color property, one can give color to text, shape, or any other object.

Color
```css
color: cornsilk;
```
Opacity
```css
opacity: 4;
```
Template Layout

Specifies the visual look of the content inside a template

Box-Align
```css
box-align: start;
```
Box-Direction
```css
box-direction: normal;
```
Box-Flex
```css
box-flex: normal;
```
Box-Flex-Group
```css
box-flex-group: 2;
```
Box-Orient
```css
box-orient: inline;
```
Box-Pack
```css
box-pack: justify;
```
Box-Sizing
```css
box-sizing: margin-box;
```
max-width
```css
max-width: 800px;
```
min-width
```css
min-width: 500px;
```
max-height
```css
max-height: 100px;
```
min-height
```css
min-height: 80px;
```
Table

Table properties are used to give style to the tables in the document. You can change many things like border-spacing, table layout, caption, etc.

Border-Collapse
```css
border-collapse: separate;
```
Empty-Cells
```css
empty-cells: show;
```
Border-Spacing
```css
border-spacing: 2px;
```
Table-Layout
```css
table-layout: auto;
```
Caption-Side
```css
caption-side: bottom;
```
Columns

These properties are used explicitly with columns of the tables, and they are used to give the table an incredible look.

Column-Count
```css
column-count: 10;
```
Column-Gap
```css
column-gap: 5px;
```
Column-rule-width
```css
column-rule-width: medium;
```
Column-rule-style
```css
column-rule-style: dotted ;
```
Column-rule-color
```css
column-rule-color: black;
```
Column-width
```css
column-width: 10px;
```
Column-span
```css
column-span: all;
```
List & Markers

List and marker properties are used to customize lists in the document.

List-style-type
```css
list-style-type: square;
```
List-style-position
```css
list-style-position: 20px;
```
List-style-image
```css
list-style-image: url(image.gif);
```
Marker-offset
```css
marker-offset: auto;
```
Animations

CSS animations allow one to animate transitions or other media files on the web page.

Animation-name
```css
animation-name: myanimation;
```
Animation-duration
```css
animation-duration: 10s;
```
Animation-timing-function
```css
animation-timing-function: ease;
```
Animation-delay
```css
animation-delay: 5ms;
```
Animation-iteration-count
```css
animation-iteration-count: 3;
```
Animation-direction
```css
animation-direction: normal;
```
Animation-play-state
```css
animation-play-state: running;
```
Animation-fill-mode
```css
animation-fill-mode: both;
```
Transitions

Transitions let you define the transition between two states of an element.

Transition-property
```css
transition-property: none;
```
Transition-duration
```css
transition-duration: 2s;
```
Transition-timing-function
```css
transition-timing-function: ease-in-out;
```
Transition-delay
```css
transition-delay: 20ms;
```

CSS Flexbox

Flexbox is a layout of CSS that lets you format HTML easily. Flexbox makes it simple to align items vertically and horizontally using rows and columns. Items will "flex" to different sizes to fill the space. And overall, it makes the responsive design more manageable.

Parent Properties (flex container)
display
```css
display: flex;
```
flex-direction
```css
flex-direction: row | row-reverse | column | column-reverse;
```
flex-wrap
```css
flex-wrap: nowrap | wrap | wrap-reverse;
```
flex-flow
```css
flex-flow: column wrap;
```
justify-content
```css
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly |
start | end | left | right ... + safe | unsafe;
```
align-items
```css
align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe;
```
align-content
```css
align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
```
Child Properties (flex items)
order
```css
order: 5; /* default is 0 */
```
flex-grow
```css
flex-grow: 4; /* default 0 */
```
flex-shrink
```css
flex-shrink: 3; /* default 1 */
```
flex-basis
```css
flex-basis: | auto; /* default auto */
```
flex shorthand
```css
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```
align-self
```css
align-self: auto | flex-start | flex-end | center | baseline | stretch;
```

CSS Grid

Grid layout is a 2-Dimensional grid system to CSS that creates complex responsive web design layouts more easily and consistently across browsers.

Parent Properties (Grid container)

display
```css
display: grid | inline-grid;
```
grid-template-columns
```css
grid-template-columns: 12px 12px 12px;
```
grid-template-rows
```css
grid-template-rows: 8px auto 12px;
```
grid-template
```css
grid-template: none | <grid-template-rows> / <grid-template-columns>;
```
column-gap
```css
column-gap: <line-size>;
```
row-gap
```css
row-gap: <line-size>;
```
grid-column-gap
```css
grid-column-gap: <line-size>;
```
grid-row-gap
```css
grid-row-gap: <line-size>;
```
gap shorthand
```css
gap: <grid-row-gap> <grid-column-gap>;
```
grid-gap shorthand
```css
grid-gap: <grid-row-gap> <grid-column-gap>;
```
justify-items
```css
justify-items: start | end | center | stretch;
```
align-items
```css
align-items: start | end | center | stretch;
```
place-items
```css
place-items: center;
```
justify-content
```css
justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
```
align-content
```css
align-content: start | end | center | stretch | space-around | space-between | space-evenly;
```
place-content
```css
place-content: <align-content> / <justify-content> ;
```
grid-auto-columns
```css
grid-auto-columns: <track-size> ...;
```
grid-auto-rows
```css
grid-auto-rows: <track-size> ...;
```
grid-auto-flow
```css
grid-auto-flow: row | column | row dense | column dense;
```

Child Properties (Grid items)

grid-column-start
```css
grid-column-start: <number> | <name> | span <number> | span <name> | auto;
```
grid-column-end
```css
grid-column-end: <number> | <name> | span <number> | span <name> | auto;
```
grid-row-start
```css
grid-row-start: <number> | <name> | span <number> | span <name> | auto;
```
grid-row-end
```css
grid-row-end: <number> | <name> | span <number> | span <name> | auto;
```
grid-column shorthand
```css
grid-column: <start-line> / <end-line> | <start-line> / span <value>;
```
grid-row shorthand
```css
grid-row: <start-line> / <end-line> | <start-line> / span <value>;
```
grid-area
```css
grid-area: <name> | <row-start> / <column-start> / <row-end> / <column-end>;
```
justify-self
```css
justify-self: start | end | center | stretch;
```
align-self
```css
align-self: start | end | center | stretch;
```
place-self
```css
place-self: center;
```
