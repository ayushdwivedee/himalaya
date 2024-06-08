import { Card,CardBody,Heading,Image, Stack ,Text} from '@chakra-ui/react'
import React from 'react'

const HCard = () => {
  return (
     
    <Card
    mt="100px"
   bg=" #F7F8FA"
    w="1300px"
    ml="120px"
    direction={{ base: 'column', sm: 'row' }}
    overflow='hidden'
    variant='outline'
  >
    <Image
     p={15}
      objectFit='cover'
      maxW={{ base: '100%', sm: '200px' }}
      src=' https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475'
      alt='Caffe Latte'
    />
  
    <Stack>
      <CardBody p={10} >
        <Heading size='xl' fontWeight={500}>Unlock the Wisdom of Herbs</Heading>
        <Heading size='xl' fontWeight={350}>with Herbal Supplements, Toothpaste & More!</Heading>
        
        <Text py='4' fontSize="20px" >
          
        Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of herbs.
        </Text>
      </CardBody>
  
       
       
       
       
       
    </Stack>
  </Card>
     
  )
}

export default HCard
