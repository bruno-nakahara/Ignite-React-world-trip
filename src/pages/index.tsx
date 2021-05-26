import { Box, Flex, Text } from "@chakra-ui/react";
import { Banner } from "../components/Banner/index";
import { Header } from "../components/Header/index";
import { TravelTypes } from "../components/TravelTypes";


export default function Home() {
  return (
    <div>
      <Flex direction="column" >
        <Header />
        <Banner />
        <TravelTypes />
        <Box mt="20" mx="auto" w="90px" borderTop="2px" borderColor="Dark.Headings and Text"/>
        <Text mx="auto" mt="54" fontSize="36" fontWeight="500" lineHeight="13,5">Vamos nessa?</Text>
        <Text mx="auto" fontSize="36" fontWeight="500" lineHeight="13,5">Então escolha seu continente</Text>
      </Flex>
      
    </div>
  )
}
