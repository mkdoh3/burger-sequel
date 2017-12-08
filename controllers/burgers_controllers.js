const db = require("../models");

module.exports = function (app) {

    app.get('/', function (request, response) {
        db.Burger.findAll({}).then(function (dbResponse) {
            response.render("index", {
                burgers: dbResponse
            });
        });
    });

    app.post("/api/burgers", function (req, res) {
        console.log(req.body);
        db.Burger.create({
            burger_name: req.body.burger_name
        })
    });

    app.put("/api/burgers/:id", function (req, res) {
        console.log(req.body);
        db.Burger.update({
            devoured: 1
        }, {
            where: {
                id: req.body.id
            }
        })
    });

    //suqelize this!
    //    app.delete("/api/burgers/:id", function (req, res) {
    //        let condition = "id = " + req.params.id;
    //        burger.deleteOne(condition, function (result) {
    //            if (result.affectedRows === 0) {
    //                return res.status(404).end();
    //            } else {
    //                res.status(200).end();
    //            }
    //        })
    //
    //    })
};
