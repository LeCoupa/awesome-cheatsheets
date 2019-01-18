/* *******************************************************************************************
 * ANGULAR (2+) CHEATSHEET
 * BASED ON https://angular.io/guide/cheatsheet
 * DOCUMENTATION: https://angular.io/docs
 * STYLE GUIDE: https://angular.io/guide/styleguide
 * ******************************************************************************************* */


```
npm install --save @angular/cli       // install command line interface (CLI) for Angular apps
ng serve                              // serve the app
ng build                              // build the release
```


/* *******************************************************************************************
 * BOOSTRAPPING
 * https://angular.io/guide/bootstrapping
 * ******************************************************************************************* */


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// Bootstraps the app, using the root component from the specified NgModule.
platformBrowserDynamic().bootstrapModule(AppModule); 


/* *******************************************************************************************
 * NG MODULES
 * https://angular.io/guide/ngmodules
 * ******************************************************************************************* */


import { NgModule } from '@angular/core';

@NgModule({
  declarations: ...,
  imports: ...,
  exports: ...,
  providers: ...,
  bootstrap: ...
})

// Defines a module that contains components, directives, pipes, and providers.
class MyModule {} 

// List of components, directives, and pipes that belong to this module.
declarations: [MyRedComponent, MyBlueComponent, MyDatePipe] 

// List of modules to import into this module. Everything from the imported modules is available 
// to declarations of this module.
imports: [BrowserModule, SomeOtherModule] 

// List of components, directives, and pipes visible to modules that import this module.
exports: [MyRedComponent, MyDatePipe] 

// List of dependency injection providers visible both to the contents of this module and to 
// importers of this module.
providers: [MyService, { provide: ... }]  

// List of components to bootstrap when this module is bootstrapped.
bootstrap: [MyAppComponent] 


/* *******************************************************************************************
 * TEMPLATE SYNTAX
 * https://angular.io/guide/template-syntax
 * ******************************************************************************************* */


// Binds property value to the result of expression firstName.
// <input [value]="firstName"> 

// Binds attribute role to the result of expression myAriaRole.
// <div [attr.role]="myAriaRole">  

// Binds the presence of the CSS class extra-sparkle on the element to the truthiness of the 
// expression isDelightful.
// <div [class.extra-sparkle]="isDelightful">  

// Binds style property width to the result of expression mySize in pixels. Units are optional.
// <div [style.width.px]="mySize"> 

// Calls method readRainbow when a click event is triggered on this button element (or its
// children) and passes in the event object.
// <button (click)="readRainbow($event)">  

// Binds a property to an interpolated string, for example, "Hello Seabiscuit". 
// Equivalent to: <div [title]="'Hello ' + ponyName">
// <div title="Hello {{ponyName}}">  

// Binds text content to an interpolated string, for example, "Hello Seabiscuit".
// <p>Hello {{ponyName}}</p> 

// Sets up two-way data binding. Equivalent to: <my-cmp [title]="name" (titleChange)="name=$event">
// <my-cmp [(title)]="name"> 

// Creates a local variable movieplayer that provides access to the video element instance in 
// data-binding and event-binding expressions in the current template.
// <video #movieplayer ...>
// <button (click)="movieplayer.play()">
// </video>  

// The * symbol turns the current element into an embedded template. 
// Equivalent to: <ng-template [myUnless]="myExpression"><p>...</p></ng-template>
// <p *myUnless="myExpression">...</p> 

// Transforms the current value of expression cardNumber via the pipe called myCardNumberFormatter.
// <p>Card No.: {{cardNumber | myCardNumberFormatter}}</p> 

// The safe navigation operator (?) means that the employer field is optional and if undefined, 
// the rest of the expression should be ignored.
// <p>Employer: {{employer?.companyName}}</p>  

// An SVG snippet template needs an svg: prefix on its root element to disambiguate the SVG 
// element from an HTML component.
// <svg:rect x="0" y="0" width="100" height="100"/>  

// An <svg> root element is detected as an SVG element automatically, without the prefix.
// <svg>
// <rect x="0" y="0" width="100" height="100"/>
// </svg>  


/* *******************************************************************************************
 * BUILT-IN DIRECTIVES
 * https://angular.io/guide/attribute-directives
 * ******************************************************************************************* */


import { CommonModule } from '@angular/common';

// Removes or recreates a portion of the DOM tree based on the showSection expression.
// <section *ngIf="showSection"> 

// Turns the li element and its contents into a template, and uses that to instantiate a view for
// each item in list.
// <li *ngFor="let item of list">  

