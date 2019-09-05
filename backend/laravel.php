<?php

/********************************************************************************************
 * 1. CLI AVAILABLE COMMANDS FOR ARTISAN
 * https://laravel.com/docs/5.8/artisan
 ********************************************************************************************/

// 1.1. MAIN.

php artisan clear-compiled       // Remove the compiled class file
php artisan down                 // Put the application into maintenance mode
php artisan dump-server          // Start the dump server to collect dump information.
php artisan env                  // Display the current framework environment
php artisan help                 // Displays help for a command
php artisan inspire              // Display an inspiring quote
php artisan list                 // Lists commands
php artisan migrate              // Run the database migrations
php artisan optimize             // Cache the framework bootstrap files
php artisan preset               // Swap the front-end scaffolding for the application
php artisan serve                // Serve the application on the PHP development server
php artisan tinker               // Interact with your application
php artisan up                   // Bring the application out of maintenance mode

// 1.2. APP.

php artisan app:name             // Set the application namespace

// 1.3. AUTH

php artisan auth:clear-resets    // Flush expired password reset tokens

// 1.4. CACHE

php artisan cache:clear          // Flush the application cache
php artisan cache:forget         // Remove an item from the cache
php artisan cache:table          // Create a migration for the cache database table
 
// 1.5. CONFIG

php artisan config:cache         // Create a cache file for faster configuration loading
php artisan config:clear         // Remove the configuration cache file
 
// 1.6. DB

php artisan db:seed              // Seed the database with records

// 1.7. EVENT

php artisan event:generate       // Generate the missing events and listeners based on registration

// 1.8. KEY

php artisan key:generate         // Set the application key

// 1.9. MAKE

php artisan make:auth            // Scaffold basic login and registration views and routes
php artisan make:channel         // Create a new channel class
php artisan make:command         // Create a new Artisan command
php artisan make:controller      // Create a new controller class
php artisan make:event           // Create a new event class
php artisan make:exception       // Create a new custom exception class
php artisan make:factory         // Create a new model factory
php artisan make:job             // Create a new job class
php artisan make:listener        // Create a new event listener class
php artisan make:mail            // Create a new email class
php artisan make:middleware      // Create a new middleware class
php artisan make:migration       // Create a new migration file
php artisan make:model           // Create a new Eloquent model class
php artisan make:notification    // Create a new notification class
php artisan make:observer        // Create a new observer class
php artisan make:policy          // Create a new policy class
php artisan make:provider        // Create a new service provider class
php artisan make:request         // Create a new form request class
php artisan make:resource        // Create a new resource
php artisan make:rule            // Create a new validation rule
php artisan make:seeder          // Create a new seeder class
php artisan make:test            // Create a new test class

// 1.10. MIGRATE

php artisan migrate:fresh        // Drop all tables and re-run all migrations
php artisan migrate:install      // Create the migration repository
php artisan migrate:refresh      // Reset and re-run all migrations
php artisan migrate:reset        // Rollback all database migrations
php artisan migrate:rollback     // Rollback the last database migration
php artisan migrate:status       // Show the status of each migration

// 1.11. NOTIFICATIONS

php artisan notifications:table  // Create a migration for the notifications table

// 1.12. OPTIMIZE

php artisan optimize:clear       // Remove the cached bootstrap files

// 1.13. PACKAGE

php artisan package:discover     // Rebuild the cached package manifest

// 1.14. QUEUE

php artisan queue:failed         // List all of the failed queue jobs
php artisan queue:failed-table   // Create a migration for the failed queue jobs database table
php artisan queue:flush          // Flush all of the failed queue jobs
php artisan queue:forget         // Delete a failed queue job
php artisan queue:listen         // Listen to a given queue
php artisan queue:restart        // Restart queue worker daemons after their current job
php artisan queue:retry          // Retry a failed queue job
php artisan queue:table          // Create a migration for the queue jobs database table
php artisan queue:work           // Start processing jobs on the queue as a daemon

// 1.15. ROUTE

php artisan route:cache          // Create a route cache file for faster route registration
php artisan route:clear          // Remove the route cache file
php artisan route:list           // List all registered routes

// 1.16. SCHEDULE

php artisan schedule:run         // Run the scheduled commands

// 1.17. SESSION

