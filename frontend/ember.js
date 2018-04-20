/*
 *  -----------------------
 *    Ember.js Cheatsheet
 *  -----------------------
 *
 *  Docs: https://guides.emberjs.com/
 *  Quick start: https://guides.emberjs.com/current/getting-started/quick-start/
 *
 *  Table of contents
 *  -------------------
 *  01 | Installation
 *  02 | Ember CLI
 *  03 | Directory layout
 *  04 | Routes
 *  05 | Templates
 *  06 | Components
 *  07 | Models
 *  08 | Services
 *  09 | Testing
 *  10 | Addons
 *  11 | Configuration
 *  12 | Community
 *
 */

/*
 *  01 | Installation
 *  --------------------------------------------------------------
 *  Getting started with Ember is easy. Ember projects are created
 *  and managed through our command line build tool Ember CLI.
 */

```
npm install -g ember-cli
ember new <application-name>
ember serve
```



/*
 *  02 | Ember CLI
 *  --------------------------------------------------------------
 *  Ember CLI is the Ember.js command line utility that provides a
 *  fast Broccoli-powered asset pipeline, a strong conventional
 *  project structure, and a powerful addon system for extension.
 *
 *  Among the principal features of Ember CLI are:
    - Project/Addon creation: create new projects quickly without having to worry about project structure;
    - Build pipeline: asset compilation, finger-printing and more out of the box;
    - Generators: use the built-in generators and get files that follow the latest practices, and matching tests;
    - Ember Addons: extend both your application and Ember CLI itself with community solutions. Also an excellent
                    way to easily integrate 3rd party libraries into your Ember app.
 */

Basic commands

Command         | Aliases       | Description
--------------------------------------------------
```
ember new       |               | Create new project with the provided name (ex. ember new <app-name>)
ember server    | ember s       | Starts development server (default port is 4200)
ember test      | ember t       | Run tests in CI mode
ember generate  | ember g       | Run generator
ember destroy   | ember d       | Remove code created by generator
ember help      | ember h       | Get more info on available cli command
ember install   | ember i       | Install given addon into project and save to package.json
ember           |               | List available cli commands
```

Useful commands
```
ember s --proxy <proxy-url>
ember s --port <port>
```



/*
 *  03 | Directory Layout
 *  --------------------------------------------------------------
 *
 *  Layout of the root folder */

app/
  ` This is where folders and files for models, components, routes, templates and styles are stored. The majority of your coding on an Ember project happens in this folder. `
config/
  ` The config directory contains the environment.js where you can configure settings for your app. `
node_modules/
  ` This directory is from npm. npm is the package manager for Node.js. Ember is built with Node and uses a variety of Node.js modules for operation. The package.json file maintains the list of current npm dependencies for the app. Any Ember CLI addons you install will also show up here. `
public/
  ` This directory contains assets such as images and fonts. `
vendor/
  ` This directory is where front-end dependencies (such as JavaScript or CSS) that are not managed by NPM go. `
tests/testem.js
  ` Automated tests for our app go in the tests folder, and Ember CLI's test runner testem is configured in testem.js. `
ember-cli-build.js
  ` This file describes how Ember CLI should build our app. `
package.json
  ` Packages listed in package.json are installed in the node_modules directory. `

/*
 *  Layout of the app directory */
adapters/
  ` Adapters with the convention adapter-name.js. `
components/
  ` Components with the convention component-name.js. Components must have a dash in their name. So blog-post is an acceptable name, but post is not. `
controllers/
  ` Controllers behave like a specialized type of Component that is rendered by the router when entering a Route. `
helpers/
  ` Helpers with the convention helper-name.js. Helpers must have a dash in their name. Remember that you must register your helpers by exporting makeBoundHelper or calling registerBoundHelper explicitly. `
models/
  ` Models with the convention model-name.js. `
routes/
  ` Routes with the convention route-name.js. Child routes are defined in sub-directories, parent/child.js. To provide a custom implementation for generated routes (equivalent to App.Route when using globals), use app/routes/basic.js. `
styles/
  ` Contains your stylesheets, whether SASS, LESS, Stylus, Compass, or plain CSS (though only one type is allowed, see Asset Compilation). These are all compiled into <app-name>.css. `
