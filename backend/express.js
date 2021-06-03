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

Methods;

express.json([options]);

options: `
inflate // to manage the deflated bodies like enabling and disabling

limit  // Controls the maximum request body size.

reviver // It is passed directly to JSON.parse as an second argument

type    // This is used to determine the type of middleware will parse

verify  // It is an undefined function which used to verify the middleware parsing.

`;

express.raw([options]);

options: `
inflate // to manage the deflated bodies like enabling and disabling

limit  // Controls the maximum request body size.

type    // This is used to determine the type of middleware will parse

verify  // It is an undefined function which used to verify the middleware parsing.
`;

express.Router([options]);

options: `
caseSensitive             //Enables case sensitivity

mergeParams               //if param names of child and parent are conflicted then the child takes the precedence

strict                    // Enables Strict routing
`;
