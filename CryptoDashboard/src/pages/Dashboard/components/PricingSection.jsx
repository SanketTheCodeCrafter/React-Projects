import React from 'react'
import { Button, Flex, HStack, Icon, Stack, Tabs, TabList, Tab, Text, TabPanels } from '@chakra-ui/react';
import { BsArrowUpRight } from 'react-icons/bs';
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { time } from 'framer-motion';

const PricingSection = () => {
    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];

    return (
        <>
            <Flex direction="column" alignItems="flex-end" w="50%">
                <Flex spacing={4} p={4} borderRadius="lg" w="100%" bg="white" flexDirection="column">
                    <Stack>
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
                        <HStack marginLeft="21rem" marginTop={"-4rem"} spacing={4}>
                            <Button height="38px" bg="#5F00D9" color="white" gap={2}>
                                <Icon as={AiFillPlusCircle}></Icon>
                                <Text>Buy</Text>
                            </Button>
                            <Button height="38px" bg="#5F00D9" color="white" gap={2}>
                                <Icon as={AiOutlineMinusCircle}></Icon>
                                <Text>Sell</Text>
                            </Button>
                        </HStack>
                    </Stack>

                    <Flex justify={"end"}>
                        <Tabs variant="enclosed" mt={"1rem"}  bg={"#f7f7f7"} borderRadius={"xl"}>
                            <TabList>
                                {["1H", "1D", "1W", "1M"].map((tab)=>(
                                    <Tab
                                        _selected={{ color: "black", bg: "#dddadaec" }}
                                        key={tab}
                                        rounded={"xl"}
                                    >{tab}</Tab>
                                ))}
                            </TabList>
                        </Tabs>
                    </Flex>
                    <img src="/graph.svg" alt="" />
                         <HStack justify={"space-between"} mt={"1rem"}>
                            {timestamps.map((timestamp, index)=>(
                                <Text key={index} textColor={"gray.400"}>{timestamp}</Text>
                            ))}
                        </HStack>
                 </Flex>
            </Flex>
        </>
    )
}

export default PricingSection