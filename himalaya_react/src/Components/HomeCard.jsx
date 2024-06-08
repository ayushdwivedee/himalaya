import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  SimpleGrid,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const HomeCard = () => {
  return (
    <SimpleGrid
      spacing={4}
      ml="220px"
      templateColumns="repeat(3, minmax(400px, 1fr))"
    >
      <Card>
        <Image src="https://himalayausa.com/cdn/shop/files/HUSA-Ashwagandha-90ct-Carton_Bottle-square_1024x.png?v=1614392545" />
        <CardHeader>
          <Heading size="md" textAlign="center"> Supplements</Heading>
        </CardHeader>
        <CardBody>
          <Link to="/supplements">
            <Text textAlign="center" color="teal" fontWeight={600} _hover={{textDecoration:"underline"}}>See All Supplements </Text>
          </Link>
        </CardBody>
      </Card>
      <Card>
        <Image src="https://himalayausa.com/cdn/shop/files/WCC-SIMPLY-MINT-RENDER-WITH-BRUSH-High-Res_1024x.png?v=1614392545" />
        <CardHeader>
          <Heading size="md" textAlign="center">Oral Care</Heading>
        </CardHeader>
        <CardBody>
          <Link to="/oral-care">
            <Text textAlign="center" color="teal" fontWeight={600} _hover={{textDecoration:"underline"}}>See All Oral Care </Text>
          </Link>
        </CardBody>
      </Card>
      <Card>
        <Image src="https://himalayausa.com/cdn/shop/files/Face_Wash-Balancing-Box-Bottle-square_1024x.png?v=1614392545" />
        <CardHeader>
          <Heading size="md" textAlign="center">Personal Care</Heading>
        </CardHeader>
        <CardBody>
          <Link to="/personal-care">
            <Text textAlign="center" color="teal" fontWeight={600} _hover={{textDecoration:"underline"}}>See All Personal Care </Text>
          </Link>
        </CardBody>
      </Card>
    </SimpleGrid>
  );
};

export default HomeCard;
