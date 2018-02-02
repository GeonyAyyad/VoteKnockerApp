var connection = require("../config/connection");
var fs = require("fs");
var path = require("path");

var db = require("../models");

module.exports = function(app){

    app.post("/api/filter", function(req,res){
        console.log(req.body.county);
        connection.query("SELECT * FROM alphavoters2", function(err,data){
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

    app.get("/voterhistory/:id", function(request, response){
    	var voterId = request.params.id;
		connection.query("SELECT * FROM voterHistory WHERE voterId =?", voterId, function(err, res) {
        console.log(res);
        //for (var i = 0; i < res.length; i++) {
        //   console.log(res.firstName + " " + res.middleName + " " + res.lastName);
        //   console.log(res.streetNum + " " + res.streetName + " " + res.aptUnitNum);
        //   console.log("Voter ID: " + res.voterId);
        //   console.log("Legacy ID: " + res.legacyId);
        //   console.log("Municipality: " + res.municipality);
        //   console.log("Date of Birth: " + res.dob);
        //   console.log("Ward: " + res.ward);
        //   console.log("Party: " + res.party);
        //   console.log("District: " + res.district);
        //   console.log("Status: " + res.status);
        //   console.log("Congressional District: " + res.congDist);
        //   console.log("Legislative Distract: " + res.legDist);
        //   console.log("Freeholder: " + res.freeholder);
        //   console.log("School District: " + res.schoolDist);
        //   console.log("Regional School: " + res.regionalSchool);
          response.json(res);
        //}        
      });
    });


        // POST route for saving a new interaction
        app.post("/api/interactions", function(req, res) {
            var knocked = req.body.knock == 1 ? true : false;
            var litDropped = req.body.handOutLit == 1 ? true : false;
            var petitionSigned = req.body.signPetition == 1 ? true : false;

             // create takes an argument of an object describing the item we want to
            // insert into our table. In this case we just we pass in an object with a text
            // and complete property
            db.VoterInteractions.create({
                knocked: knocked,
                litDropped: litDropped,
                petitionSigned: petitionSigned,
                email: req.body.email,
                phone: req.body.phone
            }).then(function(dbInteraction) {
            // We have access to the new todo as an argument inside of the callback function
            res.json(dbInteraction);
            });
        });



    };  //module.exports