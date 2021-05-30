import { Box, Flex, Heading, Image, Text, useMediaQuery } from "@chakra-ui/react";

export function Banner() {
    const [isNotSmallScreen] = useMediaQuery("(min-width: 375px)")
    return (
        <Box w="100%" h={["163", "335"]} bgImg="url('/Background.jpg')"maxW="1440px" mx="auto" >
            <Flex mt={["7", "20"]} justifyContent="center">
                <Box w="524px">
                    <Heading fontWeight="500" fontSize={["xl", "4xl"]} lineHeight="12,5" ml={[4, 0]} color="Light.Headings and Text">5 Continentes, infinitas possibilidades.</Heading>
                    <Text fontWeight="400" fontSize={["sm", "xl"]} lineHeight="7,5" ml={[4, 0]} color="Light.Info" mt="5">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                </Box>
                {isNotSmallScreen && (
                    <Image src="/Airplane.svg" alt="Airplane" h="271" ml="205" mt="4" />
                )} 
            </Flex>
        </Box>
    )
}