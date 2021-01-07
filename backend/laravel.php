<?php

/********************************************************************************************
 * CLI AVAILABLE COMMANDS FOR ARTISAN
 * https://laravel.com/docs/5.8/artisan
 ********************************************************************************************/

// MAIN.

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

// APP.

php artisan app:name             // Set the application namespace

// AUTH

php artisan auth:clear-resets    // Flush expired password reset tokens

// CACHE

php artisan cache:clear          // Flush the application cache
php artisan cache:forget         // Remove an item from the cache
php artisan cache:table          // Create a migration for the cache database table
 
// CONFIG

php artisan config:cache         // Create a cache file for faster configuration loading
php artisan config:clear         // Remove the configuration cache file
 
// DB

php artisan db:seed              // Seed the database with records

// EVENT

php artisan event:generate       // Generate the missing events and listeners based on registration

// KEY

php artisan key:generate         // Set the application key

// MAKE

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

// MIGRATE

php artisan migrate:fresh        // Drop all tables and re-run all migrations
php artisan migrate:install      // Create the migration repository
php artisan migrate:refresh      // Reset and re-run all migrations
php artisan migrate:reset        // Rollback all database migrations
php artisan migrate:rollback     // Rollback the last database migration
php artisan migrate:status       // Show the status of each migration

// NOTIFICATIONS

php artisan notifications:table  // Create a migration for the notifications table

// OPTIMIZE

php artisan optimize:clear       // Remove the cached bootstrap files

// PACKAGE

php artisan package:discover     // Rebuild the cached package manifest

// QUEUE

php artisan queue:failed         // List all of the failed queue jobs
php artisan queue:failed-table   // Create a migration for the failed queue jobs database table
php artisan queue:flush          // Flush all of the failed queue jobs
php artisan queue:forget         // Delete a failed queue job
php artisan queue:listen         // Listen to a given queue
php artisan queue:restart        // Restart queue worker daemons after their current job
php artisan queue:retry          // Retry a failed queue job
php artisan queue:table          // Create a migration for the queue jobs database table
php artisan queue:work           // Start processing jobs on the queue as a daemon

// ROUTE

php artisan route:cache          // Create a route cache file for faster route registration
php artisan route:clear          // Remove the route cache file
php artisan route:list           // List all registered routes

// SCHEDULE

php artisan schedule:run         // Run the scheduled commands

// SESSION

php artisan session:table        // Create a migration for the session database table

// STORAGE

php artisan storage:link         // Create a symbolic link from "public/storage" to "storage/app/public"

// VENDOR

php artisan vendor:publish       // Publish any publishable assets from vendor packages

// VIEW

php artisan view:cache           // Compile all of the application's Blade templates
php artisan view:clear           // Clear all compiled view files

/********************************************************************************************
 * REQUEST
 * https://laravel.com/api/5.8/Illuminate/Http/Request.html
 * https://laravel.com/docs/5.8/requests
 ********************************************************************************************/



/********************************************************************************************
 * RESPONSE
 * https://laravel.com/api/5.8/Illuminate/Http/Response.html
 * https://laravel.com/docs/5.8/responses
 ********************************************************************************************/



/********************************************************************************************
 * ROUTING
 * https://laravel.com/docs/5.8/routing
 ********************************************************************************************/



 /********************************************************************************************
 * MIDDLEWARE
 * https://laravel.com/docs/5.8/middleware
 ********************************************************************************************/


/********************************************************************************************
 * CONTROLLERS
 * https://laravel.com/docs/5.8/controllers
 ********************************************************************************************/



/********************************************************************************************
 * SESSION
 * https://laravel.com/docs/5.8/session
 ********************************************************************************************/



/********************************************************************************************
 * URL GENERATION
 * https://laravel.com/docs/5.8/urls
 ********************************************************************************************/



/********************************************************************************************
 * VALIDATION
 * https://laravel.com/docs/5.8/validation
 ********************************************************************************************/

