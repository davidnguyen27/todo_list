const GroupRoute = require("./group.router");
const initRoute = (app) => {
  app.use("/", GroupRoute);
};

module.exports = initRoute;
