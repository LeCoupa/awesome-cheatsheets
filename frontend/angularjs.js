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


ng-scope                  // AngularJS applies this class to any element for which a new scope is defined
ng-isolate-scope          // AngularJS applies this class to any element for which a new isolate scope is defined.
ng-binding                // AngularJS applies this class to any element that is attached to a data binding, via ng-bind or {{}} curly braces, for example.
ng-invalid, ng-valid      // AngularJS applies this class to a form control widget element if that element's input does not pass validation.
ng-pristine, ng-dirty     // AngularJS ngModel directive applies ng-pristine class to a new form control widget which did not have user interaction. Once the user interacts with the form control, the class is changed to ng-dirty.
ng-touched, ng-untouched  // AngularJS ngModel directive applies ng-untouched class to a new form control widget which has not been blurred. Once the user blurs the form control, the class is changed to ng-touched.
