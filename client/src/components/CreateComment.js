import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";

const CreateComment = ({ postId }) => {
    const [comment, setComment] = useState("");
    const commentHandler = (event) => {
        setComment(event.target.value);
    };

    const POST_COMMENT_URL = `http://localhost:4001/posts/${postId}/comments`;
    const submitHandler = async (event) => {
        event.preventDefault();

        await axios.post(POST_COMMENT_URL, { content: comment });

        setComment("");
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <Box mb={4}>
                    <Flex>
                        <Text
                            mb="8px"
                            ml={1}
                            fontFamily="body"
                            fontWeight="semibold"
                            letterSpacing={0.5}
                            color="gray.700"
                        >
                            Comment:
                        </Text>
                        <Text
                            mb="8px"
                            ml={1}
                            fontFamily="body"
                            letterSpacing={0.5}
                            color="blue.600"
                        >
                            {comment}
                        </Text>
                    </Flex>

                    <Input
                        value={comment}
                        onChange={commentHandler}
                        placeholder="Enter post comment"
                        size="sm"
                        fontFamily="body"
                        letterSpacing={0.5}
                        height="40px"
                        borderRadius="5px"
                    />
                </Box>

                <Button
                    variant="outline"
                    align="center"
                    type="submit"
                    width="100px"
                >
                    Submit
                </Button>
            </form>
        </>
    );
};

export default CreateComment;
