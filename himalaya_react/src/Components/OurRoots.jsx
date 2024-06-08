import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";
const OurRoots = () => {
  return (
    <Flex direction="column" align="center" p={8}>
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src="https://i.shgcdn.com/f95290db-d02e-433c-9564-4766788d684c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Our Roots
          </Heading>
          <Text mb={4} fontSize="18px">
            The herbs used in Himalaya Herbal Healthcare's scientific product
            line are also used in the world's oldest traditional system of
            medicine, Ayurveda, which dates back over 4,000 years.
          </Text>
          <Text mb={4} fontSize="18px">
            The word Ayurveda comes from the Sanskrit root words ayur, meaning
            “life” and veda, meaning “to know.” Ayurveda literally means "to
            know life,” or in the language of today, “the science of life.”
          </Text>
          <Text fontSize="18px">
            Ayurveda had a profound, far-reaching influence on Traditional
            Chinese Medicine and the healthcare systems of many other countries
            and cultures that followed. Today, thanks to the dedicated efforts
            of Himalaya’s doctors and scientists, it’s been proven effective
            through scientific validation.
          </Text>
          <Text mb={4} fontSize="18px">
            Ayurveda acknowledges there are five elements that make up the
            universe and the human body; earth, water fire, air and space. It
            seeks to bring the constellation and characteristics of the three
            body types defined by those elements – the vata, pitta and kapha –
            back into balance through proper diet, herbal treatment, and
            emotional well-being.
          </Text>
          <Text mb={4} fontSize="18px">
            We’re proud of the ancient roots and our modern branches that allow
            us to continue unlocking the powerful healing benefits of Ayurveda,
            but our formulas are science-based and appropriate for all body
            types. They require no Ayurvedic knowledge to be used successfully.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OurRoots;
