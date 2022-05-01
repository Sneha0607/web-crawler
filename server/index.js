const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is running");
});

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));