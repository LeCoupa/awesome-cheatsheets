# Visual Studio CheatSheet

## Useful Extensions

### HTML & CSS

- `CSScomb`: Codeing style formatter for CSS, Less, SCSS and Saas.

- `Puglint`: Linter and style checker for pug.

- `Sass`: Indented Sass syntax highlighting, autocomplete & snippets.

- `SCSS IntelliSense`: Advanced autocompletion and refactoring support for SCSS.

- `XML Format`: Format XML documents.

### JavaScript, Node & NPM

- `Import Cost`: This extension will display inline in the editor the size of the imported package.

- `ESLint`: Integrates ESLint into VS Code

- `NPM`: NPM support for VS Code.

- `NPM Intellisense`: Visual Studio Code plugin that autocompletes NPM modules in import statements.

- `Version Lens`: Shows the latest version for each package using code lens.

- `Vetur`: Vue tooling for VS Code.

### PHP

- `Better PHPUnit`: A better PHPUnit test runner.

- `Laravel Artisan`: Laravel Artisan commands within Visual Studio Code.

- `PHP CS Fixer`: PHP CS Fixer extension for VS Code, php formatter, php code beautify tool.

- `PHP Doc Comment VSCode Plugin`: Add phpdoc @param and @return tag for selected function signatures.

- `PHP IntelliSense`: Advanced Autocompletion and Refactoring support for PHP.

### Git

- `Git History`: View git log, file history, compare branches or commits.

- `Gitignore`: A extension for Visual Studio Code that assists you in working with .gitignore files.

### Themes

- `Material Icon Theme`: Material Design Icons for Visual Studio Code.

- `Palenight Theme`: An elegant and juicy material-like theme for Visual Studio Code.

### Handy

- `Better comments`: Improve your code commenting by annotating with alert, informational, TODOs, and more!

- `Debugger for Chrome`: Debug your JavaScript code in the Chrome browser.

- `EditorConfig for VS Code`: EditorConfig Support for Visual Studio Code.

- `File Utils`: A convenient way of creating, duplicating, moving, renaming and deleting files and directories.

- `Final-Newline`: Inserts a final newline when saving the document.

- `Formatting Toggle`: A VS Code extension that allows you to toggle the formatter (Prettier, Beautify, …) ON and OFF with a simple click.

- `Open in Github/Bitbucket...`: Jump to a source code line in Github / Bitbucket, Gitlab, VisualStudio.com

- `OpenChrome`: Open file with Chrome.

- `Output Colorizer`: Syntax Highlighting for log files.

- `Prettier - Code formatter`: VS Code plugin for prettier/prettier.

- `Project Manager`: Easily switch between projects.

- `REST Client`: REST Client for Visual Studio Code.

- `SVG Viewer`: SVG Viewer for Visual Studio Code.

- `Terminal`: Terminal for Visual Studio Code.

- `Vue Peek`: Allows peek and goto definition for Vue single-file components.

- `VS Live Share`: Real-time collaborative development from the comfort of your favorite tools.

- `Wrap Console Log`: Wrap to console.log by word or selection.

## My Settings

```javascript
{
    // Controls the font size in pixels
    "editor.fontSize": 14,

    // Render vertical rulers after a certain number of
    // monospace characters. Use multiple values for multiple
    // rulers. No rulers are drawn if array is empty
    "editor.rulers": [100],

    // The number of spaces a tab is equal to
    "editor.tabSize": 2,

    "[python]": {
        "editor.tabSize": 4
    },

    // Controls the line height
    "editor.lineHeight": 22,

    // Controls the font family
    "editor.fontFamily": "Fira Code",

    // Enables font ligatures
    "editor.fontLigatures": true,

    // Controls whether snippets are shown with other suggestions and how they are sorted.
    "editor.snippetSuggestions": "top",

    // Ignore extension recommendations
    "extensions.ignoreRecommendations": false,

    // Controls auto save of dirty files
    "files.autoSave": "afterDelay",

    // Controls the delay in ms after which a dirty file is saved automatically
    "files.autoSaveDelay": 1000,

    // Configure glob patterns for excluding files and folders
    "files.exclude": {
        ".yarn": true,
        "**/*.pyc": true
    },

    // Insert a final new line at the end of the file when saving it
    "files.insertFinalNewline": true,

    // Confirm before synchronizing git repositories
    "git.confirmSync": false,

    // Commit all changes when there are no staged changes
    "git.enableSmartCommit": true,

    // Whether to lint Python files using pylint
    "python.linting.pylintEnabled": false,

    // Whether to lint Python files using flake8
    "python.linting.flake8Enabled": true,

    // Configure glob patterns for excluding files and folders in
    // searches. Inherits all glob patterns from the files.exclude setting.
    "search.exclude": {
        "**/.git": true,
        "**/.nuxt": true,
        "**/build": true,
        "**/data": true,
        "**/dist": true,
        "**/env": true
    },

    // Adjust the zoom level of the window. The original size is 0
    // and each increment above (e.g. 1) or below (e.g. -1) represents
    // zooming 20% larger or smaller. You can also enter decimals to
    // adjust the zoom level with a finer granularity.
    "window.zoomLevel": 0,

    // Overrides colors from the currently selected color theme.
    "workbench.colorCustomizations": {
        "statusBar.background": "#8252be",
        "statusBar.foreground": "#eeffff",
        "titleBar.activeBackground": "#282b3c",
        "titleBar.activeForeground": "#eeefff"
    },

    // Specifies the color theme used in the workbench
    "workbench.colorTheme": "Material Palenight",

    // Specifies the icon theme used in the workbench
    "workbench.iconTheme": "material-icon-theme",

    // Controls font aliasing method in the workbench
    "workbench.fontAliasing": "antialiased",
    "explorer.confirmDragAndDrop": false
}
```
