"use strict";

require("greenlock-express")
  .init(function() {
    return {
      greenlock: require("@root/greenlock").create({
        packageRoot: __dirname,
        maintainerEmail: "jihwan.alex.lee@gmail.com"
      }),
      cluster: false
    };
  })
  .ready(function(glx) {
    const app = require("./app");
    glx.serveApp(app);
  });