php artisan session:table        // Create a migration for the session database table

// 1.18. STORAGE

php artisan storage:link         // Create a symbolic link from "public/storage" to "storage/app/public"

// 1.19. VENDOR

php artisan vendor:publish       // Publish any publishable assets from vendor packages

// 1.20. VIEW

php artisan view:cache           // Compile all of the application's Blade templates
php artisan view:clear           // Clear all compiled view files

/********************************************************************************************
 * 2. REQUEST
 * https://laravel.com/api/5.8/Illuminate/Http/Request.html
 * https://laravel.com/docs/5.8/requests
 ********************************************************************************************/



/********************************************************************************************
 * 3. RESPONSE
 * https://laravel.com/api/5.8/Illuminate/Http/Response.html
 * https://laravel.com/docs/5.8/responses
 ********************************************************************************************/



/********************************************************************************************
 * 4. ROUTING
 * https://laravel.com/docs/5.8/routing
 ********************************************************************************************/



 /********************************************************************************************
 * 5. MIDDLEWARE
 * https://laravel.com/docs/5.8/middleware
 ********************************************************************************************/


/********************************************************************************************
 * 6. CONTROLLERS
 * https://laravel.com/docs/5.8/controllers
 ********************************************************************************************/



/********************************************************************************************
 * 7. SESSION
 * https://laravel.com/docs/5.8/session
 ********************************************************************************************/



/********************************************************************************************
 * 8. URL GENERATION
 * https://laravel.com/docs/5.8/urls
 ********************************************************************************************/



/********************************************************************************************
 * 9. VALIDATION
 * https://laravel.com/docs/5.8/validation
 ********************************************************************************************/



/********************************************************************************************
 * 10. ERROR HANDLING
 * https://laravel.com/docs/5.8/errors
 ********************************************************************************************/



/********************************************************************************************
 * 11. LOGGING
 * https://laravel.com/docs/5.8/logging
 ********************************************************************************************/


/********************************************************************************************
 * 12. COLLECTIONS
 * https://laravel.com/docs/5.7/collections
 ********************************************************************************************/


all
average
avg
chunk
collapse
combine
concat
contains
containsStrict
count
crossJoin
dd
diff
diffAssoc
diffKeys
dump
each
eachSpread
every
except
filter
first
firstWhere
flatMap
flatten
flip
forget
forPage
get
groupBy
has
implode
intersect
intersectByKeys
isEmpty
isNotEmpty
keyBy
keys
last
macro
make
map
mapInto
mapSpread
mapToGroups
mapWithKeys
max
median
merge
min
mode
nth
only
pad
partition
pipe
pluck
pop
prepend
pull
push
put
random
reduce
reject
reverse
search
shift
shuffle
slice
some
sort
sortBy
sortByDesc
sortKeys
sortKeysDesc
splice
split
sum
take
tap
times
toArray
toJson
transform
union
unique
uniqueStrict
unless
unlessEmpty
unlessNotEmpty
unwrap
values
when
whenEmpty
whenNotEmpty
where
whereStrict
whereBetween
whereIn
whereInStrict
whereInstanceOf
whereNotBetween
whereNotIn
whereNotInStrict
wrap
zip


/********************************************************************************************
 * 13. HTTP TESTS
 * https://laravel.com/docs/5.7/http-tests
 ********************************************************************************************/


$response->assertStatus($code);                            // Assert that the response has a given code.
$response->assertForbidden();                              // Assert that the response has a forbidden status code.
$response->assertNotFound();                               // Assert that the response has a not found status code.
$response->assertOk();                                     // Assert that the response has a 200 status code.
$response->assertSuccessful();                             // Assert that the response has a successful status code.
$response->assertRedirect($uri);                           // Assert that the response is a redirect to a given URI.

$response->assertHeader($headerName, $value = null);       // Assert that the given header is present on the response.
$response->assertHeaderMissing($headerName);               // Assert that the given header is not present on the response.

