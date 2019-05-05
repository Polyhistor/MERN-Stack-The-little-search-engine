// Calling the library
const mongoose = require("mongoose");

// Connecting to cloud
module.exports = function() {
  mongoose
    .connect(
      "mongodb+srv://pouya:kilkil123@cluster0-zc5an.mongodb.net/AmbitAI?retryWrites=true",
      { useNewUrlParser: true }
    )
    .then(() => console.log("connected to MongoDB Atlas!"));
};