// Conditionally swaps the contents of the div by selecting one of the embedded templates based on 
// the current value of conditionExpression.
// <div [ngSwitch]="conditionExpression">
// <ng-template [ngSwitchCase]="case1Exp">...</ng-template>
// <ng-template ngSwitchCase="case2LiteralString">...</ng-template>
// <ng-template ngSwitchDefault>...</ng-template>
// </div>  

// Binds the presence of CSS classes on the element to the truthiness of the associated map 
// values. The right-hand expression should return {class-name: true/false} map.
// <div [ngClass]="{'active': isActive, 'disabled': isDisabled}">  

// Allows you to assign styles to an HTML element using CSS. You can use CSS directly, as in the
// first example, or you can call a method from the component.
// <div [ngStyle]="{'property': 'value'}">
// <div [ngStyle]="dynamicStyles()"> 


/* *******************************************************************************************
 * FORMS
 * https://angular.io/guide/forms
 * ******************************************************************************************* */


import { FormsModule } from '@angular/forms';

// Provides two-way data-binding, parsing, and validation for form controls.
// <input [(ngModel)]="userName">  


/* *******************************************************************************************
 * CLASS DECORATORS
 * ******************************************************************************************* */


import { Directive, ... } from '@angular/core';

// Declares that a class is a component and provides metadata about the component.
@Component({...})
class MyComponent() {}  

// Declares that a class is a directive and provides metadata about the directive.
@Directive({...})
class MyDirective() {}  

// Declares that a class is a pipe and provides metadata about the pipe.
@Pipe({...})
class MyPipe() {} 

// Declares that a class can be injected into the constructor of another class
// by the dependency injector.
@Injectable()
class MyService() {}  


/* *******************************************************************************************
 * DIRECTIVE CONFIGURATION
 * ******************************************************************************************* */


@Directive({ property1: value1, ... })

// Specifies a CSS selector that identifies this directive within a template. Supported selectors
// include element, [attribute], .class, and :not().
selector: '.cool-button:not(a)' 

// Does not support parent-child relationship selectors.

// List of dependency injection providers for this directive and its children.
providers: [MyService, { provide: ... }]  


/* *******************************************************************************************
 * COMPONENT CONFIGURATION
 * https://angular.io/api/core/Component
 * ******************************************************************************************* */


@Component extends @Directive, so the @Directive configuration applies to components as well

// If set, the templateUrl and styleUrl are resolved relative to the component.
moduleId: module.id 

// List of dependency injection providers scoped to this component's view.
viewProviders: [MyService, { provide: ... }]  

// Inline template or external template URL of the component's view.
template: 'Hello {{name}}'
templateUrl: 'my-component.html'  

// List of inline CSS styles or external stylesheet URLs for styling the component’s view.
styles: ['.primary {color: red}']
styleUrls: ['my-component.css'] 


/* *******************************************************************************************
 * CLASS FIELD DECORATORS FOR DIRECTIVES AND COMPONENTS
 * ******************************************************************************************* */


import { Input, ... } from '@angular/core';

// Declares an input property that you can update via property binding 
// (example: <my-cmp [myProperty]="someExpression">).
@Input() myProperty;  

// Declares an output property that fires events that you can subscribe to with an event binding 
// (example: <my-cmp (myEvent)="doSomething()">).
@Output() myEvent = new EventEmitter(); 

// Binds a host element property (here, the CSS class valid) to a directive/component property 
// (isValid).
@HostBinding('class.valid') isValid;  

// Subscribes to a host element event (click) with a directive/component method (onClick), 
// optionally passing an argument ($event).
@HostListener('click', ['$event']) onClick(e) {...} 

// Binds the first result of the component content query (myPredicate) to a property 
// (myChildComponent) of the class.
@ContentChild(myPredicate) myChildComponent;  

// Binds the results of the component content query (myPredicate) to a property 
// (myChildComponents) of the class.
@ContentChildren(myPredicate) myChildComponents;  

// Binds the first result of the component view query (myPredicate) to a property 
// (myChildComponent) of the class. Not available for directives.
@ViewChild(myPredicate) myChildComponent; 

// Binds the results of the component view query (myPredicate) to a property (myChildComponents)
// of the class. Not available for directives.
@ViewChildren(myPredicate) myChildComponents; 


/* *******************************************************************************************
 * DIRECTIVE AND COMPONENT CHANGE DETECTION AND LIFECYCLE HOOKS
 * ******************************************************************************************* */

// (implemented as class methods)

// Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious 
// work here.
constructor(myService: MyService, ...) { ... }  

