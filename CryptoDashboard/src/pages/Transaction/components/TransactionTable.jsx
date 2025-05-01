import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Text,
    Tag,
} from '@chakra-ui/react'

const TransactionTable = () => {
    const tableData = [
        {
            id: "HD82NA2H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "INR Deposit",
                tag: "E-Transfer",
            },
            amount: "+₹81,123",
            status: "Pending",
        },
        {
            id: "HD82NA4H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "INR Widthdraw",
                tag: "Wire Transfer",
            },
            amount: "-₹55,123",
            status: "Processing",
        },
        {
            id: "HD82NA5H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Buy",
                tag: "BTC",
            },
            amount: "12.0554484 BTC",
            status: "Cancelled",
        },
        {
            id: "HD82NA6H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "Sell",
                tag: "BTC",
            },
            amount: "-2.0554484 BTC",
            status: "Completed",
        },
        {
            id: "HD82NA7H",
            date: "2023-06-20",
            time: "07:00 AM",
            type: {
                name: "BTC Deposit",
            },
            amount: "+15.5000000",
            status: "Pending",
        },
        {
            id: "HD82NA8H",
            date: "2023-06-18",
            time: "07:00 AM",
            type: {
                name: "BTC Widthdraw",
            },
            amount: "-5.05555544",
            status: "Completed",
        },
    ];

    const statusColor = {
        Pending: "#797E82",
        Processing: "#F5A50B",
        Completed: "#059669",
        Cancelled: "#DC2626",
    };

    return (
        <>
            <TableContainer bg={"white"}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>ID</Th>
                            <Th>Date & Time</Th>
                            <Th>Type</Th>
                            <Th>Amount</Th>
                            <Th>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tableData.map((data) => (

                            <Tr>
                                <Td fontSize={"md"} fontWeight={"bold"}>{data.id}</Td>
                                <Td>
                                    <Stack spacing={0}>
                                        <Text fontWeight={"bold"}>{data.date}</Text>
                                        <Text fontSize={"smaller"} color={"gray.500"}>{data.time}</Text>
                                    </Stack>
                                </Td>
                                <Td>
                                    <Stack spacing={0}>
                                        <Text fontWeight={"bold"}>{data.type.name}</Text>
                                        <Text fontSize={"smaller"} color={"gray.500"}>{data.type.tag}</Text>
                                    </Stack>
                                </Td>
                                <Td fontWeight={"bold"}>{data.amount}</Td>
                                <Td>
                                    <Tag
                                        fontSize={"md"}
                                        bg={statusColor[data.status]}
                                        color={"white"}
                                        borderRadius={"full"}
                                        textAlign={"center"}
                                    >{data.status}</Tag>
                                </Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default TransactionTable