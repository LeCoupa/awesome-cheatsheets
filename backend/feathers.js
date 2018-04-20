/* *******************************************************************************************
 * FEATHERS.JS CHEATSHEET
 * https://docs.feathersjs.com/api/readme.html
 * 
 * 1. CORE: Feathers core functionality.
 * 2. TRANSPORT: Expose a Feathers application as an API server.
 * 3. CLIENT: More details on how to use Feathers on the client.
 * 4. AUTHENTICATION: Feathers authentication mechanism.
 * 5. DATABASE: Feathers common database adapter API and querying mechanism.
 * ******************************************************************************************* */


/* *******************************************************************************************
 * 1. CORE: Feathers core functionality.
 * ******************************************************************************************* */


```
# Provides the ability to initialize new application instances
npm install @feathersjs/feathers --save

# Provides a set of standard error classes used by all other Feathers modules
npm install @feathersjs/errors --save
```

// --> APPLICATION <--
// https://docs.feathersjs.com/api/application.html

const feathers = require('@feathersjs/feathers');

const app = feathers();                      // application initialization

app.mixins                                   // contains a list of service mixins

app.use(path, service)                       // allows registering a service object on a given path
app.service(path)                            // returns the wrapped service object for the given path
app.hooks(hooks)                             // allows registration of application-level hooks
app.publish([event,], publisher)             // registers a global event publisher
app.configure(callback)                      // runs a callback function that gets passed the application object
app.listen(port)                             // starts the application on the given port
app.setup([server])                          // used to initialize all services by calling each services .setup(app, path) method (if available)
app.set(name, value)                         // assigns setting name to value
app.get(name)                                // retrieves the setting name
app.on(eventname, listener)                  // registers a listener method for the given eventname
app.emit(eventname, data)                    // emits the event eventname to all event listeners
app.removeListener(eventname, [ listener ])  // removes all or the given listener for eventname

// --> SERVICES <--
// https://docs.feathersjs.com/api/services.html

// "Services" are the heart of every Feathers application.
// Services are JavaScript objects (or instances of ES6 classes) that implement certain methods.
// Feathers itself will also add some additional methods and functionality to its services.
class MyService {
  // Retrieves a list of all resources from the service.
  // Provider parameters will be passed as params.query.
  async find(params) {
    return [];
  }

  // Retrieves a single resource with the given id from the service.
  async get(id, params) {}

  // Creates a new resource with data.
  // The method should return the newly created data. data may also be an array.
  async create(data, params) {}

  // Replaces the resource identified by id with data.
  // The method should return the complete, updated resource data.
  // id can also be null when updating multiple records, with params.query containing the query criteria.
  async update(id, data, params) {}

  // Merges the existing data of the resource identified by id with the new data.
  // id can also be null indicating that multiple resources should be patched with params.query containing the query criteria.
  async patch(id, data, params) {}

  // Removes the resource with id.
  // The method should return the removed resource.
  // id can also be null, which indicates the deletion of multiple resources, with params.query containing the query criteria.
  async remove(id, params) {}

  // A special method that initializes the service, passing an instance of the Feathers application
  // and the path it has been registered on.
  // For services registered before app.listen is invoked, the setup function of each registered service
  // is called on invoking app.listen. For services registered after app.listen is invoked, setup is
  // called automatically by Feathers when a service is registered.
  setup(app, path) {}
}

params.query     // contains the URL query parameters sent from the client
params.provider  // for any service method call made through REST params.provider will be set to rest

app.use('/my-service', new MyService());

// Important: Always use the service returned by app.service(path)
const myService = app.service('my-service');

myService.hooks(hooks)                             // register hooks for this service
myService.publish([event,], publisher)             // register an event publishing callback
myService.mixin(mixin)                             // extends the functionality of a service
myService.on(eventname, listener)                  // registers a listener method for the given eventname
myService.once(eventname, listener)                // registers a listener method for the given eventname that will be triggered only one time
myService.emit(eventname, data)                    // emits the event eventname to all event listeners
myService.removeListener(eventname, [ listener ])  // removes all listeners (or the given listener) for eventname

// --> HOOKS <--
// https://docs.feathersjs.com/api/hooks.html

