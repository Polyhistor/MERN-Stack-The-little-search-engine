const winston = require("winston");

module.exports = function(err, req, res, next) {
  winston.log(info);

  res.status(500).send("Internal server error. something has failed!");
};
