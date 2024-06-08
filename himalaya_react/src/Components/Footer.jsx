// Footer.js
import React from 'react';
import { Box, Flex, Text, Link, Input, Button, VStack, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.100" p={10} mt={10}>
      <Flex justify="space-between" flexWrap="wrap">
        <VStack align="flex-start" spacing={3}>
          <Text fontWeight="bold">Info</Text>
          <Link href="#">Contact Us</Link>
          <Link href="#">FAQ</Link>
          <Link href="#">Blog</Link>
          <Link href="#">Store Locator</Link>
          <Link href="#">Careers</Link>
        </VStack>

        <VStack align="flex-start" spacing={3}>
          <Text fontWeight="bold">Policies</Text>
          <Link href="#">Shipping & Returns</Link>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Privacy</Link>
          <Link href="#">CCPA</Link>
          <Link href="#">Accessibility</Link>
        </VStack>

        <VStack align="flex-start" spacing={3}>
          <Text fontWeight="bold">Contact Us</Text>
          <Text>Email: <Link href="mailto:writetous@himalayausa.com">writetous@himalayausa.com</Link></Text>
          <Text>Phone: 1-800-869-4640</Text>
          <Text>Mon-Fri, 8am-5pm CT</Text>
          <Text>Mail:</Text>
          <Text>Himalaya Wellness</Text>
          <Text>1101 Gillingham Lane</Text>
          <Text>Sugar Land, TX 77478</Text>
        </VStack>

        <VStack align="flex-start" spacing={3}>
          <Text fontWeight="bold">Subscribe to Our Newsletter!</Text>
          <Flex>
            <Input placeholder="Enter your e-mail" />
            <Button colorScheme="teal" ml={2}>Subscribe</Button>
          </Flex>
          <Text fontSize="sm">
            By entering your email, you agree to our <Link href="#">Terms & Conditions</Link> and <Link href="#">Privacy Policy</Link>.
          </Text>
          <HStack spacing={3} mt={3}>
            <Link href="#"><FaFacebook size="24" /></Link>
            <Link href="#"><FaTwitter size="24" /></Link>
            <Link href="#"><FaInstagram size="24" /></Link>
            <Link href="#"><FaYoutube size="24" /></Link>
          </HStack>
        </VStack>
      </Flex>
      <Text textAlign="center" mt={5}>&copy; 2022 Himalaya Wellness. All rights reserved.</Text>
      <Text textAlign="center" mt={2} fontSize="xs">*THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.</Text>
    </Box>
  );
};

export default Footer;
