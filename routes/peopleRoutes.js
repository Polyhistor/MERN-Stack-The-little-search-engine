module.exports = app => {
  // calling services
  const service = require("../services/peopleService");

  // Route to handle everyone
  app.get(["/everyone"], async (req, res) => {
    const filter = req.query || {};
    const all = await service.findBy(filter);
    res.status(200).send(all);
  });
};
