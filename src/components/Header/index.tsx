import { Box, Img } from "@chakra-ui/react";


export function Header() {
    return (
        <Box as="header" w="100%" h="100">
            <Img h="46" src="/Logo.svg" alt="Logo" mx="auto" mt="27" mb="27"/>
        </Box>
    )
}