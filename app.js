const path = require("node:path");
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});

app.get("/", (req, res) => {
  res.render("index", {messages: messages});
});

app.get("/new", (req, res) => {
  res.render("messages");
});

app.post('/submit', (req, res) => {
  console.log(req.body);
  const newMessage = {
    text: req.body.text,
    user: req.body.user,
    added: new Date()
  };
  messages.push(newMessage);
  res.redirect('/');
});
