var express = require("express");
var exphbs = require("express-handlebars");
var db = require("./models")

var PORT = process.env.PORT || 8001;

var app = express();