templates/
  ` Your HTMLBars templates. These are compiled to /dist/assets/<app-name>.js. The templates are named the same as their filename, minus the extension (i.e. templates/foo/bar.hbs -> foo/bar). `
serializers/
  ` Serializers for your models or adapter, where model-name.js or adapter-name.js. `
utils/
  ` Utility modules with the convention utility-name.js. `
router.js
  ` Your route configuration. The routes defined here correspond to routes in app/routes/. `


/*
 *  03 | Routes
 *  --------------------------------------------------------------
 *
 *    When your application starts, the router matches the current URL to the routes that you've defined.
 *    The routes, in turn, are responsible for displaying templates, loading data, and setting up application state.
 *
 *    > ember g route <route-name>
 */

  import Route from '@ember/routing/route';

  export default Route.extend({
    model() {
      // Typically, the model hook should return an Ember Data record,
      //  but it can also return any promise object (Ember Data records are
      //  promises), or a plain JavaScript object or array. Ember will wait
      //  until the data finishes loading (until the promise is resolved)
      //  before rendering the template.
    }
  });



/*
 *  04 | Templates
 *  --------------------------------------------------------------
 *
 *    Ember uses the Handlebars templating library to power your app's user
 *    interface. Handlebars templates contain static HTML and dynamic
 *    content inside Handlebars expressions, which are invoked with
 *    double curly braces: {{}}.
 *
 *    Templates are backed with a context. A context is an object from
 *    which Handlebars expressions read their properties. In Ember this
 *    is often a component. For templates rendered by a route (like application.hbs),
 *    the context is a controller.
 *
 *    > ember g template <template-name>
 */


  // Here's an basic exmpale of a template
  ```hbs
  Hello, <strong>{{firstName}} {{lastName}}</strong>!
  ```



/*
 *  05 | Components
 *  --------------------------------------------------------------
 *
 *    Ember components are used to encapsulate markup and style into
 *    reusable content. Components consist of two parts: a JavaScript
 *    component file that defines behavior, and its accompanying Handlebars
 *    template that defines the markup for the component's UI.
 *
 *    > ember g component <component-name>
 */

  // app/components/<component-name>.js
  import Component from '@ember/component';

  export default Component.extend({
  });

  // app/templates/components/<component-name>.hbs
  ```hbs
  {{yield}}
  ```

/*
 *  Actions
 *
 *    Provide a means to communicate events and changes
 */

  // app/components/rental-listing.js
  import Component from '@ember/component';

  export default Component.extend({

    isWide: false,

    actions: {
      toggleImageSize() {
        this.toggleProperty('isWide');
      }
    }

  });

  // Actions can be attached to DOM elements inside templates using the {{action}} helper
  ``` app/templates/components/rental-listing.hbs
  <article class="listing">
    <a {{action 'toggleImageSize'}} class="image {{if isWide "wide"}}">
      <img src="http://www.fillmurray.com/200/300" alt="">
    </a>
  </article>
  ```

/*
 *  Component lifecycle
 *
 *    As components are rendered, re-rendered and finally removed, Ember provides
 *    lifecycle hooks that allow you to run code at specific times in a component's life.
 */

On Initial Render
  1 init
  2 didReceiveAttrs
  3 willRender
  4 didInsertElement // Good place to integrate with 3rd party libraries
  5 didRender

On Re-Render
  1 didUpdateAttrs
  2 didReceiveAttrs
  3 willUpdate
  4 willRender
  5 didUpdate
  6 didRender

On Component Destroy
  1 willDestroyElement
  2 willClearRender
  2 didDestroyElement


/*
 *  Block params
 *
 *    Components can have properties passed in, but they can also return
 *    output to be used in a block expression.
 */

  //   Here an entire blog post model is being passed to the component as a
  //   single component property. In turn the component is returning values using yield.

  ``` app/templates/index.hbs
  {{blog-post post=model}}
  ```

  ``` app/templates/components/blog-post.hbs
  {{yield post.title post.body post.author}}
  ```

  //  The block expression can then use block params to bind names to any yielded
  //  values for use in the block. This allows for template customization when using
  //  a component, where the markup is provided by the consuming template, but any
  //  event handling behavior implemented in the component is retained such as click() handlers.

  ``` app/templates/index.hbs
  {{#blog-post post=model as |title body author|}}
    <h2>{{title}}</h2>
    <p class="author">by {{author}}</p>
    <p class="post-body">{{body}}</p>
  {{/blog-post}}
  ```
  //  The names are bound in the order that they are passed to yield in the component template.



