##############################################################################
# VIM CHEATSHEET
# WEBSITE: http://www.vim.org/
# DOCUMENTATION: https://vim.sourceforge.io/docs.php
##############################################################################


##############################################################################
# CURSOR MOVEMENTS
##############################################################################


h                   move left
j                   move down
k                   move up
l                   move right
w                   jump by start of words (punctuation considered words)
W                   jump by words (spaces separate words)
e                   jump to end of words (punctuation considered words)
E                   jump to end of words (no punctuation)
b                   jump backward by words (punctuation considered words)
B                   jump backward by words (no punctuation)
ge                  jump backward to end of a word
gE                  jump backwards to the end of a word (words can contain punctuation)
0                   (zero) start of line
^                   first non-blank character of line
$                   jump to the end of the line
g_                  jump to the last non-blank character of the line
-                   move line upwards, on the first non-blank character
+                   move line downwards, on the first non-blank character
<enter>             move line downwards, on the first non-blank character
gg                  go to first line
G                   go to last line
ngg                 go to line n
nG                  go To line n
:n                  go To line n
)                   move the cursor forward to the next sentence.
(                   move the cursor backward by a sentence.
{                   move the cursor a paragraph backwards
}                   move the cursor a paragraph forwards
]]                  move the cursor a section forwards or to the next {
[[                  move the cursor a section backwards or the previous {
H                   move the cursor to the top of the screen.
M                   move the cursor to the middle of the screen.
L                   move the cursor to the bottom of the screen.
fx                  search line forward for 'x'
Fx                  search line backward for 'x'
tx                  search line forward before 'x'
Tx                  search line backward before 'x'
CTRL-y              moves screen up one line
CTRL-e              moves screen down one line
CTRL-u              moves cursor & screen up ½ page
CTRL-d              moves cursor & screen down ½ page
CTRL-b              moves screen up one page, cursor to last line
CTRL-f              moves screen down one page, cursor to first line
zz                  shift current line to middle of screen
z.                  same as zz but also jumps to the first non-black character
zt                  shift current line to top of screen
zb                  shift current line to bottom of screen


##############################################################################
# BOOKMARKS
##############################################################################


:marks              list all the current marks
ma                  make a bookmark named a at the current cursor position
`a                  go to position of bookmark a
'a                  go to the line with bookmark a
`0                  go to the position where Vim was previously exited
`"                  go to the position when last editing this file
`.                  go to the line that you last edited
``                  go to the position before the last jump
g,                  go to newer position in change list
g;                  go to older position in change list

# Tip: To jump to a mark you can either use a backtick (`) or an apostrophe (').
# Using an apostrophe jumps to the beginning (first non-blank) of the line holding the mark.

##############################################################################
# INSERT MODE
##############################################################################


i                   start insert mode at cursor
I                   insert at the beginning of the line
gi                  return to insert mode where you inserted text the last time
gI                  like "I", but always start in column 1
a                   append after the cursor
A                   append at the end of the line
o                   open (append) blank line below current line
O                   open blank line above current line
CTRL-o              Temporarily enter normal mode to issue one normal-mode command(while in insert mode)
Esc                 exit insert mode


##############################################################################
# EDITING
##############################################################################


r                   replace a single character (does not use insert mode)
R                   enter Insert mode, replacing characters rather than inserting
J                   join line below to the current one with one space in between
gJ                  join line below to the current one without space in between
cc                  change (replace) an entire line
cw                  change (replace) to the end of word (same as ce)
2cw                 change (replace) repeat cw twice
ciw                 change (replace) word under the cursor
caw                 change (replace) word under the cursor and the space after or before it
ci"                 change (replace) word inside ""
cit                 change (replace) html tag content
cat                 change (replace) html tag
cis                 change (replace) sentence under the cursor
cas                 change (replace) sentence under the cursor and the space after or before it
cib                 change (replace) inside a block with ()
cab                 change (replace) a block with ()
ciB                 change (replace) inside a block with {}
caB                 change (replace) a block with {}
C                   change (replace) to the end of line(same as c$)
cG                  change (replace) to the end of the file
cgg                 change (replace) from first line to current line
ct'                 change (replace) until the ' character (can change ' for any character)
s                   delete character at cursor and substitute text
S                   delete line at cursor and substitute text (same as cc)
xp                  transpose two letters (delete and paste, technically)
u                   undo
CTRL-r              redo
.                   repeat last command
~                   switch case
g~iw                switch case of current word
gUiw                make current word uppercase
guiw                make current word lowercase
gU$                 make uppercase until end of line
gu$                 make lowercase until end of line
>>                  indent line one column to right
>i{                 indent everything in the {}
<<                  indent line one column to left
==                  auto-indent current line
ddp                 swap current line with next
ddkP                swap current line with previous
:%retab             fix spaces / tabs issues in whole file
:r [name]           insert the file [name] below the cursor.
:r !{cmd}           execute {cmd} and insert its standard output below the cursor.

# Tip: Instead of b or B one can also use ( or { respectively.

##############################################################################
# DELETING TEXT
##############################################################################


x                   delete current character
X                   delete previous character
dw                  delete (cut) to the end of word (same as de)
diw                 delete (cut) word under the cursor
daw                 delete (cut) word under the cursor and the space after or before it
dap                 delete (cut) a paragraph
dd                  delete (cut) a line
dt'                 delete (cut) until the next ' character on the line (replace ' by any character)
dG                  delete (cut) to the end of the file
dgg                 delete (cut) from first line to current line
D                   delete (cut) from cursor to end of line (same as d$)
:[range]d           delete [range] lines


##############################################################################
# COPYING AND MOVING TEXT
##############################################################################


yw                  yank word
yy                  yank (copy) a line
2yy                 yank 2 lines
y$                  yank to end of line
p                   put (paste) the clipboard after cursor/current line
P                   put (paste) before cursor/current line
gp                  put (paste) the clipboard after cursor and leave cursor after the new text
gP                  put (paste) before cursor and leave cursor after the new text
"+y                 yank into the system clipboard register
"+p                 paste from the system clipboard register
:set paste          avoid unexpected effects in pasting
:registers          display the contents of all registers
"xyw                yank word into register x
"xyy                yank line into register x
:[range]y x         yank [range] lines into register x
"xp                 put the text from register x after the cursor
"xP                 put the text from register x before the cursor
"xgp                just like "p", but leave the cursor just after the new text
"xgP                just like "P", but leave the cursor just after the new text
:[line]put x        put the text from register x after [line]

# Tip: if you are using vim extension on vs code, you can enable
"vim.useSystemClipboard": true
in setting.json, this will allow to Use system clipboard for unnamed register.




##############################################################################
# MACROS
##############################################################################


qa                  start recording macro 'a'
q                   end recording macro
@a                  replay macro 'a'
@:                  replay last command
@@                  repeat macro


##############################################################################
# VISUAL MODE
##############################################################################


v                   start visual mode, mark lines, then do command (such as y-yank)
V                   start linewise visual mode
o                   move to other end of marked area
U                   upper case of marked area
CTRL-v              start visual block mode
O                   move to other corner of block
aw                  mark a word
ab                  a () block (with braces)
aB                  a {} block (with brackets)
at                  a block with <> tags
ib                  inner () block
iB                  inner {} block
it                  inner <> block
Esc                 exit visual mode

VISUAL MODE COMMANDS
--------------------

>                   shift right
<                   shift left
c                   change (replace) marked text
y                   yank (copy) marked text
d                   delete marked text
~                   switch case

VISUAL MODE SHORTCUTS
---------------------

v%                  selects matching parenthesis
vi{                 selects matching curly brace
vi"                 selects text between double quotes
vi'                 selects text between single quotes
gv                  reselect the last selected area

##############################################################################
# SPELLING
##############################################################################


]s                  next misspelled word
[s                  previous misspelled word
zg                  add word to wordlist
zug                 undo last add word
z=                  suggest word


##############################################################################
# EXITING
##############################################################################


:q                  quit Vim. This fails when changes have been made.
:q!                 quit without writing.
:cq                 quit always, without writing.
:w                  save without exiting.
:wq                 write the current file and exit.
:wq!                write the current file and exit always.
:wq {file}          write to {file}. Exit if not editing the last
:wq! {file}         write to {file} and exit always.
:[range]wq[!]       same as above, but only write the lines in [range].
ZZ                  write current file, if modified, and exit.
ZQ                  quit current file and exit (same as ":q!").


##############################################################################
# SEARCH/REPLACE
##############################################################################


/pattern                    search for pattern
?pattern                    search backward for pattern
n                           repeat search in same direction
N                           repeat search in opposite direction
*                           search forward, word under cursor
#                           search backward, word under cursor
set ic                      ignore case: turn on
set noic                    ignore case: turn off
:%s/old/new/g               replace all old with new throughout file
:%s/old/new/gc              replace all old with new throughout file with confirmation
:argdo %s/old/new/gc | wq   open multiple files and run this command to replace old
                            with new in every file with confirmation, save and quit


##############################################################################
# MULTIPLE FILES
##############################################################################


:e filename         edit a file in a new buffer
:tabe filename      edit a file in a new tab (Vim7, gVim)
:ls                 list all buffers
:bn                 go to next buffer
:bp                 go to previous buffer
:bd                 delete a buffer (close a file)
:b1                 show buffer 1
:b vimrc            show buffer whose filename begins with "vimrc"
:bufdo <command>    run 'command(s)' in all buffers
:[range]bufdo <command> run 'command(s)' for buffers in 'range'


##############################################################################
# WINDOWS
##############################################################################


:sp f               split open f
:vsp f              vsplit open f
CTRL-w s            split windows
CTRL-w w            switch between windows
CTRL-w q            quit a window
CTRL-w v            split windows vertically
CTRL-w x            swap windows
CTRL-w h            left window
CTRL-w j            down window
CTRL-w k            up window
CTRL-w l            right window
CTRL-w +            increase window height
CTRL-w -            decrease window height
CTRL-w <            increase window width
CTRL-w >            decrease window width
CTRL-w =            equal window
CTRL-w o            close other windows


##############################################################################
# QUICKFIX WINDOW
##############################################################################


copen               open quickfix window
cclose              close quickfix window
cc [nr]             display error [nr]
cfirst              display the first error
clast               display the last error
[count]cn           display [count] next error
[count]cp           display [count] previous error


##############################################################################
# PROGRAMMING
##############################################################################


%                   show matching brace, bracket, or parenthese
gf                  edit the file whose name is under the cursor
gF                  edit the file whose name is under the cursor and jump to the line number
gd                  when the cursor is on a local variable or function, jump to its declaration
''                  return to the line where the cursor was before the latest jump
CTRL-o              move to previous position you were at
CTRL-i              move to more recent position you were at
:set nu             display numbers (short for :set number)
:set nonu           hide numbers (short for :set nonumber)


##############################################################################
# PLUGINS > ACK
##############################################################################


:Ack                Search recursively in directory
o                   to open (same as enter)
go                  to preview file (open but maintain focus on ack.vim results)
t                   to open in new tab
T                   to open in new tab silently
q                   to close the quickfix window


##############################################################################
# PLUGINS > CHEAT
##############################################################################


:Cheat              open cheat sheet (with autocomplete)
<leader>ch          open cheat sheet for word under the cursor


##############################################################################
# PLUGINS > GIST
##############################################################################


:Gist               post whole text to gist
:Gist XXXXX         get gist XXXXX
:Gist -l            list my gists


##############################################################################
# PLUGINS > GUNDO
##############################################################################


:GundoToggle        show undo tree


##############################################################################
# PLUGINS > LUSTYJUGGLER
##############################################################################


<Leader>lj          show open buffers


##############################################################################
# PLUGINS > NERDCOMMENTER
##############################################################################


<leader>cc          comment out line(s)
<leader>c<space>    toggle the comment state of the selected line(s)


##############################################################################
# PLUGINS > NERDTREE
##############################################################################


:NERDTreeToggle     show / hide file browser
:NERDTreeFind       show current file in file browser
:Bookmark name      bookmark the current node as "name"

FILE
----

o                   open in prev window
go                  preview
t                   open in new tab
T                   open in new tab silently
i                   open split
gi                  preview split
s                   open vsplit
gs                  preview vsplit

DIRECTORY
---------

o                   open & close node
O                   recursively open node
x                   close parent of node
X                   close all child nodes of current node recursively
e                   explore selected dir

BOOKMARK
--------

o                   open bookmark
t                   open in new tab
T                   open in new tab silently
D                   delete bookmark

TREE NAVIGATION
---------------

P                   go to root
p                   go to parent
K                   go to first child
J                   go to last child
CTRL-j              go to next sibling
CTRL-k              go to prev sibling

FILESYSTEM
----------

C                   change tree root to the selected dir
u                   move tree root up a dir
U                   move tree root up a dir but leave old root open
r                   refresh cursor dir
R                   refresh current root
m                   show menu
cd                  change the CWD to the selected dir

TREE FILTERING
--------------

I                   hidden files
f                   file filters
F                   files
B                   bookmarks

OTHER
-----

q                   close the NERDTree window
A                   zoom (maximize-minimize) the NERDTree window
?                   toggle help


##############################################################################
# PLUGINS > PDV
##############################################################################


CTRL-P              generate PHP DOC


##############################################################################
# PLUGINS > PICKACOLOR
##############################################################################


:PickHEX            choose color in system color picker


##############################################################################
# PLUGINS > SNIPMATE
##############################################################################


<tab>               expand snippet


##############################################################################
# PLUGINS > SPARKUP
##############################################################################


CTRL-e              execute sparkup (zen coding expansion)
CTRL-n              jump to the next empty tag / attribute


##############################################################################
# PLUGINS > SURROUND
##############################################################################


cs'"                change surrounding quotes to double-quotes
cs(}                change surrounding parens to braces
cs({                change surrounding parens to braces with space
ds'                 delete surrounding quotes
dst                 delete surrounding tags
ysiw[               surround inner word with brackets
vees'               surround 2 words (ee) with quotes '


##############################################################################
# PLUGINS > TABULAR
##############################################################################


:Tabularize /,      line the selected lines up on the commas


##############################################################################
# PLUGINS > TAGLIST
##############################################################################


:TlistToggle        open / close taglist window
<enter>             jump to tag or file
<space>             display the tag prototype


##############################################################################
# PLUGINS > UNIMPAIRED
##############################################################################


[space              new line above
]space              new line below
[e                  exchange line above
]e                  exchange line below
[x                  XML encode
]x                  XML decode (with htmlentities)
[q                  jump to previous quickfix item
]q                  jump to next quickfix item
[Q                  jump to first quickfix item
]Q                  jump to last quickfix item


##############################################################################
# PLUGINS > VIM-FUGITIVE
##############################################################################


:Git                run a git command
:Gstatus            git status : - to (un)stage , p to patch, C to commit
:Gcommit            git commit
:Gread              empty the buffer and revert to the last commit
:Gwrite             write the current file and stage the results
:Gmove              git mv
:Gremove            git rm
:Glog               git log
:Gdiff              perform a vimdiff against the current file of a certain revision
:Gblame             open blame information in a scroll bound vertical splitt
:Gbrowse            open github


##############################################################################
# PLUGINS > VIM-MARKDOWN-PREVIEW
##############################################################################


:Mm                 preview markdown document in webbrowser


##############################################################################
# PLUGINS > VIM-PEEPOPEN
##############################################################################


<Leader>p           open the current directory with the peepopen application (fuzzy search)


##############################################################################
# PLUGINS > VIM-SYMFONY
##############################################################################


:Sview              open template file
:Saction            open action file
:Smodel             open model file
:Sfilter            open filter file
:Sform              open form file
:Spartial           open partial file / write selected content in partial + include
:Scomponent         open component file / write selected content in component + include
:Salternate         open alternate model file (class - table class)
:Symfony            execute task


##############################################################################
# PERSONAL .VIMRC
##############################################################################


<leader>ev          edit vimrc file
<leader>sv          reload vimrc file
<leader>sh          show syntax highlighting groups for word under cursor

<space>             page down
jj                  exit insertion mode
<leader>q           close the current window

<leader>/           clear the search register

<leader>h           toggle hidden characters

<leader>W           strip all trailing whitespace

CTRL-h              go to left window
CTRL-j              go to down window
CTRL-k              go to top window
CTRL-l              go to right window
<leader>w           open vertical split window and activate

%%                  will expand to current directory
<leader>ew          open file from current directory
<leader>es          open file in split window from current directory
<leader>cd          change directory to parent dir of current file
##                  will expand to webroot

:Wrap               wrap text
<F2>                toggle wrapped text

<F3>                toggle spell check

<F4>                toggle light/dark background

<F5>                underline with dashes
<F6>                underline with double lines

<leader><up>        bubble line(s) up
<leader><down>      bublle line(s) down

:Ltag               load tags file
:Project            cd to project and load tags file
<leader>t           show current tag for word under cursor
<leader>st          show current tag for word under cursor in split window
<leader>tj          show current tag list for word under cursor
<leader>stj         show current tag list for word under cursor in split window

CTRL-<space>        show omnicomplete menu

<leader>b           surround with strong tags
<leader>i           surround with em tags

CTRL-p              generate PHP DOC

<leader>a           run Ack

<leader>md          preview markdown

<leader>s           preview in safari

<leader>x           colorpicker

<leader>n           toggle Nerdtree
<leader>N           close Nerdtree
<leader>f           find current file in Nerdtree

<leader>l           toggle Taglist
<leader>L           close Taglist

<leader>ph          set filetype to php.html
<leader>r           reload all snipmate snippets

CTRL-<tab>          switch between buffers

CTRL-y              go to next tag of attribute in sparkup plugin

<leader>g           toggle Gundo window

IMG<CR>             show image browser to insert image tag with src, width and height
b                   insert image tag with dimensions from NERDTree
                    (http://stackoverflow.com/questions/5707925/vim-image-placement)
