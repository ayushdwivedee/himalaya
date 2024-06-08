import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import OurProcess from "../Components/OurProcess";
import OurStory from "../Components/OurStory";
import OurRoots from "../Components/OurRoots";
import OurScience from "../Components/OurScience";
import OurInitiatives from "../Components/OurInitiatives";
const About = () => {
  return (
    <Box>
      <Box>
        <Image
           
          
          position="absolute"
          h="400px"
          w="100%"
          src="https://i.shgcdn.com/f95290db-d02e-433c-9564-4766788d684c/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
        />
        <Box
           
          position="relative"
          top="120px"
          left="530px"
          w="600px"
          textAlign="center"
          color="white"
        >
          <Heading fontWeight={600} fontSize="6xl">
            Our{" "}
            <span>
              <b>Story</b>
            </span>
          </Heading>
          <Text mt={6} fontWeight={700} fontSize="22px">
            Founded in 1930, Himalaya remains family owned with products offered
            in over 100 countries.
          </Text>
        </Box>
      </Box>

      <Box    w="90%" m="auto" mt="250px">
        
        <Tabs isFitted variant="solid-rounded" colorScheme="green" >
       
          <TabList mb="1em" >
         
            <Tab>OUR STORY</Tab>
            <Tab>OUR ROOTS</Tab>
            <Tab>OUR PROCESS</Tab>
            <Tab>OUR SCIENCE</Tab>
            <Tab>OUR INITIATIVES</Tab>
          </TabList>
          <hr  />
          <TabPanels >
            <TabPanel>
               <OurStory/>
            </TabPanel>
            <TabPanel>
               <OurRoots/>
            </TabPanel>
            <TabPanel>
               <OurProcess/>
            </TabPanel>
            <TabPanel>
               <OurScience/>
            </TabPanel>
            <TabPanel>
              <OurInitiatives/>
            </TabPanel>
          </TabPanels>
        </Tabs>
        
      </Box>
    </Box>
  );
};

export default About;
