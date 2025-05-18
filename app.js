const path = require("node:path");
const express = require("express");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
// app.js

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/new", (req, res) => {
  res.render("messages");
});
