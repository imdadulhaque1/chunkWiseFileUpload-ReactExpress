const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.raw({ type: "application/octet-stream", limit: "1000mb" }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.post("/upload", (req, res) => {
  const { name, size, currentChunkSize, totalChunks } = req.query;
  const ext = name.split(".").pop();
  console.log(req.body.toString());
  res.send("ok");
});

app.listen(4001);
