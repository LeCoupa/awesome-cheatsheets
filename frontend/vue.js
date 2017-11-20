/* *******************************************************************************************
 * GLOBAL CONFIG
 * Vue.config is an object containing Vue’s global configurations.
 * You can modify its properties listed below before bootstrapping your application.
 * https://vuejs.org/v2/api/#Global-Config
 * ******************************************************************************************* */


Vue.config.devtools = true        // Configure whether to allow vue-devtools inspection
Vue.config.performance = true     // Enable component init, compile, render and patch performance tracing in the browser devtool timeline.
Vue.config.productionTip = false  // Prevent the production tip on Vue startup.
Vue.config.silent = false         // Suppress all Vue logs and warnings

// Make Vue ignore custom elements defined outside of Vue
Vue.config.ignoredElements = [
  'my-custom-web-component',
  'another-web-component',
  /^ion-/
]

// Define custom key alias(es) for v-on.
Vue.config.keyCodes = {
  v: 86,
  f1: 112,
  // camelCase won`t work
  mediaPlayPause: 179,
  // instead you can use kebab-case with double quotation marks
  "media-play-pause": 179,
  up: [38, 87]
}

// Assign a handler for uncaught errors during component render function and watchers. 
Vue.config.errorHandler = function (err, vm, info) {
  // handle error
  // `info` is a Vue-specific error info, e.g. which lifecycle hook
  // the error was found in. Only available in 2.2.0+
}

// Define custom merging strategies for options
Vue.config.optionMergeStrategies._my_option = function (parent, child, vm) {
  return child + 1
}

// Assign a custom handler for runtime Vue warnings.
// Note this only works during development and is ignored in production.
Vue.config.warnHandler = function (msg, vm, trace) {
  // `trace` is the component hierarchy trace
}


/* *******************************************************************************************
 * GLOBAL API
 * https://vuejs.org/v2/api/#Global-API
 * ******************************************************************************************* */


Vue.version                        // Provides the installed version of Vue as a string.

Vue.extend(options)                // Create a “subclass” of the base Vue constructor.
Vue.mixin( mixin )                 // Apply a mixin globally, which affects every Vue instance created afterwards.
Vue.nextTick([callback, context])  // Defer the callback to be executed after the next DOM update cycle.
Vue.use(plugin)                    // Install a Vue.js plugin. If the plugin is an Object, it must expose an install method.

Vue.set(target, key, value)        // Set a property on an object. If the object is reactive, ensure the property is created as a reactive property and trigger view updates.
Vue.delete(target, key)            // Delete a property on an object. If the object is reactive, ensure the deletion triggers view updates.

// Register or retrieve a global directive.
Vue.directive('my-directive', {
  bind: function () {},
  inserted: function () {},
  update: function () {},
  componentUpdated: function () {},
  unbind: function () {}
})

// Register (function directive)
Vue.directive('my-directive', function () {
  // This will be called as `bind` and `update`
})

// Getter, return the directive definition if registered
var myDirective = Vue.directive('my-directive')

// Getter, return the filter if registered
var myFilter = Vue.filter('my-filter')

// Register a global filter
Vue.filter('my-filter', function (value) { })

// Register an extended constructor
Vue.component('my-component', Vue.extend({ }))

// Register an options object (automatically call Vue.extend)
Vue.component('my-component', { })

// Retrieve a registered component (always return constructor)
var MyComponent = Vue.component('my-component')

Vue.compile(template)  // Compiles a template string into a render function


/* *******************************************************************************************
 * OPTIONS DATA
 * https://vuejs.org/v2/api/#Options-Data
 * ******************************************************************************************* */