// Hooks are pluggable middleware functions that can be registered
// before, after or on errors of a service method. You can register a
// single hook function or create a chain of them to create complex work-flows.
app.service('my-service').hooks({
  before: {
    all: [
      // Use normal functions
      function(context) { console.log('before all hook ran'); }
    ],

    find: [
      // Use ES6 arrow functions
      context => console.log('before find hook 1 ran'),
      context => console.log('before find hook 2 ran')
    ],

    async create (context) {
      return context
    },
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  // Here is an example for a very useful application hook that logs every service method error
  // with the service and method name as well as the error stack
  error(context) {
    console.error(`Error in ${context.path} calling ${context.method} method`, context.error);
  }
});

context.app       // [read only] contains the Feathers application object
context.service   // [read only] contains the service this hook currently runs on
context.path      // [read only] contains the service name (or path) without leading or trailing slashes
context.method    // [read only] contains the name of the service method (find, get, create, update...)
context.type      // [read only] contains the hook type (one of before, after or error)
context.params    // [writable] contains the service method parameters (including params.query)
context.id        // [writable] contains the id for a get, remove, update and patch service method call
context.data      // [writable] contains the data of a create, update and patch service method call
context.error     // [writable] contains the error object that was thrown in a failed method call (only available in error hooks)
context.result    // [writable] contains the result of the successful service method call (only available in after hooks)
context.dispatch  // [writable and optional] contains a "safe" version of the data that should be sent to any client

// --> CHANNELS <--
// https://docs.feathersjs.com/api/channels.html

// A channel is an object that contains a number of connections.
// It can be created via app.channel and allows a connection to join or leave it.
app.channel(name)                     // when given a single name, returns an existing or new named channel
app.channel(name1, name2, ... nameN)  // when given multiples names, will return a combined channel.
app.channels                          // returns a list of all existing channel names

channel.join(connection)      // adds a connection to this channel
channel.leave(connection|fn)  // removes a connection from this channel
channel.filter(fn)            // returns a new channel filtered by a given function which gets passed the connection
channel.send(data)            // returns a copy of this channel with customized data that should be sent for this event

channel.connections  // contains a list of all connections in this channel
channel.length       // returns the total number of connections in this channel

service.publish([event,] fn)  // registers a publishing function for a specific service for a specific event or all events if no event name was given
app.publish([event,] fn)      // registers an event publishing callback

app.on('connection', connection => {})  // fired every time a new real-time connection is established
app.on('login', (payload, info) => {})  // sent by the authentication module and also contains the connection in the info object that is passed as the second parameter


/* *******************************************************************************************
 * 2. TRANSPORT: Expose a Feathers application as an API server.
 * ******************************************************************************************* */


```
# Contains Express framework integrations
npm install @feathersjs/express --save

# Allows to call service methods and receive real-time events
npm install @feathersjs/socketio --save

# Allows to call service methods and receive real-time events via Primus
npm install @feathersjs/primus --save
```

// --> EXPRESS <--
// https://docs.feathersjs.com/api/express.html

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

// Create an app that is a Feathers AND Express application
const app = express(feathers());

// If no Feathers application is passed, express() returns a plain Express application
// just like a normal call to Express would
const app = express();

app.use(path, service|mw)        // registers either a service object or an Express middleware on the given path
app.listen(port)                 // will first call Express app.listen and then internally also call the Feathers app.setup(server)
app.setup(server)                // usually called internally by app.listen but in the cases described below needs to be called explicitly

express.rest()                   // registers a Feathers transport mechanism that allows you to expose and consume services through a RESTful API.
app.configure(express.rest())    // configures the transport provider with a standard formatter sending JSON response via res.json

express.notFound()               // returns middleware that returns a NotFound (404) Feathers error
express.errorHandler()           // middleware that formats any error response to a REST call as JSON and sets the appropriate error code
app.use(express.errorHandler())  // set up the error handler with the default configuration

// --> SOCKET.IO <--
// https://docs.feathersjs.com/api/client/socketio.html

const feathers = require('@feathersjs/feathers');
const socketio = require('@feathersjs/socketio');

const app = feathers();

app.configure(socketio());                            // sets up the Socket.io transport with the default configuration using either the server provided by app.listen or passed in app.setup(server)
app.configure(socketio(callback))                     // sets up the Socket.io transport with the default configuration and call callback with the Socket.io server object
app.configure(socketio(options [, callback]))         // sets up the Socket.io transport with the given Socket.io options object and optionally calls the callback
app.configure(socketio(port, [options], [callback]))  // creates a new Socket.io server on a separate port. Options and a callback are optional

// The options can also be used to initialize uWebSocket which is a WebSocket server
// implementation that provides better performace and reduced latency.
// npm install uws --save
app.configure(socketio({
  wsEngine: 'uws'
}));

// --> PRIMUS <--
// https://docs.feathersjs.com/api/client/primus.html

app.configure(primus(options))            // sets up the Primus transport with the given Primus options
app.configure(primus(options, callback))  // sets up the Primus transport with the given Primus options and calls the callback with the Primus server instance


/* *******************************************************************************************
 * 3. CLIENT: More details on how to use Feathers on the client.
 * ******************************************************************************************* */


```
# Bundles the separate Feathers client side modules into one providing the code as ES5 (compatible with modern browsers)
# You do not have to install or load any of the other modules listed below
npm install @feathersjs/client --save

# Allows to connect to services through REST HTTP
npm install @feathersjs/rest-client --save

# Allows to connect to services through Socket.io
npm install @feathersjs/socketio-client --save

# Allows to connect to services through Primus
npm install @feathersjs/primus-client --save

# Allows you to easily authenticate against a Feathers server
npm install @feathersjs/authentication-client --save
```

// --> REST CLIENT <--
// https://docs.feathersjs.com/api/client/rest.html

rest([baseUrl])  // Initialize a client object with a base URL

app.configure(restClient.jquery(window.jQuery));   // connect to a service using jQuery
app.configure(restClient.request(requestClient));  // connect to a service using request
app.configure(restClient.superagent(superagent));  // connect to a service using Superagent
app.configure(restClient.axios(axios));            // connect to a service using Axios
app.configure(restClient.fetch(window.fetch));     // connect to a service using Fetch

// --> SOCKET.IO <--
// https://docs.feathersjs.com/api/client/socketio.html

socketio(socket)           // initialize the Socket.io client using a given socket and the default options
socketio(socket, options)  // initialize the Socket.io client using a given socket and the given options

// --> PRIMUS <--
// https://docs.feathersjs.com/api/client/primus.html

primus(socket)           // initialize the Primus client using a given socket and the default options
primus(socket, options)  // initialize the Primus client using a given socket and the given options


/* *******************************************************************************************
 * 4. AUTHENTICATION: Feathers authentication mechanism.
 * ******************************************************************************************* */


```
# Assists in using JWT for authentication
npm install @feathersjs/authentication --save

# Wraps the passport-local authentication strategy (username and password)
npm install @feathersjs/authentication-local --save

# Wraps the passport-jwt authentication strategy (JSON Web Token access token)
npm install @feathersjs/authentication-jwt --save

# Allows you to use any Passport OAuth1 authentication strategy (most notably Twitter)
npm install @feathersjs/authentication-oauth1 --save

# Allows you to use any Passport OAuth2 authentication strategy (FB, Instagram, Github, Google...)
npm install @feathersjs/authentication-oauth2 --save
```

// --> SERVER <--
// https://docs.feathersjs.com/api/authentication/server.html

const options = {
  path: '/authentication',    // the authentication service path
  header: 'Authorization',    // the header to use when using JWT auth
  entity: 'user',             // the entity that will be added to the request, socket, and context.params. (ie. req.user, socket.user, context.params.user)
  service: 'users',           // the service to look up the entity
  passReqToCallback: true,    // whether the request object should be passed to the strategies `verify` function
  session: false,             // whether to use sessions
  cookie: {
    enabled: false,           // whether cookie creation is enabled
    name: 'feathers-jwt',     // the cookie name
    httpOnly: false,          // when enabled, prevents the client from reading the cookie.
    secure: true              // whether cookies should only be available over HTTPS
  },
  jwt: {
    header: { typ: 'access' },          // by default is an access token but can be any type
    audience: 'https://yourdomain.com', // The resource server where the token is processed
    subject: 'anonymous',               // Typically the entity id associated with the JWT
    issuer: 'feathers',                 // The issuing server, application or resource
    algorithm: 'HS256',                 // the algorithm to use
    expiresIn: '1d'                     // the access token expiry
  }
}

app.configure(auth(options))  // configure the authentication plugin with the given options

service = app.service('authentication')  // service for creating JWT (implements only the create and remove methods)

service.create(data)       // creates a JWT based on the jwt options configured on the plugin
service.remove(data)       // removes the JWT token (mostly exists for the logout process)
service.hooks({ before })  // registers hooks for this service
service.hooks({ after })   // registers hooks for this service

app.passport.createJWT(payload, options)  // used by the authentication service to generate JSON Web Tokens
app.passport.verifyJWT(token, options)    // verifies the signature and payload of the passed in JWT token using the options

auth.hooks.authenticate(strategies)  // registers an array of authentication strategies on a service method

app.on('login', callback))   // emits an event whenever a client successfully authenticates
app.on('logout', callback))  // emits an event whenever a client successfully logout

