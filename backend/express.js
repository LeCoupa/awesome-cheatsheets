/* *******************************************************************************************
 * API
 * http://expressjs.com/en/api.html
 * ******************************************************************************************* */
`npm i express --save` or`yarn add -D express``(-D saves it as a dev dependency)`
`yarn add -D @types/express``(Installing for TS)`

const express = require("express"); // Importing the express library.
const app = express(); // Intializing the imported express application

/* *******************************************************************************************
 * GLOBAL OBJECTS
 * http://expressjs.com/en/api.html#express.json
 * ******************************************************************************************* */

```Methods```;

`express.json([options]);`

options: `
inflate                   // to manage the deflated bodies like enabling and disabling

limit                     // Controls the maximum request body size.

reviver                   // It is passed directly to JSON.parse as an second argument

type                      // This is used to determine the type of middleware will parse

verify                    // It is an undefined function which used to verify the middleware parsing.

`;

`express.raw([options]);`

options: `
inflate                   // to manage the deflated bodies like enabling and disabling

limit                     // Controls the maximum request body size.

type                      // This is used to determine the type of middleware will parse

verify                    // It is an undefined function which used to verify the middleware parsing.
`;

`express.Router([options]);`

options: `
caseSensitive             //Enables case sensitivity

mergeParams               //if param names of child and parent are conflicted then the child takes the precedence

strict                    // Enables Strict routing
`;

`express.static(root, [options]);`

options: `
dotfiles                 // determines how dotfiles are used

etag                     // Operates etag generation

extensions               // Operates file extension fallback

fallthrough              //	Enable or disable the immutable directive in the Cache-Control response header

index                    // sends the specified directory index file

LastModified             // sets the Last-Modified header to the last modified date

setHeaders               // Function for setting HTTP headers to serve with the file
`;

`express.text([options]);`

options: `
defaultCharset          // Sets the default charset for the text context.

inflate                 // to manage the deflated bodies like enabling and disabling

limit                   // Controls the maximum request body size.

type                    // This is used to determine the type of middleware will parse

verify                  // It is an undefined function which used to verify the middleware parsing.
`;

`express.urlencoded([options]);`

options: `
extended                // it allows to choose between parsing the URL-encoded data or the qs library

parameterLimit          // It controls the no of params.

inflate                 // to manage the deflated bodies like enabling and disabling

limit                   // Controls the maximum request body size.

type                    // This is used to determine the type of middleware will parse

verify                  // It is an undefined function which used to verify the middleware parsing.
`;

```Application`````;
Properties```app.local`;

`app.locals.title = "My Cheatsheet";

console.dir(app.locals.title)`;                     `// Creating objects with local variables`

app.mountpath`

``app.mountpath``const admin = express()
admin.get('/', function(req,res){
    console.log(admin.mountpath)
    res.send('Admin Homepage')
})                            

app.use('<admin dir>', admin)`;                    `// Mounting a sub - app`

``Event``

`admin.on('mount', (parent){
    console.log('Admin Mounted')
})`                                                `// Mounting on a parent app`

``Methods``
`app.get('/', function(req, res){
    res.send('GET request to message')
})`                                               `// get requests to the specified path`

`app.post('/', function(req,res){
    res.send('POST request to a webpage')
})`                                               `// post request to the specified path`

`app.put('/', function(req,res){
    res.send('PUT request to a webpage')
})`                                               `// post request to the specified path`

`app.delete('/', function(req,res){
    res.send('DELETE request to a webpage')
})`                                               `// delete request to the specified path`

`app.all('/', function(req,res,next){
    console.log('Accessing the secret section....')
    next()
})`                                               `// Routing all types of HTTP request`

`app.param('user', function(req,res,next){
    User.find(id, function(err, user){
        if(err){
            next(err)
        } else if (user){
            req.user = user
            next()
        } else {
            next(new Error('Failed to load user'))
        }
    })
})`                                               `// Adding callback trigger to route parameters`

`app.use(function(req,res,next){
    res.send('Hey There!')
})`                                               `// To Invoke the middleware layer that you want to add`

```Request```
``Methods``

`req.get('content-type')`                         `// Returns the specified HTTP req header`

`req.accepts('html')`                             `// Checks if the specified content types are available or not`

`req.is('json')`                                  `// Requests the matching content-type`
    
`var range = req.range(1000)
if (range.type === 'bytes'){
    range.forEach(function(r){
        // Your code
    })
}`                                                `// Range header parser`
    
``Properties``

`req.param('name')`                               `// Requests the param name when present`
    
`app.post('/', function (req, res, next) {
    console.log(req.body)
    res.json(req.body)
})`                                                `// Data submitted in the request body`

`console.dir(req.cookies.name)`                    `// Contains cookies sent by the request`

`console.dir(req.query.q)`                         `// Query string parameter in the route`

`console.log(req.route)
res.send('GET')`                                   `// Outputs all the layer, methods, path`

`console.dir(req.signedCookies.user)`              `// Logs all the signed cookies sent by the request`


```Response```
``Methods``
        
`res.redirect('https://google.com')`               `// Redirects to the intended page`

`res.send({message: 'Awesome Stuffs'})`            `// Response to the webpage` 
        
`res.json({alert: 'awesomecheatsheets'})`          `// Response in JSON type`

`const file = req.params.name;
res.sendFile(file, options, function(err){
    if(err){
        next(err)
    }else{
        console.log('Sent:', file)
    }
})`                                                `// Sends file to the intended path`

`res.render('index')`                              `// Rendering the intended file`

```BodyParser```
    
`const BodyParser = require('body-parser')
app.use(BodyParser.json())
app.use(BodyParser.urlencoded({
    extended: true
}))`                                               `// Parses incoming request bodies`