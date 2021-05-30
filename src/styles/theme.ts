import { extendTheme } from "@chakra-ui/react";


export const theme = extendTheme({
    colors: {
        Dark: {
            "Black": "#000000",
            "Headings and Text": "#47585B",
            "Info": "#999999",
        },
        Light: {
            "White": "#FFFFFF",
            "Headings and Text": "#F5F8FA",
            "Info": "#DADADA",
        },
        "Highlight": "#FFBA08"
    }, 
    fonts: {
        heading: 'Poppins' || "Barlow",
        body: 'Poppins' || "Barlow"
    }
})