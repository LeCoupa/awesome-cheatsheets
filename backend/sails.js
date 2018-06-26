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
 * ******************************************************************************************* */

/********************************************************************************************
 * 1. APPLICATION
 * https://sailsjs.com/documentation/reference/application
 * ******************************************************************************************* */

// A dictionary of all loaded Sails models, indexed by their identity.
sails.models;

// A dictionary of all accessible helpers, including organics.
sails.helpers;

// A dictionary of all loaded Sails hooks, indexed by their identity.
sails.hooks;

// The full set of configuration options for the Sails instance
sails.config;

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

// The runtime values of your app's custom configuration settings.
sails.config.custom;

// Access a particular datastore, or the default datastore.
sails.getDatastore(datastoreName);

// Log a message or some data at the "debug" log level using Sails' built-in logger.
sails.log(...);

/********************************************************************************************
 * 2. BLUEPRINT API
 * https://sailsjs.com/documentation/reference/blueprint-api
 * ******************************************************************************************* */

/********************************************************************************************
 * 3. COMMAND-LINE INTERFACE
 * https://sailsjs.com/documentation/reference/command-line-interface
 * ******************************************************************************************* */

/********************************************************************************************
 * 4. CONFIGURATION
 * https://sailsjs.com/documentation/reference/configuration
 * ******************************************************************************************* */

/********************************************************************************************
 * 5. REQUEST
 * https://sailsjs.com/documentation/reference/request-req
 * ******************************************************************************************* */

/********************************************************************************************
 * 6. REPONSE
 * https://sailsjs.com/documentation/reference/response-res
 * ******************************************************************************************* */

/********************************************************************************************
 * 7. WATERLINE ORM
 * https://sailsjs.com/documentation/reference/waterline-orm
 * ******************************************************************************************* */

/********************************************************************************************
 * 8. WEB SOCKETS
 * https://sailsjs.com/documentation/reference/web-sockets
 * ******************************************************************************************* */
