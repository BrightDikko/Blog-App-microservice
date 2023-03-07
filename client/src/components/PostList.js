import axios from "axios";
import React, { useEffect, useState } from "react";

import { Box, Card, CardBody, Flex, Text } from "@chakra-ui/react";
import CreateComment from "./CreateComment";
import CommentList from "./CommentsList";

const PostList = () => {
    const [posts, setPosts] = useState({});
    const getPosts = async () => {
        const response = await axios.get("http://localhost:4002/posts");
        console.log(response.data);
        setPosts(response.data);
    };

    useEffect(() => {
        getPosts();
    }, []);

    const postsRenderer = Object.values(posts).map((post) => {
        return (
            <Card key={post.id} mb={6}>
                <CardBody>
                    <Text
                        fontSize="xl"
                        fontWeight="bold"
                        fontFamily="heading"
                        color="gray.800"
                        mb={5}
                    >
                        {post.title}
                    </Text>
                    <Box>
                        <CommentList comments={post.comments} />
                        <CreateComment postId={post.id} />
                    </Box>
                </CardBody>
            </Card>
        );
    });

    return (
        <Flex mt={10} flexDirection="column">
            <Text
                fontSize="3xl"
                fontWeight="bold"
                fontFamily="heading"
                color="gray.800"
                mb={6}
            >
                All Posts
            </Text>
            <Box>{postsRenderer}</Box>
        </Flex>
    );
};

export default PostList;
