import React from 'react'
import { Button, Grid, GridItem, HStack, Icon, Input, Stack, Text, Flex, Card, Tabs, Tab, Tag, TabList, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { AiFillPlusCircle, AiOutlineMinusCircle, AiOutlineSearch, AiOutlineFileSearch } from "react-icons/ai";
import { Divider } from '@chakra-ui/react';
import DashboardLayout from '../../components/DashboardLayout';
import { AiOutlineDownload } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import TransactionTable from './components/TransactionTable';


const Transaction = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <>
      <DashboardLayout title={"Transactions"}>
        <Flex justify={"end"} mt={2} mb={4}>
          <Button mt={5} leftIcon={<Icon as={AiOutlineDownload} />} bg={"#5F00D9"} color={"white"}>Export CSV</Button>
        </Flex>

        <Card borderRadius={"md"}>
          <Tabs>
            <TabList pt={4} display={"flex"} w={"full"} justifyContent={"space-between"}>

            <HStack>
              {tabs.map((tab) => (
                <Tab key={tab.name} display={"flex"} gap={2} pb={4}>{tab.name}{""}
                  <Tag>{tab.count}</Tag>
                </Tab>
              ))}
            </HStack>

            <InputGroup maxW="200px" pr="6">
              <InputLeftElement pointerEvents="none">
                <Icon as={BsSearch} />
              </InputLeftElement>
              <Input type="tel" placeholder="Search..." />
            </InputGroup>
            </TabList>
          </Tabs>
        </Card>

        <TransactionTable/>
      </DashboardLayout>
    </>
  )
}

export default Transaction