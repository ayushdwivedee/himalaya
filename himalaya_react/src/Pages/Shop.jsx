import {
  Box,
  Container,
  Flex,
  Heading,
  Select,
  SimpleGrid,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import LeftNav from "../Components/LeftNav";
import Loading from "../Components/Loading";
import ProductCard from "../Components/ProductCard";

const Shop = () => {
  const [sortVal, setSortVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

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
      <Box w="1688px"  >
        <Heading textAlign="center" fontWeight={600}>
          Products
        </Heading>
        <Flex align="center">
          <Box
            
            pl={24}
            mb={3300}
            
            w="20%"
            
          >
            <LeftNav />
          </Box>
          <Box     w="80%" p={4}>
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
