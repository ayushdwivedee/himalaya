import {
  Card,
  CardBody,
  Heading,
  Image,
  HStack,
  Text,
  VStack,
  Button,
  CardFooter,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const ProductCard = ({ id, image, title, description, price, button }) => {
  const handleAddToCart = async () => {
    try {
      const product = { id, image, title, description, price, quantity: 1 };
      await axios.post("http://localhost:3000/cart", product);
      alert("Product added to cart!");
    } catch (error) {
      alert("Failed to add product to cart");
    }
  };

  return (
    <Card
      bg=" #F7F8FA"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        p={15}
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={image}
        alt="Caffe Latte"
      />

      <HStack>
        <CardBody p={10}>
          <Heading size="xl" fontWeight={500}>
            {title}
          </Heading>

          <Text py="4" fontSize="20px">
            {description}
          </Text>
        </CardBody>
        <CardFooter>
          <VStack mb={25} spacing={6}>
            <Heading as="h3" size="md">
              Price : ${price}
            </Heading>
            <Button variant="solid" colorScheme="blue" onClick={handleAddToCart}>
              {button}
            </Button>
          </VStack>
        </CardFooter>
      </HStack>
    </Card>
  );
};

export default ProductCard;
