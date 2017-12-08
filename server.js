// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const exphbs = require('express-handlebars');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// override delete post
app.use(methodOverride("_method"));

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

require("./controllers/burgers_controllers.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Listening on PORT " + PORT);
    });
});
