var express = require("express");
var exphbs = require("express-handlebars");
// var db = require("./models")

var PORT = process.env.PORT || 8001;

var app = express();

// configure Express Handlebars
app.engine("handlebars", exphbs({ deafaultLayout: "main" }));
app.set("view engine", "handlebars");


app.listen(PORT, () => {
    console.log("App now listening at http://localhost:" + PORT);
});