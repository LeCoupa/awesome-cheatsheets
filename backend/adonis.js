/********************************************************************************************
 * ADONIS CHEATSHEET
 * https://adonisjs.com/
 ********************************************************************************************/


 /********************************************************************************************
 * AVAILABLE CLI COMMANDS
 ********************************************************************************************/

build                 // Compile typescript code to Javascript. Optionally watch for file changes
invoke                // Invoke post install instructions on a given AdonisJs package
serve                 // Compile typescript code to Javascript and start the HTTP server

// Dump

dump:rcfile           // Dump contents of .adonisrc.json file along with defaults

// Generate

generate:key          // Generate a new APP_KEY secret
generate:manifest     // Generate manifest file to execute ace commands

// List

list:routes           // List application routes

// Make

make:command          // Make a new ace command
make:controller       // Make a new HTTP controller
make:middleware       // Make a new middleware
make:provider         // Make a new IoC container provider
make:validator        // Make a new validator
make:view             // Make a new view template
