import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner() {
    return (
        <Box w="100%" h="335" bgImg="url('/Background.jpg')"maxW="1440px" mx="auto" >
            <Flex mt="20" justifyContent="center">
                <Box w="524px">
                    <Heading fontWeight="500" fontSize="36" lineHeight="12,5" color="Light.Headings and Text">5 Continentes, infinitas possibilidades.</Heading>
                    <Text fontWeight="400" fontSize="20" lineHeight="7,5" color="Light.Info" mt="5">Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
                </Box>
                <Image src="/Airplane.svg" alt="Airplane" h="271" ml="205" mt="4" />
            </Flex>
        </Box>
    )
}