/*
 *  06 | Models
 *  --------------------------------------------------------------
 *
 *    Models are objects that represent the underlying data that your application
 *    presents to the user. Different apps will have very different models,
 *    depending on what problems they're trying to solve.
 *
 *    Ember Data, included by default when you create a new application,
 *    is a library that integrates tightly with Ember to make it easy to
 *    retrieve models from your server as JSON, save updates back to the server,
 *    and create new models in the browser.
 *
 *    > ember g model <model-name>
 */

  import DS from 'ember-data';
  import { computed } from '@ember/object';

  const { attr, Model } = DS;

  export default Model.extend({

    firstName: attr('string'),
    lastName: attr('string'),
    birthday:  attr('date'),


    //  Computed properties
    //    These are effectively fuctions declared as properties. The function's result
    //    will recompute every time one of the provided 'dependent keys' changes.

    fullName: computed('firstName', 'lastName', function() {
      let firstName = this.get('firstName');
      let lastName = this.get('lastName');

      return `${firstName} ${lastName}`;
    })

  });



/*
 *  07 | Services
 *  --------------------------------------------------------------
 *
 *    A Service is an Ember object that lives for the duration of the application, and can
 *    be made available in different parts of your application. Services are useful for
 *    features that require shared state or persistent connections.
 *
 *    Example uses of services might include:
 *
 *      - User/session authentication.
 *      - Geolocation.
 *      - WebSockets.
 *      - Server-sent events or notifications.
 *      - Server-backed API calls that may not fit Ember Data.
 *      - Third-party APIs.
 *      - Logging.
 *
 *    > ember g service <service-name>
 */


/*
 *  Defining services
 *
 *    Like any Ember object, a service is initialized and can have properties and
 *    methods of its own. Below, the shopping cart service manages an items array
 *    that represents the items currently in the shopping cart.
 */

  // app/services/shopping-cart.js
  import Service from '@ember/service';

  export default Service.extend({
    items: null,

    init() {
      this._super(...arguments);
      this.set('items', []);
    },

    remove(item) {
      this.get('items').removeObject(item);
    }
  });

/*
 *  Accessing services
 *
 *    To access a service, you can inject it in any object such as a component or another
 *    service using the `inject` function from the `@ember/service` module.
 */

  // app/components/cart-contents.js
  import Component from '@ember/component';
  import { inject } from '@ember/service';

  export default Component.extend({

    shoppingCart: inject() // will load the service in file /app/services/shopping-cart.js

    actions: {
      remove(item) {
        this.get('shoppingCart').remove(item);
      }
    }
  });

  //  Once injected into a component, a service can also be used in the template.
  //    Note cart being used below to get data from the cart.
  ```hbs app/templates/components/cart-contents.hbs
  <ul>
    {{#each cart.items as |item|}}
      <li>
        {{item.name}}
        <button {{action "remove" item}}>Remove</button>
      </li>
    {{/each}}
  </ul>
  ```



