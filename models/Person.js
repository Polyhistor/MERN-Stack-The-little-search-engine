// creating mongoose instance
const mongoose = require("mongoose");

// destructuring Schema object from mongoose
const { Schema } = mongoose;

// using the object to create the Schema
userSchema = new Schema({
  name: String,
  age: Number,
  gender: String
});

// generatin the model
module.exports = User = mongoose.model("person", userSchema);
