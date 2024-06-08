import { Box  } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
    <Box bg="#FF7451" w="100%" textAlign="center" color="white" fontSize="20px" p={2} textTransform="uppercase">
      <span style={{fontWeight:700}}>Free Shipping</span> on all Orders over $35!
    </Box>
  )
}

export default Header
