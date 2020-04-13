/********************************************************************************************
 * ADONIS CHEATSHEET
 * https://adonisjs.com/
 ********************************************************************************************/

/********************************************************************************************
* AVAILABLE CLI COMMANDS
********************************************************************************************/

build   // Compile typescript code to Javascript. Optionally watch for file changes.
invoke  // Invoke post install instructions on a given AdonisJs package.
serve   // Compile typescript code to Javascript and start the HTTP server.

// Dump

dump:rcfile  // Dump contents of .adonisrc.json file along with defaults.

// Generate

generate:key       // Generate a new APP_KEY secret.
generate:manifest  // Generate manifest file to execute ace commands.

// List

list:routes  // List application routes.

// Make

make:command     // Make a new ace command.
make:controller  // Make a new HTTP controller.
make:middleware  // Make a new middleware.
make:migration   // Make a new migration.
make:provider    // Make a new IoC container provider.
make:validator   // Make a new validator.
make:view        // Make a new view template.

// Migrations

make:migration      // Create a new migration file.
migration:run       // Run all pending migrations.
migration:rollback  // Rollback last set of migrations.
migration:refresh   // Rollback all migrations to the 0 batch then re-run them from the start.
migration:reset     // Rollback all migrations to the 0 batch.
migration:status    // Get the status of all the migrations.

/********************************************************************************************
* REQUEST
********************************************************************************************/

request.all()                             // Returns an object containing all request data (merges query params and request body data).
request.get()                             // Returns an object containing query params data.
request.post()                            // Returns an object containing request body data.
request.raw()                             // Returns raw body data as a string.
request.only(['username', 'age'])         // Returns an object with only the specified keys.
request.collect(['username', 'age'])      // Formats so it’s ready to save to the database.
request.except(['csrf_token', 'submit'])  // Returns an object with everything except the specified keys (opposite of only).
request.input('drink', 'coffee')          // Get the value of a given key (if it doesn’t exist, return the default value).

request.headers()                               // Returns an object of all header data.
request.header('some-other-header', 'default')  // The header value for a given key (optionally with default value).

request.cookies()                     // Returns an object of all cookie data.
request.cookie('cart_total', 0)       // Returns the cookie value for a given key (optionally with default value).
request.plainCookies()                // Returns an object of all raw cookie data.
request.plainCookie('cart_total', 0)  // Returns the raw cookie value for a given key (optionally with default value).

request.accepts(['json', 'html'])  // Reads the Accept header to help determine the response format.
request.language(['en', 'fr'])     // Language can also be negotiated based upon the Accept-Language header.

request.url()                 // Returns the current request url.
request.originalUrl()         // Returns the full current request url with query strings.
request.method()              // Returns the HTTP request method.
request.intended()            // Returns the intended request HTTP method.
request.ip()                  // Returns the most trusted ip address for the user.
request.ips()                 // Returns an array of ips from most to the least trusted (removes the default ip address, which can be accessed via the ip method).
request.subdomains()          // Returns a list of request subdomains (removes www from the list).
request.ajax()                // Checks for X-Requested-With header to determine if the request is ajax or not.
request.pjax()                // This methods looks for the X-PJAX header to identify if a request is pjax or not.
request.hostname()            // Returns the request hostname.
request.protocol()            // Return the request protocol.
request.match(['posts/:id'])  // Returns whether the passed set of expressions match the current request URL.
request.hasBody()             // A boolean indicating if the request has a post body (mainly used by the BodyParser to determine whether or not to parse the body).
request.is(['json', 'html'])  // The is method returns the best matching content type for the current request. The check is entirely based upon the content-type header.

/********************************************************************************************
* ROUTING
********************************************************************************************/

Route.get(url, closure)     // Register route for GET verb.
Route.post(url, closure)    // Register route for POST verb.
Route.put(url, closure)     // Register route for PUT verb.
Route.patch(url, closure)   // Register route for PATCH verb.
Route.delete(url, closure)  // Register route for DELETED verb.
Route.any(url, closure)     // Register route for all HTTP verbs.

Route.on('/').render('welcome')  // Render a view directly.

Route.route('/', () => {}, ['GET', 'POST', 'PUT'])           // Register route for multiple verbs.
Route.get('users', closure).as('users.index')                // Assign a unique name to the route.
Route.get('users', closure).formats(['json', 'html'], true)  // Force client to define the route format.

Route.resource('users', 'UserController')                    // Define a resource route for CRUD operations.
Route.resource('users', 'UserController').apiOnly()          // Remove create and edit routes.
Route.resource('users', 'UserController').only(['index'])    // Keeps only the passed routes.
Route.resource('users', 'UserController').except(['index'])  //Keeps all routes except the passed routes.