// --> CLIENT <--
// https://docs.feathersjs.com/api/authentication/client.html

const options = {
  path: '/authentication',    // the server-side authentication service path
  header: 'Authorization',    // the default authorization header for REST
  jwtStrategy: 'jwt',         // the name of the JWT authentication strategy 
  entity: 'user',             // the entity you are authenticating (ie. a users)
  service: 'users',           // the service to look up the entity
  cookie: 'feathers-jwt',     // the name of the cookie to parse the JWT from when cookies are enabled server side
  storageKey: 'feathers-jwt', // the key to store the accessToken in localstorage or AsyncStorage on React Native
  storage: undefined          // Passing a WebStorage-compatible object to enable automatic storage on the client.
}

app.configure(auth(options))  // configure the authentication plugin with the given options

app.authenticate()         // authenticates using the JWT from the storage
app.authenticate(options)  // authenticate with a Feathers server by passing a strategy and other properties as credentials
app.logout()               // removes the JWT accessToken from storage on the client

app.passport.getJWT()               // pulls the JWT from storage or the cookie
app.passport.verifyJWT(token)       // verifies that a JWT is not expired and decode it to get the payload
app.passport.payloadIsValid(token)  // synchronously verify that a token has not expired

app.on('authenticated', callback))              // emits an event whenever the client successfully authenticates
app.on('logout', callback))                     // emits an event whenever the client successfully authenticates
app.on('reauthentication-error', errorHandler)  // will automatically handle attempting to re-authenticate the socket when the client regains connectivity with the server

