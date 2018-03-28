/* *******************************************************************************************
 * ANGULARJS CHEATSHEET
 * API DOCUMENTATION: https://docs.angularjs.org/api
 * DEVELOPER GUIDE: https://docs.angularjs.org/guide
 * ERROR REFERENCE: https://docs.angularjs.org/error
 * ******************************************************************************************* */


/* *******************************************************************************************
 * TIPS & TRICKS
 * ******************************************************************************************* */


// You can retrieve a scope for any DOM element by using:
angular.element(aDomElement).scope()


/* *******************************************************************************************
 * CSS CLASS USED BY ANGULAR
 * ******************************************************************************************* */


// AngularJS applies this class to any element for which a new scope is defined.
ng-scope

// AngularJS applies this class to any element for which a new isolate scope is defined.
ng-isolate-scope

// AngularJS applies this class to any element that is attached to a data binding, via ng-bind or {{}} curly braces, for example.
ng-binding

// AngularJS applies this class to a form control widget element if that element's input does not pass validation.
ng-invalid, ng-valid

// AngularJS ngModel directive applies ng-pristine class to a new form control widget which did not have user interaction.
// Once the user interacts with the form control, the class is changed to ng-dirty.
ng-pristine, ng-dirty

// AngularJS ngModel directive applies ng-untouched class to a new form control widget which has not been blurred.
// Once the user blurs the form control, the class is changed to ng-touched.
ng-touched, ng-untouched


/* *******************************************************************************************
 * NG MODULE > FUNCTIONS
 * ******************************************************************************************* */


// Returns a function which calls function fn bound to self (self becomes the this for fn).
// You can supply optional args that are prebound to the function.
// This feature is also known as partial application, as distinguished from function currying.
angular.bind(self, fn, args)

// Use this function to manually start up AngularJS application.
angular.bootstrap(element, [modules], [config])

// Creates a deep copy of source, which should be an object or an array.
angular.copy(source, [destination])

// Wraps a raw DOM element or HTML string as a jQuery element.
angular.element(element)

// Determines if two objects or two values are equivalent.
// Supports value types, regular expressions, arrays and objects.
angular.equals(o1, o2)

// Configure several aspects of error handling in AngularJS if used as a setter or return the current configuration if used as a getter.
angular.errorHandlingConfig([config])

// Extends the destination object dst by copying own enumerable properties from the src object(s) to dst.
// You can specify multiple src objects.
angular.extend(dst, src)

// Invokes the iterator function once for each item in obj collection, which can be either an object or an array.
angular.forEach(obj, iterator, [context])

// Deserializes a JSON string.
angular.fromJson(json)

// A function that returns its first argument.
// This function is useful when writing code in the functional style.
angular.identity(value)

// Creates an injector object that can be used for retrieving services as well as for dependency injection.
angular.injector(modules, [strictDi])

// Determines if a reference is an Array.
angular.isArray(value)

// Determines if a value is a date.
angular.isDate(value)

// Determines if a reference is defined.
angular.isDefined(value)

// Determines if a reference is a DOM element (or wrapped jQuery element).
angular.isElement(value)

// Determines if a reference is a Function.
angular.isFunction(value)

// Determines if a reference is a Number.
angular.isNumber(value)

// Determines if a reference is an Object. Unlike typeof in JavaScript, nulls are not considered to be objects.
angular.isObject(value)

// Determines if a reference is a String.
angular.isString(value)

// Determines if a reference is undefined.
angular.isUndefined(value)

// The angular.module is a global place for creating, registering and retrieving AngularJS modules.
// All modules (AngularJS core or 3rd party) that should be available to an application must be registered using this mechanism.
// Passing one argument retrieves an existing angular.Module, whereas passing more than one argument creates a new angular.Module
angular.module(name, [requires], [configFn])

// A function that performs no operations.
// This function can be useful when writing code in the functional style.
angular.noop()

// Use this function to reload the current application with debug information turned on.
// This takes precedence over a call to $compileProvider.debugInfoEnabled(false).
angular.reloadWithDebugInfo()

// Serializes input into a JSON-formatted string.
// Properties with leading $$ characters will be stripped since AngularJS uses this notation internally.
angular.toJson(obj, pretty)
