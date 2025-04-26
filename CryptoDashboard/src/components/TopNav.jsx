import { Box, Button, Container, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { BiChevronDownCircle } from 'react-icons/bi'
import {FaUserTie} from "react-icons/fa"

const TopNav = ({title}) => {
    return (
        <Box>
            <HStack maxW={"70rem"} h={"16"} justify={"space-between"} mx={"auto"}>
                <Heading fontSize={"28px"}>{title}</Heading>

                <Menu>
                    <MenuButton rounded={"50%"}>
                        <Icon as={FaUserTie} fontSize={"24px"}/>
                    </MenuButton>

                    <MenuList>
                        <MenuItem>Logout</MenuItem>
                        <MenuItem>Support</MenuItem>
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default TopNav