import { Button, Divider, Flex, Grid, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react'
import { BsCurrencyRupee } from "react-icons/bs"
import { FaBtc } from 'react-icons/fa';

const Transactions = () => {
  const transactions = [
    {
      id: "1",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "2",
      icon: FaBtc,
      text: "BTC  Sell",
      amount: "- 12.48513391 BTC",
      timestamp: "2022-06-09 7:06 PM",
    },
    {
      id: "3",
      icon: BsCurrencyRupee,
      text: "INR Deposit",
      amount: "+ ₹81,123.10",
      timestamp: "2022-06-09 7:06 PM",
    },
  ];
  return (
    <div>
      <Flex direction={"column"} w={"full"} bg={"white"} p={4} borderRadius={"lg"}>
        <HStack >
          <Text fontWeight={"light"} color={"gray.500"}>
            Recent Transactions
          </Text>
        </HStack>

        {transactions.map((transaction, i) => (
          <React.Fragment key={transaction.id}>
            <Stack direction={"row"} alignItems={"center"} p={3}>
              <Icon as={transaction.icon} color={"gray.500"} fontSize={"2xl"} m={1} />
              <Stack>
                <Text marginRight={"10rem"} fontWeight={"normal"}>
                  {transaction.text}
                </Text>
                <Text fontSize={"sm"} color={"gray.400"} marginTop={-1}>
                  {transaction.timestamp}
                </Text>
              </Stack>
              <Text marginLeft={"4rem"} fontWeight={"bold"}>
                {transaction.amount}
              </Text>
            </Stack>
            {i < transactions.length - 1 && <Divider />}
          </React.Fragment>
        ))}

        <Button colorScheme='gray' w={"full"}>
          View All
        </Button>
      </Flex>
    </div>
  )
}

export default Transactions