// --> LOCAL (EMAIL & PASSWORD) <--
// https://docs.feathersjs.com/api/authentication/local.html

const feathers = require('@feathersjs/feathers');
const authentication = require('@feathersjs/authentication');
const local = require('@feathersjs/authentication-local');
const app = feathers();

const options = {
  name: 'local',              // the name to use when invoking the authentication Strategy
  entity: 'user',             // the entity that you're comparing username/password against
  service: 'users',           // the service to look up the entity
  usernameField: 'email',     // key name of username field
  passwordField: 'password',  // key name of password field
  passReqToCallback: true,    // whether the request object should be passed to `verify`
  session: false,             // whether to use sessions
  Verifier: Verifier          // A Verifier class. Defaults to the built-in one but can be a custom one
}

app.configure(authentication(options));
app.configure(local());

// Setup a hook to only allow valid JWTs or successful 
// local auth to authenticate and get new JWT access tokens
app.service('authentication').hooks({
  before: {
    create: [
      authentication.hooks.authenticate(['local', 'jwt'])
    ]
  }
});

local.hooks.hashPassword()       // hashes plain text passwords before they are saved to the database
local.hooks.protect('password')  // makes sure that protected fields don't get sent to a client

// --> JWT <--
// https://docs.feathersjs.com/api/authentication/jwt.html

const feathers = require('@feathersjs/feathers');
const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const app = feathers();

const options = {
  name: 'jwt',                                      // the name to use when invoking the authentication Strategy
  entity: 'user',                                   // the entity that you pull from if an 'id' is present in the payload
  service: 'users',                                 // the service to look up the entity
  passReqToCallback: true,                          // whether the request object should be passed to `verify`
  jwtFromRequest: [                                 // a passport-jwt option determining where to parse the JWT
    ExtractJwt.fromHeader,                          // From "Authorization" header
    ExtractJwt.fromAuthHeaderWithScheme('Bearer'),  // Allowing "Bearer" prefix
    ExtractJwt.fromBodyField('body')                // from request body
  ],
  secretOrKey: auth.secret,                         // Your main secret provided to passport-jwt
  session: false,                                   // whether to use sessions,
  Verifier: Verifier                                // A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
}

app.configure(authentication(options));
app.configure(jwt());

// Setup a hook to only allow valid JWTs to authenticate
// and get new JWT access tokens
app.service('authentication').hooks({
  before: {
    create: [
      authentication.hooks.authenticate(['jwt'])
    ]
  }
});

// --> OAUTH1 <--
// https://docs.feathersjs.com/api/authentication/oauth1.html

