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
sails.models;

// A dictionary of all accessible helpers, including organics.
sails.helpers;

// A dictionary of all loaded Sails hooks, indexed by their identity.
sails.hooks;

// The full set of configuration options for the Sails instance
// It is assembled automatically when Sails loads your app;
// merging together command-line arguments, environment variables, your .sailsrc file,
// and the configuration objects exported from any and all modules in your app's config/ directory.
sails.config;

// The runtime values of your app's custom configuration settings.
sails.config.custom;

// A set of convenience methods for low - level interaction with connected websockets.
sails.sockets;

// Talk to Socket.io directly.
sails.io;

// A regular expression designed for use in identifying URL paths that seem like they are probably
// for a static asset of some kind (e.g. image, stylesheet, favicon.ico, robots.txt, etc).
sails.LOOKS_LIKE_ASSET_RX;

// Return a dictionary of Sails actions.
sails.getActions();

// Look up the first route pointing at the specified target (e.g. MeController.login)
// and return a dictionary containing its method and URL.
sails.getRouteFor(target);

// Look up the first route pointing at the specified target (e.g. entrance/view-login)
// and return its URL.
sails.getUrlFor(target);

// Lift a Sails app programmatically.
// This does exactly what you might be used to seeing by now when you run sails lift.
sailsApp.lift(configOverrides, function(err) {});

// Load a Sails app into memory-- but without lifting an HTTP server.
// Useful for writing tests, command - line scripts, and scheduled jobs.
sailsApp.load(configOverrides, function(err) {});

// Shut down a lifted Sails app and have it cease listening for / responding to any future requests.
sails.lower(callback);

// Register a new Sails action that can then be bound to a route.
sails.registerAction(action, name);

// Register a new action middleware function that will be applied to actions
// with the specified identities.
sails.registerActionMiddleware(actionMiddlewareFns, actionIdentities);

// Flush and reload all Sails actions.
sails.reloadActions();

// Compile a view into an HTML template.
sails.renderView(pathToView, templateData);

// Make a virtual request to a running Sails instance.
sails.request(request);
sails.request(url, body);
sails.request(url, callback);
sails.request(url, body, callback);

// Access a particular datastore, or the default datastore.
sails.getDatastore(datastoreName);

// Log a message or some data at the "debug" log level using Sails' built-in logger.
sails.log(message);

/********************************************************************************************
 * 2. BLUEPRINT API
 * https://sailsjs.com/documentation/reference/blueprint-api
 ********************************************************************************************/

// Find a list of records that match the specified criteria
// and (if possible) subscribe to each of them.
("GET /:model");

// Look up the record with the specified id from the database
// and (if possible) subscribe to the record to hear about any future changes.
("GET /:model/:id");

// Populate and return foreign record(s) for the given association of this record.
("GET /:model/:id/:association");

// Create a new record in your database
// and notify subscribed sockets that a newly record is created
("POST /:model");

// Update an existing record in the database
// and notify subscribed sockets that it has changed.
("PATCH /:model/:id");

// Replace all of the foreign records in one of this record's collections
// and notify subscribed sockets to the parent record.
("PUT /:model/:id/:association");

// Add a foreign record to one of this record's collections
// and notify subscribed sockets to the parent record.
("PUT /:model/:id/:association/:fk");

// Delete the record specified by id from the database forever
// and notify subscribed sockets that a record has been deleted
("DELETE /:model/:id");

// Remove a foreign record from one of this record's collections
// and notify subscribed sockets about this removed child
("DELETE /:model/:id/:association/:fk");

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

/********************************************************************************************
 * 6. REPONSE
 * https://sailsjs.com/documentation/reference/response-res
 ********************************************************************************************/

/********************************************************************************************
 * 7. WATERLINE ORM
 * https://sailsjs.com/documentation/reference/waterline-orm
 ********************************************************************************************/

/********************************************************************************************
 * 8. WEB SOCKETS
 * https://sailsjs.com/documentation/reference/web-sockets
 ********************************************************************************************/
