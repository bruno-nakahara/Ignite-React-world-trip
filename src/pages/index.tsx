import { Box, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner/index";
import { Header } from "../components/Header/index";
import Slider from "../components/Slider";
import { TravelTypes } from "../components/TravelTypes";

export default function Home() {
  
  return (  
    <Flex direction="column"  bgColor="Light.Headings and Text">
      <Header />
      <Banner />
      <TravelTypes />
      <Box mt={["9", "20"]} mx="auto" w={90} borderTop="2px" borderColor="Dark.Headings and Text"/>
        <Text mx="auto" mt={[6, 54]} fontSize={["xl", "4xl"]} fontWeight="500" lineHeight="13,5">Vamos nessa?</Text>
        <Text mx="auto" textAlign="center" fontSize={["xl", "4xl"]} fontWeight="500" lineHeight="13,5">Então escolha seu continente</Text>
      <Box as="div" maxW="1240px" w="100%" h={["250px", "450px"]} mt={["5", "54"]} mb={["10px", "40px"]} mx="auto">
        <Slider />
      </Box>
    </Flex>
  )
}
