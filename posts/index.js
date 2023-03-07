const express = require("express");
const app = express();
const PORT = 4000;
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const posts = {};

app.use(cors());
app.use(bodyParser.json());

app.get("/posts", (req, res) => {
  console.log("posts: ", posts);
  res.send(posts);
});

app.post("/posts", async (req, res) => {
  const id = randomBytes(4).toString("hex");

  const { title } = req.body;

  posts[id] = {
    id,
    title,
  };

  const postCreatedEvent = {
    type: "postCreated",
    data: { id, title },
  };

  await axios.post("http://localhost:4005/events", postCreatedEvent);

  console.log("\nreq.body: ", req.body);
  res.status(201).send(posts);
});

app.post("/events", (req, res) => {
  const eventType = req.body.type;

  console.log(`Event Received, of type: ${eventType}`);

  res.send({});
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
