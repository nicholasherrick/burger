const express = require('express');
const path = require('path');
const exphbs = require("express-handlebars");
const routes = require("./controllers/burgers_controller.js");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, () =>{
    console.log('Listening on localhost:' + PORT);
});