import {
    Card,
    CardBody,
    Text,
    Button,
    Box,
    Input,
    Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";
import axios from "axios";

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const titleHandler = (event) => {
        setTitle(event.target.value);
    };
    const toast = useToast();

    const BASE_POST_URL = "http://localhost:4000";
    const submitHandler = async (event) => {
        event.preventDefault();

        await axios.post(BASE_POST_URL, { title: title });

        toast({
            title: "Post Created",
            description: "Your post was successfully created.",
            status: "success",
            duration: 9000,
            isClosable: true,
        });
        setTitle("");
    };

    return (
        <Card>
            <CardBody paddingX={8}>
                <Text
                    fontSize="3xl"
                    fontWeight="bold"
                    fontFamily="heading"
                    color="gray.800"
                    mb={6}
                >
                    Create Post
                </Text>

                <form onSubmit={submitHandler}>
                    <Box mb={6}>
                        <Flex>
                            <Text
                                mb="8px"
                                ml={1}
                                fontFamily="body"
                                fontWeight="semibold"
                                letterSpacing={0.5}
                                color="gray.700"
                            >
                                Title:
                            </Text>
                            <Text
                                mb="8px"
                                ml={1}
                                fontFamily="body"
                                letterSpacing={0.5}
                                color="blue.600"
                            >
                                {title}
                            </Text>
                        </Flex>

                        <Input
                            value={title}
                            onChange={titleHandler}
                            placeholder="Enter post title"
                            size="sm"
                            fontFamily="body"
                            letterSpacing={0.5}
                            height="40px"
                            borderRadius="5px"
                        />
                    </Box>

                    <Flex align="center" justify="center" mb={4}>
                        <Button align="center" type="submit" width="70%">
                            Submit
                        </Button>
                    </Flex>
                </form>
            </CardBody>
        </Card>
    );
};

export default CreatePost;
