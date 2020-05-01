// jshint esversion: 6

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {

  var a = Number(req.body.num1);
  var b = Number(req.body.num2);
  var ans = a + b;
  res.send("Answer is " + ans);
});

app.get("/bmicalculator", function(req, res) {

  res.sendFile(__dirname + "/bmi.html");

});

app.post("/bmicalculator", function(req, res) {

  var a = parseFloat(req.body.height);
  var b = parseFloat(req.body.weight);

  var ans = b/(a*a);

  res.send("BMI is " + ans);

});

app.listen(3000, function() {
  console.log("Servers is running on port 3000");
});
