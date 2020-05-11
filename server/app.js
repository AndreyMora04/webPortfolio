//Importing Express to our backend.
const express = require('express');

//Importing body parser.
const bodyParser = require('body-parser');

//Generate our app.
const app = express();

//Bringing our API version.
const {
    API_Version
} = require('./config');

//Load all our routes.
//TODO We need to call our routes.

//Configuring body parser.
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Configuring HTTP header.
//TODO Configuring HTTP header.

//Basic routes
//TODO Create basic routes.

//Exporting our app.
module.exports = app;