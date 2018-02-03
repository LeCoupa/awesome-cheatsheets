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
```


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
