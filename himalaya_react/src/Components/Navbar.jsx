import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { CiUser } from "react-icons/ci";
import { Tooltip } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
  
  
  
} from "@chakra-ui/react";
import { AuthContext } from "../Context/AuthContext";
const Navbar = () => {
  const { isAuthenticated ,Logout} = useContext(AuthContext);
  return (
    <Box>
      <Flex justify="space-between">
        <Box w={"35%"} ml={8}>
          <Flex
            justify="space-around"
            align={"center"}
            fontSize="22px"
            color="#77778D"
          >
            <Link to="/">
              <Image
                src="https://himalayausa.com/cdn/shop/files/Himalaya_Logo_-_Since_1930_CMYK_-_Reduced_250x.png?v=1673635210"
                alt="Himalaya Logo"
                w={"170px"}
                mt={3}
              />
            </Link>
            <Link to="/collections">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/store-locator">Store Locator</Link>
          </Flex>
        </Box>
        <Box w={"8%"} mr={10}>
          <Flex justify="space-around" mt={6} fontSize="30px">
            <Link>
              <Tooltip label="Search">
                <span>
                  <CiSearch />
                </span>
              </Tooltip>
            </Link>
            
              <Tooltip label=" My Account">
                <span>
                  <Menu>
                    <MenuButton >
                      <CiUser />
                    </MenuButton>
                    <MenuList w="100px" fontSize="18px">
                       <MenuItem>{isAuthenticated ?  <Button onClick={Logout}>Logout</Button> :<Link to="/login">Sign in</Link>} </MenuItem> 
                      <MenuItem>Register</MenuItem>
                      <MenuItem>Checkout</MenuItem>
                      
                      
                    </MenuList>
                  </Menu>
                </span>
              </Tooltip>
            
            <Link to="/cart">
              <Tooltip label="Cart">
                <span>
                  {" "}
                  <HiOutlineShoppingBag />
                </span>
              </Tooltip>
            </Link>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
