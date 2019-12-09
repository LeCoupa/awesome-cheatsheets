# SUBLIME TEXT 3 CHEATSHEET

## Access every command with the command palette

- `shift + cmd + P `: Command palette


## Goto anything

- `cmd + P `: Goto file

- `ctrl + G `: Goto line

- `cmd + P and # `: Fuzzy search

- `cmd + R `: Goto symbol


## Quick selections

- `cmd + D `: Select word

- `cmd + K D `: Skip and add next

- `cmd + U `: Undo quick select

- `cmd + L `: Select line

- `ctrl + cmd + G `: Select all in file

- `shift + cmd + space `: Expand selection to scope

- `shift + cmd + L `: Split into lines


## Edit code

- `cmd + J `: Join 2 lines

- `cmd + shift + D `: Duplicate line

- `cmd + shift + R `: Reindent

- `cmd + shift + K `: Delete line

- `ctrl + cmd + up/down `: Move line/selection up/down

- `alt + cmd + V `: Paste from history

- `shift + cmd + / `: Comment/uncomment line

- `alt + backspace `: Delete word by word

- `alt + fn + backspace `: Forward delete word by word

- `cmd + shift + enter `: Insert line before

- `cmd + enter `: Insert line after


## Searching

- `cmd + F `: Search in file

- `shift + cmd + F `: Search in all files

- `<open files> `: where filter


## Miscelaneous

- `alt + cmd + right/left `: Switch open tab

- `Indent selection `: Indent selection

- `Unindent selection `: Unindent selection

- `Go to previous cursor position `: Go to previous cursor position

- `Go to next previous cursor position `: Go to next previous cursor position

- `Build and execute file `: Build and execute file


## Must have packages

`A file icon, BracketHighlighter, Color Highlighter, Comment-Snippets, DevDocs, EditorConfig, Emmet, File Rename, Git, Git blame, GitGutter, HTML-CSS-JS Prettify, JavaScript Completions, JavaScript Patterns, JavaScript Snippets, LESS, Nodejs, Package Control, Pretty JSON, SideBarEnhancements, SublimeLinter, SublimeLinter-contrib-eslint, Terminal`


## Preferences

```javascript
{
"color_scheme": "Packages/User/Color Highlighter/themes/Boxy Ocean.tmTheme",
"detect_indentation": false,
"folder_exclude_patterns":
[
"node_modules",
".svn",
".git",
".meteor/local"
],
"ignored_packages":
[
"Vintage"
],
"show_definitions": true,
"theme": "Adaptive.sublime-theme"
}
```

## Keymap

```javascript
[
{ "keys": ["super+v"], "command": "paste_and_indent" },
{ "keys": ["super+shift+v"], "command": "paste" },
{ "keys": ["super+shift+r"], "command": "reindent" },
{ "keys": ["super+h"], "command": "dev_docs_search_selection" }
]

```

## Syncing settings with iCloud

- `cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages`

- `mkdir -p ~/Library/Mobile\ Documents/com\~apple\~CloudDocs/WebDev/ST3/Plugins`

- `mv User ~/Library/Mobile\ Documents/com\~apple\~CloudDocs/WebDev/ST3/Plugins`

- `ln -s ~/Library/Mobile\ Documents/com\~apple\~CloudDocs/WebDev/ST3/Plugins/User`


## Restore settings from iCloud

- `cd ~/Library/Application\ Support/Sublime\ Text\ 3/Packages`

- `rm -rf User`

- `ln -s ~/Library/Mobile\ Documents/com\~apple\~CloudDocs/WebDev/ST3/Plugins/User`
