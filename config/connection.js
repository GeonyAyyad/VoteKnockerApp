// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);}
else {
    var connection = mysql.createConnection({
        port: 3306,
        host: "cdm1s48crk8itlnr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "t6oeugu1r8jfpqpz",
        password: "z940sw7d0ectjroj",
        database: "ahv1kpzupd7s0qbw"
    });
}


// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;


