import React from "react";

import { Flex, Text } from "@chakra-ui/react";

const CommentList = ({ comments }) => {
    const commentsRenderer = Object.values(comments).map((comment) => {
        return (
            <li key={comment.id}>
                <Text
                    fontSize="md"
                    fontWeight="medium"
                    fontFamily="heading"
                    color="gray.800"
                    mb={2}
                >
                    {comment.content}
                </Text>
            </li>
        );
    });

    return (
        <Flex mb={6} marginX={6} flexDirection="column">
            <ul>{commentsRenderer}</ul>
        </Flex>
    );
};

export default CommentList;