/*
 *  08 | Testing
 *  --------------------------------------------------------------
 *
 *  Testing is a core part of the Ember framework and its development cycle.
 *
 *    > ember g acceptance-test <test-name>
 *    > ember g integration-test <test-name>
 *    > ember g unit-test <test-name>
 *    > ember t --server
 *    > ember s && visit localhost:4200/tests
 */

  /*
   *  Acceptance & application tests
   *
   *    In these kinds of tests, we interact with the application in the same ways that a
   *    user would, such as filling out form fields and clicking buttons. Application
   *    tests ensure that the interactions within a project are basically functional, the
   *    core features of a project have not regressed, and the project's goals are being met.
   *
   *    Some useful helpers from '@ember/test-helpers':
   *    - `click(selector)`
   *        Clicks an element and triggers any actions triggered by the element's click event and
   *        returns a promise that fulfills when all resulting async behavior is complete.
   *
   *    - `fillIn(selector, value)`
   *        Fills in the selected input with the given value and returns a promise that
   *        fulfills when all resulting async behavior is complete. Works with <select> elements
   *        as well as <input> elements. Keep in mind that with <select> elements, value must be set
   *        to the value of the <option> tag, rather than its content (for example, true rather than "Yes").
   *
   *    - `triggerKeyEvent(selector, type, keyCode)`
   *        Simulates a key event type, e.g. keypress, keydown, keyup with the desired keyCode on element found by the selector.
   *
   *    - `triggerEvent(selector, type, options)`
   *        Triggers the given event, e.g. blur, dblclick on the element identified by the provided selector.
   *
   *    - `visit(url)`
   *        Visits the given route and returns a promise that fulfills when all resulting async behavior is complete.
   *
   *    - `currentURL()`
   *        Returns the current URL.
   *
   *    - `find(selector, context)`
   *        Finds an element within the app's root element and within the context (optional). Scoping to the
   *        root element is especially useful to avoid conflicts with the test framework's reporter, and this
   *        is done by default if the context is not specified.
   *
   *    - `findAll(selector)`
   *        Find all elements matched by the given selector. Equivalent to calling querySelectorAll() on the
   *        test root element. Returns an array of matched elements.
   *
   */

  import { module, test } from 'qunit';
  import { setupApplicationTest } from 'ember-qunit';
  import { visit, fillIn, click } from '@ember/test-helpers';

  module('Acceptance | posts', function(hooks) {

    // `setupApplicationTest` deals with application setup and teardown.
    setupApplicationTest(hooks);

    test('should add new post', async function(assert) {
      await visit('/posts/new');
      await fillIn('input.title', 'My new post');
      await click('button.submit');

      const title = this.element.querySelector('ul.posts li:first').textContent;
      assert.equal(title, 'My new post');
    });
  });

  /*
   *  Integration & rendering tests
   *
   *    Rendering Tests are, as the name suggests, rendering components and helpers
   *    by verifying the correct behaviour when the component or helper interacts
   *    with the system in the same way that it will within the context of the application,
   *    including being rendered from a template and receiving Ember's lifecycle hooks.
   *
   *    If we need to test the interactions between various parts of the application,
   *    such as behaviour between UI controls we can utilize Rendering Tests.
   */

  // app/components/pretty-color.js
  import Component from '@ember/component';
  import { computed } from '@ember/object';

  export default Component.extend({
    attributeBindings: ['style'],

    style: computed('name', function() {
      const name = this.get('name');
      return `color: ${name}`;
    })
  });

  // tests/integration/components/pretty-color-test.js
  import { module, test } from 'qunit';
  import { setupRenderingTest } from 'ember-qunit';
  import { render } from '@ember/test-helpers';
  import hbs from 'htmlbars-inline-precompile';

  module('Integration | Component | pretty color', function(hooks) {

    // Make sure to call the setupRenderingTest function together with the hooks
    //  parameter first in your new module. This will do the necessary setup for
    //  testing your component for you, including setting up a way to access the
    //  rendered DOM of your component later on in the test, and cleaning up
    //  once your tests in this module are finished.
    setupRenderingTest(hooks);

    test('it renders', async function(assert) {
      assert.expect(2);

      // set the outer context to red
      this.set('colorValue', 'red');

      await render(hbs`{{pretty-color name=colorValue}}`);

      assert.equal(this.element.querySelector('div').getAttribute('style'), 'color: red', 'starts as red');

      this.set('colorValue', 'blue');

      assert.equal(this.element.querySelector('div').getAttribute('style'), 'color: blue', 'updates to blue');  });
  });


  //  Stubbing services
  //
  //    In cases where components have dependencies on Ember services, it is
  //    possible to stub these dependencies for rendering tests. You stub Ember
  //    services by using the built-in register() function to register your
  //    stub service in place of the default.

  import { module, test } from 'qunit';
  import { setupRenderingTest } from 'ember-qunit';
  import { render } from '@ember/test-helpers';
  import hbs from 'htmlbars-inline-precompile';
  import Service from '@ember/service';

  //Stub location service
  const locationStub = Service.extend({
    city: 'New York',
    country: 'USA',
    currentLocation: {
      x: 1234,
      y: 5678
    },

    getCurrentCity() {
      return this.get('city');
    },
    getCurrentCountry() {
      return this.get('country');
    }
  });

  module('Integration | Component | location indicator', function(hooks) {
    setupRenderingTest(hooks);

    hooks.beforeEach(function(assert) {
      this.owner.register('service:location-service', locationStub);
    });

    test('should reveal current location', async function(assert) {
      await render(hbs`{{location-indicator}}`);
      assert.equal(this.element.textContent.trim(),
       'You currently are located in New York, USA');
    });
  });


  /*
   *  Unit & container tests
   *
   *    Unit tests (as well as container tests) are generally used to test a
   *    small piece of code and ensure that it is doing what was intended.
   */

  // app/services/some-thing.js
  import Service from '@ember/service';

  export default Service.extend({
    foo: 'bar',

    testMethod() {
      this.set('foo', 'baz');
    }
  });

  // tests/unit/services/some-thing-test.js
  import { module, test } from 'qunit';
  import { setupTest } from 'ember-qunit';

  module('Unit | Service | some thing', function(hooks) {

    // The `setupTest` helper provides us with some conveniences, such as the `this.owner` object,
    //  that helps us to create or lookup objects which are needed to setup our test.
    //  In this example, we use the `this.owner` object to lookup the service instance that
    //  becomes our test subject: `someThing`. Note that in a unit test you can customize any
    //  object under test by setting its properties accordingly. We can use the `set` method
    //  of the test object to achieve this.
    setupTest(hooks);

    test('should update foo on testMethod', function(assert) {
      const someThing = this.owner.lookup('service:some-thing');

      someThing.testMethod();

      assert.equal(someThing.get('foo'), 'baz');
    });
  });


