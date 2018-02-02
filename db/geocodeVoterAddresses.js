var geocoder = require("geocoder");
 

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "voteKnockerDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  geocodeAddresses();
});

//adds a column to the AlphaVoters table to contain geocoordinates
function createLongLat() {
  console.log("Inserting a new column to AlphaVoters...\n");
  var query = connection.query(
    "ALTER TABLE AlphaVoters ADD longLat VARCHAR",
    function(err, res) {
      console.log(" Column insterted!\n");
      // Call update Zips AFTER the ADD completes
      updateZips();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};

//concatenates existing zips with a 0 because NJ zips all start with 0s but the originating CSV files removed them. This makes it so the geocoder recognizes the zips when geocoding.
function updateZips() {
  console.log("Updating all Zipcodes...\n");
  var query = connection.query(
    "SELECT CONCAT(0, zip) AS zip FROM AlphaVoters",
    function(err, res) {
    	if (err){
    		console.log(err);
    	}
      console.log("Zipcodes are updated!\n");
      
      //Geocode the full addresses AFTER the Zips are updated
      // geocodeAddresses();
    }
  );

  // logs the actual query being run
  console.log(query.sql);
};


//Gets and concatenates address fields from AlphaVoters table and passes them through Geocoder to get geocoordinates
function geocodeAddresses() {
	//grab voters from AlphaVoters
	var query = connection.query(
		"SELECT voterId, streetNum, zip, streetName, city FROM AlphaVoters WHERE longitude IS NULL ORDER BY county LIMIT 100",  
		function(err, res){
			if (err)
			{
				console.log(err);
			}

			// var promisesArr = [];

			//go through each voter record and grab address fields
			res.forEach(function(voter, index, result){
				var address;
				var number = voter.streetNum;
				var zip = voter.zip;
				var street = voter.streetName;
				var city = voter.city;
				var state = "NJ";

				//concatenate address fields
				address = number +" "+ street +" "+ city +" "+ state +" "+ zip;
				console.log(address);

				// geocodeAsync(address)
				// 	.then(function (data) {
				// 		console.log(data);
				// 	})
				// 	.catch(function(err){
				// 		console.log(err);
				// 	});

				// promisesArr.push(function geocodeAsync(address){
				// 	return new Promise(function(resolve,reject){
				// 		geocoder.geocode(address,function(err,data){
				// 			if(err != null) return reject(err);
				// 			resolve(data);
				// 		});
				// 	});
				// }(address));



				//call geocoder to grab geocoordinates, call addLongLat to set longLat column values
				geocoder.geocode(address, function(err, data){
					// console.log('inside of geocode: ', address);
					if (err) {
						console.log(err);
						return;
					}
					else if (data.status != "OK") {
						return;
					}
					// addLongLat(data);
					else {
						var longitude = data.results[0].geometry.location.lng;
						var latitude = data.results[0].geometry.location.lat;
						var voterId = voter.voterId;
						addLongLat(longitude, latitude, voterId);
						console.log(`Voter ID: ${voterId}\nLongitude: ${longitude}\nLatitude: ${latitude}\n`);
					}
				});
				
			});

			// console.log(promisesArr);
			// Promise.all(promisesArr)
			// 	.then(function (data) {
			// 		console.log(data);
			// 	})
			// 	.catch(function(err){
			// 		console.log(err);
			// 	});
			
	});

};


//Adds geocoordinates to longLat column in AlphaVoters
function addLongLat(longitude, latitude, voterId){
	var query = connection.query(
		"UPDATE AlphaVoters SET longitude = ?, lat = ? WHERE voterId = ?", [longitude, latitude, voterId], 
		function(err, res){
			if (err){
				console.log(err);
			}
		});
};