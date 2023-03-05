import "@fontsource/open-sans/300.css";
import "@fontsource/open-sans/400.css";
import "@fontsource/open-sans/700.css";
import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./buttonTheme";

export const theme = extendTheme({
    colors: {
        brand: {
            100: "#FF3C00",
        },
    },
    fonts: {
        heading: "Open Sans, sans-serif",
        body: "Raleway, sans-serif",
    },
    styles: {
        global: {
            // styles for the `body`
            body: {
                bg: "gray.200",
            },
        },
    },
    components: {
        Button: buttonTheme,
    },
});
