 // StoreLocator.js
import React, { useState } from 'react';
import { Box, Input, InputGroup, InputRightElement, IconButton, Text, Flex } from '@chakra-ui/react';
// import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const StoreLocator = () => {
  const [search, setSearch] = useState('');
  const [stores, setStores] = useState([]); // Dummy state to hold store locations

  const handleSearch = () => {
    // Implement search functionality
    console.log('Search for:', search);
    // Dummy implementation: Set stores to an empty array
    setStores([]);
  };

  return (
    <Box p={10}>
      <Text fontSize="3xl" fontWeight="bold">Store Locator</Text>
      <InputGroup mt={5} mb={5}>
        <Input
          placeholder="Type a zip code or address..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <InputRightElement>
          <IconButton
            // icon={<FaSearch />}
            onClick={handleSearch}
          />
        </InputRightElement>
      </InputGroup>
      <Flex>
        <Box flex="1" mr={5}>
          <Flex align="center" mb={3}>
            {/* <FaMapMarkerAlt /> */}
            <Text ml={2}>Sorry, we didn't find any stores nearby.</Text>
          </Flex>
          {/* Optionally, list nearby stores if available */}
          {stores.map((store, index) => (
            <Box key={index}>
              <Text>{store.name}</Text>
            </Box>
          ))}
        </Box>
        <Box flex="2">
          <MapContainer center={[26.8467, 80.9462]} zoom={13} style={{ height: '400px', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/* Optionally, add store markers */}
            {stores.map((store, index) => (
              <Marker key={index} position={[store.lat, store.lng]}>
                <Popup>{store.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </Box>
      </Flex>
    </Box>
  );
};

export default StoreLocator;

 
 
 
 
 
 
 
 
 
 
 