Route.group(() => {})                          // Define a group of routes.
Route.group(() => {}).middleware(['auth'])     // Attach a middleware.
Route.group(() => {}).formats(['json'])        // Define response formats.
Route.group(() => {}).prefix('api/v1')         // Define a prefix for a group of routes.
Route.group(() => {}).namespace('Admin')       // Prefix the namespace of the bound controller.
Route.group(() => {}).domain('blog.sthg.com')  // Specify which domain goup routes belong to.

/********************************************************************************************
* VALIDATOR
* https://indicative-v5.adonisjs.com/
********************************************************************************************/

const indicative = require("indicative");

const rules = {
  email: "required|email|unique:users",
  password: "required|min:6|max:30",
};

// Indivative methods

indicative.validate(data, rules);                   //  Validate data with defined rules.
indicative.validateAll(data, rules);                //  Same as validate but continues to validate all fields, whereas the validate method stops on first error.
indicative.is.email(emailAddress);                  //  Raw validator.
indicative.extend("exists", existsFn);              //  Add your own rules.
indicative.sanitize(data, rules);                   //  Returns a new object with sanitized data:.
indicative.sanitizor.normalizeEmail(emailAddress);  //  Raw sanitizor.

// Validations

above               // Makes sure the value provided by the end user is above the expected value.
accepted            // Ensures that the field under validation is accepted.
after               // Ensures the value of the field is after the expected date.
afterOffsetOf       // Ensures the date is after a given offset of a given time period.
alpha               // Makes sure the field under validation is alpha only.
alphaNumeric        // Makes sure the field under validation is alpha numeric only.
array               // Ensure the value is a valid array. Also this validation will never validate the size of array.
before              // Ensures the value of field under validation is before a given date.
beforeOffsetOf      // Ensures the date is before a given offset of a given time period.
boolean             // Ensures the value of a field is a boolean.
confirmed           // Ensures a field value as confirmed using a _confirmation convention. This is mainly used for password confirmation field.
date                // Ensures the field under validation is a valid date. The value can be a date object or a valid date string.
dateFormat          // Ensures the date or date time is valid as the one of the defined formats.
different           // Ensures the value of the field under validation is always different from the targeted field value.
email               // Ensures the field under validation is a valid email format.
endsWith            // Ensure the value of field under validation ends with a certain substr. This validation will also trim whitespaces before making the check.
equals              // Ensures 2 values are lossely same. This validation will not check for the same type, but instead checks for the same value.
in                  // Ensures the value of a given field matches one of expected values.
includes            // Ensures the value of field under validation contains a given substring.
integer             // Ensures the value is a valid integer. Also string representation of a number will return true.
ip                  // Ensures the value is a valid ip address as per ipv4 and ipv6 specs.
ipv4                // Ensures the value is a valid ip address as per ipv4 spec only.
ipv6                // Ensures the value is a valid ip address as per ipv6 spec only.
json                // Ensures the value of field under validation is safe to be parsed using JSON.parse method.
max                 // Ensures the length of a string or array is not greater than the defined length.
min                 // Ensures the length of a string or array is not is not less than the expected length
notEquals           // Makes sure that the value of field under validation is not same as the defined value.
notIn               // Makes sure that the value of field under validation is not from one of the defined values.
number              // Makes sure that the value of field under validation is a valid number. The validation will pass for floats too, since it uses typeof internally.
object              // Ensures the value of field under validation is a valid Javascript object. The validation will fail for Arrays, though they are objects too in Javascript.
range               // Ensures the value of field under validation is under a given range. The values will be cased to Number automatically.
regex               // Ensures the value of field under validation, passes the regex test. The regex can be defined as a string or a RegExp object.
required            // Ensures the value of field under validation is not empty (i.e. not an empty object, empty array, empty string, null or undefined).
requiredIf          // The field is checked for required validation, when expected field exists.
requiredWhen        // The field is checked for required validation, when expected field value is same as the expected value.
requiredWithAll     // Ensures the field is required when all other fields have non-empty values.
requiredWithAny     // Ensures the field is required when any of the other fields have non-empty values.
requiredWithoutAll  // Ensures the field is required when all of the other fields has empty values.
requiredWithoutAny  // Ensures the field is required when any of the other fields has empty values.
same                // Ensures the value of 2 fields are same.
startsWith          // Ensure the value of field under validation starts with a certain substr. This validation will also trim whitespaces before making the check.
string              // Ensures the value is a string.
under               // Ensures the value of a field is under a certain value. All values will be casted to Number.
url                 // Ensures the value is a valid URL format.

/********************************************************************************************
* DATABASE HOOKS
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
