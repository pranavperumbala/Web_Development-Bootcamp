// jshint esversion:6

var express = require("express");
var app = express();

app.get("/",function(req,res){
  res.send("HELLO");
});

app.get("/contact",function(req,res){
  res.send("pranavm.perumbala@cet.ac.in");
});

app.get("/about",function(req,res){
  res.send("i am pranav");
});

app.get("/hobbies",function(req,res){
  res.send("<ul><li>football</li><li>games</li></ul>");
});


app.listen(3000,function(){
  console.log("Server statrted at port 3000");
});
