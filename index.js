// Calling the libraries
const express = require("express");
// The logger
const winston = require("winston");

// Creating an app instance
const app = express();

// Adding the basic console transport
winston.add(new winston.transports.File({ filename: "logfile.log" }));

// Error handling middleware
const error = require("./services/error");

// Calling out necessary files
require("./config/dbConnection")();
require("./routes/peopleRoutes")(app);

// Having all the errors handled by a middleware
app.use(error);

// Let the rythm be your guiding light...
app.listen(5000, function() {
  console.log("Example app listening on port 5000!");
});

module.exports = app;
