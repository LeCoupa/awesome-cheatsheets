/********************************************************************************************
 * SAILS.JS CHEATSHEET
 * REFERENCE: https://sailsjs.com/documentation/reference
 * CONCEPTS: https://sailsjs.com/documentation/concepts
 * APP STRUCTURE: https://sailsjs.com/documentation/anatomy
 *
 * 1. APPLICATION
 * 2. BLUEPRINT API
 * 3. COMMAND-LINE INTERFACE
 * 4. CONFIGURATION
 * 5. REQUEST
 * 6. RESPONSE
 * 7. WATERLINE ORM
 * 8. WEBSOCKETS
 ********************************************************************************************/

/********************************************************************************************
 * 1. APPLICATION
 * https://sailsjs.com/documentation/reference/application
 ********************************************************************************************/

// A dictionary of all loaded Sails models, indexed by their identity.
sails.models

// A dictionary of all accessible helpers, including organics.
sails.helpers

// A dictionary of all loaded Sails hooks, indexed by their identity.
sails.hooks

// The full set of configuration options for the Sails instance
// It is assembled automatically when Sails loads your app
// merging together command-line arguments, environment variables, your .sailsrc file,
// and the configuration objects exported from any and all modules in your app's config/ directory.
sails.config

// The runtime values of your app's custom configuration settings.
sails.config.custom

// A set of convenience methods for low - level interaction with connected websockets.
sails.sockets

// Talk to Socket.io directly.
sails.io

// A regular expression designed for use in identifying URL paths that seem like they are probably
// for a static asset of some kind (e.g. image, stylesheet, favicon.ico, robots.txt, etc).
sails.LOOKS_LIKE_ASSET_RX

// Return a dictionary of Sails actions.
sails.getActions()

// Look up the first route pointing at the specified target (e.g. MeController.login)
// and return a dictionary containing its method and URL.
sails.getRouteFor(target)

// Look up the first route pointing at the specified target (e.g. entrance/view-login)
// and return its URL.
sails.getUrlFor(target)

// Lift a Sails app programmatically.
// This does exactly what you might be used to seeing by now when you run sails lift.
sailsApp.lift(configOverrides, function(err) {})

// Load a Sails app into memory-- but without lifting an HTTP server.
// Useful for writing tests, command - line scripts, and scheduled jobs.
sailsApp.load(configOverrides, function(err) {})

// Shut down a lifted Sails app and have it cease listening for / responding to any future requests.
sails.lower(callback)

// Register a new Sails action that can then be bound to a route.
sails.registerAction(action, name)

// Register a new action middleware function that will be applied to actions
// with the specified identities.
sails.registerActionMiddleware(actionMiddlewareFns, actionIdentities)

// Flush and reload all Sails actions.
sails.reloadActions()

// Compile a view into an HTML template.
sails.renderView(pathToView, templateData)

// Make a virtual request to a running Sails instance.
sails.request(request)
sails.request(url, body)
sails.request(url, callback)
sails.request(url, body, callback)

// Access a particular datastore, or the default datastore.
sails.getDatastore(datastoreName)

// Log a message or some data at the "debug" log level using Sails' built-in logger.
sails.log(message)

/********************************************************************************************
 * 2. BLUEPRINT API
 * https://sailsjs.com/documentation/reference/blueprint-api
 ********************************************************************************************/

// Find a list of records that match the specified criteria
// and (if possible) subscribe to each of them.
GET /:model

// Look up the record with the specified id from the database
// and (if possible) subscribe to the record to hear about any future changes.
GET /:model/:id

// Populate and return foreign record(s) for the given association of this record.
GET /:model/:id/:association

// Create a new record in your database
// and notify subscribed sockets that a newly record is created
POST /:model

// Update an existing record in the database
// and notify subscribed sockets that it has changed.
PATCH /:model/:id

// Replace all of the foreign records in one of this record's collections
// and notify subscribed sockets to the parent record.
PUT /:model/:id/:association

