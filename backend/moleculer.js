/* *******************************************************************************************
 * MOLECULER MICROSERVICES FRAMEWORK - CORE CHEATSHEET
 * http://moleculer.services/0.12/docs/
 *
 * Version: 0.12.x
 * ******************************************************************************************* */


/* *******************************************************************************************
 * Install Moleculer
 * ******************************************************************************************* */


```bash
npm i moleculer
```


/* *******************************************************************************************
 * SERVICE BROKER OPTIONS
 * ******************************************************************************************* */


// All ServiceBroker options with default values
const broker = new ServiceBroker({
    namespace: "",                          // Namespace for node segmentation
    nodeID: null,                           // NodeID. Default value is generated from hostname and PID

    logger: null,                           // Logger instance.
    logLevel: null,                         // Log level
    logFormatter: "default",                // Log formatter. Options: "default", "simple"

    transporter: null,                      // Transporter config
    requestTimeout: 0 * 1000,               // Timeout of requests
    requestRetry: 0,                        // Retries for requests
    maxCallLevel: 0,                        // Maximum calling level.
    heartbeatInterval: 5,                   // Heartbeat sending interval in seconds
    heartbeatTimeout: 15,                   // Heartbeat timeout in seconds

    disableBalancer: false,                 // Disable the built-in Moleculer balancer

    registry: {                             // Service Registry options
        strategy: "RoundRobin",             // Invocation strategy
        strategyOptions: null,              // Strategy options
        preferLocal: true                   // Prefer local invocations
    },

    circuitBreaker: {                       // Circuit-breaker options
        enabled: false,                     // Enable circuit-breaker
        maxFailures: 3,                     // Maximum failures
        halfOpenTime: 10 * 1000,            // Half-open time interval
        failureOnTimeout: true,             // Failure on timeouts
        failureOnReject: true               // Failure on rejects
    },

    transit: {                              // Transit options
        maxQueueSize: 50 * 1000             // Max items in outgoing queue
    },

    cacher: null,                           // Cacher config
    serializer: null,                       // Serializer config

    validation: true,                       // Enable params validation
    validator: null,                        // Validator instance
    metrics: false,                         // Enable metrics
    metricsRate: 1,                         // Metrics rate
    statistics: false,                      // Enable statistics
    internalServices: true,                 // Load internal ($node) services

    hotReload: false,                       // Hot-reload  services

    middlewares: null,                      // List of middlewares

    replCommands: null,                     // Custom REPL commands

    ServiceFactory: null,                   // Custom Service factory class
    ContextFactory: null                    // Custom Context factory class
});


/* *******************************************************************************************
 * SERVICE BROKER METHODS
 * ******************************************************************************************* */


// Broker properties
broker.Promise                                  // Pointer to Bluebird Promise lib
broker.namespace                                // Namespace from options
broker.nodeID                                   // Local NodeID
broker.logger                                   // Logger instance
broker.cacher                                   // Cacher instance
broker.serializer                               // Serializer instance
broker.validator                                // Validator instance

// Broker methods
broker.start();                                 // Start broker & all services. Returns a Promise
broker.stop();                                  // Stop broker & all services. Returns a Promise
broker.fatal(message, err, needExit = true);    // Fired a fatal error.
broker.repl();                                  // Switch broker to REPL mode.

broker.getLogger(module, service, version);     // Create a custom logger instance for modules

broker.loadServices(folder, fileMask);          // Load all services from directory
broker.loadService(filePath);                   // Load a service from a file
broker.createService(schema, schemaMods);       // Create a local service from schema
broker.destroyService(service);                 // Destroy a local service
broker.getLocalService(name, version);          // Get a local service instance by name

// Wait for services. Returns a Promise
await broker.waitForServices(serviceNames, timeout, interval);
await broker.waitForServices(["posts", "users"], 5000);
await broker.waitForServices({
    name: "posts", version: 2,
    name: "users", version: 1
}, 5000);

broker.use(...middlewares);                     // Register middlewares

broker.call(actionName, params, opts);          // Call a service
broker.mcall(def);                              // Multiple service calls

broker.emit(eventName, payload, groups);                    // Emit a balanced event
broker.broadcast(eventName, payload, groups = null)         // Broadcast an event
broker.broadcastLocal(eventName, payload, groups = null)    // Broadcast an event to local services

broker.sendPing(nodeID);                        // Ping a remote node
broker.MOLECULER_VERSION                        // Version number of Moleculer lib
broker.PROTOCOL_VERSION                         // Version number of Moleculer protocol


