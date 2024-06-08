import {
  Box,
  Container,
  Flex,
  Heading,
  Select,
  SimpleGrid,
  Image,Button
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNav from "../Components/LeftNav";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";
import {
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { CloseIcon, SearchIcon } from "@chakra-ui/icons";

const Shop = () => {
  const [sortVal, setSortVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async () => {
    if (searchQuery.trim() === "") {
      setProducts([]);
      return;
    }
    setIsSearching(true);
    try {
      const response = await axios.get(
        `http://localhost:3000/products?q=${searchQuery}`
      );
      if(response?.data.length==0){
        alert("no product found")
      }
      // console.log(response?.data);
      setProducts(response?.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
    setIsSearching(false);
  };

   
   
   
   

  async function getData(sortVal) {
    setLoading(true);
    try {
      const queryparams = {};
      if (sortVal) {
        queryparams._sort = "price";
        queryparams._order = sortVal;
      }
      const res = await axios({
        method: "get",
        url: "http://localhost:3000/products",
        params: queryparams,
      });
      // console.log(res?.data);
      setData(res?.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErr(true);
      alert("something went wrong while getting products");
    }
  }

  useEffect(() => {
    getData(sortVal);
  }, [sortVal]);

  loading && <Loading />;
  return (
    <Container m={0} p={0} mt={10}>
      <Box width="100%" p={4} ml="800px"> 
        <InputGroup>
          <Input
          
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              handleSearch;
            }}
             
          />
          <InputRightElement width="4.5rem">
            
          <Button
              aria-label="Search"
              size="sm"
              onClick={handleSearch}
              isLoading={isSearching}
              rightIcon={<SearchIcon />}
            >
              Search
            </Button>
            
            
            
            
            
          </InputRightElement>
        </InputGroup>
        <Box mt={4}>
          {products.length > 0 && (
            <ul>
              <SimpleGrid columns={4} gap={4}>
                {products.map((product) => (
                  <Box
                  key={product.id}
                    ml={10}
                    fontWeight={700}
                    fontSize="18px"
                    textAlign="center"
                    alignItems="center"
                  >
                    <Image boxSize="100px" src={product.image} />
                    {product.title}
                  </Box>
                ))}
              </SimpleGrid>
            </ul>
          )}
        </Box>
      </Box>
      <Box w="1688px">
        <Heading textAlign="center" fontWeight={600}>
          Products
        </Heading>
        <Flex align="center">
          <Box pl={24} mb={3300} w="20%">
            <LeftNav />
          </Box>
          <Box w="80%" p={4}>
            <Select
              bg="#EDF2F7"
              placeholder="Sort by Price"
              w="200px"
              m="auto"
              onChange={(e) => setSortVal(e.target.value)}
            >
              <option value="asc">Low to High</option>
              <option value="desc">High to Low</option>
            </Select>
            <SimpleGrid columns={1} gap={4} mt={4}>
              {data.map((item, index) => {
                return <ProductCard key={index} {...item} />;
              })}
            </SimpleGrid>
          </Box>
        </Flex>
      </Box>
    </Container>
  );
};

export default Shop;