// Add a foreign record to one of this record's collections
// and notify subscribed sockets to the parent record.
PUT /:model/:id/:association/:fk

// Delete the record specified by id from the database forever
// and notify subscribed sockets that a record has been deleted
DELETE /:model/:id

// Remove a foreign record from one of this record's collections
// and notify subscribed sockets about this removed child
DELETE /:model/:id/:association/:fk

/********************************************************************************************
 * 3. COMMAND-LINE INTERFACE
 * https://sailsjs.com/documentation/reference/command-line-interface
 ********************************************************************************************/

// Lift your Node.js/Sails.js app in interactive mode, and enter the REPL.
// Useful for trying out Waterline queries, quickly managing your data, and checking
// out your project's runtime configuration.
sails console [--dontLift]

// Generate api/models/Foo.js, including attributes with the specified types if provided.
sails generate model

// Generate a standalone action.
sails generate action

// Generate a helper at api/helpers/foo.js.
sails generate helper

// Generate api/controllers/FooController.js, including actions with the specified names if provided.
sails generate controller

// Generate a project hook in api/hooks/foo/.
sails generate hook

// Generate a foo folder containing the files necessary for building a new generator.
sails generate generator

// Generate a custom response at api/responses/foo.js
sails generate response

// Generate a api/adapters/foo/ folder containing the files necessary for building a new adapter.
sails generate adapter

// Generate a sails.io.js file at the specified location, overwriting the default sails.io.js if applicable.
sails generate sails.io.js

// Generate api/models/Foo.js and api/controllers/FooController.js.
sails generate api	

// Alias for sails new.
sails generate new

// Experimental. Adds the following files to your app:
// .gitignore, .jshintrc, .editorconfig, .npmignore, .travis.yml, .appveyor.yml
sails generate etc

// Attach the node debugger and lift the sails app; similar to running node--inspect app.js.
// You can then use a tool like the Chrome DevTools to interactively debug your apps.
sails inspect

// Run the Sails app in the current dir
// (if node_modules/sails exists, it will be used instead of the globally installed Sails)
sails lift [--prod] [--port <portNum>] [--verbose] [--silly]

// Create a new sails project.
sails new <yourAppName> [--no-frontend] [--minimal] [--without=package,package,package]

// Get the version of your computer's globally installed Sails command-line tool
// (i.e. the version you installed with npm install -g sails).
sails version

/********************************************************************************************
 * 4. CONFIGURATION
 * https://sailsjs.com/documentation/reference/configuration
 ********************************************************************************************/

// Determines which TCP port your Sails app will use to listen for incoming requests.
sails.config.port

// Declare the host name of your Sails app (By default, Sails will assume localhost).
sails.config.explicitHost

// The runtime “environment” of your Sails app (usually either development or production).
sails.config.environment

// A time limit, in milliseconds, imposed on all hooks in your app (default to 20000)
sails.config.hookTimeout

// Configure SSL settings for HTTPs and WSS
sails.config.ssl

// These configurable settings allow you to configure the blueprint API in Sails.
sails.config.blueprints

// Asynchronous bootstrap function that runs before your Sails app gets lifted (i.e. starts up).
// Can be used for setting up baseline data, running sanity checks on the status of your database...
sails.config.bootstrap

// Custom configuration for your app (one-off settings specific to your application)
// Things like the domain to use when sending emails, or 3rd party API keys for Stripe, Mailgun...
sails.config.custom

// Datastore configurations(or simply datastores) are like "saved settings" for your adapters.
sails.config.datastores

// Configuration for the global variables that Sails exposes by default.
sails.config.globals

// Configuration for your app's underlying HTTP server.
sails.config.http

// Configuration for Sails' built-in internationalization & localization features.
sails.config.i18n

// Configuration for the logger in your Sails app.
sails.config.log

// Your default project-wide model settings.
sails.config.models

// Dictionary that maps policies to an app’s actions.
sails.config.policies

// Configuration for custom (aka "explicit") routes.
sails.config.routes

// Configuration for your app's security settings.
sails.config.security