/* *******************************************************************************************
 * BROKER SERVICE CALLS
 * ******************************************************************************************* */


// Call the "users.get" service with params
broker.call("users.get", { id: 150 }).then(user => console.log(user));

// Call with async/await
const user = await broker.call("users.get", { id: 150});

// Call with calling options
const user = await broker.call("users.get", { id: 150}, { timeout: 5000, retryCount: 3 });

// Direct call to a remote node
const info = await broker.call("$node.services", null, { nodeID: "node-123" });

// Multiple calls with array def
const [posts, users] = await broker.mcall([
    { action: "posts.find", params: { limit: 5, offset: 0 } },
    { action: "users.find", params: { limit: 5, sort: "username" }, opts: { timeout: 500 } }
]);

// Multip calls with object def
const res = await broker.mcall({
    posts: { action: "posts.find", params: { limit: 5, offset: 0 } },
    users: { action: "users.find", params: { limit: 5, sort: "username" }, opts: { timeout: 500 } }
});
console.log(res.posts, res.users);


/* *******************************************************************************************
 * BROKER EVENTS
 * ******************************************************************************************* */


// Send a balanced event with payload
broker.emit("user.created", { user: user });

// Send a balanced event only for "mail" and "payment" service (only one instance)
broker.emit("user.created", { user: user }, ["mail", "payment"]);

// Send a broadcast event (for all service instances)
broker.broadcast("user.created", { user: user });

// Send a broadcast event only for "mail" and "payment" services (all instances)
broker.broadcast("user.created", { user: user }, ["mail", "payment"]);


/* *******************************************************************************************
 * NATS TRANSPORTER
 * Requirement: `npm i nats`
 * ******************************************************************************************* */


// Default options
const broker = new ServiceBroker({
    transporter: "NATS"
});

// With URI
const broker = new ServiceBroker({
    transporter: "nats://localhost:4222"
});

// With options
const broker = new ServiceBroker({
    transporter: {
        type: "NATS",
        options: {
            url: "nats://localhost:4222",
            user: "admin",
            pass: "1234"
        }
    }
});

// With TLS (https://github.com/nats-io/node-nats#tls)
const broker = new ServiceBroker({
    transporter: {
        type: "NATS",
        options: {
            url: "nats://localhost:4222",
            tls: {
                key: fs.readFileSync('./client-key.pem'),
                cert: fs.readFileSync('./client-cert.pem'),
                ca: [ fs.readFileSync('./ca.pem') ]
            }
        }
    }
});


/* *******************************************************************************************
 * REDIS TRANSPORTER
 * Requirement: `npm i ioredis`
 * ******************************************************************************************* */


// Default options
const broker = new ServiceBroker({
    transporter: "Redis"
});

// With URI
const broker = new ServiceBroker({
    transporter: "redis://redis-server:6379"
});

// With options
const broker = new ServiceBroker({
    transporter: {
        type: "Redis",
        options: {
            port: 6379,             // Redis port
            host: 'redis-server',   // Redis host
            family: 4,              // 4 (IPv4) or 6 (IPv6)
            password: 'auth',       // Password
            db: 0                   // Database index
        }
    }
});


/* *******************************************************************************************
 * MQTT TRANSPORTER
 * Requirement: `npm i mqtt`
 * ******************************************************************************************* */


// Default options
const broker = new ServiceBroker({
    transporter: "MQTT"
});

// With URI
const broker = new ServiceBroker({
    transporter: "mqtt://mqtt-server:1883"
});

// With options
const broker = new ServiceBroker({
    transporter: {
        type: "MQTT",
        options: {
            host: "mqtt-server",
            port: 1883,
            username: "admin",
            password: "1234"
        }
    }
});


/* *******************************************************************************************
 * AMQP TRANSPORTER
 * Requirement: `npm i amqplib`
 * ******************************************************************************************* */


// Default options
const broker = new ServiceBroker({
    transporter: "AMQP"
});

// With URI
const broker = new ServiceBroker({
    transporter: "amqp://rabbitmq-server:5672"
});

// With options
const broker = new ServiceBroker({
    transporter: {
        type: "AMQP",
        options: {
            url: "amqp://user:pass@rabbitmq-server:5672",
            eventTimeToLive: 5000,
            prefetch: 1
        }
    }
});


/* *******************************************************************************************
 * KAFKA TRANSPORTER
 * Requirement: `npm i kafka-node`
 * ******************************************************************************************* */


// Default options
const broker = new ServiceBroker({
    transporter: "Kafka"
});