const feathers = require('@feathersjs/feathers');
const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const oauth1 = require('@feathersjs/authentication-oauth1');

const session = require('express-session');
const TwitterStrategy = require('passport-twitter').Strategy;
const app = feathers();

// Setup in memory session
app.use(session({
  secret: 'super secret',
  resave: true,
  saveUninitialized: true
}));

const options = {
  idField: '<provider>Id',  // The field to look up the entity by when logging in with the provider. Defaults to '<provider>Id' (ie. 'twitterId').
  path: '/auth/<provider>', // The route to register the middleware
  callbackURL: 'http(s)://hostame[:port]/auth/<provider>/callback', // The callback url. Will automatically take into account your host and port and whether you are in production based on your app environment to construct the url. (ie. in development http://localhost:3030/auth/twitter/callback)
  entity: 'user',           // the entity that you are looking up
  service: 'users',         // the service to look up the entity
  passReqToCallback: true,  // whether the request object should be passed to `verify`
  session: true,            // whether to use sessions,
  handler: fn,              // Express middleware for handling the oauth callback. Defaults to the built in middleware.
  formatter: fn,            // The response formatter. Defaults the the built in feathers-rest formatter, which returns JSON.
  Verifier: Verifier        // A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
}

// Setup authentication
app.configure(authentication(options));
app.configure(jwt());
app.configure(oauth1({
  name: 'twitter',
  Strategy: TwitterStrategy,
  consumerKey: '<your consumer key>',
  consumerSecret: '<your consumer secret>'
}));

// Setup a hook to only allow valid JWTs to authenticate
// and get new JWT access tokens
app.service('authentication').hooks({
  before: {
    create: [
      authentication.hooks.authenticate(['jwt'])
    ]
  }
});

// --> OAUTH 2 <--
// https://docs.feathersjs.com/api/authentication/oauth2.html

const feathers = require('@feathersjs/feathers');
const authentication = require('@feathersjs/authentication');
const jwt = require('@feathersjs/authentication-jwt');
const oauth2 = require('@feathersjs/authentication-oauth2');
const FacebookStrategy = require('passport-facebook').Strategy;
const app = feathers();

const options = {
  idField: '<provider>Id',   // The field to look up the entity by when logging in with the provider. Defaults to '<provider>Id' (ie. 'facebookId').
  path: '/auth/<provider>',  // The route to register the middleware
  callbackURL: 'http(s)://hostname[:port]/auth/<provider>/callback', // The callback url. Will automatically take into account your host and port and whether you are in production based on your app environment to construct the url. (ie. in development http://localhost:3030/auth/facebook/callback)
  successRedirect: undefined,
  failureRedirect: undefined,
  entity: 'user',            // the entity that you are looking up
  service: 'users',          // the service to look up the entity
  passReqToCallback: true,   // whether the request object should be passed to `verify`
  session: false,            // whether to use sessions,
  handler: fn,               // Express middleware for handling the oauth callback. Defaults to the built in middleware.
  formatter: fn,             // The response formatter. Defaults the the built in feathers-rest formatter, which returns JSON.
  Verifier: Verifier         // A Verifier class. Defaults to the built-in one but can be a custom one. See below for details.
}

// Setup authentication
app.configure(authentication({ secret: 'super secret' }));
app.configure(jwt());
app.configure(oauth2({
  name: 'facebook',
  Strategy: FacebookStrategy,
  clientID: '<your client id>',
  clientSecret: '<your client secret>',
  scope: ['public_profile', 'email']
}));

// Setup a hook to only allow valid JWTs to authenticate
// and get new JWT access tokens
app.service('authentication').hooks({
  before: {
    create: [
      authentication.hooks.authenticate(['jwt'])
    ]
  }
});


/* *******************************************************************************************
 * 5. DATABASE: Feathers common database adapter API and querying mechanism.
 * ******************************************************************************************* */


```
# [MEMORY/FILESYSTEM] In-memory database adapter
npm install feathers-memory --save

# [MEMORY/FILESYSTEM] Database adapter for NeDB an in-memory or file system based standalone database
npm install feathers-nedb --save

# [MEMORY/FILESYSTEM] Adapter for Client side Feathers that can use the browsers LocalStorage or ReactNative's AsyncStorage
npm install feathers-localstorage --save

# [SQL] Adapter for KnexJS, an SQL query builder for NodeJS supporting PostgreSQL, MySQL, SQLite and MSSQL
npm install feathers-knex --save

# [SQL] Adapter for Sequelize an ORM for NodeJS supporting PostgreSQL, MySQL, SQLite and MSSQL
npm install feathers-sequelize --save

# [NOSSQL] Database adapter for MongoDB using the official NodeJS database driver
npm install feathers-mongodb --save

# [NOSSQL] Database adapter for Mongoose an Object Modelling library for NodeJS and MongoDB
npm install feathers-mongoose --save

# [NOSSQL] Database adapter for Elasticsearch
npm install feathers-elasticsearch --save

# [NOSSQL] Database adapter for RethinkDB a real-time database.
npm install feathers-rethinkdb --save
```

