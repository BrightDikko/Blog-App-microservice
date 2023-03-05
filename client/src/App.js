import React from "react";
import { Container } from "@chakra-ui/react";
import CreatePost from "./components/CreatePost";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./chakra/theme";

const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <Container mt={10}>
                <CreatePost />
            </Container>
        </ChakraProvider>
    );
};

export default App;