// Configuration for Sails's built-in session support.
sails.config.session

// Provide transparent access to Socket.io
sails.config.sockets

// Configuration for your app's server-side views.
sails.config.views

/********************************************************************************************
 * 5. REQUEST
 * https://sailsjs.com/documentation/reference/request-req
 ********************************************************************************************/

// The moment that Sails started processing the request, as a Javascript Date object.
req._startTime

// An object containing text parameters from the parsed request body, defaulting to {}.
// If a request contains one or more file uploads, only the text parameters sent before
// the first file parameter will be available in req.body.
req.body

// An object containing all of the unsigned cookies from this request (req).
req.cookies

// A flag indicating the user-agent sending this request (req) wants "fresh" data
// (as indicated by the "if-none-match", "cache-control", and/or "if-modified-since" request headers.)
req.fresh

// An object containing pre-defined/custom header given in the current request.
req.headers

// Returns the hostname supplied in the host HTTP header.
// This header may be set either by the client or by the proxy.
req.hostname

// The IP address of the client who sent this request (req).
req.ip

// Contains the IP addresses in this request's "X-Forwarded-For" header
// as an array of the IP address strings.
req.ips

// A flag indicating whether or not this request (req) originated from a Socket.io connection.
req.isSocket

// The request method (aka "verb".)
// All requests to a Sails server have a "method", even via WebSockets.
req.method

// Dictionary (plain JavaScript object) of request-agnostic settings available in your app's actions.
req.options

// Retains the original request URL allowing you to rewrite req.url freely for internal routing purposes.
// In almost all cases, you’ll want to use req.url instead.
req.originalUrl

// An object containing parameter values parsed from the URL path.
req.params

// The URL pathname from the request URL string of the current request (req).
req.path

// The protocol used to send this request (req).
req.protocol

// A dictionary containing the parsed query-string, defaulting to {}.
req.query

// Indicates whether or not the request was sent over a secure TLS connection (i.e. https:// or wss://).
req.secure

// A dictionary containing all of the signed cookies from this request (req).
req.signedCookies

// If the current Request (req) originated from a connected Socket.io client,
// req.socket refers to the raw Socket.io socket instance.
req.socket

// An array of all the subdomains in this request's URL.
req.subdomains

// Like req.path, but also includes the query string suffix.
req.url

// A flag indicating whether the requesting client would prefer a JSON response
// (as opposed to some other format, like XML or HTML.)
req.wantsJSON

// A flag indicating whether the current request (req) appears to be an AJAX request.
req.xhr

// Return whether this request (req) advertises that it understands the specified media type.
req.accepts(mediaType)

// Return whether this request (req) advertises that it is able to handle any of the specified
// character set(s), and if so, which one.
req.acceptsCharsets(charset1, charset2, …)

// Return whether this request (req) advertises that it understands any of the specified
// language(s), and if so, which one.
req.acceptsLanguages(language1, language2, …)

// Returns the value of all parameters sent in the request, merged together into a single dictionary
req.allParams()

// Build and return a Skipper Upstream representing an incoming multipart file upload from the specified field.
req.file(field)

// Returns the value of the specified header field in this request (req). Note that header names are case-insensitive.
req.get(header)

// Returns true if this request's declared "Content-Type" matches the specified media/mime type.
req.is(type)

// Returns the value of the parameter with the specified name.
req.param(name[, defaultValue])

// Override the inferred locale for this request.
req.setLocale(override)

// Time out this request if a response is not sent within the specified number of milliseconds.
req.setTimeout(numMilliseconds)

/********************************************************************************************
 * 6. RESPONSE
 * https://sailsjs.com/documentation/reference/response-res
 ********************************************************************************************/

// Indicate to a web browser or other user agent that an outgoing file download sent
// in this response should be "Saved as..." rather than "Opened", and optionally specify the
// name for the newly downloaded file on disk.
res.attachment([filename])

// This method is used to send a 200 ("OK") response back down to the client.
res.ok(data)

