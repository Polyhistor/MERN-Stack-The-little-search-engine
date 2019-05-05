// guiding all the trafic from 3000 to 5000 using a proxy
const proxy = require("http-proxy-middleware");
module.exports = function(app) {
  app.use(proxy("/everyone", { target: "http://localhost:5000/" }));
};
