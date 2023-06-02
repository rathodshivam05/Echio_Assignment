import React from 'react'
import { Box, Flex, } from '@chakra-ui/react'
import BreadCrumb from './BreadCrumb'
import Sidebar from './Sidebar'
import Products from './Products'
const MyCampaign = () => {
    return (
        <Box w='90%' m='auto'>
            <BreadCrumb />
            <Flex gap={5}>
                <Sidebar />
                <Products />
            </Flex>
        </Box>
    )
}

export default MyCampaign
