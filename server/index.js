const express = require("express");
const app = express();
const mysql = require("mysql");

app.use(express.static("../client/dist"));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "yelp_db"
});

connection.connect(function(err) {
  if (err) {
    console.log("ERROR");
  } else {
    console.log("MYSQL CONNECTED");
  }
});

app.get("/tips", function(req, res) {
  let q = 'SELECT * FROM business WHERE city="Las Vegas" LIMIT 1';
  connection.query(q, function(err, rows, fields) {
    if (err) throw err;
    console.log(rows, "hi im rows");
    res.send(rows);
  });
});

app.listen(3010, function() {
  console.log("Listening on 3002!");
});
