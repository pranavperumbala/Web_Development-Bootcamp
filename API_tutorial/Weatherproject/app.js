// jshint esversion:6

const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {

  res.sendFile(__dirname + "/index.html");

});

app.post("/", function(req, res) {


  const query = req.body.cityName;
  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=cf26a48e3efafa90a3a8c967b9b09dba&units=metric";

  https.get(url, function(response) {

    response.on("data", function(data) {

      const weatherData = JSON.parse(data);
      const desc = weatherData.weather[0].description;
      const temp = weatherData.main.temp;
      const place = weatherData.name;
      const pic = weatherData.weather[0].icon;
      const icon = "https://openweathermap.org/img/wn/" + pic + "@2x.png";

      res.write("<h1>Temperature in " + place + " is " + temp + " degree Celcius</h1>");
      res.write("<h1>Weather description is " + desc + ".</h1>");
      res.write("<img src=" + icon + ">");
      res.send();
      

    });

  });


});




app.listen(3000, function() {

  console.log("Server is running at port 3000");

});
