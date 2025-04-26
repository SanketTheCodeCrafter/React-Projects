import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { GrTransaction } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { Box, Heading, HStack, Icon, Stack, Text } from '@chakra-ui/react';


const SideNav = () => {

  const navItems = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/",
    },
    {
      icon: GrTransaction,
      text: "Transactions",
      link: "/transactions",
    }
  ];

  return (

    <Stack justify="space-between" boxShadow="lg" w={"16rem"} h={"100vh"}>
      <Box>
      <Heading as={"h1"} fontSize={"20px"} pt={"3.5rem"} textAlign={"center"}>NexaCoin</Heading>
      <Box mx={"3"} mt={"6"}>
        {navItems.map((nav) => (
          <HStack key={nav.text} py={"3"} px={"4"} borderRadius={"md"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717"
            }}
            color="#797E82"
            cursor={"pointer"}>
            <Icon as={nav.icon} />
            <Text fontSize={"14px"} fontWeight={"medium"}>{nav.text}</Text>
          </HStack>
        ))}
      </Box>
      </Box>

      <Box mx={"3"} mt={"6"} mb={"6"}>
           <HStack py={"3"} px={"4"} borderRadius={"md"}
            _hover={{
              bg: "#F3F3F7",
              color: "#171717"
            }}
            color="#797E82"
            cursor={"pointer"}>
            <Icon as={BiSupport} />
            <Text fontSize={"14px"} fontWeight={"medium"}>Support</Text>
          </HStack>
      </Box>
    </Stack>
  )
}

export default SideNav