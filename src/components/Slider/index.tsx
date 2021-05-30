import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"


// import Swiper core and required modules
import SwiperCore, {
    Navigation,Pagination,Mousewheel,Keyboard
} from 'swiper/core';

// install Swiper modules
SwiperCore.use([Navigation,Pagination,Mousewheel,Keyboard]);

const continents = [
    {
        slug: "north-america",
        title: "América do Norte",
        subtitle: "American Dream.",
        imageUrl: "https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80"
    },
    {
        slug: "europe",
        title: "Europa",
        subtitle: "O continente mais antigo.",
        imageUrl: "https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1079&q=80"
    },
    {
        slug: "south-america",
        title: "América do Sul",
        subtitle: "Paraíso tropical.",
        imageUrl: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
        slug: "asia",
        title: "Ásia",
        subtitle: "Novas culturas.",
        imageUrl: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1026&q=80"
    },
    {
        slug: "africa",
        title: "África",
        subtitle: "A origem do mundo.",
        imageUrl: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
    },
    {
        slug: "oceania",
        title: "Oceania",
        subtitle: "Novo mundo.",
        imageUrl: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
]

interface continentsData {
    slug: string;
    title: string;
    subtitle: string;
    imageUrl: string; 
}

export default function Slider() {   
  return (  
    <>
        <Swiper cssMode={true} navigation={true} pagination={true} mousewheel={true} keyboard={true} className="mySwiper">     
            {continents.map((continent: continentsData) => {
                return (          
                    <SwiperSlide color="Highlight">
                        <Link href={`/${continent.slug}`}>
                            <Box as="div" key={continent.slug} pos="relative" maxW="1240px" maxH={["250px", "450px"]} w="100%" h="100%" alignItems="center" cursor="pointer">
                                <Image maxW="1240px" maxH={["250px", "450px"]} w="100%" h={["250px", "450px"]} src={continent.imageUrl} alt={continent.slug} />
                                <Flex direction="column" pos="absolute" textAlign="center" w="100%" h="100%" top="0" justifyContent="center">
                                    <Heading color="Light.Headings and Text" fontSize={["1.5rem", "3rem"]} lineHeight={["2.25rem", "4.5rem"]} fontWeight="700" >{continent.title}</Heading>
                                    <Text color="Light.Info" fontSize={["0.875rem", "1.5rem"]} lineHeight={["1.3125", "2.25rem"]} fontWeight="700">{continent.subtitle}</Text>
                                </Flex>
                            </Box>
                        </Link>
                    </SwiperSlide>          
                )
            })}
        </Swiper>
    </>
    //</Box>
  )
}