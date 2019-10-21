// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.selectAll("burger", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(name, cb) {
    orm.insertOne("burger", ["burger_name", "devoured"], [name, false], function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
   var condition = "id=" +id;
    orm.updateOne("burger", {devoured: true}, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgerController.js).
module.exports = burger;
