const express = require("express");
const app = express();
const PORT = 4000;
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const posts = {};

app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post("/post", (req, res) => {
  const id = randomBytes(4).toString("hex");
  console.log(req.body);
  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  res.status(201).send(posts);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