// --> COMMON API <--
// https://docs.feathersjs.com/api/databases/common.html

const service = require('feathers-<adaptername>');

app.use('/messages', service({
  id: undefined,         // (optional) name of the id field property (usually set by default to id or _id)
  events: undefined,     // (optional) list of custom service events sent by this service
  paginate: {            // (optional) a pagination object containing a default and max page size
    default: undefined,  // sets the default number of items when $limit is not set
    max: undefined       // sets the maximum allowed number of items per page (even if the $limit query parameter is set higher)
  }
}));

adapter.find()                    // returns a list of all records matching the query in params.query using the common querying mechanism
adapter.get(id, params)           // retrieves a single record by its unique identifier (the field set in the id option during initialization)
adapter.create(data, params)      // creates a new record with data. data can also be an array to create multiple records
adapter.update(id, data, params)  // completely replaces a single record identified by id with data. Does not allow replacing multiple records (id can't be null). id can not be changed.
adapter.patch(id, data, params)   // merges a record identified by id with data. id can be null to allow replacing multiple records (all records that match params.query the same as in .find). id can not be changed
adapter.remove(id, params)        // removes a record identified by id. id can be null to allow removing multiple records (all records that match params.query the same as in .find)

// --> QUERYING <--
// https://docs.feathersjs.com/api/databases/querying.html

app.service('messages').find({
  query: {
    $limit: 2,                      // will return only the number of results you specify
    $select: [ 'text', 'userId' ],  // allows to pick which fields to include in the result
    $skip: 2,                       // will skip the specified number of results
    $sort: {                        // will sort based on the object you provide. It can contain a list of properties by which to sort mapped to the order
      createdAt: -1
    },
    $or: [                          // find all records that match any of the given criteria
      { archived: { $ne: true } },
      { roomId: 2 }
    ],
    read: false,                    // compared directly for equality
    roomId: {
      $in: [ 2, 5 ],                // find all records where the property does match any of the given values
      $nin: [ 1, 3 ]                // find all records where the property does not match any of the given values
    },
    createdAt: {
      $lt: new Date().getTime(),    // find all records where the value is less to a given value
      $lte: new Date().getTime(),   // find all records where the value is less and equal to a given value
      $gt: new Date().getTime(),    // find all records where the value is more to a given value
      $gte: new Date().getTime(),   // find all records where the value is more and equal to a given value
    },
    archived: {
      $ne: true                     // find all records that do not equal the given property value
    }
  }
});

// With pagination enabled, to just get the number of available records set $limit to 0.
// This will only run a (fast) counting query against the database and return a page object with
// the total and an empty data array.


/* *******************************************************************************************
 * 5. APPLICATION ARCHITECTURE
 * ******************************************************************************************* */


// .
// ├── config/              # contains the configuration files for the app
// │   ├── default.json     # default configuration variables
// │   ├── production.json  # override default configurations variables when NODE_ENV=production
// │   └── ...
// │
// ├── node_modules/        # project dependencies using NPM or Yarn
// │   └── ...
// │
// ├── public/              # contains static files to be served
// │   └── ...
// │
// ├── src/                 # contains the Feathers server code
// │   ├── hooks/           # contains our custom hooks
// │   │   └── ...
// │   ├── middleware/      # contains our Express middlewares
// │   │   └── ...
// │   ├── services/        # contains our services
// │   │   └── ...
// │   ├── tests/           # contains Mocha test files for the app, hooks and services
// │   │   └── ...
// │   │
// │   ├── index.js         # is used to load and start the application
// │   ├── app.js           # configures our Feathers application
// │   ├── app.hooks.js     # contains hooks which that run for all services
// │   └── channels.js      # set up Feathers event channels
// │
// ├── .editorconfig        # helps developers define and maintain consistent coding styles
// ├── .eslintrc.json       # eslint configuration
// └── package.json         # express server for production
