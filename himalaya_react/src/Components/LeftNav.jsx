import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import React from 'react'

const LeftNav = () => {
  return (
    
    <Menu>
  <MenuButton as={Button} rightIcon={ <ChevronDownIcon/>}>
  Health Category
  </MenuButton>
  <MenuList>
    <MenuItem>Herbal Supplements</MenuItem>
    <MenuItem>Health Interests</MenuItem>
    <MenuItem>Oral Care</MenuItem>
    <MenuItem>Personal Care</MenuItem>
    
  </MenuList>
</Menu>
    
  )
}

export default LeftNav
