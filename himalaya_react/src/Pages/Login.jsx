import { Button, Container, Heading, VStack,Text } from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { Input } from "@chakra-ui/react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleLogin() {
    try {
      let res = await axios.post("https://reqres.in/api/login", {
        email,
        password,
      });
      setToken(res?.data?.token);
      setIsAuthenticated(true);
      console.log(res?.data?.token);
      navigate("/");
      
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <Container mt={4}>
      <Heading mb={3}  textAlign="center" fontWeight={600}>Already Registered ?</Heading>
      <VStack spacing={6}>
      <Heading mb={1}  size="lg"  fontWeight={400}>Login</Heading>
       
        <Input
           
          placeholder="Enter E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button w="480px" color="white" onClick={handleLogin} bg="rgb(163,180,155)" _hover={{bg:"RGBA(0, 0, 0, 0.64)"}} variant="solid">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;
