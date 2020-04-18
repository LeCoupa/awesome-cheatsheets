/********************************************************************************************
 * ADONIS CHEATSHEET
 * https://adonisjs.com/
 ********************************************************************************************/

/********************************************************************************************
* AVAILABLE CLI COMMANDS
* https://adonisjs.com/docs/ace
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
* https://adonisjs.com/docs/request
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
* RESPONSE
* https://adonisjs.com/docs/response
********************************************************************************************/

response.header("Content-type", "application/json");      // Set a header value.
response.safeHeader("Content-type", "application/json");  // Only set a header value if it does not already exist.
response.removeHeader("Content-type");                    // Remove an existing header.
response.type("application/json");                        // Set the Content-Type header.

response.cookie("cartTotal", 20);       // Set a cookie value.
response.clearCookie("cartTotal");      // Remove an existing cookie value (by setting its expiry in the past).
response.plainCookie("cartTotal", 20);  // Set a plain cookie.

response.redirect(url, [(sendParams = false)], [(status = 302)]);                   // Redirect request to a different url (by default it will set the status as 302).
response.route(route, [data], [domain], [(sendParams = false)], [(status = 302)]);  // Redirect to a route (via route name or controller method).

response.download(filePath);                           // Stream the file to the client.
response.attachment(filePath, [name], [disposition]);  // Force download the file.

response.continue();                      // 100 status code
response.switchingProtocols();            // 101 status code
response.ok();                            // 200 status code
response.created();                       // 201 status code
response.accepted();                      // 202 status code
response.nonAuthoritativeInformation();   // 203 status code
response.noContent();                     // 204 status code
response.resetContent();                  // 205 status code
response.partialContent();                // 206 status code
response.multipleChoices();               // 300 status code
response.movedPermanently();              // 301 status code
response.found();                         // 302 status code
response.seeOther();                      // 303 status code
response.notModified();                   // 304 status code
response.useProxy();                      // 305 status code
response.temporaryRedirect();             // 307 status code
response.badRequest();                    // 400 status code
response.unauthorized();                  // 401 status code
response.paymentRequired();               // 402 status code
response.forbidden();                     // 403 status code
response.notFound();                      // 404 status code
response.methodNotAllowed();              // 405 status code
response.notAcceptable();                 // 406 status code
response.proxyAuthenticationRequired();   // 407 status code
response.requestTimeout();                // 408 status code
response.conflict();                      // 409 status code
response.gone();                          // 410 status code
response.lengthRequired();                // 411 status code
response.preconditionFailed();            // 412 status code
response.requestEntityTooLarge();         // 413 status code
response.requestUriTooLong();             // 414 status code
response.unsupportedMediaType();          // 415 status code
response.requestedRangeNotSatisfiable();  // 416 status code
response.expectationFailed();             // 417 status code
response.unprocessableEntity();           // 422 status code
response.tooManyRequests();               // 429 status code
response.internalServerError();           // 500 status code
response.notImplemented();                // 501 status code
response.badGateway();                    // 502 status code
response.serviceUnavailable();            // 503 status code
response.gatewayTimeout();                // 504 status code
response.httpVersionNotSupported();       // 505 status code

/********************************************************************************************
* ROUTING
* https://adonisjs.com/docs/routing
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
* https://adonisjs.com/docs/database-hooks
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

/********************************************************************************************
* EVENTS
* https://adonisjs.com/docs/events
********************************************************************************************/

Event.on(event, listener)              // Bind single or multiple listeners for a given event. The listener can be a closure function or reference to one (or many) IoC container bindings.
Event.when(event, listener)            // The when method aliases the on method.
Event.once(event, listener)            // Same as on, but only called one time.
Event.onAny(listener)                  // Bind listener for any event
Event.times(number)                    // The times method is chained with on or when to limit the number of times the listener should be fired.
Event.emit(event, data)                // Emit an event with optional data.
Event.fire(event, data)                // The fire method aliases the emit method.
Event.removeListener(event, listener)  // Remove listener(s) for a given event.
Event.off(event, listener)             // The off method aliases the removeListener method.
Event.removeAllListeners(event)        // Remove all listeners for a given event.
Event.listenersCount(event)            // Return the number of listeners for a given event.
Event.getListeners(event)              // Return an array of listeners for a given event.
Event.hasListeners(event)              // Return a boolean indicating whether there are any listeners for a given event.

/********************************************************************************************
* LOGGER
* https://adonisjs.com/docs/sessions
********************************************************************************************/

const Logger = use('Logger')

Logger.level = 'debug'  // Sed default config level

Logger.emerg(msg[, …​data])    // Print an emergency log (level 0).
Logger.alert(msg[, …​data])    // Print an alert log (level 1).
Logger.crit(msg[, …​data])     // Print a critical log (level 2).
Logger.error(msg[, …​data])    // Print an error log (level 3).
Logger.warning(msg[, …​data])  // Print a warning log (level 4).
Logger.notice(msg[, …​data])   // Print a notice log (level 5).
Logger.info(msg[, …​data])     // Print an info log (level 6).
Logger.debug(msg[, …​data])    // Print a debug log (level 7).

Logger.transport(transport)  // Switch transport on the fly.

/********************************************************************************************
* ENCRYPTION AND HASHING
* https://adonisjs.com/docs/4.1/encryption-and-hashing
********************************************************************************************/

const Encryption = use('Encryption')

Encryption.encrypt(string)  // Encrypt a given value.
Encryption.decrypt(string)  // Decrypt an encrypted value.

const Hash = use('Hash')

await Hash.make(string[, config])        // Hash a plain string value.
await Hash.verify(string, hashedString)  // Since you cannot decrypt a hash, you can verify the user input against the previously hashed value.

/********************************************************************************************
* SESSIONS
* https://adonisjs.com/docs/sessions
********************************************************************************************/

session.put(key, value);            // Add a key/value pair to the session store.
session.get(key, [defaultValue]);   // Return the value for a given key (accepts an optional default value).
session.all();                      // Get everything back as an object from the session store.
session.increment(key, [steps]);    // Increment the value for a given key (ensure the previous value is a number).
session.decrement(key, [steps]);    // Decrement the value for a given key (ensure the previous value is a number).
session.forget(key);                // Remove a key/value pair from the session store.
session.pull(key, [defaultValue]);  // Return (and then remove) a key/value pair from the session store.
session.clear();                    // Empty the session store.

session.flashAll()     // Flash the request form data.
session.flashOnly()    // Flash only the selected fields.
session.flashExcept()  // Flash the request form data except the selected fields.
session.withErrors()   // Flash with an array of errors.
session.flash()        // Flash a custom object.
