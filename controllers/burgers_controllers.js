const db = require("../models");

module.exports = function (app) {

    app.get('/', function (req, res) {
        db.Burger.findAll({}).then(function (dbResponse) {
            res.render("index", {
                burgers: dbResponse
            });
        });
    });

    app.post("/api/burgers", function (req, res) {
        db.Burger.create({
            burger_name: req.body.burger_name
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.put("/api/burgers/:id", function (req, res) {
        db.Burger.update({
            devoured: 1
        }, {
            where: {
                id: req.body.id
            }
        }).then(function (dbPost) {
            res.json(dbPost);
        });
    });

    app.delete("/api/burgers/:id", function (req, res) {
        let burgerId = req.params.id;
        db.Burger.destroy({
            where: {
                id: burgerId
            }
        }).then(function (dbPost) {
            console.log('dbPost', dbPost);

            res.json(dbPost);
        })
    })

};
