import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  AspectRatio,
  Divider,
} from "@chakra-ui/react";

const OurInitiatives = () => {
  return (
    <Flex direction="column" align="center" p={8}>
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Biodiversity Conservation for Sustainable Living
          </Heading>
          <Text mb={4} fontSize="18px">
            Care for the earth remains a cornerstone of Himalaya Wellness
            Company’s core philosophy. Biodiversity for sustainable living is
            the practice of protecting and preserving the variety of species,
            habitats, ecosystems, and genetic diversity on earth, and Himalaya
            has made this an important part of our mission since we started over
            90 years ago.
          </Text>
          <Text mb={4} fontSize="18px">
            The video you're about to see shows Himalaya Wellness Company's
            initiatives in conservation, sustainability and replanting. Himalaya
            believes in nurturing the goodness of nature with a promise to
            safeguard the environment and a pledge to restore and conserve
            biodiversity.
          </Text>
        </Box>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <AspectRatio maxW="670px" ratio={16 / 9}>
            <iframe
              width="670"
              height="376"
              src="https://www.youtube.com/embed/zubH7PytqpM"
              title="Himalaya Wellness Company&#39;s Initiatives in Conserving Biodiversity for Sustainable Living"
            ></iframe>
          </AspectRatio>
        </Box>
      </Flex>

      <Divider my={6} colorScheme="red" />

      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src="https://i.shgcdn.com/6288998b-545b-4de3-946e-6317b6fe72f6/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Commitment to Farmers
          </Heading>
          <Text mb={4} fontSize="18px">
            Himalaya works one-on-one with farmers and through non-governmental
            organizations to help bring poorer farming communities a link to the
            marketplace. Through fair trade cooperative agreements, our goal is
            to help economically empower small and marginal farmers so they can
            further their livelihood.
          </Text>
          <Text mb={4} fontSize="18px">
            Himalaya’s fair trade practices assure farmers are paid a minimum of
            15-20% higher than the actual cost of cultivation. In addition to
            favorable wages, other benefits to the farmers include an assured
            market for their crops, an assured price and income (we protect them
            from the ups and downs of the market), and the costs for their
            required certifications, packaging and transportation are borne by
            us, not them.
          </Text>
        </Box>
      </Flex>
      <Divider my={6} />
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Partnership with Vitamin Angels
          </Heading>
          <Text mb={4} fontSize="18px">
            Himalaya continues to be a proud supporter of Vitamin Angels, a
            worldwide non-profit organization helping to save the lives and
            eyesight of nutrient deficient children. Vitamin Angels reduces
            child mortality by connecting infants and children under five with
            vital nutrients.
          </Text>
          <Text mb={4} fontSize="18px">
            It only takes 50¢ to reach one child twice a year with enough
            vitamin A to reduce childhood mortality by 24% and ensure a child's
            eyesight. Vitamin Angels gives children a chance for a brighter
            future, and Himalaya is proud to be an ongoing supporter of their
            work.
          </Text>
        </Box>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src=" https://i.shgcdn.com/68587d5b-0706-4d21-b1f1-59e35de255e8/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
      </Flex>
      <Divider my={6} />
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src="https://i.shgcdn.com/f86febe0-9c1e-466f-b189-842f750669b3/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Trees for Life
          </Heading>
          <Text mb={4} fontSize="18px">
            Himalaya has been planting trees in the Western Ghats of India since
            2011. The Western Ghats is identified as a biodiversity hotspot by
            UNESCO, the United Nations Educational, Scientific and Cultural
            Organization.
          </Text>
          <Text mb={4} fontSize="18px">
            To date, we have planted 750,000 trees, covering 900 acres in
            partnership with a local non-government organization, the Society
            for Environment and Biodiversity Conservation. Himalaya supports the
            planting of a mix of fruit, fodder, endemic, medicinal and other
            trees that support the local ecology and biodiversity.
          </Text>
          <Text fontSize="18px">
            Some of the medicinal trees planted include Ashwagandha, Arjuna,
            Amla and Hirada. The program also supports the planting of fruit
            trees such as mango, papaya, banana and cashew nut, which generate
            income to local farmers in the program and serve as supplementary
            nutrition. In addition, we have also planted Abutilon ranadei, a
            native plant that is critically endangered.
          </Text>
        </Box>
      </Flex>
      <Divider my={6} />
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Certification for Environmental Management
          </Heading>
          <Text mb={4} fontSize="18px">
            Himalaya has taken several steps to conserve water, power and reduce
            pollution to meet National Quality Assurance (NQA) guidelines. The
            most significant achievement has been setting up a water treatment
            plant and sourcing water with low Total Dissolved Solids (TDS)
            externally. This has reduced Himalaya’s water consumption by as much
            as 10,000 liters a day.
          </Text>
          <Text mb={4} fontSize="18px">
            Himalaya has been awarded ISO-14001:2004 certification, the most
            recognized standard globally, for environment management. The
            certification is granted by National Quality Assurance (NQA), the
            UK's largest established certification body.
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
      <Divider my={6} />
      <Flex w="100%" maxW="1600px" direction={["column", "row"]} mb={8}>
        <Box flex="1" mr={[0, 8]} mb={[8, 0]}>
          <Image
            src="https://i.shgcdn.com/87244901-21ea-4e12-91a6-08edec634fe5/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="Woman holding plants"
            borderRadius="md"
          />
        </Box>
        <Box flex="1">
          <Heading as="h2" size="lg" mb={4} color="teal.600">
            Autism Hope Alliance
          </Heading>
          <Text mb={4} fontSize="18px">
            Himalaya Herbal Healthcare is a proud Autism Approved® sponsor of
            the Autism Hope Alliance. Himalaya’s continued charitable donation
            helps support families facing an autism diagnosis. The Autism Hope
            Alliance embodies hope for families through education, financial
            support and volunteerism. They are also the first nonprofit
            foundation for Autism to emerge from the natural foods industry.
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default OurInitiatives;
