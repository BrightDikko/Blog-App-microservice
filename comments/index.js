const express = require("express");
const app = express();
const { randomBytes } = require("crypto");
const bodyParser = require("body-parser");

const PORT = 4001;

const commentsByPostId = {};

app.use(bodyParser.json());
app.get("/posts/:id/comments", (req, res) => {
    const postId = req.params.id;
    res.send(commentsByPostId[postId] || []);
});
app.post("/posts/:id/comments", (req, res) => {
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

    res.status(201).send(commentsByPostId[postId]);
});

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
