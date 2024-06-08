import React from "react";
import { Box, Flex, Image, Text, Heading } from "@chakra-ui/react";

const OurProcess = () => {
  return (
    <Flex direction="column" align="center" p={8}>
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src="https://i.shgcdn.com/a802e384-7312-4d13-bda1-8859e1afaecf/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Purity and Efficacy
          </Heading>
          <Text mb={4} fontSize="18px">
            The complexity and timing of the entire seed-to-shelf process for
            Himalaya and for the plants themselves, is highlighted by three
            important mandates: purity, efficacy, and batch-to-batch
            consistency.
          </Text>
          <Text mb={4} fontSize="18px">
            We know the success of traditional plant medicine is based on
            several integral parts that extend from the most advanced
            agricultural research and practices, to extraction methodologies, to
            formulating approaches and dosage strategies.
          </Text>
          <Text fontSize="18px">
            To accomplish all of this, Himalaya maintains total control over the
            farming, harvesting, research, manufacturing, and distribution of
            all our products.
          </Text>
        </Box>
      </Flex>

      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Our Farms
          </Heading>
          <Text mb={4} fontSize="18px">
            Himalaya's herbs are grown on over 1,000 acres of farmland through
            fair trade, farming partnerships. Herbs are also sustainably
            wildcrafted on over 5,000 acres.
          </Text>
          <Text mb={4} fontSize="18px">
            Farms are located in regions most suitable to the individual herb so
            that the best possible quality and potency are achieved in the
            harvest. Just as one wine grape has more character and flavor when
            grown in a very specific region, the plants used in healthcare often
            perform best when they’re grown and harvested in their own unique
            native soil.
          </Text>
        </Box>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src="https://i.shgcdn.com/6fdef74e-1e57-4bd4-8f3f-617132184feb/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
      </Flex>
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1">
          <Text mb={4} fontSize="18px">
            Himalaya chooses farm lands based on soil fertility, suitability and
            quality, visiting the selected land first to ensure the land is free
            from soil and water erosion, free from pollution and away from
            industrial zones, free from municipal waste and the flow of rain
            water from neighboring fields.
          </Text>
          <Text mb={4} fontSize="18px">
            Farmers are trained in preparing the land, through to post-harvest
            management of the herbs, and even in proper drying, packaging,
            storing and labeling.
          </Text>
          <Text mb={4} fontSize="18px">
            Himalaya’s farmers use only authenticated starting materials; viable
            seeds with a good germination percentage. A respective Package of
            Practices (POP) assures adherence to quality, sustainability and
            careful environmental stewardship at all times.
          </Text>
          <Text mb={4} fontSize="18px">
            Farmers are trained on earth-friendly organic practices, soil bed
            preparation, proper irrigation, fertilization and sustainable
            harvesting, crop rotation, cover crop cultivation and organic soil
            enrichment. No pesticides are allowed to be used.
          </Text>
          <Text mb={4} fontSize="18px">
            Careful safety measures are put in place for handling threatened
            plant populations, and farmers are continually trained on the Good
            Cultivation Practices specific to each herb. In addition, farmers
            are trained on Good Agriculture Collection Practices as well.
          </Text>
          <Text mb={4} fontSize="18px">
            In addition to initial training, two residential workshops are
            conducted per year, and supervisors visit the farmer’s field
            regularly to check for compliance in areas such as proper crop
            management, no chemical usage, no child labor, and appropriate labor
            hours for adults. Violations do not occur.
          </Text>
          <Text mb={4} fontSize="18px">
            Himalaya’s agricultural supervisory teams visit farms quarterly, but
            the frequency of visits may increase depending on the individual
            needs of the farmer. Himalaya’s inspectors and trainers include our
            own people with Masters Degrees in botany, MBAs in agri-business
            management, along with agricultural scientists from reputed
            universities.
          </Text>
        </Box>
      </Flex>
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src="https://i.shgcdn.com/1ccc967d-5c31-4ca5-8ceb-3a0c95177b71/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Our Manufacturing
          </Heading>
          <Text mb={4} fontSize="18px">
            In March 2001, Himalaya was granted a Good Manufacturing Practices
            (GMP) certificate, issued by the Licensing Authority, Directorate of
            Indian Systems of Medicine, Bangalore, India. Himalaya is the first
            Ayurvedic facility in India to receive GMP certification.
          </Text>
          <Text mb={4} fontSize="18px">
            We have also been granted Good Laboratory Practice (GLP)
            certification. A GLP certification is granted to manufacturing
            companies that adhere to the toxicity guidelines in nonclinical
            safety studies. The certification is granted by the National Good
            Laboratory Practice (GLP) Compliance Monitoring Authority,
            Department of Science and Technology, Government of India.
          </Text>
          <Text fontSize="18px">
            Only 14 institutions in India have been granted this certificate,
            and Himalaya is the first herbal company to join their ranks.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OurProcess;
