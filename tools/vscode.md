# Visual Studio CheatSheet

## Useful Extensions

### HTML & CSS

- [`CSScomb`](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-csscomb): Coding style formatter for CSS, Less, SCSS and Saas.

- [`Puglint`](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-puglint): Linter and style checker for pug.

- [`Sass`](https://marketplace.visualstudio.com/items?itemName=Syler.sass-indented): Indented Sass syntax highlighting, autocomplete & snippets.

- [`SCSS IntelliSense`](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss): Advanced autocompletion and refactoring support for SCSS.

- [`XML Format`](https://marketplace.visualstudio.com/items?itemName=mikeburgh.xml-format): Format XML documents.

### JavaScript, Node & NPM

- [`Import Cost`](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): This extension will display inline in the editor the size of the imported package.

- [`ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Integrates ESLint into VS Code

- [`NPM`](https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script): NPM support for VS Code.

- [`NPM Intellisense`](https://marketplace.visualstudio.com/items?itemName=christian-kohler.npm-intellisense): Visual Studio Code plugin that autocompletes NPM modules in import statements.

- [`Version Lens`](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens): Shows the latest version for each package using code lens.

- [`Vetur`](https://marketplace.visualstudio.com/items?itemName=octref.vetur): Vue tooling for VS Code.

### PHP

- [`Better PHPUnit`](https://marketplace.visualstudio.com/items?itemName=calebporzio.better-phpunit): A better PHPUnit test runner.

- [`Laravel Artisan`](https://marketplace.visualstudio.com/items?itemName=ryannaddy.laravel-artisan): Laravel Artisan commands within Visual Studio Code.

- [`PHP CS Fixer`](https://marketplace.visualstudio.com/items?itemName=junstyle.php-cs-fixer): PHP CS Fixer extension for VS Code, php formatter, php code beautify tool.

- [`PHP Doc Comment VSCode Plugin`](https://marketplace.visualstudio.com/items?itemName=rexshi.phpdoc-comment-vscode-plugin): Add phpdoc @param and @return tag for selected function signatures.

- [`PHP IntelliSense`](https://marketplace.visualstudio.com/items?itemName=felixfbecker.php-intellisense): Advanced Autocompletion and Refactoring support for PHP.

### Git

- [`Git History`](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory): View git log, file history, compare branches or commits.

- [`Gitignore`](https://marketplace.visualstudio.com/items?itemName=codezombiech.gitignore): An extension for Visual Studio Code that assists you in working with .gitignore files.

### Themes

- [`Material Icon Theme`](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme): Material Design Icons for Visual Studio Code.

- [`Palenight Theme`](https://marketplace.visualstudio.com/items?itemName=whizkydee.material-palenight-theme): An elegant and juicy material-like theme for Visual Studio Code.

### Handy

- [`Better comments`](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments): Improve your code commenting by annotating with alert, informational, TODOs, and more!

- [`Debugger for Chrome`](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome): Debug your JavaScript code in the Chrome browser.

- [`EditorConfig for VS Code`](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): EditorConfig Support for Visual Studio Code.

- [`File Utils`](https://marketplace.visualstudio.com/items?itemName=sleistner.vscode-fileutils): A convenient way of creating, duplicating, moving, renaming and deleting files and directories.

- [`Final-Newline`](https://marketplace.visualstudio.com/items?itemName=samverschueren.final-newline): Inserts a final newline when saving the document.

- [`Formatting Toggle`](https://marketplace.visualstudio.com/items?itemName=tombonnike.vscode-status-bar-format-toggle): A VS Code extension that allows you to toggle the formatter (Prettier, Beautify, …) ON and OFF with a simple click.

- [`Open in Github/Bitbucket...`](https://marketplace.visualstudio.com/items?itemName=ziyasal.vscode-open-in-github): Jump to a source code line in Github / Bitbucket, Gitlab, VisualStudio.com

- [`OpenChrome`](https://marketplace.visualstudio.com/items?itemName=huazaierli.openchrome&ssr=false#overview): Open file with Chrome.

- [`Output Colorizer`](https://marketplace.visualstudio.com/items?itemName=IBM.output-colorizer): Syntax Highlighting for log files.

- [`Prettier - Code formatter`](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): VS Code plugin for prettier/prettier.

- [`Project Manager`](https://marketplace.visualstudio.com/items?itemName=alefragnani.project-manager): Easily switch between projects.

- [`REST Client`](https://marketplace.visualstudio.com/items?itemName=humao.rest-client): REST Client for Visual Studio Code.

- [`SVG Viewer`](https://marketplace.visualstudio.com/items?itemName=cssho.vscode-svgviewer): SVG Viewer for Visual Studio Code.

- [`Terminal`](https://marketplace.visualstudio.com/items?itemName=formulahendry.terminal): Terminal for Visual Studio Code.

- [`Vue Peek`](https://marketplace.visualstudio.com/items?itemName=dariofuzinato.vue-peek): Allows peek and goto definition for Vue single-file components.

- [`VS Live Share`](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Real-time collaborative development from the comfort of your favorite tools.

- [`Wrap Console Log`](https://marketplace.visualstudio.com/items?itemName=midnightsyntax.vscode-wrap-console-log): Wrap to console.log by word or selection.

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