$response->assertExactJson(array $data);                   // Assert that the response contains an exact match of the given JSON data.
$response->assertJson(array $data);                        // Assert that the response contains the given JSON data.
$response->assertJsonCount($count, $key = null);           // Assert that the response JSON has an array with the expected number of items at the given key.
$response->assertJsonFragment(array $data);                // Assert that the response contains the given JSON fragment.
$response->assertJsonMissing(array $data);                 // Assert that the response does not contain the given JSON fragment.
$response->assertJsonMissingExact(array $data);            // Assert that the response does not contain the exact JSON fragment.
$response->assertJsonMissingValidationErrors($keys);       // Assert that the response has no JSON validation errors for the given keys.
$response->assertJsonStructure(array $structure);          // Assert that the response has a given JSON structure.
$response->assertJsonValidationErrors($keys);              // Assert that the response has the given JSON validation errors for the given keys.

$response->assertDontSee($value);                          // Assert that the given string is not contained within the response.
$response->assertDontSeeText($value);                      // Assert that the given string is not contained within the response text.
$response->assertSee($value);                              // Assert that the given string is contained within the response.
$response->assertSeeInOrder(array $values);                // Assert that the given strings are contained in order within the response.
$response->assertSeeText($value);                          // Assert that the given string is contained within the response text.
$response->assertSeeTextInOrder(array $values);            // Assert that the given strings are contained in order within the response text.

$response->assertCookie($cookieName, $value = null);       // Assert that the response contains the given cookie.
$response->assertCookieExpired($cookieName);               // Assert that the response contains the given cookie and it is expired.
$response->assertCookieNotExpired($cookieName);            // Assert that the response contains the given cookie and it is not expired.
$response->assertCookieMissing($cookieName);               // Assert that the response does not contains the given cookie.
$response->assertPlainCookie($cookieName, $value = null);  // Assert that the response contains the given cookie (unencrypted).

$response->assertSessionHas($key, $value = null);                                             // Assert that the session contains the given piece of data.
$response->assertSessionHasAll(array $data);                                                  // Assert that the session has a given list of values.
$response->assertSessionHasErrors(array $keys, $format = null, $errorBag = 'default');        // Assert that the session contains an error for the given field.
$response->assertSessionHasErrorsIn($errorBag, $keys = [], $format = null);                   // Assert that the session has the given errors.
$response->assertSessionHasNoErrors();                                                        // Assert that the session has no errors.
$response->assertSessionDoesntHaveErrors($keys = [], $format = null, $errorBag = 'default');  // Assert that the session has no errors for the given keys.
$response->assertSessionMissing($key);                                                        // Assert that the session does not contain the given key.

$response->assertViewHas($key, $value = null);             // Assert that the response view was given a piece of data.
$response->assertViewHasAll(array $data);                  // Assert that the response view has a given list of data.
$response->assertViewIs($value);                           // Assert that the given view was returned by the route.
$response->assertViewMissing($key);                        // Assert that the response view is missing a piece of bound data.

$this->assertAuthenticated($guard = null);                           // Assert that the user is authenticated.
$this->assertGuest($guard = null);                                   // Assert that the user is not authenticated.
$this->assertAuthenticatedAs($user, $guard = null);                  // Assert that the given user is authenticated.
$this->assertCredentials(array $credentials, $guard = null);         // $this->assertCredentials(array $credentials, $guard = null).
$this->assertInvalidCredentials(array $credentials, $guard = null);  // Assert that the given credentials are invalid.

/********************************************************************************************
 * 14. LARAVEL VALET COMMANDS
 * https://laravel.com/docs/6.0/valet
 ********************************************************************************************/

valet install     // Install the Valet daemon.
valet uninstall   // Uninstall the Valet daemon.
valet use php@7.2 // Allows you to switch between php versions.

valet start       // Start the Valet daemon.
valet stop        // Stop the Valet daemon.
valet restart     // Restart the Valet daemon.

valet park        // Register your current working directory as a path which Valet should search for sites.
valet forget      // Run this command from a "parked" directory to remove it from the parked directory list.
valet paths       // View all of your "parked" paths.

valet link <name>   // Link a single site in the current directory and not the entire directory.
valet unlink <name> // Unlink a single site in the current directory
valet links         // View all of your "linked" paths.

valet secure      // Serve site into https
valet unsecure    // Revert back to http

valet log          // View a list of logs which are written by Valet's services.
valet trust        // Add sudoers files for Brew and Valet to allow Valet commands to be run without prompting for passwords.
valet tld <suffix> // Update tld for your domains (default to test).
valet share        // Share your site with the world.
