import { Button, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { AiOutlineArrowDown, AiOutlineArrowUp } from 'react-icons/ai'

const PortfolioSection = () => {
    return (
        <HStack bg={"white"} p={6} my={4} spacing={16} rounded={"xl"} >
            <Stack>
                <HStack>
                    <Text fontSize="sm" color="gray.600">Total Portfolio Value</Text>
                    <Icon as={AiOutlineInfoCircle} color="gray.500" />
                </HStack>
                <Text fontSize={"2xl"} fontWeight={"semibold"}>$ 1,000,000</Text>
            </Stack>
            <Stack>
                <HStack>
                    <Text fontSize="sm" color="gray.600">Wallet Balances</Text>
                </HStack>
                <HStack spacing={4}>
                    <HStack>
                        <Text fontSize={"2xl"} fontWeight="semibold">
                            22.364516
                        </Text>
                        <Tag>BTC</Tag>
                    </HStack>
                    <HStack>
                        <Text fontSize={"2xl"} fontWeight="semibold">
                            ₹ 1,300.00
                        </Text>
                        <Tag>INR</Tag>
                    </HStack>
                </HStack>
            </Stack>

            <HStack marginLeft={"9rem"} spacing={4}>
                <Button 
                    height={"38px"} 
                    bg={"#5F00D9"} 
                    color={"white"} 
                    leftIcon={<AiOutlineArrowDown/>}
                    _hover={{
                        bg: "#4B00AF",
                        transform: "translateY(-2px)",
                        boxShadow: "lg"
                    }}
                >
                    Deposit
                </Button>
                <Button 
                    height={"38px"} 
                    bg={"#5F00D9"} 
                    color={"white"} 
                    leftIcon={<AiOutlineArrowUp/>}
                    _hover={{
                        bg: "#4B00AF",
                        transform: "translateY(-2px)",
                        boxShadow: "lg"
                    }}
                >
                    Withdraw
                </Button>
            </HStack>
        </HStack>
    )
}

export default PortfolioSection