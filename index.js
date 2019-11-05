"use strict";

const app = require("./app");

require("@root/greenlock")
  .create({
    packageRoot: __dirname,
    maintainerEmail: "jihwan.alex.lee@gmail.com",
    app
  })
  .listen(80, 443);
