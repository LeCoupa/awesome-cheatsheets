/********************************************************************************************
 * ADONIS CHEATSHEET
 * https://adonisjs.com/
 ********************************************************************************************/

/********************************************************************************************
* AVAILABLE CLI COMMANDS
********************************************************************************************/

build   // Compile typescript code to Javascript. Optionally watch for file changes
invoke  // Invoke post install instructions on a given AdonisJs package
serve   // Compile typescript code to Javascript and start the HTTP server

// Dump

dump:rcfile  // Dump contents of .adonisrc.json file along with defaults

// Generate

generate:key       // Generate a new APP_KEY secret
generate:manifest  // Generate manifest file to execute ace commands

// List

list:routes  // List application routes

// Make

make:command     // Make a new ace command
make:controller  // Make a new HTTP controller
make:middleware  // Make a new middleware
make:migration   // Make a new migration
make:provider    // Make a new IoC container provider
make:validator   // Make a new validator
make:view        // Make a new view template

// Migrations

make:migration      // Create a new migration file.
migration:run       // Run all pending migrations.
migration:rollback  // Rollback last set of migrations.
migration:refresh   // Rollback all migrations to the 0 batch then re-run them from the start.
migration:reset     // Rollback all migrations to the 0 batch.
migration:status    // Get the status of all the migrations.

/********************************************************************************************
* ROUTING
********************************************************************************************/

Route.get(url, closure)     // Register route for GET verb
Route.post(url, closure)    // Register route for POST verb
Route.put(url, closure)     // Register route for PUT verb
Route.patch(url, closure)   // Register route for PATCH verb
Route.delete(url, closure)  // Register route for DELETED verb
Route.any(url, closure)     // Register route for all HTTP verbs

Route.on('/').render('welcome')  // Render a view directly

Route.route('/', () => {}, ['GET', 'POST', 'PUT'])           // Register route for multiple verbs
Route.get('users', closure).as('users.index')                // Assign a unique name to the route
Route.get('users', closure).formats(['json', 'html'], true)  // Force client to define the route format

Route.resource('users', 'UserController')                    // Define a resource route for CRUD operations
Route.resource('users', 'UserController').apiOnly()          // Remove create and edit routes
Route.resource('users', 'UserController').only(['index'])    // Keeps only the passed routes
Route.resource('users', 'UserController').except(['index'])  //Keeps all routes except the passed routes.

Route.group(() => {})                          // Define a group of routes
Route.group(() => {}).middleware(['auth'])     // Attach a middleware
Route.group(() => {}).formats(['json'])        // Define response formats
Route.group(() => {}).prefix('api/v1')         // Define a prefix for a group of routes
Route.group(() => {}).namespace('Admin')       // Prefix the namespace of the bound controller
Route.group(() => {}).domain('blog.sthg.com')  // Specify which domain goup routes belong to

/********************************************************************************************
* VALIDATOR
* https://indicative-v5.adonisjs.com/
********************************************************************************************/


/********************************************************************************************
* HOOKS
* https://adonisjs.com/docs/4.1/database-hooks
********************************************************************************************/

beforeCreate   // Before creating a new record.
afterCreate    // After a new record is created.
beforeUpdate   // Before updating a record.
afterUpdate    // After a record has been updated.
beforeSave     // Before creating or updating a new record.
afterSave      // After a new record has been created or updated.
beforeDelete   // Before removing a record.
afterDelete    // After a record is removed.
afterFind      // After a single record is fetched from the database.
afterFetch     // After the fetch method is executed.The hook method receives an array of model instances.
afterPaginate  // After the paginate method is executed.The hook method receives two arguments: an array of model instances and the pagination metadata.
