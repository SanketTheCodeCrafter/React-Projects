import React from 'react'
import { Button, Flex, HStack, Icon, Stack, Tabs, TabList, Tab, Text } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";



const PricingSection = () => {
    return (
        <Flex spacing={4} p={4} borderRadius={"lg"} w={"50%"} bg={"white"}>
            <Stack >
                <HStack>
                    <Text fontSize="sm" color="gray.600">Current Price</Text>
                </HStack>
                <HStack>
                    <Text fontSize="2xl" fontWeight="semibold">
                        ₹26,670.25
                    </Text>
                    <HStack fontWeight="medium" color="green.500">
                        <Icon as={BsArrowUpRight} />
                        <Text fontSize="sm" fontWeight="medium">
                            22%
                        </Text>
                    </HStack>
                </HStack>
            </Stack>
            <HStack marginLeft={"9rem"} spacing={4}>
                <Button height={"38px"} bg={"#5F00D9"} color={"white"} gap={2}>
                    <Icon as={AiFillPlusCircle}></Icon>
                    <Text>Buy</Text>
                </Button>
                <Button height={"38px"} bg={"#5F00D9"} color={"white"} gap={2}>
                    <Icon as={AiOutlineMinusCircle}></Icon>
                    <Text>Sell</Text>
                </Button>
            </HStack>

            
            <Tabs variant="enclosed">
                <TabList>
                    <Tab>Tab 1</Tab>
                    <Tab>Tab 2</Tab>
                    <Tab>Tab 3</Tab>
                </TabList>
            </Tabs> 
        </Flex>
    )
}

export default PricingSection