import { Box, Flex, Heading, Image, Stack, Text, Tooltip, useMediaQuery } from "@chakra-ui/react";
import InfoOutlineIcon from '@chakra-ui/icon';
import { Header } from "../components/Header";

const continents = [
    {
        slug: "north-america",
        title: "América do Norte",
        subtitle: "American Dream.",
        description: "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.",
        top100Cities: 8,
        language: 3,
        countries: 23,
        imageUrl: "https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
    },
    {
        slug: "europe",
        title: "Europa",
        subtitle: "O continente mais antigo.",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        top100Cities: 27,
        language: 60,
        countries: 50,
        imageUrl: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"
    },
    {
        slug: "south-america",
        title: "América do Sul",
        subtitle: "Paraíso tropical.",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        top100Cities: 5,
        language: 5,
        countries: 14,
        imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        slug: "asia",
        title: "Ásia",
        subtitle: "Novas culturas.",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        top100Cities: 43,
        language: 2300,
        countries: 51,
        imageUrl: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80"
    },
    {
        slug: "africa",
        title: "África",
        subtitle: "A origem do mundo.",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        top100Cities: 12,
        language: 1250,
        countries: 57,
        imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
    },
    {
        slug: "oceania",
        title: "Oceania",
        subtitle: "Novo mundo.",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        top100Cities: 5,
        language: 450,
        countries: 18,
        imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
]

export default function continentPage() {
    const [isNotSmallScreen] = useMediaQuery("(min-width: 375px)")

    return (
        <Flex direction="column" maxW={["375px", "1440px"]} mx="auto" bgColor="Light.Headings and Text">
            <Header />
            <Box w={["375px", "1440px"]} h={["150px", "500px"]} mx="auto">
                <Image w={["375px", "1440px"]} h={["150px", "500px"]} src="https://images.unsplash.com/photo-1526604648377-1433c7c1f5b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                {isNotSmallScreen ? (
                    <Text ml="140px" top="370px" pos="absolute" lineHeight="4.125" fontSize="3rem" fontWeight="600" color="Light.Headings and Text">{continents[0].title}</Text>
                ) : (
                    <Box w="375px" h="150px" top="50px" pos="absolute">
                        <Text mt="56px" textAlign="center" lineHeight="2.625rem" fontSize="1.75rem" fontWeight="600" color="Light.Headings and Text">{continents[0].title}</Text>
                    </Box>    
                )}             
            </Box>
            <Flex direction={isNotSmallScreen ? "row" : "column"} maxW={["375px", "1160px"]} mx="auto" mt={["0.5rem", "5rem"]} alignItems="center" padding={["4", "0"]}>
                <Text textAlign="justify" lineHeight={["1.3125rem", "2.125rem"]} fontSize={["0.875rem", "1.5rem"]} fontWeight="400" color="Dark.Headings and Text">{continents[0].description}</Text>
                <Flex ml={["0", "4.375rem"]} gridGap="2.625rem" w={["375px", "490px"]} justify="center" mt={["4", "0"]}>
                    <Box>
                        <Heading color="Highlight" textAlign={["left", "center"]}>{continents[0].countries}</Heading>
                        <Text fontWeight="600" color="Dark.Headings and Text">países</Text>
                    </Box>
                    <Box>
                        <Heading color="Highlight" textAlign={["left", "center"]}>{continents[0].language}</Heading>
                        <Text fontWeight="600" color="Dark.Headings and Text">línguas</Text>
                    </Box>
                    <Box>
                        <Heading color="Highlight" textAlign={["left", "center"]}>{continents[0].top100Cities}</Heading>
                        <Text fontWeight="600" whiteSpace="nowrap" color="Dark.Headings and Text">
                            cidades +100 <Tooltip label="Números de cidades que estão no top 100" aria-label="top100city"><InfoOutlineIcon w={3} h={3} color="Dark.Info" /></Tooltip>
                        </Text>
                    </Box>                  
                </Flex>
            </Flex>
            <Box mt={["1rem", "5rem"]} maxW="1160px" w="100%" mx="auto" mb="5rem" padding={["4", "0"]} >
                <Heading mb={["1.25rem", "2.5rem"]} fontWeight="500" color="Dark.Headings and Text" lineHeight="3.375rem" fontSize={["1.5rem", "2.25rem"]}>Cidades +100</Heading>
                <Flex w="100%" flexWrap="wrap" direction={["column", "row"]} gridGap={["20px", "45px"]} >
                    <Box minWidth="256px" mx={["auto", "0"]}>
                        <Image w="256px" h="173px" objectFit="cover" borderRadius="4px 4px 0 0" src="https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=341&q=80" />
                        <Flex w="256px" p="1.125rem  1.5rem 1.5rem 1.5rem" justifyContent="space-between" alignItems="center" borderLeft="1px solid" borderRight="1px solid" borderBottom="1px solid" borderColor="Highlight" borderRadius="0 0 4px 4px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="1.25rem" fontWeight="600" lineHeight="1.5625rem">New York City</Heading>
                                <Text mt="0.75rem" fontFamily="Barlow" fontSize="1rem" fontWeight="500" lineHeight="1.625rem" color="Dark.Info">USA</Text>
                            </Box>
                            <Image src="https://hatscripts.github.io/circle-flags/flags/us.svg" w="1.875rem" />
                        </Flex>
                    </Box>
                    <Box minWidth="256px" mx={["auto", "0"]}>
                        <Image w="256px" h="173px" objectFit="cover" borderRadius="4px 4px 0 0" src="https://images.unsplash.com/photo-1515896769750-31548aa180ed?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1134&q=80" />
                        <Flex w="256px" p="1.125rem  1.5rem 1.5rem 1.5rem" justifyContent="space-between" alignItems="center" borderLeft="1px solid" borderRight="1px solid" borderBottom="1px solid" borderColor="Highlight" borderRadius="0 0 4px 4px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="1.25rem" fontWeight="600" lineHeight="1.5625rem">Los Angeles</Heading>
                                <Text mt="0.75rem" fontFamily="Barlow" fontSize="1rem" fontWeight="500" lineHeight="1.625rem" color="Dark.Info">USA</Text>
                            </Box>
                            <Image src="https://hatscripts.github.io/circle-flags/flags/us.svg" w="1.875rem" />
                        </Flex>
                    </Box>
                    <Box minWidth="256px" mx={["auto", "0"]}>
                        <Image w="256px" h="173px" objectFit="cover" borderRadius="4px 4px 0 0" src="https://images.unsplash.com/photo-1574167701654-856d6406583e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
                        <Flex w="256px" p="1.125rem  1.5rem 1.5rem 1.5rem" justifyContent="space-between" alignItems="center" borderLeft="1px solid" borderRight="1px solid" borderBottom="1px solid" borderColor="Highlight" borderRadius="0 0 4px 4px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="1.25rem" fontWeight="600" lineHeight="1.5625rem">Miami</Heading>
                                <Text mt="0.75rem" fontFamily="Barlow" fontSize="1rem" fontWeight="500" lineHeight="1.625rem" color="Dark.Info">USA</Text>
                            </Box>
                            <Image src="https://hatscripts.github.io/circle-flags/flags/us.svg" w="1.875rem" />
                        </Flex>
                    </Box>
                    <Box minWidth="256px" mx={["auto", "0"]}>
                        <Image w="256px" h="173px" objectFit="cover" borderRadius="4px 4px 0 0" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80" />
                        <Flex w="256px" p="1.125rem  1.5rem 1.5rem 1.5rem" justifyContent="space-between" alignItems="center" borderLeft="1px solid" borderRight="1px solid" borderBottom="1px solid" borderColor="Highlight" borderRadius="0 0 4px 4px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="1.25rem" fontWeight="600" lineHeight="1.5625rem">Chicago</Heading>
                                <Text mt="0.75rem" fontFamily="Barlow" fontSize="1rem" fontWeight="500" lineHeight="1.625rem" color="Dark.Info">USA</Text>
                            </Box>
                            <Image src="https://hatscripts.github.io/circle-flags/flags/us.svg" w="1.875rem" />
                        </Flex>
                    </Box>
                    <Box minWidth="256px" mx={["auto", "0"]}>
                        <Image w="256px" h="173px" objectFit="cover" borderRadius="4px 4px 0 0" src="https://images.unsplash.com/photo-1438401171849-74ac270044ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1192&q=80" />
                        <Flex w="256px" p="1.125rem  1.5rem 1.5rem 1.5rem" justifyContent="space-between" alignItems="center" borderLeft="1px solid" borderRight="1px solid" borderBottom="1px solid" borderColor="Highlight" borderRadius="0 0 4px 4px">
                            <Box>
                                <Heading fontFamily="Barlow" fontSize="1.25rem" fontWeight="600" lineHeight="1.5625rem">Seattle</Heading>
                                <Text mt="0.75rem" fontFamily="Barlow" fontSize="1rem" fontWeight="500" lineHeight="1.625rem" color="Dark.Info">USA</Text>
                            </Box>
                            <Image src="https://hatscripts.github.io/circle-flags/flags/us.svg" w="1.875rem" />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </Flex>
    )
}