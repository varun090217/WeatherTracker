const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, "src")));

app.get("/weatherTracker", (req, res) => {
  res.end("You are on web page");
  res.sendFile(path.join(__dirname, "src", "index.html"));
});
app.get("/", (req, res) => {
  res.end("You are on Home Page");
});

app.listen(PORT);
