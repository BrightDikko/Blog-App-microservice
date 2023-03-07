const express = require("express");
const app = express();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");

const PORT = 4001;

const commentsByPostId = {};

app.use(cors());

app.use(bodyParser.json());

app.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    res.send(commentsByPostId[postId] || []);
});

app.post("/posts/:id/comments", async (req, res) => {
    const postId = req.params.id;

    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;
    const newComment = {
        commentId,
        content,
    };

    if (commentsByPostId[postId]) {
        commentsByPostId[postId] = [...commentsByPostId[postId], newComment];
    } else {
        commentsByPostId[postId] = [newComment];
    }

    const commentCreatedEvent = {
        type: "commentCreated",
        data: {
            id: commentId,
            content,
            postId,
        },
    };

    await axios.post("http://localhost:4005/events", commentCreatedEvent);

    console.log(commentsByPostId);
    res.status(201).send(commentsByPostId[postId]);
});

app.post("/events", (req, res) => {
    const eventType = req.body.type;

    console.log(`Event Received, of type: ${eventType}`);

    res.send({});
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