accepted                               // The field under validation must be yes, on, 1, or true.
active_url                             // The field under validation must have a valid A or AAAA record according to the dns_get_record PHP function.
after:date                             // The field under validation must be a value after a given date.
after_or_equal:date                    // The field under validation must be a value after or equal to the given date.
alpha                                  // The field under validation must be entirely alphabetic characters.
alpha_dash                             // The field under validation may have alpha-numeric characters, as well as dashes and underscores.
alpha_num                              // The field under validation must be entirely alpha-numeric characters.
array                                  // The field under validation must be a PHP array.
bail                                   // Stop running validation rules after the first validation failure.
before:date                            // The field under validation must be a value preceding the given date.
before_or_equal:date                   // The field under validation must be a value preceding or equal to the given date.
between:min,max                        // The field under validation must have a size between the given min and max.
boolean                                // The field under validation must be able to be cast as a boolean. Accepted input are true, false, 1, 0, "1", and "0".
confirmed                              // The field under validation must have a matching field of foo_confirmation.
date                                   // The field under validation must be a valid, non-relative date according to the strtotime PHP function.
date_equals:date                       // The field under validation must be equal to the given date.
date_format:format                     // The field under validation must match the given format.
different:field                        // The field under validation must have a different value than field.
digits:value                           // The field under validation must be numeric and must have an exact length of value.
digits_between:min,max                 // The field under validation must have a length between the given min and max.
dimensions                             // The file under validation must be an image meeting the dimension constraints as specified by the rule's parameters.
distinct                               // When working with arrays, the field under validation must not have any duplicate values.
email                                  // The field under validation must be formatted as an e-mail address.
ends_with:foo,bar,...                  // The field under validation must end with one of the given values.
exists:table,column                    // The field under validation must exist on a given database table.
file                                   // The field under validation must be a successfully uploaded file.
filled                                 // The field under validation must not be empty when it is present.
gt:field                               // The field under validation must be greater than the given field.
gte:field                              // The field under validation must be greater than or equal to the given field.
image                                  // The file under validation must be an image (jpeg, png, bmp, gif, svg, or webp)
in:foo,bar,...                         // The field under validation must be included in the given list of values.
in_array:anotherfield.*                // The field under validation must exist in anotherfield's values.
integer                                // The field under validation must be an integer.
ip                                     // The field under validation must be an IP address.
ipv4                                   // The field under validation must be an IPv4 address.
ipv6                                   // The field under validation must be an IPv6 address.
json                                   // The field under validation must be a valid JSON string.
lt:field                               // The field under validation must be less than the given field.
lte:field                              // The field under validation must be less than or equal to the given field.
max:value                              // The field under validation must be less than or equal to a maximum value.
mimetypes:text/plain,...               // The file under validation must match one of the given MIME types:
mimes:foo,bar,...                      // The file under validation must have a MIME type corresponding to one of the listed extensions.
min:value                              // The field under validation must have a minimum value.
not_in:foo,bar,...                     // The field under validation must not be included in the given list of values.
not_regex:pattern                      // The field under validation must not match the given regular expression.
nullable                               // The field under validation may be null.
numeric                                // The field under validation must be numeric.
present                                // The field under validation must be present in the input data but can be empty.
regex:pattern                          // The field under validation must match the given regular expression.
required                               // The field under validation must be present in the input data and not empty.
required_if:anotherfield,value,...     // The field under validation must be present and not empty if the anotherfield field is equal to any value.
required_unless:anotherfield,value,... // The field under validation must be present and not empty unless the anotherfield field is equal to any value.
required_with:foo,bar,...              // The field under validation must be present and not empty only if any of the other specified fields are present.
required_with_all:foo,bar,...          // The field under validation must be present and not empty only if all of the other specified fields are present.
required_without:foo,bar,...           // The field under validation must be present and not empty only when any of the other specified fields are not present.
required_without_all:foo,bar,...       // The field under validation must be present and not empty only when all of the other specified fields are not present.
same:field                             // The given field must match the field under validation.
size:value                             // The field under validation must have a size matching the given value.
starts_with:foo,bar,...                // The field under validation must start with one of the given values.
string                                 // The field under validation must be a string.
timezone                               // The field under validation must be a valid timezone identifier according to the timezone_identifiers_list PHP function.
unique:table,column,except,idColumn    // The field under validation must not exist within the given database table.
url                                    // The field under validation must be a valid URL.
uuid                                   // The field under validation must be a valid RFC 4122 (version 1, 3, 4, or 5) universally unique identifier (UUID).

/********************************************************************************************
 * ERROR HANDLING
 * https://laravel.com/docs/5.8/errors
 ********************************************************************************************/

/********************************************************************************************
 * MIGRATION COMMANDS
 * https://laravel.com/docs/5.8/migrations
 ********************************************************************************************/

