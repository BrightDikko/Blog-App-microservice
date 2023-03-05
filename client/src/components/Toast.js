import React from "react";
import { useToast } from "@chakra-ui/react";

const Toast = ({ title, description }) => {
    const toast = useToast();
    return (
        <Button
            onClick={() =>
                toast({
                    title: title,
                    description: description,
                    status: "success",
                    duration: 9000,
                    isClosable: true,
                })
            }
        >
            Show Toast
        </Button>
    );
};

export default Toast;
