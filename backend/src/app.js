const express = require("express");

const app = express();

const cors = require("cors");

app.use(cors());

app.use(express.json());

const router = require("./router");

app.use("/api", router);

const reactBuildPath = `${__dirname}/../../frontend/dist`;

app.use(express.static(reactBuildPath));

app.get("*", (req, res) => {
  res.sendFile(`${reactBuildPath}/index.html`);
});

const logErrors = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);
  next(err);
};

app.use(logErrors);

module.exports = app;
