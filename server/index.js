const express = require("express");
const consola = require("consola");
const { Nuxt, Builder } = require("nuxt");
const app = express();

// Import and Set Nuxt.js options
const config = require("../nuxt.config.js");
config.dev = process.env.NODE_ENV !== "production";

const ApiRouterDailyData = require("./api/dailyData");
const ApiRouterWeeklyData = require("./api/weeklyData");
const ApiRouterMonthlyData = require("./api/monthlyData");

// ↓↓↓ ★ addition of this line

async function start() {
  app.use("/api/daily/", ApiRouterDailyData);
  app.use("/api/weekly/", ApiRouterWeeklyData);
  app.use("/api/monthly/", ApiRouterMonthlyData);

  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  const { host, port } = nuxt.options.server;

  await nuxt.ready();
  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen the server
  app.listen(port, host);
  consola.ready({
    message: `Server listening on http://${host}:${port}...`,
    badge: true,
  });
}
start();


// "dev": "nuxt",
// "build": "nuxt build",
// "start": "nuxt start",
// "generate": "nuxt generate"