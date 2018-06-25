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

// An object that contains information about the current AngularJS version.
// This object has the following properties: full, major, minor, dot, codeName
angular.version


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


/* *******************************************************************************************
 * NG MODULE > DIRECTIVES
 * ******************************************************************************************* */


// Use this directive to auto-bootstrap an AngularJS application.
// Only one AngularJS application can be auto-bootstrapped per HTML document.
// You can specify an AngularJS module to be used as the root module for the application.
'ng-app'

// The ngBind attribute tells AngularJS to replace the text content of the specified HTML element with
// the value of a given expression, and to update the text content when the value of that expression changes.
'ng-bind'

// Evaluates the expression and inserts the resulting HTML into the element in a secure way.
'ng-bind-html'

// The ngBindTemplate directive specifies that the element text content should be replaced with
// the interpolation of the template in the ngBindTemplate attribute.
'ng-bind-template'

// Specify custom behavior on blur event.
'ng-blur'

// Evaluate the given expression when the user changes the input.
'ng-change'

// Sets the checked attribute on the element, if the expression inside ngChecked is truthy.
'ng-checked'

// The ngClass directive allows you to dynamically set CSS classes on an HTML element by databinding
// an expression that represents all classes to be added.
'ng-class'

// The ngClassOdd and ngClassEven directives work exactly as ngClass, except they work in
// conjunction with ngRepeat and take effect only on odd (even) rows.
'ng-class-even'

// The ngClassOdd and ngClassEven directives work exactly as ngClass, except they work in
// conjunction with ngRepeat and take effect only on odd (even) rows.
'ng-class-odd'

// The ngClick directive allows you to specify custom behavior when an element is clicked.
'ng-click'

// The ngCloak directive is used to prevent the AngularJS html template from being briefly displayed
// by the browser in its raw (uncompiled) form while your application is loading.
'ng-cloak'

// The ngController directive attaches a controller class to the view.
'ng-controller'

// Specify custom behavior on copy event.
'ng-copy'

// Specify custom behavior on cut event.
'ng-cut'

// Allows you to specify custom behavior on a dblclick event.
'ng-dblclick'

// This directive sets the disabled attribute on the element (typically a form control, e.g. input, button, select etc.)
// if the expression inside ngDisabled evaluates to truthy.
'ng-disabled'

// Specify custom behavior on focus event.
'ng-focus'

// Nestable alias of form directive. HTML does not allow nesting of form elements.
// It is useful to nest forms, for example if the validity of a sub-group of controls needs to be determined.
'ng-form'

// Shows or hides the given HTML element based on the expression provided to the ngHide attribute.
'ng-hide'

// Executes the expression and replaces with the right href link
'ng-href'

// Removes or recreates a portion of the DOM tree based on an {expression}.
'ng-if'

// Fetches, compiles and includes an external HTML fragment.
'ng-include'

// Allows you to evaluate an expression in the current scope.
'ng-init'

// Force the angular.element library.
// This should be used to force either jqLite by leaving ng-jq blank or setting the name of the jquery variable under window (eg. jQuery).
'ng-jq'

// Specify custom behavior on keydown event.
'ng-keydown'

// Specify custom behavior on keypress event.
'ng-keypress'

// Specify custom behavior on keyup event.
'ng-keyup'

// Text input that converts between a delimited string and an array of strings.
'ng-list'

// Adds the maxlength validator to ngModel.
'ng-maxlength'

// Adds the minlength validator to ngModel.
'ng-minlength'

// The ngModel directive binds an input,select, textarea (or custom form control) to a property on the scope using NgModelController,
// which is created and exposed by this directive.
'ng-model'

// Modify the behaviour of ngModel directives within your application.
// You can specify an ngModelOptions directive on any element.
// All ngModel directives will use the options of their nearest ngModelOptions ancestor.
'ng-model-options'

// Allows you to specify custom behavior on mousedown event.
'ng-mousedown'

// Specify custom behavior on mouseenter event.
'ng-mouseenter'

// Specify custom behavior on mouseleave event.
'ng-mouseleave'

// Specify custom behavior on mousemove event.
'ng-mousemove'

// Specify custom behavior on mouseover event.
'ng-mouseover'

// Specify custom behavior on mouseup event.
'ng-mouseup'

// Tells AngularJS not to compile or bind the contents of the current DOM element,
// including directives on the element itself that have a lower priority than ngNonBindable.
'ng-non-bindable'

// Sets the open attribute on the element, if the expression inside ngOpen is truthy.
'ng-open'

// The ngOptions attribute can be used to dynamically generate a list of <option> elements for the <select>
// element using the array or object obtained by evaluating the ngOptions comprehension expression.
'ng-options'

// Specify custom behavior on paste event.
'ng-paste'

// ngPattern adds the pattern validator to ngModel.
// It is most often used for text-based input controls, but can also be applied to custom text-based controls.
'ng-pattern'

// Displays messages according to en-US localization rules.
'ng-pluralize'

// Sets the readonly attribute on the element, if the expression inside ngReadonly is truthy
'ng-readonly'

// Instantiates a template once per item from a collection
// Special properties are exposed on the local scope of each template instance, including:
// $index, $first, $middle, $last, $even, $odd
'ng-repeat'

