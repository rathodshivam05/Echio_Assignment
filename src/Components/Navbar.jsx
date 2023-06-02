import { Avatar, Box, Flex, Image, Spacer } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css';
import { BellIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (
        <Flex shadow={'xl'} border='1px solid white' bg={'white'} w="90%" m='auto' borderRadius={'50px'} align='center'>
            <Image src='https://echio.in/assets/images/logo-dark.png' w="150px" ml={3} mt={1} h="50px" />
            <Spacer />
            <Flex align='center'>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.default
                    }
                    to='/'
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        isActive ? styles.active : styles.default
                    }
                    to='/mycampaign'
                >
                    My Campaign
                </NavLink>
            </Flex>
            <Spacer />
            <Box mr={15}>
                <BellIcon color={'gray'} boxSize={6} mr={5} />
                <Avatar boxSize={8} mr={5} />
            </Box>
        </Flex>
    )
}

export default Navbar
