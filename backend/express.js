/* *******************************************************************************************
 * API
 * http://expressjs.com/en/api.html
 * ******************************************************************************************* */

const express = require("express"); // Importing the express library.
const app = express(); // Intializing the imported express application

/* *******************************************************************************************
 * GLOBAL OBJECTS
 * http://expressjs.com/en/api.html#express.json
 * ******************************************************************************************* */

```Methods```;

express.json([options]);

options: `
inflate                   // to manage the deflated bodies like enabling and disabling

limit                     // Controls the maximum request body size.

reviver                   // It is passed directly to JSON.parse as an second argument

type                      // This is used to determine the type of middleware will parse

verify                    // It is an undefined function which used to verify the middleware parsing.

`;

express.raw([options]);

options: `
inflate                   // to manage the deflated bodies like enabling and disabling

limit                     // Controls the maximum request body size.

type                      // This is used to determine the type of middleware will parse

verify                    // It is an undefined function which used to verify the middleware parsing.
`;

express.Router([options]);

options: `
caseSensitive             //Enables case sensitivity

mergeParams               //if param names of child and parent are conflicted then the child takes the precedence

strict                    // Enables Strict routing
`;

express.static(root, [options]);

options: `
dotfiles                 // determines how dotfiles are used

etag                     // Operates etag generation

extensions               // Operates file extension fallback

fallthrough              //	Enable or disable the immutable directive in the Cache-Control response header

index                    // sends the specified directory index file

LastModified             // sets the Last-Modified header to the last modified date

setHeaders               // Function for setting HTTP headers to serve with the file
`;

express.text([options]);

options: `
defaultCharset          // Sets the default charset for the text context.

inflate                 // to manage the deflated bodies like enabling and disabling

limit                   // Controls the maximum request body size.

type                    // This is used to determine the type of middleware will parse

verify                  // It is an undefined function which used to verify the middleware parsing.
`;

express.urlencoded([options]);

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

console.dir(app.locals.title)`;                     // Creating objects with local variables

app.mountpath`

``app.mountpath``const admin = express()
admin.get('/', function(req,res){
    console.log(admin.mountpath)
    res.send('Admin Homepage')
})                            

app.use('<admin dir>', admin)`;                    // Mounting a sub - app

``Event``

`admin.on('mount', (parent){
    console.log('Admin Mounted')
})`                                                // Mounting on a parent app

``Methods``
`app.get('/', function(req, res){
    res.send('GET request to message')
})`                                               // get requests to the specified path

`app.post('/', function(req,res){
    res.send('POST request to a webpage')
})`

`app.put('/', function(req,res){
    res.send('PUT request to a webpage')
})`

`app.delete('/', function(req,res){
    res.send('DELETE request to a webpage')
})`

`app.all('/', function(req,res,next){
    console.log('Accessing the secret section....')
    next()
})`

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
})`

`app.use(function(req,res,next){
    res.send('Hey There!')
})`

```Request```
``Methods``

`req.param('name')`

``app.post('/', function (req, res, next) {
    console.log(req.body)
    res.json(req.body)
})``

`console.dir(req.cookies.name)`

`console.dir(req.query.q)`

`console.log(req.route)
res.send('GET')`

`console.dir(req.signedCookies.user)`

