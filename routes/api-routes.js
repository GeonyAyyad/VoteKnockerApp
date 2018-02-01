var connection = require("../config/connection");

module.exports = function(app){

    app.post("/api/filter", function(req,res){
        console.log(req.body.county);
        connection.query("SELECT * FROM markers", function(err,data){
            console.log(data);
            res.json(data);

        } );       

    });

    app.get("/voterhistory/:id", function(request, response){
    	var voterId = request.params.id;
		connection.query("SELECT * FROM voterHistory WHERE voterId =?", voterId, function(err, res) {
        console.log(res);
        //for (var i = 0; i < res.length; i++) {
          console.log(res.firstName + " " + res.middleName + " " + res.lastName);
          console.log(res.streetNum + " " + res.streetName + " " + res.aptUnitNum);
          console.log("Voter ID: " + res.voterId);
          console.log("Legacy ID: " + res.legacyId);
          console.log("Municipality: " + res.municipality);
          console.log("Date of Birth: " + res.dob);
          console.log("Ward: " + res.ward);
          console.log("Party: " + res.party);
          console.log("District: " + res.district);
          console.log("Status: " + res.status);
          console.log("Congressional District: " + res.congDist);
          console.log("Legislative Distract: " + res.legDist);
          console.log("Freeholder: " + res.freeholder);
          console.log("School District: " + res.schoolDist);
          console.log("Regional School: " + res.regionalSchool);
          response.json(res);
        //}        
      });
    });



}