// This method is used to send a 400 ("Bad Request") response back down
// to the client indicating that the request is invalid.
res.badRequest(data)

// This method is used to send a 403 ("Forbidden") response back down
// to the client indicating that the request is not allowed.
res.forbidden()

// This method is used to send a 404 ("Not Found") response using either res.json() or res.view().
res.notFound()

// This method is used to send a 500 ("Server Error") response back down to the client indicating
// that some kind of server error occurred (i.e. the error is not the requesting user agent's fault).
res.serverError(err)
res.serverError()

// Sets a cookie with name (name) and value (value) to be sent along with the response.
res.cookie(name, value[, options])

// Clears cookie (name) in the response.
res.clearCookie(name[, options])

// Returns the current value of the specified response header (header).
res.get(header)

// Sets specified response header (header) to the specified value (value).
res.set(header, value)
res.set(headers)

// Sends a JSON response composed of a stringified version of the specified data.
res.json([statusCode,] data)

// Send a JSON or JSONP response.
res.jsonp()

// Sets the "Location" response header to the specified URL expression(url).
res.location(url)

// Redirect the requesting user-agent to the given absolute or relative url.
res.redirect(url)
res.redirect(statusCode, url)

// Send a string response in a format other than JSON (XML, CSV, plain text, etc.
// If you want to send a dictionary or JSON, use res.json().
// If you want to send a custom status code, call req.status() first.
res.send([string])

// Set the status code of this response.
res.status(statusCode)

// Sets the "Content-Type" response header to the specified type.
res.type(type)

// Respond with an HTML page.
res.view(pathToView, locals)
res.view(pathToView)
res.view(locals)
res.view()

/********************************************************************************************
 * 7. WATERLINE ORM
 * https://sailsjs.com/documentation/reference/waterline-orm
 ********************************************************************************************/

// --> DATASTORE <--

// Return the default datastore
var datastore = sails.getDatastore()

// The generic, stateless, low-level driver for this datastore (if the adapter supports it).
datastore.driver

// The live connection manager for this datastore.
datastore.manager

// Lease a new connection from the datastore for use in running multiple queries
// on the same connection (i.e. so that the logic provided in during can reuse the db connection).
await datastore.leaseConnection(during)

// Execute a raw SQL query using this datastore.
await datastore.sendNativeQuery(sql, valuesToEscape)

// Fetch a preconfigured deferred object hooked up to the sails-mysql or sails-postgresql adapter
// (and consequently the appropriate driver)
await datastore.transaction(during)

// --> MODELS <--

// Add one or more existing child records to the specified collection.
MyModel.addToCollection(parentId, association).members(childIds)

// Remove one or more members from the specified collection
MyModel.removeFromCollection()

// Replace all members of the specified collection
MyModel.replaceCollection()

// Archive ("soft-delete") records that match the specified criteria,
// saving them as new records in the built-in Archive model, then destroying the originals.
MyModel.archive(criteria)

// Archive ("soft-delete") the record that matches the specified criteria,
// saving it (if it exists) as a new record in the built-in Archive model, then destroying the original.
MyModel.archiveOne(criteria);

// Get the total number of records matching the specified criteria.
MyModel.count(criteria)

// Get the aggregate mean of the specified attribute across all matching records.
MyModel.avg(numericAttrName, criteria)

// Get the aggregate sum of the specified attribute across all matching records.
MyModel.sum(numericAttrName, criteria)

// Find records in your database that match the given criteria.
MyModel.find(criteria)

// Attempt to find a particular record in your database that matches the given criteria.
MyModel.findOne(criteria)

// Find the record matching the specified criteria.
// If no such record exists, create one using the provided initial values.
MyModel.findOrCreate(criteria, initialValues)

// Create a record in the database.
MyModel.create(initialValues)
MyModel.create(initialValues).fetch()  // Created record will be returned

// Create a set of records in the database.
MyModel.createEach(initialValues)
MyModel.createEach(initialValues).fetch()  // Created records will be returned