// With URI
const broker = new ServiceBroker({
    transporter: "kafka://192.168.51.29:2181"
});

// With options
const broker = new ServiceBroker({
    transporter: {
        type: "kafka",
        options: {
            host: "192.168.51.29:2181",

            // KafkaClient options. More info: https://github.com/SOHU-Co/kafka-node#clientconnectionstring-clientid-zkoptions-noackbatchoptions-ssloptions
            client: {
                zkOptions: undefined,
                noAckBatchOptions: undefined,
                sslOptions: undefined
            },

            // KafkaProducer options. More info: https://github.com/SOHU-Co/kafka-node#producerclient-options-custompartitioner
            producer: {},
            customPartitioner: undefined,

            // ConsumerGroup options. More info: https://github.com/SOHU-Co/kafka-node#consumergroupoptions-topics
            consumer: {
            },

            // Advanced options for `send`. More info: https://github.com/SOHU-Co/kafka-node#sendpayloads-cb
            publish: {
                partition: 0,
                attributes: 0
            }
        }
    }
});


/* *******************************************************************************************
 * NATS STREAMING TRANSPORTER
 * Requirement: `npm i node-nats-streaming`
 * ******************************************************************************************* */


// Default options
const broker = new ServiceBroker({
    transporter: "STAN"
});

// With URI
const broker = new ServiceBroker({
    transporter: "stan://192.168.0.120:4222"
});

// With options
const broker = new ServiceBroker({
    transporter: {
        type: "STAN",
        options: {
            url: "stan://127.0.0.1:4222",
            clusterID: "my-cluster"
        }
    }
});


/* *******************************************************************************************
 * TCP STREAMING TRANSPORTER
 * No requirements
 * ******************************************************************************************* */


// Default options
const broker = new ServiceBroker({
    transporter: "TCP"
});

// With static node list
const broker = new ServiceBroker({
    transporter: "tcp://172.17.0.1:6000/node-1,172.17.0.2:6000/node-2"
});

const broker = new ServiceBroker({
    nodeID: "node-1",
    transporter: {
        type: "TCP",
        options: {
            udpDiscovery: false,
            urls: [
                "172.17.0.1:6000/node-1",
                "172.17.0.2:6000/node-2",
                "172.17.0.3:6000/node-3"
            ]
        }
    }
});

// With full options
const broker = new ServiceBroker({
    logger: true,
    transporter: {
        type: "TCP",
        options: {
            // Enable UDP discovery
            udpDiscovery: true,
            // Reusing UDP server socket
            udpReuseAddr: true,

            // UDP port
            udpPort: 4445,
            // UDP bind address
            udpBindAddress: null,
            // UDP sending period
            udpPeriod: 5,

            // Multicast address.
            udpMulticast: "239.0.0.0",
            // Multicast TTL setting
            udpMulticastTTL: 1,

            // Send broadcast
            udpBroadcast: false,

            // TCP server port. Null or 0 means random port
            port: null,
            // Static remote nodes address list (when UDP discovery is not available)
            urls: null,
            // Use hostname as preffered connection address
            useHostname: true,

            // Gossip sending period in seconds
            gossipPeriod: 2,
            // Maximum enabled outgoing connections. If reach, close the old connections
            maxConnections: 32,
            // Maximum TCP packet size
            maxPacketSize: 1 * 1024 * 1024
        }
    }
});


/* *******************************************************************************************
 * CACHERS
 * http://moleculer.services/docs/cachers.html
 * ******************************************************************************************* */


// Memory cacher
const broker = new ServiceBroker({
    cacher: "Memory"
});
// or
const broker = new ServiceBroker({
    cacher: true
});

// Memory cacher with options
const broker = new ServiceBroker({
    cacher: {
        type: "Memory",
        options: {
            ttl: 30
        }
    }
});

// Redis cacher
const broker = new ServiceBroker({
    cacher: "Redis"
});

// Redis cacher with URI
const broker = new ServiceBroker({
    cacher: "redis://redis-server:6379"
});

// Redis cacher with options
const broker = new ServiceBroker({
    cacher: {
        type: "Redis",
        options: {
            prefix: "MOL",
            redis: {
                host: "redis",
                port: 6379,
                password: "1234",
                db: 0
            }
        }
    }
});


/* *******************************************************************************************
 * Manual caching
 * ******************************************************************************************* */


// Save to cache
broker.cacher.set("mykey.a", { a: 5 });

// Get from cache
const obj = await broker.cacher.get("mykey.a");

// Remove entry from cache
broker.cacher.del("mykey.a");

