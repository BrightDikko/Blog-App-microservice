import { defineStyleConfig } from "@chakra-ui/react";

export const buttonTheme = defineStyleConfig({
    baseStyle: {
        borderRadius: "6px",
        fontSize: "10pt",
        fontWeight: 700,
        _focus: {
            boxShadow: "none",
        },
    },
    sizes: {
        sm: {
            fontSize: "8pt",
        },
        md: {
            fontSize: "10pt",
            // height: "28px",
        },
    },
    variants: {
        solid: {
            color: "white",
            bg: "blue.500",
            _hover: {
                bg: "blue.400",
            },
        },
        outline: {
            color: "blue.500",
            border: "1px solid",
            borderColor: "blue.500",
        },
        communityOutline: {
            color: "red.500",
            border: "1px solid",
            borderColor: "red.500",
        },
        communitySolid: {
            color: "white",
            bg: "red.500",
            _hover: {
                bg: "red.400",
            },
        },
        oauth: {
            height: "34px",
            border: "1px solid",
            borderColor: "gray.300",
            _hover: {
                bg: "gray.50",
            },
        },
    },
});
