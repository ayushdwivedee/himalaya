import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

const OurScience = () => {
  return (
    <Flex direction="column" align="center" p={8}>
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src="https://i.shgcdn.com/a094b44f-0f48-4abf-b25b-549315cc3d98/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Our Science
          </Heading>
          <Text mb={4} fontSize="18px">
            Himalaya's core interest has always been to ensure the health
            benefits of our herbal formulas and standalone solo herbs with
            product-specific, double-blind, placebo-controlled human clinical
            trials on all of our products.
          </Text>
          <Text mb={4} fontSize="18px">
            Our commitment to Ayurvedic principles, and research to produce
            natural, safe, and effective health products is driven by our soul
            mission, which is to help individual people maintain a healthy,
            long, and high-quality of life.
          </Text>
          <Text fontSize="18px">
            We take pride in the fact that our formulas undergo years of primary
            research before we offer them to you. Our commitment to ensure we
            have product-specific science on hand before we launch a product
            into the marketplace is exceptional within the natural products
            industry.
          </Text>
          <Text fontSize="18px">
            Himalaya has conducted over 1,200 clinical studies, many of which
            have been published in numerous, highly-regarded medical journals
            including The European Journal of Pharmacology, Phytotherapy
            Research, The Indian Journal of Clinical Practice, Australian
            Journal of Medical Herbalism, and JAMA, India.
          </Text>
        </Box>
      </Flex>
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Our Distribution
          </Heading>
          <Text mb={4} fontSize="18px">
            After being grown, manufactured and packaged in India, finished
            Himalaya products are shipped to our North American corporate
            office, warehouse and distribution center located in Sugar Land,
            Texas.
          </Text>
          <Text mb={4} fontSize="18px">
            Here we maintain state-of-the-art storage and shipping processes in
            climate-controlled environments until our products make their way to
            our retailers, and then to your home.
          </Text>
        </Box>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src=" https://i.shgcdn.com/5a1a59af-3931-4d16-bff2-004468e44137/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
      </Flex>
    </Flex>
  );
};

export default OurScience;