// ngRequired adds the required validator to ngModel.
// It is most often used for input and select controls, but can also be applied to custom controls.
'ng-required'

// Sets the selected attribute on the element, if the expression inside ngSelected is truthy.
'ng-selected'

// Shows or hides the given HTML element based on the expression provided to the ngShow attribute.
'ng-show'

// Using AngularJS markup like {{hash}} in a src attribute doesn't work right:
// The browser will fetch from the URL with the literal text {{hash}} until AngularJS
// replaces the expression inside {{hash}}. The ngSrc directive solves this problem.
'ng-src'

// Using AngularJS markup like {{hash}} in a srcset attribute doesn't work right:
// The browser will fetch from the URL with the literal text {{hash}} until AngularJS
// replaces the expression inside {{hash}}. The ngSrcset directive solves this problem.
'ng-srcset'

// Allows you to set CSS style on an HTML element conditionally.
'ng-style'

// Enables binding AngularJS expressions to onsubmit events.
'ng-submit'

// Used to conditionally swap DOM structure on your template based on a scope expression.
'ng-switch'

// Marks the insertion point for the transcluded DOM of the nearest parent directive that uses transclusion.
'ng-transclude'

// Binds the given expression to the value of the element.
// It is mainly used on input[radio] and option elements, so that when the element is selected,
// the ngModel of that element (or its select parent element) is set to the bound value.
'ng-value'


/* *******************************************************************************************
 * NG MODULE > TYPE
 * ******************************************************************************************* */


// A cache object used to store and retrieve data, primarily used by $templateRequest
// and the script directive to cache templates and other data.
$cacheFactory.Cache

// Don't forget the cache

// A shared object between directive compile / linking functions which contains normalized
// DOM element attributes. The values reflect current binding state {{ }}.
$compile.directive.Attributes

// Converts an attribute name (e.g. dash/colon/underscore-delimited string, optionally prefixed with x- or data-)
// to its normalized, camelCase form.
$compile.directive.Attributes.$normalize(name)

// Adds the CSS class value specified by the classVal parameter to the element.
// If animations are enabled then an animation will be triggered for the class addition.
$compile.directive.Attributes.$addClass(classVal)

// Removes the CSS class value specified by the classVal parameter from the element.
// If animations are enabled then an animation will be triggered for the class removal.
$compile.directive.Attributes.$removeClass(classVal)

// Adds and removes the appropriate CSS class values to the element based on the difference
// between the new and old CSS class values (specified as newClasses and oldClasses).
$compile.directive.Attributes.$updateClass(newClasses, oldClasses)

// Observes an interpolated attribute.
$compile.directive.Attributes.$observe(key, fn)

// Set DOM element attribute value.
$compile.directive.Attributes.$set(name, value)

// A map of DOM element attribute names to the normalized name.
// This is needed to do reverse lookup from normalized name back to actual name.
$compile.directive.Attributes.$attr

// A root scope can be retrieved using the $rootScope key from the $injector.
$rootScope.Scope([providers], [instanceCache])


/* *******************************************************************************************
 * NG MODULE > FILTERS
 * ******************************************************************************************* */


// Formats a number as a currency (ie $1,234.56).
// When no currency symbol is provided, default symbol for current locale is used.
{{ currency_expression | currency : symbol : fractionSize}}
$filter('currency')(amount, symbol, fractionSize)

// Formats date to a string based on the requested format.
{{ date_expression | date : format : timezone}}
$filter('date')(date, format, timezone)

// Selects a subset of items from array and returns it as a new array.
{{ filter_expression | filter : expression : comparator : anyPropertyKey}}
$filter('filter')(array, expression, comparator, anyPropertyKey)

// Allows you to convert a JavaScript object into JSON string.
// This filter is mostly useful for debugging.
// When using the double curly notation the binding is automatically converted to JSON.
{{ json_expression | json : spacing}}
$filter('json')(object, spacing)

// Creates a new array or string containing only a specified number of elements.
// The elements are taken from either the beginning or the end of the source array,
// string or number, as specified by the value and sign (positive or negative) of limit.
// Other array-like objects are also supported (e.g. array subclasses, NodeLists, jqLite/jQuery collections etc).
// If a number is used as input, it is converted to a string.
{{ limitTo_expression | limitTo : limit : begin}}
$filter('limitTo')(input, limit, begin)

// Converts string to lowercase.
{{ lowercase_expression | lowercase}}
$filter('lowercase')()

// Formats a number as text.
// If the input is null or undefined, it will just be returned.
// If the input is infinite (Infinity or -Infinity), the Infinity symbol '∞' or '-∞' is returned, respectively.
// If the input is not a number an empty string is returned.
{{ number_expression | number : fractionSize}}
$filter('number')(number, fractionSize)

// Returns an array containing the items from the specified collection,
// ordered by a comparator function based on the values computed using the expression predicate.
{{ orderBy_expression | orderBy : expression : reverse : comparator}}
$filter('orderBy')(collection, expression, reverse, comparator)

// Converts string to uppercase.
{{ uppercase_expression | uppercase}}
$filter('uppercase')()