// Update all records matching criteria.
MyModel.update(criteria, valuesToSet)
MyModel.update(criteria, valuesToSet).fetch()  // Updated records will be returned

// Update the record that matches the given criteria, if one exists.
MyModel.updateOne(criteria).set(valuesToSet);

// Destroy records in your database that match the given criteria.
MyModel.destroy(criteria)
MyModel.destroy(criteria).fetch() // Destroyed record will be returned

// Destroy the record in your database that matches the given criteria, if one exists.
MyModel.destroyOne(criteria);

// Access the datastore for a particular model.
MyModel.getDatastore()

// Stream records from your database one at a time or in batches,
// without first having to buffer the entire result set in memory.
MyModel.stream(criteria)

// Verify that a value would be valid for a given attribute, then return it, loosely coerced.
MyModel.validate(attrName, value)

// --> QUERIES <--

// Set the maximum number of records to retrieve when executing a query instance.
query.limit(maximum)

// Indicate a number of records to skip before returning the results from executing a query instance.
query.skip(numRecordsToSkip)

// Set the order in which retrieved records should be returned when executing a query instance.
query.sort(sortClause)

// Specify a where clause for filtering a query.
query.where(whereClause)

// Tell Waterline (and the underlying database adapter) to send back records that were
// updated/destroyed/created when performing an .update(), .create(), .createEach() or .destroy()
// query. Otherwise, no data will be returned (or if you are using callbacks, the second argument
// to the .exec() callback will be undefined.)
// This is just a shortcut for .meta({fetch: true})
// Warning: This is not recommended for update/destroy queries that affect large numbers of records.
query.fetch()

// Modify a query instance so that, when executed, it will populate child records for the
// specified collection, optionally filtering by subcriteria. Populate may be called more than
// once on the same query, as long as each call is for a different association.
query.populate()

// Decrypt any auto-encrypted attributes in the records returned for this particular query.
// This is just a shortcut for .meta({decrypt: true})
query.decrypt()

// Execute a Waterline query instance.
query.exec(function (err, result) {})

// Begin executing a Waterline query instance and return a promise.
// This is an alternative to .exec().
query.toPromise()

// Capture and intercept the specified error, automatically modifying and re-throwing it,
// or specifying a new Error to be thrown instead. (Still throws.)
query.intercept(filter, handler)
query.intercept(handler)

// Provide additional options to Waterline when executing a query instance.
query.meta(options)

// Execute a Waterline query instance using promises.
// Whenever possible, it is recommended that you use await instead of calling this method.
// This is an alternative to .exec(). When combined with .catch(), it provides the same functionality.
query.then(callback)

// Execute a Waterline query instance using promises.
// Whenever possible, it is recommended that you use await instead of calling this method.
// This is an alternative to .exec(). When combined with .then(), it provides the same functionality.
query.catch(callback)

// Tolerate (swallow) the specified error, and return a new result value (or undefined) instead. (Don't throw.)
query.tolerate(filter, handler)
query.tolerate(filter)
query.tolerate(handler)

// Specify an existing database connection to use for this query.
query.usingConnection(connection)

/********************************************************************************************
 * 8. WEB SOCKETS
 * https://sailsjs.com/documentation/reference/web-sockets
 ********************************************************************************************/

// --> RESOURCEFUL PUBSUB (HIGHER LEVEL ABSTRACTION WHICH ARE USED BY SAILS BLUEPRINT API) <--

// Retrieve the name of the PubSub “room” for a given record.
MyModel.getRoomName(id)

// Broadcast an arbitrary message to socket clients subscribed to one or more of this model's records.
// Be sure and check req.isSocket === true before passing in req to refer to the requesting socket.
// If used, the provided req must be from a socket request, not just any old HTTP request.
// Is like sails.sockets.broadcast()
MyModel.publish(ids, data, req)

// Subscribe the requesting client socket to changes/deletions of one or more database records.
// Is like sails.sockets.join()
MyModel.subscribe(req, ids)

// Unsubscribe the requesting client socket from one or more database records.
// Is like sails.sockets.leave()
MyModel.unsubscribe(req, ids)

