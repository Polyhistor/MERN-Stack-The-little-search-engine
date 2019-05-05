const people = require("../models/Person");

// creating the filter function
const findBy = filter => {
  // loop on filter props
  const query = {};

  for (prop in filter) {
    // if the prop contains gt or lt we should change it to mongo style query
    if (prop.includes("_")) {
      let finalQuery = {};
      let parts = prop.split("_");
      query[parts[0]] = parts[1];
      finalQuery[`$${parts[1]}`] = filter[prop];
      query[parts[0]] = finalQuery;
    } else {
      // if the prop does not containg gt or lt, just return the same query
      query[prop] = filter[prop];
    }
  }
  // finally, return the query
  return people.find(query);
};

module.exports = {
  findBy
};
