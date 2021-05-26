import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";


export function TravelTypes() {
    return (
        <HStack mt="114" mx="auto" spacing="130px">
            <Box justifyContent="center">
                <Image boxSize="85px" src="/cocktail.svg" alt="cocktail" mx="auto"/>
                <Text fontSize="24" fontWeight="600" my="6" color="Dark.Headings and Text">vida noturna</Text>
            </Box>
            <Box justifyContent="center">
                <Image boxSize="85px" src="/surf.svg" alt="surf" mx="auto"/>
                <Text fontSize="24" fontWeight="600" my="6" color="Dark.Headings and Text">praia</Text>
            </Box>
            <Box justifyContent="center">
                <Image boxSize="85px" src="/building.svg" alt="building" mx="auto"/>
                <Text fontSize="24" fontWeight="600" my="6" color="Dark.Headings and Text">moderno</Text>
            </Box>
            <Box justifyContent="center">
                <Image boxSize="85px" src="/museum.svg" alt="museum" mx="auto"/>
                <Text fontSize="24" fontWeight="600" my="6" color="Dark.Headings and Text">clássico</Text>
            </Box>
            <Box justifyContent="center">
                <Image boxSize="85px" src="/earth.svg" alt="earth" mx="auto"/>
                <Text fontSize="24" fontWeight="600" my="6" color="Dark.Headings and Text">e mais...</Text>
            </Box>
            
        </HStack>
    )
}