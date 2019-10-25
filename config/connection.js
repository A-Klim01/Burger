// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if(process.env.JAWS_DB){
  connection = mysql.createConnection(process.env.JAWS_DB);
}else {
  connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "burger2"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
