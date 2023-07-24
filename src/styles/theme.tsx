import { extendTheme } from "@chakra-ui/react";

import { ButtonStyles as Button } from "./components/buttonStyles";

export const theme = extendTheme({
    // breakpoints,
    breakpoints: {
        xs: "320px",
        sm: "400px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
        "2xl": "1536px",
    },
    colors: {
        dark: "#000000",
        primary: "#13064d",
        navPrimary: "rgba(71, 85, 118, 0.81)",
    },
    textStyles: {
        titleBold: {
            fontFamily: "Poppins",
            color: "primary",
            fontSize: ["1rem", "1.5rem", "1.8rem", "2rem"],
            fontWeight: "600",
        }, 
        titleLight: {
            fontFamily: "Poppins",
            color: "darkGrey",
            fontSize: ["1rem", "1.5rem", "2rem", "2.5rem"],
            fontWeight: "400",
        }
    },
    components: {
        Button,
    },
});
