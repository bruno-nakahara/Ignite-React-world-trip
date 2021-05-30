import { Box, Flex, HStack, Image, ListItem, Text, UnorderedList, useMediaQuery, Wrap } from "@chakra-ui/react";


export function TravelTypes() {
    const [isNotSmallScreen] = useMediaQuery("(min-width: 375px)")

    return (
        <Wrap mt={["9", "114"]} mx="auto" maxW={["275px", "1160px"]} spacing={["6", "130px"]} justify={isNotSmallScreen ? "space-between" : "space-around"} >
            <Box justifyContent="center"> 
                {isNotSmallScreen ? (
                    <>
                        <Image boxSize="85px" src="/cocktail.svg" alt="cocktail" mx="auto"/> 
                        <Text fontSize="24" fontWeight="600" my="6" color="Dark.Headings and Text">vida noturna</Text>
                    </>
                ) : (
                    <UnorderedList>
                        <ListItem color="Highlight">
                            <Text fontSize="18" fontWeight="600" color="Dark.Headings and Text">vida noturna</Text>
                        </ListItem>
                    </UnorderedList>
                )}                
            </Box>
            <Box justifyContent="center"> 
                {isNotSmallScreen ? (
                    <>
                        <Image boxSize={["0", "85px"]} src="/surf.svg" alt="surf" mx="auto"/> 
                        <Text fontSize={["18","24"]} fontWeight="600" my={["0", "6"]} color="Dark.Headings and Text">praia</Text>
                    </>
                ) : (
                    <UnorderedList>
                        <ListItem color="Highlight">
                            <Text fontSize={["18","24"]} fontWeight="600" my={["0", "6"]} color="Dark.Headings and Text">praia</Text>
                        </ListItem>
                    </UnorderedList>
                )}                
            </Box>
            <Box justifyContent="center"> 
                {isNotSmallScreen ? (
                    <>
                        <Image boxSize={["0", "85px"]} src="/building.svg" alt="building" mx="auto"/> 
                        <Text fontSize={["18","24"]} fontWeight="600" my={["0", "6"]} color="Dark.Headings and Text">moderno</Text>
                    </>
                ) : (
                    <UnorderedList>
                        <ListItem color="Highlight">
                            <Text fontSize={["18","24"]} fontWeight="600" my={["0", "6"]} color="Dark.Headings and Text">moderno</Text>
                        </ListItem>
                    </UnorderedList>
                )}                
            </Box>
            <Box justifyContent="center"> 
                {isNotSmallScreen ? (
                    <>
                        <Image boxSize={["0", "85px"]} src="/museum.svg" alt="museum" mx="auto"/> 
                        <Text fontSize={["18","24"]} fontWeight="600" my={["0", "6"]} color="Dark.Headings and Text">clássico</Text>
                    </>
                ) : (
                    <UnorderedList>
                        <ListItem color="Highlight">
                            <Text fontSize={["18","24"]} fontWeight="600" my={["0", "6"]} color="Dark.Headings and Text">clássico</Text>
                        </ListItem>
                    </UnorderedList>
                )}                
            </Box>
            <Box justifyContent="center"> 
                {isNotSmallScreen ? (
                    <>
                        <Image boxSize={["0", "85px"]} src="/earth.svg" alt="earth" mx="auto"/> 
                        <Text fontSize={["18","24"]} fontWeight="600" my={["0", "6"]} color="Dark.Headings and Text">e mais...</Text>
                    </>
                ) : (
                    <UnorderedList>
                        <ListItem color="Highlight">
                            <Text fontSize={["18","24"]} fontWeight="600" my={["0", "6"]} color="Dark.Headings and Text">e mais...</Text>
                        </ListItem>
                    </UnorderedList>
                )}                
            </Box>            
        </Wrap>
    )
}