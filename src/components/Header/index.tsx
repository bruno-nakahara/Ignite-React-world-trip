import { Box, Image, Img, useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import Link from "next/link";

export function Header() {
    const { asPath } = useRouter()

    return (
        <Box as="header" w="100%" h={["50", "100"]} pos="relative">
            { asPath !== "/" && (
                <Link href="/">
                    <Image w={["6px", "10px"]} ml={["16px", "152px"]} top={["20px", "42px"]} pos="absolute" src="/Vector.svg" cursor="pointer"/>
                </Link>
            )}
            <Img h={["5", "46"]} src="/Logo.svg" alt="Logo" mx="auto" mt={["15", "27"]} mb={["15", "27"]}/>
        </Box>
    )
}