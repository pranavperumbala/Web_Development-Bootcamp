const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");

const app = express();

app.set("view enjine", "ejs");

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const articleSchema = {
  title: String,
  content: String
};

const Article = mongoose.model("article", articleSchema);

//////////////////////////////////////Request Targeting All Articles/////////////////////

app.route("/articles")

  .get(function(req, res) {
    Article.find({}, function(err, foundArticles) {
      if (err) {
        res.send(err);
      } else {
        res.send(foundArticles);
      }
    });
  })

  .post(function(req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content
    });

    newArticle.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully added new article");
      }
    });
  })

  .delete(function(req, res) {
    Article.deleteMany({}, function(err) {
      if (err) {
        res.send(err);
      } else {
        res.send("Succesfully deleted all articles");
      }
    });
  });

//////////////////////////////////////Request Targeting A Specific Articles/////////////////////

app.route("/articles/:articleTitle")

  .get(function(req, res) {
    Article.findOne({
      title: req.params.articleTitle
    }, function(err, foundArticle) {
      if (foundArticle) {
        res.send(foundArticle);
      } else {
        res.send("No articles matching found");
      }

    });

  })

  .put(function(req, res) {
    Article.update({
      title: req.params.articleTitle
    }, {
      title: req.body.title,
      content: req.body.content
    }, {
      overwrite: true
    }, function(err){
      if(!err){
        res.send("Succesfully Updated Document");
      }
    });

  })

  .patch(function(req,res){
    Article.update({title: req.params.articleTitle}, {$set: req.body}, function(err){
      if(!err){
        res.send("Succesfully updated article");
      }else{
        res.send(err);
      }
    });

  })

  .delete(function(req,res){
    Article.deleteOne({title: req.params.articleTitle}, function(err){
      if(err){
        res.rend(err);
      }else{
        res.send("Succesfully deleted");
      }
    });
  });


app.listen(3000, function() {
  console.log("Server running at the port 3000");
})