// --> SAILS.SOCKETS <--

// Subscribe all members of a room to one or more additional rooms.
// In a multi-server environment, the callback function (cb) will be executed when the
// .addRoomMembersToRooms() call completes on the current server. This does not guarantee that
// other servers in the cluster have already finished running the operation.
sails.sockets.addRoomMembersToRooms(sourceRoom, destRooms, cb)

// Broadcast a message to all sockets connected to the server (or any server in the cluster,
// if you have a multi-server deployment using Redis).
sails.sockets.blast(data)
sails.sockets.blast(eventName, data)
sails.sockets.blast(data, socketToOmit)
sails.sockets.blast(eventName, data, socketToOmit)

// Broadcast a message to all sockets in a room (or to a particular socket).
sails.sockets.broadcast(roomNames, data)
sails.sockets.broadcast(roomNames, eventName, data)
sails.sockets.broadcast(roomNames, data, socketToOmit)
sails.sockets.broadcast(roomNames, eventName, data, socketToOmit)

// Parse the socket ID from an incoming socket request (req).
sails.sockets.getId(req)

// Subscribe a socket to a room.
sails.sockets.join(socket, roomName)
sails.sockets.join(socket, roomName, cb)

// Unsubscribe a socket from a room.
sails.sockets.leave(socket, roomName)
sails.sockets.leave(socket, roomName, cb)

// Unsubscribe all members of a room (e.g. chatroom7) from that room and every other room
// they are currently subscribed to; except the automatic room associated with their socket ID.
sails.sockets.leaveAll(roomName, cb)

// Unsubscribe all members of a room from one or more other rooms.
sails.sockets.removeRoomMembersFromRooms(sourceRoom, destRooms, cb)

// --> SOCKET CLIENT <--

// Home of global configuration options for the sails.io.js library, as well as any sockets it creates.
io.sails

// Wait one cycle of the event loop after loading and then attempt to create a new SailsSocket
// and connect it to the URL specified by io.sails.url. 
io.sails.autoConnect

// Sockets will automatically (and continuously) attempt to reconnect to the server
// if they become disconnected unexpectedly.
io.sails.reconnection

// Dictionary of headers to be sent by default with every request from this socket.
// Can be overridden via the headers option in .request().
io.sails.headers

// Set an environment for sails.io.js, which affects how much information is logged to the console.
// Valid values are development (full logs) and production (minimal logs).
io.sails.environment

// The URL that the socket is connected to, or will attempt to connect to.
io.sails.url

// The transports that the socket will attempt to connect using.
io.sails.transports

// Used for creating new socket connections manually.
io.sails.connect([url], [options])

// Unbind the specified event handler (opposite of .on()).
// To force a client socket to stop receiving broadcasted messages, do not use this method.
// Instead, unsubscribe the socket in your server-side code:
// In order to use .off(), you will need to store the handlerFn argument you passed in to .on() in a variable.
io.socket.off(eventIdentity, handlerFn)

// Start listening for socket events from Sails with the specified eventName.
// Will trigger the provided callback function when a matching event is received.
// This happens when the server broadcasts a message to this socket directly, or to a room of which it is a member.
io.socket.on(eventName, function (msg) { })

// Send a virtual DELETE request to a Sails server using Socket.io.
io.socket.delete(url, data, function (data, jwres) {})

// Send a socket request(virtual GET) to a Sails server using Socket.io.
io.socket.get(url, data, function (resData, jwres) {})

// Send a socket request (virtual PATCH) to a Sails server using Socket.io.
io.socket.patch(url, data, function (resData, jwres) {})

// Send a socket request (virtual POST) to a Sails server using Socket.io.
io.socket.post(url, data, function (resData, jwres) {})

// Send a socket request (virtual PUT) to a Sails server using Socket.io.
io.socket.put(url, data, function (resData, jwres) {})

// Send a virtual request to a Sails server using Socket.io.
io.socket.request(options, function (resData, jwres) {})
