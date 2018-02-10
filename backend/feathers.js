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


```bash
# Provides the ability to initialize new application instances
npm install @feathersjs/feathers --save

# Provides a set of standard error classes used by all other Feathers modules
npm install @feathersjs/errors --save
```

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


```bash
# Contains Express framework integrations
npm install @feathersjs/express --save

# Allows to call service methods and receive real-time events
npm install @feathersjs/socketio --save

# Allows to call service methods and receive real-time events via Primus
npm install @feathersjs/primus --save
```

const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');

// Create an app that is a Feathers AND Express application
const app = express(feathers());

// Register a service
app.use('/todos', {
  get(id) {
    return Promise.resolve({ id });
  }
});

// Register an Express middleware
app.use('/test', (req, res) => {
  res.json({
    message: 'Hello world from Express middleware'
  });
});


/* *******************************************************************************************
 * 3. CLIENT: More details on how to use Feathers on the client.
 * ******************************************************************************************* */


```bash
# Allows to connect to services through REST HTTP
npm install @feathersjs/rest-client --save

# Allows to connect to services through Socket.io
npm install @feathersjs/socketio-client --save

# Allows to connect to services through Primus
npm install @feathersjs/primus-client --save

# Allows you to easily authenticate against a Feathers server
npm install @feathersjs/authentication-client --save
```


/* *******************************************************************************************
 * 4. AUTHENTICATION: Feathers authentication mechanism.
 * ******************************************************************************************* */


```bash
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


/* *******************************************************************************************
 * 5. DATABASE: Feathers common database adapter API and querying mechanism.
 * ******************************************************************************************* */


```bash
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