// TABLE OPTIONS

$table->engine = 'InnoDB';             // Specify the table storage engine (MySQL).
$table->charset = 'utf8';              // Specify a default character set for the table (MySQL).
$table->collation = 'utf8_unicode_ci'; // Specify a default collation for the table (MySQL).
$table->temporary();                   // Create a temporary table (except SQL Server).

// COLUMN TYPES

$table->bigIncrements('id');                       // Auto-incrementing UNSIGNED BIGINT (primary key) equivalent column.
$table->bigInteger('votes');                       // BIGINT equivalent column.
$table->binary('data');                            // BLOB equivalent column.
$table->boolean('confirmed');                      // BOOLEAN equivalent column.
$table->char('name', 100);                         // CHAR equivalent column with an optional length.
$table->date('created_at');                        // DATE equivalent column.
$table->dateTime('created_at');                    // DATETIME equivalent column.
$table->dateTimeTz('created_at');                  // DATETIME (with timezone) equivalent column.
$table->decimal('amount', 8, 2);                   // DECIMAL equivalent column with a precision (total digits) and scale (decimal digits).
$table->double('amount', 8, 2);                    // DOUBLE equivalent column with a precision (total digits) and scale (decimal digits).
$table->enum('level', ['easy', 'hard']);           // ENUM equivalent column.
$table->float('amount', 8, 2);                     // FLOAT equivalent column with a precision (total digits) and scale (decimal digits).
$table->geometry('positions');                     // GEOMETRY equivalent column.
$table->geometryCollection('positions');           // GEOMETRYCOLLECTION equivalent column.
$table->increments('id');                          // Auto-incrementing UNSIGNED INTEGER (primary key) equivalent column.
$table->integer('votes');                          // INTEGER equivalent column.
$table->ipAddress('visitor');                      // IP address equivalent column.
$table->json('options');                           // JSON equivalent column.
$table->jsonb('options');                          // JSONB equivalent column.
$table->lineString('positions');                   // LINESTRING equivalent column.
$table->longText('description');                   // LONGTEXT equivalent column.
$table->macAddress('device');                      // MAC address equivalent column.
$table->mediumIncrements('id');                    // Auto-incrementing UNSIGNED MEDIUMINT (primary key) equivalent column.
$table->mediumInteger('votes');                    // MEDIUMINT equivalent column.
$table->mediumText('description');                 // MEDIUMTEXT equivalent column.
$table->morphs('taggable');                        // Adds taggable_id UNSIGNED BIGINT and taggable_type VARCHAR equivalent columns.
$table->uuidMorphs('taggable');                    // Adds taggable_id CHAR(36) and taggable_type VARCHAR(255) UUID equivalent columns.
$table->multiLineString('positions');              // MULTILINESTRING equivalent column.
$table->multiPoint('positions');                   // MULTIPOINT equivalent column.
$table->multiPolygon('positions');                 // MULTIPOLYGON equivalent column.
$table->nullableMorphs('taggable');                // Adds nullable versions of morphs() columns.
$table->nullableUuidMorphs('taggable');            // Adds nullable versions of uuidMorphs() columns.
$table->nullableTimestamps();                      // Alias of timestamps() method.
$table->point('position');                         // POINT equivalent column.
$table->polygon('positions');                      // POLYGON equivalent column.
$table->rememberToken();                           // Adds a nullable remember_token VARCHAR(100) equivalent column.
$table->set('flavors', ['strawberry', 'vanilla']); // SET equivalent column.
$table->smallIncrements('id');                     // Auto-incrementing UNSIGNED SMALLINT (primary key) equivalent column.
$table->smallInteger('votes');                     // SMALLINT equivalent column.
$table->softDeletes();                             // Adds a nullable deleted_at TIMESTAMP equivalent column for soft deletes.
$table->softDeletesTz();                           // Adds a nullable deleted_at TIMESTAMP (with timezone) equivalent column for soft deletes.
$table->string('name', 100);                       // VARCHAR equivalent column with a optional length.
$table->text('description');                       // TEXT equivalent column.
$table->time('sunrise');                           // TIME equivalent column.
$table->timeTz('sunrise');                         // TIME (with timezone) equivalent column.
$table->timestamp('added_on');                     // TIMESTAMP equivalent column.
$table->timestampTz('added_on');                   // TIMESTAMP (with timezone) equivalent column.
$table->timestamps();                              // Adds nullable created_at and updated_at TIMESTAMP equivalent columns.
$table->timestampsTz();                            // Adds nullable created_at and updated_at TIMESTAMP (with timezone) equivalent columns.
$table->tinyIncrements('id');                      // Auto-incrementing UNSIGNED TINYINT (primary key) equivalent column.
$table->tinyInteger('votes');                      // TINYINT equivalent column.
$table->unsignedBigInteger('votes');               // UNSIGNED BIGINT equivalent column.
$table->unsignedDecimal('amount', 8, 2);           // UNSIGNED DECIMAL equivalent column with a precision (total digits) and scale (decimal digits).
$table->unsignedInteger('votes');                  // UNSIGNED INTEGER equivalent column.
$table->unsignedMediumInteger('votes');            // UNSIGNED MEDIUMINT equivalent column.
$table->unsignedSmallInteger('votes');             // UNSIGNED SMALLINT equivalent column.
$table->unsignedTinyInteger('votes');              // UNSIGNED TINYINT equivalent column.
$table->uuid('id');                                // UUID equivalent column.
$table->year('birth_year');                        // YEAR equivalent column.

