import React, { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Heading,
  Button,
  IconButton,
  HStack,
  VStack,
   
} from "@chakra-ui/react";
import { DeleteIcon, RepeatIcon, ChevronLeftIcon } from "@chakra-ui/icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
const navigate=useNavigate();

  const fetchCartItems = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cart");
      setCart(response?.data);
    } catch (error) {
      console.error("Error fetching cart items", error);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);

  const incrementQuantity = async (id) => {
    const item = cart.find((product) => product.id === id);
    const updatedItem = { ...item, quantity: item.quantity + 1 };

    await axios.put(`http://localhost:3000/cart/${id}`, updatedItem);
    fetchCartItems();
  };

  const decrementQuantity = async (id) => {
    const item = cart.find((product) => product.id === id);
    if (item.quantity > 1) {
      const updatedItem = { ...item, quantity: item.quantity - 1 };

      await axios.put(`http://localhost:3000/cart/${id}`, updatedItem);
      fetchCartItems();
    }
  };

  const removeItem = async (id) => {
    await axios.delete(`http://localhost:3000/cart/${id}`);
    fetchCartItems();
  };

  const clearCart = async () => {
    for (const item of cart) {
      await axios.delete(`http://localhost:3000/cart/${item.id}`);
    }
    fetchCartItems();
  };

  const updateCart = () => {
    fetchCartItems();
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Box p={8}>
      <Heading as="h1" size="xl" mb={8} textAlign="center">
        Shopping Cart
      </Heading>
      <VStack spacing={8} align="stretch">
        {cart.map((item) => (
          <Flex mx={100} key={item.id} align="center" justify="center">
            <IconButton
              icon={<DeleteIcon />}
              onClick={() => removeItem(item.id)}
              aria-label="Remove item"
            />
            <Image
              src={item.image}
              alt={item.title}
              boxSize="200px"
              objectFit="cover"
            />
            <Text flex="1" ml={4} fontWeight={600} fontSize="20px">
              {item.title}
            </Text>
            <Text>${item.price.toFixed(2)}</Text>

            <HStack mx={4} spacing={4}>
              <Button onClick={() => decrementQuantity(item.id)}>-</Button>
              <Text>{item.quantity}</Text>
              <Button onClick={() => incrementQuantity(item.id)}>+</Button>
            </HStack>
            <Text>${(item.price * item.quantity).toFixed(2)}</Text>
          </Flex>
        ))}
      </VStack>
      <Flex mx={100} mt={8} justify="space-between" align="center">
        <Button
          leftIcon={<ChevronLeftIcon />}
          onClick={() =>  navigate("/collections")}
        >
          Continue Shopping
        </Button>
        <HStack>
          <Button leftIcon={<DeleteIcon />} onClick={clearCart}>
            Clear Shopping Cart
          </Button>
          <Button leftIcon={<RepeatIcon />} onClick={updateCart}>
            Update Cart
          </Button>
        </HStack>
      </Flex>
      <Box
        mx={100}
        mt={8}
        p={8}
        bg="green.100"
        borderRadius="md"
        textAlign="center"
      >
        <Text>Subtotal: ${total.toFixed(2)}</Text>
        <Heading as="h2" size="lg" mt={4}>
          Grand Total: ${total.toFixed(2)}
        </Heading>
        <Button colorScheme="green" mt={4}>
          Proceed to Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
