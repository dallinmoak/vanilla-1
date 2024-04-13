const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const dist = path.join(__dirname, "./dist");
const index = path.join(dist, "index.html");

app.use(express.static(dist));
app.get("/api", (req, res) => {
  res.send({ message: "Hello World!" });
});

app.get("/api/test", (req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.send(Buffer.from(`<div>API</div>`));
});

app.get("/", (req, res) => {
  res.sendFile();
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
