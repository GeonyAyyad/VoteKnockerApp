// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.
 

  // index route loads view.html
  app.get("/", function(req, res) {
    res.render("index");
  });

    // index route loads view.html
    app.get("/status", function(req, res) {
      res.render("status");
    });

    app.get("/userStats", function(req, res) {
      // res.sendFile(path.join(__dirname, "../userStats.html"));
      res.render("userStats");
    });

    app.get("/interactions", function(req, res) {
     // res.sendFile(path.join(__dirname, "../interactions.html"));
     res.render("interactions");
   });
};
