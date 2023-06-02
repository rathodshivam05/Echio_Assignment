import { Box, Flex, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Products = () => {
    const [data, setData] = useState([]);

    const getAllProducts = () => {
        axios.get('https://fakestoreapi.com/products')
            .then((r) => setData(r.data))
            .catch((err) => console.log(err));
    }
    console.log(data)
    useEffect(() => {
        getAllProducts();
    }, [])
    return (
        <Box w="90%" mt={10}>
            <Text fontWeight={'semibold'}>Sort by</Text>
            <Flex gap={3} my={2}>
                <Text fontWeight={'semibold'} bg="gray.200" px={4} py={1.5} borderRadius={'50px'}>High to Low</Text>
                <Text fontWeight={'semibold'} bg="gray.200" px={4} py={1.5} borderRadius={'50px'}>Low to High</Text>
                <Text fontWeight={'semibold'} bg="gray.200" px={4} py={1.5} borderRadius={'50px'}>Newest</Text>
                <Text fontWeight={'semibold'} bg="gray.200" px={4} py={1.5} borderRadius={'50px'}>Popular</Text>
            </Flex>

            {
                data.map((e) => (
                    <Box key={e.id} h="200px" p={3} bgColor={'white'} shadow={'md'} mb={5}>
                        <Flex gap={4}>
                            <Image src={e.image} h="150px" w="200px" rounded={'md'} />
                            <Box mt={4}>
                                <Text fontWeight={'semibold'}>{e.title}</Text>
                                <Text w="80%" overflow={'hidden'}>{e.description}</Text>
                                <Text>{e.price} Rs.</Text>
                            </Box>
                        </Flex>
                    </Box>
                ))
            }


        </Box>
    )
}

export default Products
