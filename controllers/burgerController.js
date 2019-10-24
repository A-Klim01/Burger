var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burger_data: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
//Post Method creates burgers
router.post("/burgers/create", function(req, res) {
  burger.insertOne(
    req.body.burger_name, function(result) {
    // Send back the ID of the new quote
   res.redirect("/")
  });
});

router.put("/burgers/:id", function(req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.updateOne(req.params.id, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});



// Export routes for server.js to use.
module.exports = router;
