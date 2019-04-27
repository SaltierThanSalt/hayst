"use strict";

const app = require("./app");

require("greenlock-express")
  .create({
    version: "draft-12",
    configDir: "~/.config/acme",
    server: "https://acme-v02.api.letsencrypt.org/directory",
    approveDomains: ["www.hayst.net"],
    agreeTos: true,
    email: "jihwan.alex.lee@gmail.com",
    app
  })
  .listen(80, 443);
