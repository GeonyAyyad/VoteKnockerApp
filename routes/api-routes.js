var connection = require("../config/connection");
var fs = require("fs");
var path = require("path");

module.exports = function(app){

    app.post("/api/filter", function(req,res){
        console.log(req.body.county);
        connection.query("SELECT * FROM markers", function(err,data){
            console.log(data);
            res.json(data);

        });       
        
    });

    app.get("/api/states", function(req,res){
        fs.readFile("public/assets/static/states.txt", "utf8", function(error, data) {

            // If the code experiences any errors it will log the error to the console.
            if (error) {
                return console.log("Get States ", error);
            }
     
            // Then split it by commas (to make it more readable)
            var dataArr = data.split(",");
    
            res.json(dataArr);
    
            });  
    });



}