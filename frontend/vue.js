/* *******************************************************************************************
 * GLOBAL CONFIG
 * Vue.config is an object containing Vue’s global configurations.
 * You can modify its properties listed below before bootstrapping your application.
 * https://vuejs.org/v2/api/#Global-Config
 * ******************************************************************************************* */


// Configure whether to allow vue-devtools inspection
Vue.config.devtools = true

// Enable component init, compile, render and patch performance tracing in the browser devtool timeline.
Vue.config.performance = true

// Prevent the production tip on Vue startup.
Vue.config.productionTip = false

// Suppress all Vue logs and warnings
Vue.config.silent = false

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
  data () {
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
    plus () {
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
  render (createElement) {
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


// All lifecycle hooks automatically have their this context bound to the instance,
// so that you can access data, computed properties, and methods. This means you should not
// use an arrow function to define a lifecycle method (e.g. created: () => this.fetchTodos()).
// The reason is arrow functions bind the parent context, so this will not be the Vue instance as
// you expect and this.fetchTodos will be undefined.

new Vue({
  // Called synchronously immediately after the instance has been initialized,
  // before data observation and event/watcher setup.
  beforeCreate () {
    console.log('The instance has been initialized')
  },

  // Called synchronously after the instance is created. At this stage, the instance has
  // finished processing the options which means the following have been set up: data observation,
  // computed properties, methods, watch/event callbacks. However, the mounting phase has not been
  // started, and the $el property will not be available yet.
  created () {
    console.log('The instance has been created')
  },

  // Called right before the mounting begins: the render function
  // is about to be called for the first time.
  beforeMount () {
    console.log('The instance is about to be mounted')
  },

  // Called after the instance has been mounted, where el is replaced by the newly created vm.$el.
  // If the root instance is mounted to an in-document element, vm.$el will also be in-document when
  // mounted is called.
  mounted () {
    console.log('The instance has been mounted')

    // Note that mounted does not guarantee that all child components have also been mounted.
    // If you want to wait until the entire view has been rendered, you can use vm.$nextTick
    // inside of mounted:
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been rendered
    })
  },

  // Called when the data changes, before the virtual DOM is re-rendered and patched.
  // You can perform further state changes in this hook and they will not trigger additional re-renders.
  // This hook is not called during server-side rendering.  
  beforeUpdate () {
    console.log('The instance is about to be re-rendered and patched')
  },

  // The component’s DOM will have been updated when this hook is called, so you can perform DOM-dependent
  // operations here. However, in most cases you should avoid changing state inside the hook. To react
  // to state changes, it’s usually better to use a computed property or watcher instead.
  updated () {
    console.log('The instance has been re-rendered and patched')

    // Note that updated does not guarantee that all child components have also been re-rendered.
    // If you want to wait until the entire view has been re-rendered, you can use vm.$nextTick
    // inside of updated:
    this.$nextTick(function () {
      // Code that will run only after the
      // entire view has been re-rendered
    })
  },

  // Called when a kept-alive component is activated.
  activated () {
    console.log('Component activated')
  },

  // Called when a kept-alive component is deactivated.  
  deactivated () {
    console.log('Component deactivated')
  },

  // Called right before a Vue instance is destroyed.
  // At this stage the instance is still fully functional.
  beforeDestroy () {
    console.log('The instance is about to be destroyed')
  },

  // Called after a Vue instance has been destroyed.
  // When this hook is called, all directives of the Vue instance have been unbound,
  // all event listeners have been removed, and all child Vue instances have also been destroyed.  
  destroyed () {
    console.log('The instance has been destroyed')
  },

  // Called when an error from any descendent component is captured.
  // The hook receives three arguments: the error, the component instance that triggered the error,
  // and a string containing information on where the error was captured.
  // The hook can return false to stop the error from propagating further.
  errorCaptured (error, vm, info) {
    console.log(`The error (${error}) has been captured for ${vm}: ${info}`)

    // An errorCaptured hook can return false to prevent the error from propagating further.
    // This is essentially saying “this error has been handled and should be ignored.”
    // It will prevent any additional errorCaptured hooks or the global config.errorHandler
    // from being invoked for this error.
    return false
  },
})


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


// The data object that the Vue instance is observing.
// The Vue instance proxies access to the properties on its data object.
vm.$data

// An object representing the current props a component has received.
// The Vue instance proxies access to the properties on its props object.
vm.$props

// The root DOM element that the Vue instance is managing.
vm.$el

// The instantiation options used for the current Vue instance.
// This is useful when you want to include custom properties in the options:
vm.$options

// The parent instance, if the current instance has one.
vm.$parent

// The root Vue instance of the current component tree.
// If the current instance has no parents this value will be itself.
vm.$root

// The direct child components of the current instance.
// Note there’s no order guarantee for $children, and it is not reactive.
// If you find yourself trying to use $children for data binding,
// consider using an Array and v-for to generate child components,
// and use the Array as the source of truth.
vm.$children

// Used to programmatically access content distributed by slots.
// Each named slot has its own corresponding property (e.g. the contents of slot="foo" will
// be found at vm.$slots.foo). The default property contains any nodes not included in a named slot.
// Accessing vm.$slots is most useful when writing a component with a render function.
vm.$slots

// Used to programmatically access scoped slots. For each slot, including the default one, the
// object contains a corresponding function that returns VNodes.
// Accessing vm.$scopedSlots is most useful when writing a component with a render function.
vm.$scopedSlots

// An object that holds child components that have ref registered.
vm.$refs

// Whether the current Vue instance is running on the server.
vm.$isServer

// Contains parent-scope attribute bindings (except for class and style) that are not recognized
// (and extracted) as props. When a component doesn’t have any declared props, this essentially
// contains all parent-scope bindings (except for class and style), and can be passed down to an
// inner component via v-bind="$attrs" - useful when creating higher-order components.
vm.$attrs

// Contains parent-scope v-on event listeners (without .native modifiers).
// This can be passed down to an inner component via v-on="$listeners" - useful when creating
// higher-order components.
vm.$listeners


/* *******************************************************************************************
 * INSTANCE METHODS > DATA
 * https://vuejs.org/v2/api/#Instance-Methods-Data
 * ******************************************************************************************* */


// Watch an expression or a computed function on the Vue instance for changes.
// The callback gets called with the new value and the old value.
// The expression only accepts dot-delimited paths.
// For more complex expressions, use a function instead.
var unwatch = vm.$watch('a.b.c', function (newVal, oldVal) {
  // do something
}, {
  // To also detect nested value changes inside Objects, you need to pass in deep: true
  // in the options argument. Note that you don’t need to do so to listen for Array mutations.
  deep: true,

  // Passing in immediate: true in the option will trigger the callback immediately with the
  // current value of the expression:
  immediate: true
})

// later, teardown the watcher
unwatch()

// This is the alias of the global Vue.set.
vm.$set(target,key, value)

// This is the alias of the global Vue.delete.
vm.$delete(target, key)


/* *******************************************************************************************
 * INSTANCE METHODS > EVENTS
 * https://vuejs.org/v2/api/#Instance-Methods-Events
 * ******************************************************************************************* */


// Listen for a custom event on the current vm. Events can be triggered by vm.$emit.
// The callback will receive all the additional arguments passed into these event-triggering methods.
vm.$on(event, callback)

// Listen for a custom event, but only once.
// The listener will be removed once it triggers for the first time.
vm.$once(event, callback)

// Remove custom event listener(s).
// If no arguments are provided, remove all event listeners;
// If only the event is provided, remove all listeners for that event;
// If both event and callback are given, remove the listener for that specific callback only.
vm.$off([event, callback])

// Trigger an event on the current instance.
// Any additional arguments will be passed into the listener’s callback function.
vm.$emit(event, […args])


/* *******************************************************************************************
 * INSTANCE METHODS > LIFECYCLE
 * https://vuejs.org/v2/api/#Instance-Methods-Lifecycle
 * ******************************************************************************************* */


// If a Vue instance didn’t receive the el option at instantiation, it will be in “unmounted”
// state, without an associated DOM element. vm.$mount() can be used to manually start the mounting
// of an unmounted Vue instance.
vm.$mount([elementOrSelector])

// Force the Vue instance to re-render. Note it does not affect all child components,
// only the instance itself and child components with inserted slot content.
vm.$forceUpdate()

// Defer the callback to be executed after the next DOM update cycle.
// Use it immediately after you’ve changed some data to wait for the DOM update.
// This is the same as the global Vue.nextTick, except that the callback’s this context is
// automatically bound to the instance calling this method.
vm.$nextTick([callback])

// Completely destroy a vm. Clean up its connections with other existing vms, unbind all its
// directives, turn off all event listeners.
// Triggers the beforeDestroy and destroyed hooks.
vm.$destroy()


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


