const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/fruitsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    max: 10,
    min: 0
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Best"
});

// fruit.save();


const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});


const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 7,
  review: "Best"

});

const mango = new Fruit({
  name: "Mango",
  rating: 7,
  review: "Best"

});

// mango.save();
//
// pineapple.save();

const person = new Person({
  name: "Amy",
  age: 12,
  favouriteFruit: pineapple
});



// person.save();

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "Best"
});

Person.updateOne({name: "John"}, {favouriteFruit: mango}, function(err){
  if(err){
    console.log(err);
  }else{
    console.log("success");
  }
});

const orange = new Fruit({
  name: "Orange",
  rating: 8,
  review: "Best"
});

const banana = new Fruit({
  name: "Banana",
  rating: 9,
  review: "Best"
});

// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesful");
//   }
// });

// Fruit.updateOne({_id: "5eaa65dbf2bf9910abe18bb4"}, {name: "Peach"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Success");
//   }
// });


// Fruit.deleteOne({_id: "5eaa65dbf2bf9910abe18bb4"}, function(err){
//   if(err){
//     console.log(err);
//   }else{
//     console.log("succsful");
//   }
// });

// Person.deleteMany({name: "John"}, function(err){
//
//   if(err){
//     console.log(err);
//   }else{
//     console.log("Succesful");
//   }
//
// });

Fruit.find(function(err, fruits) {
  if (err) {
    console.log(err);
  } else {
    fruits.forEach(function(fruit) {

      console.log(fruit.name);
    });

    mongoose.connection.close();
  }
});