// Clean all 'mykey' entries
broker.cacher.clean("mykey.*");

// Clean all entries
broker.cacher.clean();


/* *******************************************************************************************
 * SERIALIZER
 * http://moleculer.services/docs/serializers.html
 * ******************************************************************************************* */


// JSON serializer (default)
const broker = new ServiceBroker({
    serializer: "JSON"
});

// Avro serializer (need `npm i avsc`)
const broker = new ServiceBroker({
    serializer: "Avro"
});

// Protocol Buffer serializer (need `npm i protobufjs`)
const broker = new ServiceBroker({
    serializer: "ProtoBuf"
});

// MsgPack serializer (need `npm i msgpack5`)
const broker = new ServiceBroker({
    serializer: "MsgPack"
});


/* *******************************************************************************************
 * STRATEGY
 * ******************************************************************************************* */


// Round-robin strategy (default)
const broker = new ServiceBroker({
    registry: {
        strategy: "RoundRobin"
    }
});

// Random strategy
const broker = new ServiceBroker({
    registry: {
        strategy: "Random"
    }
});

// CPU usage-based strategy
const broker = new ServiceBroker({
    registry: {
        strategy: "CpuUsageStrategy"
    }
});

// CPU usage-based strategy with options
const broker = new ServiceBroker({
    registry: {
        strategy: "CpuUsageStrategy",
        strategyOptions: {
            sampleCount: 3,
            lowCpuUsage: 10
        }
    }
});


/* *******************************************************************************************
 * LOGGER
 * http://moleculer.services/docs/logger.html
 * ******************************************************************************************* */


// Logger methods
broker.logger.fatal();
broker.logger.error();
broker.logger.warn();
broker.logger.info();
broker.logger.debug();
broker.logger.trace();

// Custom log formatter
const broker = new ServiceBroker({
    logger: console,
    logFormatter(level, args, bindings) {
        return level.toUpperCase() + " " + bindings.nodeID + ": " + args.join(" ");
    }
});

// External Pino logger
const pino = require("pino")({ level: "info" });
const broker = new ServiceBroker({
    logger: bindings => pino.child(bindings)
});

// External Bunyan logger
const logger = require("bunyan").createLogger({ name: "moleculer", level: "info" });
const broker = new ServiceBroker({
    logger: bindings => logger.child(bindings)
});


/* *******************************************************************************************
 * SERVICE SCHEMA
 * ******************************************************************************************* */


module.exports = {
    // Name
    name: "greeter",
    // Version
    version: 2,

    // Settings
    settings: {},
    // Metadata
    metadata: {},
    // Dependencies
    dependencies: [],

    // Actions
    actions: {
        // Shorthand actions
        hello() {
            // Call a method
            this.doSomething();

            return "Hello Moleculer";
        },

        // With properties
        welcome: {
            // Cache options
            cache: {
                keys: ["name"]
            },
            // Validation options
            params: {
                name: "string"
            },
            // Action handler
            handler(ctx) {
                return `Welcome, ${ctx.params.name}`;
            }
        }
    },

    events: {
        "user.created"(payload, sender) {

        }
    },

    // Service methods
    methods: {
        doSomething() {}
    },

    // Lifecycle event handlers
    created() {
        console.log("Service created");
    },

    started() {
        console.log("Service started");
        return Promise.resolve();
    },

    stopped() {
        console.log("Service stopped");
        return Promise.resolve();
    }
};


/* *******************************************************************************************
 * SERVICE
 * ******************************************************************************************* */


this.name               // Name of service
this.version            // Version of service
this.settings           // Settings of service
this.schema             // Schema definition of service
this.broker             // Broker instance
this.Promise            // Class of Promise (Bluebird)
this.logger             // Logger instance
this.actions            // Actions of service.
this.waitForServices    // Pointer to ‘broker.waitForServices’ method


/* *******************************************************************************************
 * CONTEXT
 * ******************************************************************************************* */

 
ctx.id                  // Context ID
ctx.broker              // Broker instance
ctx.action              // Action definition
ctx.nodeID              // Node ID
ctx.requestID           // Request ID
ctx.parentID            // ID of parent context (in case of sub-calls).
ctx.params              // Request params
ctx.meta                // Request metadata
ctx.callerNodeID        // Caller Node ID if it is requested from a remote node.
ctx.level               // Request level (in case of sub-calls). The first level is 1.

// Make a sub-call
ctx.call(actionName, params, callingOptions)

// Emit an event
ctx.emit(eventName, payload, groups);
