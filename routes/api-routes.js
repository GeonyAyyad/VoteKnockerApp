var connection = require("../config/connection");

module.exports = function(app){

    app.post("/api/filter", function(req,res){
        console.log(req.body.county);
        connection.query("SELECT * FROM markers", function(err,data){
            console.log(data);
            res.json(data);

        } );       

    });





}