// Called after every change to input properties and before processing content or child views.
ngOnChanges(changeRecord) { ... } 

// Called after the constructor, initializing input properties, and the first call to ngOnChanges.
ngOnInit() { ... }  

// Called every time that the input properties of a component or a directive are checked. Use it
// to extend change detection by performing a custom check.
ngDoCheck() { ... } 

// Called after ngOnInit when the component's or directive's content has been initialized.
ngAfterContentInit() { ... }  

// Called after every check of the component's or directive's content.
ngAfterContentChecked() { ... } 

// Called after ngAfterContentInit when the component's views and child views / the view that a 
// directive is in has been initialized.
ngAfterViewInit() { ... } 

// Called after every check of the component's views and child views / the view that a directive 
// is in.
ngAfterViewChecked() { ... }  

// Called once, before the instance is destroyed.
ngOnDestroy() { ... } 


/* *******************************************************************************************
 * DEPENDENCY INJECTION CONFIGURATION
 * https://angular.io/guide/dependency-injection
 * ******************************************************************************************* */


// Sets or overrides the provider for MyService to the MyMockService class.
{ provide: MyService, useClass: MyMockService } 

// Sets or overrides the provider for MyService to the myFactory factory function.
{ provide: MyService, useFactory: myFactory } 

// Sets or overrides the provider for MyValue to the value 41.
{ provide: MyValue, useValue: 41 }  


/* *******************************************************************************************
 * ROUTING AND NAVIGATION
 * https://angular.io/guide/router
 * ******************************************************************************************* */


import { Routes, RouterModule, ... } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'path/:routeParam', component: MyComponent },
  { path: 'staticPath', component: ... },
  { path: '**', component: ... },
  { path: 'oldPath', redirectTo: '/staticPath' },
  { path: ..., component: ..., data: { message: 'Custom' } }
]);

// Configures routes for the application. Supports static, parameterized, redirect, and wildcard 
// routes. Also supports custom route data and resolve.
const routing = RouterModule.forRoot(routes); 

// Marks the location to load the component of the active route.
// <router-outlet></router-outlet>
// <router-outlet name="aux"></router-outlet>

// Creates a link to a different view based on a route instruction consisting of a route path, 
// required and optional parameters, query parameters, and a fragment. To navigate to a root 
// route, use the / prefix; for a child route, use the ./prefix; for a sibling or parent, use the 
// ../ prefix.
// <a routerLink="/path">
// <a [routerLink]="[ '/path', routeParam ]">
// <a [routerLink]="[ '/path', { matrixParam: 'value' } ]">
// <a [routerLink]="[ '/path' ]" [queryParams]="{ page: 1 }">
// <a [routerLink]="[ '/path' ]" fragment="anchor">

// The provided classes are added to the element when the routerLink becomes the current active
// route.
// <a [routerLink]="[ '/path' ]" routerLinkActive="active">  

class CanActivateGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean { ... }
}

// An interface for defining a class that the router should call first to determine if it should 
// activate this component. Should return a boolean or an Observable/Promise that resolves to a 
// boolean.
{
  path: ...,
  canActivate: [CanActivateGuard]
}  

class CanDeactivateGuard implements CanDeactivate<T> {
  canDeactivate(
    component: T,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean { ... }
}

// An interface for defining a class that the router should call first to determine if it should 
// deactivate this component after a navigation. Should return a boolean or an Observable/Promise 
// that resolves to a boolean.
{
  path: ...,
  canDeactivate: [CanDeactivateGuard]
}

class CanActivateChildGuard implements CanActivateChild {
  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean { ... }
}

// An interface for defining a class that the router should call first to determine if it should 
// activate the child route. Should return a boolean or an Observable/Promise that resolves to a 
// boolean.
{
  path: ...,
  canActivateChild: [CanActivateGuard],
  children: ...
}

class ResolveGuard implements Resolve<T> {
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any { ... }
}

// An interface for defining a class that the router should call first to resolve route data 
// before rendering the route. Should return a value or an Observable/Promise that resolves to a 
// value.
{
  path: ...,
  resolve: [ResolveGuard]
}

class CanLoadGuard implements CanLoad {
  canLoad(
    route: Route
  ): Observable<boolean>|Promise<boolean>|boolean { ... }
}

// An interface for defining a class that the router should call first to check if the lazy loaded 
// module should be loaded. Should return a boolean or an Observable/Promise that resolves to a 
// boolean.
{
  path: ...,
  canLoad: [CanLoadGuard],
  loadChildren: ...
}