/*
 *  Running tests
 *
 *    Run your tests with `ember test` on the command-line. You can re-run your tests on
 *    every file-change with `ember test --server`.
 *
 *    Tests can also be executed when you are running a local development server
 *    (started by running `ember server`), at the `/tests` URI which renders the `tests/index.html` template.
 */

 ```
 ember test
 ember test --server
 ember test --filter="dashboard"
 run ember server then visit http://localhost:4200/tests
 ```



/*
 *  09 | Addons
 *  --------------------------------------------------------------
 *
 *  Ember has a rich ecosystem of addons that can be easily added to projects.
 *  Addons provide a wide range of functionality to projects, often saving time and
 *  letting you focus on your project.
 *
 *  To browse addons, visit the [EmberObserver](https://emberobserver.com/) website. It catalogs and categorizes Ember
 *  addons that have been published to NPM and assigns them a score based on a variety of criteria.
 *
 *    > ember install <addont-name>
 */



/*
 *  10 | Configuration
 *  --------------------------------------------------------------
 *
 *  Ember CLI ships with support for managing your application's environment. Ember CLI
 *  will setup a default environment config file at config/environment. Here, you can define
 *  an ENV object for each environment, which are currently limited to three: development,
 *  test, and production.
 */

  //   The ENV object has three important keys:
  //   - `EmberENV` can be used to define Ember feature flags (see the Feature Flags guide).
  //   - `APP` can be used to pass flags/options to your application instance.
  //   - `environment` contains the name of the current environment (development,production or test).

  // You can access these environment variables in your application code by importing from `your-application-name/config/environment`.
  import ENV from 'your-application-name/config/environment';

  if (ENV.environment === 'development') {
    // ...
  }



/*
 *  11 | Community
 *  --------------------------------------------------------------
 *
 *  Ember's secret sauce
 *
 *    more at [Ember Community Page](https://emberjs.com/community/)
 *
 */

//  Ember Discussion Forum
//
//    url: http://discuss.emberjs.com/
//
//    A great venue for discussing things like features, architecture, and best practices
//    and a great place to ask questions (and get great answers from Ember Core Team members
//    and other members of the community)

//  Ember Community Slack
//
//    url: https://embercommunity.slack.com/
//
//    Use the Slackin app to receive an invitation.

//  Ember Times
//
//    url: https://the-emberjs-times.ongoodbits.com/
//
//    Follow the progress of new features in the Ember ecosystem, requests for community
//    input (RFCs), and calls for contributors

//  Ember Weekly
//
//    url: http://www.emberweekly.com/
//
//    A curated list of Ember learning resources (podcasts, videos, blog posts, books, and more)

//  Official Ember Blog
//
//    url: https://emberjs.com/blog/
//
//    Big announcements like new Ember.js version release notes or State of the Union information

//  Ember Github
//
//    url: https://github.com/emberjs/

//  Ember Meetups
//
//    url: https://emberjs.com/community/meetups/
