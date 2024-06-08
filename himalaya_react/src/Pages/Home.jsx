import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import HomeCard from "../Components/HomeCard";
import HCard from "../Components/HCard";
 
 
const Home = () => {
  return (
    <Container m={0} mt={5} p={0}>
      <Box w="2026px" h="600px">
        <Image
          src="https://himalayausa.com/cdn/shop/files/Berberine_2_1280x.jpg"
          w="100%"
          h="100%"
          alt="Home Image of Himalaya product"
        />
      </Box>
      <Box w={"300px"} position="relative" bottom="350px" ml={150}>
        <VStack spacing={8}>
          <Text
            fontSize="4xl"
            bg=" #F4F1EE"
            py={4}
            px={6}
            pl={385}
            mr={300}
            fontWeight={700}
          >
            BERBERINE
          </Text>
          <Text fontSize="2xl" color="white">
            Potent Plant-Based Support for Daily Wellness.
          </Text>
          <Link to="/collections">
            <Button
              backgroundColor="#48CAB2"
              color="white"
              borderRadius="none"
              py={8}
              px={16}
              mr={20}
              _hover={{ backgroundColor: "RGBA(0, 0, 0, 0.80)" }}
            >
              SHOP NOW
            </Button>
          </Link>
        </VStack>
      </Box>

      <Heading
        mt={-200}
        textAlign="center"
        ml={700}
        mb={10}
        fontWeight={500}
        as="h2"
        w="100%"
      >
        Shop By Category
      </Heading>

      <HomeCard  />
      
      <Heading
         mt={100}
        textAlign="center"
        ml={700}
        mb={10}
        fontWeight={500}
        as="h2"
        w="100%"
      >
        Best Sellers
      </Heading>
       <HCard/>
      
    </Container>
  );
};

export default Home;
