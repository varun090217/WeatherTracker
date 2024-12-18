require("dotenv").config();
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT;
const HOSTNAME = process.env.HOSTNAME;

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname)));

// Route to serve the index.html
app.get("/weatherTracker", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
