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
 * OPTIONS > DATA
 * https://vuejs.org/v2/api/#Options-Data
 * ******************************************************************************************* */


new Vue({
  // A list/hash of attributes that are exposed to accept data from the parent component.
  // It has an Array-based simple syntax and an alternative Object-based syntax that allows
  // advanced configurations such as type checking, custom validation and default values.
  props: {
    height: Number,
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    }
  },

  // Primarily intended to make unit testing easier
  propsData: {
    age: 12
  },

  // The data object for the Vue instance.
  // Vue will recursively convert its properties into getter/setters to make it “reactive”. 
  // Note: you should not use an arrow function with the data property
  data: function () {
    return {
      a: 1,
      b: 2
    }
  },

  // Computed properties to be mixed into the Vue instance.
  // All getters and setters have their this context automatically bound to the Vue instance.
  // Computed properties are cached, and only re-computed on reactive dependency changes.
  // Note that if a certain dependency is out of the instance’s scope (i.e. not reactive),
  // the computed property will not be updated.
  computed: {
    // Note: you should not use an arrow function to define a computed property.
    aDouble: function () {
      return this.a * 2
    },
    aPlus: {
      get: function () {
        return this.a + 1
      },
      set: function (v) {
        this.a = v - 1
      }
    }
  },

  // An object where keys are expressions to watch and values are the corresponding callbacks.
  // The value can also be a string of a method name, or an Object that contains additional options.
  // The Vue instance will call $watch() for each entry in the object at instantiation.
  watch: {
    // Note: you should not use an arrow function to define a watcher.
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // String method name
    b: 'someMethod',
    // Deep watcher
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // The callback will be called immediately after the start of the observation
    d: {
      handler: function (val, oldVal) { /* ... */ },
      immediate: true
    }
  },

  // Methods to be mixed into the Vue instance. You can access these methods directly on the VM instance,
  // or use them in directive expressions. All methods will have their this context automatically bound to
  // the Vue instance.
  methods: {
    // Note: you should not use an arrow function to define a method.
    plus: function () {
      this.a++
    }
  }
})


/* *******************************************************************************************
 * OPTIONS > DOM
 * https://vuejs.org/v2/api/#Options-DOM
 * ******************************************************************************************* */


new Vue({
  // Provide the Vue instance an existing DOM element to mount on.
  // It can be a CSS selector string or an actual HTMLElement.
  // After the instance is mounted, the resolved element will be accessible as vm.$el.
  el: '#example',

  // A string template to be used as the markup for the Vue instance.
  // The template will replace the mounted element.
  // Any existing markup inside the mounted element will be ignored,
  // unless content distribution slots are present in the template.
  // If the string starts with # it will be used as a querySelector and
  // use the selected element’s innerHTML as the template string. This
  // allows the use of the common <script type="x-template"> trick to include templates.
  template: `
    <div class="checkbox-wrapper" @click="check">
      <div :class="{ checkbox: true, checked: checked }"></div>
      <div class="title">{{ title }}</div>
    </div>
  `,

  // An alternative to string templates allowing you to leverage the full programmatic power of JavaScript.
  // The render function receives a createElement method as it’s first argument used to create VNodes.
  // If the component is a functional component, the render function also receives an extra argument context,
  // which provides access to contextual data since functional components are instance-less.
  render: function (createElement) {
    // create kebabCase id
    var headingId = getChildrenTextContent(this.$slots.default)
    .toLowerCase()
    .replace(/\W+/g, '-')
    .replace(/(^\-|\-$)/g, '')

    return createElement(
      'h' + this.level,
      [
        createElement('a', {
          attrs: {
            name: headingId,
            href: '#' + headingId
          }
        }, this.$slots.default)
      ]
    )
  },

  // Provide an alternative render output when the default render function encounters an error.
  // The error will be passed to renderError as the second argument.
  // This is particularly useful when used together with hot-reload.
  renderError (createElement, err) {
    return createElement('pre', { style: { color: 'red' }}, err.stack)
  }
})


/* *******************************************************************************************
 * OPTIONS > LIFECYCLE HOOKS
 * https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
 * ******************************************************************************************* */





/* *******************************************************************************************
 * OPTIONS > ASSETS
 * https://vuejs.org/v2/api/#Options-Assets
 * ******************************************************************************************* */





/* *******************************************************************************************
 * OPTIONS > COMPOSITION
 * https://vuejs.org/v2/api/#Options-Composition
 * ******************************************************************************************* */





/* *******************************************************************************************
 * OPTIONS > MISC
 * https://vuejs.org/v2/api/#Options-Lifecycle-Hooks
 * ******************************************************************************************* */





/* *******************************************************************************************
 * INSTANCE PROPERTIES
 * https://vuejs.org/v2/api/#Instance-Properties
 * ******************************************************************************************* */





/* *******************************************************************************************
 * INSTANCE METHODS > DATA
 * https://vuejs.org/v2/api/#Instance-Methods-Data
 * ******************************************************************************************* */





/* *******************************************************************************************
 * INSTANCE METHODS > EVENTS
 * https://vuejs.org/v2/api/#Instance-Methods-Events
 * ******************************************************************************************* */





/* *******************************************************************************************
 * INSTANCE METHODS > LIFECYCLE
 * https://vuejs.org/v2/api/#Instance-Methods-Lifecycle
 * ******************************************************************************************* */





/* *******************************************************************************************
 * DIRECTIVES
 * https://vuejs.org/v2/api/#Directives
 * ******************************************************************************************* */





/* *******************************************************************************************
 * SPECIAL ATTRIBUTES
 * https://vuejs.org/v2/api/#Special-Attributes
 * ******************************************************************************************* */





/* *******************************************************************************************
 * BUILT-IN COMPONENTS
 * https://vuejs.org/v2/api/#Built-In-Components
 * ******************************************************************************************* */





/* *******************************************************************************************
 * VNODE INTERFACE
 * https://vuejs.org/v2/api/#VNode-Interface
 * ******************************************************************************************* */




/* *******************************************************************************************
 * SERVER-SIDE RENDERING
 * https://vuejs.org/v2/api/#Server-Side-Rendering
 * ******************************************************************************************* */