// COLUMN MODIFIERS

$table->someType()->after('column');              // Place the column "after" another column (MySQL)
$table->someType()->autoIncrement();              // Set INTEGER columns as auto-increment (primary key)
$table->someType()->charset('utf8');              // Specify a character set for the column (MySQL)
$table->someType()->collation('utf8_unicode_ci'); // Specify a collation for the column (MySQL/SQL Server)
$table->someType()->comment('my comment');        // Add a comment to a column (MySQL/PostgreSQL)
$table->someType()->default($value);              // Specify a "default" value for the column
$table->someType()->first();                      // Place the column "first" in the table (MySQL)
$table->someType()->nullable($value = true);      // Allows (by default) NULL values to be inserted into the column
$table->someType()->storedAs($expression);        // Create a stored generated column (MySQL)
$table->someType()->unsigned();                   // Set INTEGER columns as UNSIGNED (MySQL)
$table->someType()->useCurrent();                 // Set TIMESTAMP columns to use CURRENT_TIMESTAMP as default value
$table->someType()->virtualAs($expression);       // Create a virtual generated column (MySQL)
$table->someType()->generatedAs($expression);     // Create an identity column with specified sequence options (PostgreSQL)
$table->someType()->always();                     // Defines the precedence of sequence values over input for an identity column (PostgreSQL)

// UPDATING COLUMNS

$table->someType()->change();       // Allows you to modify some existing column types to a new type or modify the column's attributes.
$table->renameColumn('from', 'to'); // Rename a column

$table->dropColumn('column');       // Drop a given column (accepts an array of columns).
$table->dropRememberToken();        // Drop the remember_token column.
$table->dropSoftDeletes();          // Drop the deleted_at column.
$table->dropSoftDeletesTz();        // Alias of dropSoftDeletes() method.
$table->dropTimestamps();           // Drop the created_at and updated_at columns.
$table->dropTimestampsTz();         // Alias of dropTimestamps() method.

// INDEXES

$table->primary('id');                // Adds a primary key.
$table->primary(['id', 'parent_id']); // Adds composite keys.
$table->unique('email');              // Adds a unique index.
$table->index('state');               // Adds a plain index.
$table->spatialIndex('location');     // Adds a spatial index. (except SQLite)

$table->dropPrimary('users_id_primary');               // Drop a primary key from the "users" table.
$table->dropUnique('users_email_unique');              // Drop a unique index from the "users" table.
$table->dropIndex('geo_state_index');                  // Drop a basic index from the "geo" table.
$table->dropSpatialIndex('geo_location_spatialindex'); // Drop a spatial index from the "geo" table (except SQLite).

// FOREIGN KEY CONSTRAINTS

$table->foreign('user_id')->references('id')->on('users'); // Create foreign key constraints.
$table->dropForeign('posts_user_id_foreign');              // Drop foreign key (accepts an array of strings).

Schema::enableForeignKeyConstraints();  // Enable foreign key constraints within your migrations.
Schema::disableForeignKeyConstraints(); // Disable foreign key constraints within your migrations.

/********************************************************************************************
 * COLLECTION ELOQUENT METHODS
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
 * HTTP TESTS
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
 * LARAVEL VALET COMMANDS
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
