import React from 'react'
import InfoCard from '../../Dashboard/components/InfoCard'
import { Box, Icon, Stack } from '@chakra-ui/react'
import { Card, Tag, Text } from '@chakra-ui/react'
import { AiTwotoneMessage } from "react-icons/ai";


const SupportCard = () => {
    return (
        <>
            <Stack alignItems={"center"} >
                <Stack direction={"row"} gap={10}>

                    <Stack w={"70%"}>
                        <Icon as={AiTwotoneMessage} fontSize={"2xl"} color={"#5F00D9"} />
                        <Text fontSize={"2xl"} fontWeight={"bold"}>Live Chat</Text>
                        <Text>Don’t have time to wait for the answer? Chat with us now.</Text>
                    </Stack>
                    <Card
                        bgColor="#5F00D9"
                        bgImage={"/dot_bg.svg"}
                        bgSize={"cover"}
                        bgRepeat={"no-repeat"}
                        marginBottom={"1rem"}
                        paddingRight={"12rem"}
                        width={"100%"}
                    >
                        <Tag
                            color="#5F00D9"
                            bgColor="white"
                            borderRadius={"full"}
                            h={5}
                            width={100}
                            fontSize={"lg"}
                            fontWeight={600}
                            padding={5}
                            marginLeft={"1rem"}
                            marginTop={"1rem"}
                        >

                            Chatbot</Tag>
                        <Text
                            color="white"
                            fontWeight={"bold"}
                            margin={5}
                            fontSize={"1rem"}
                        >Chat with our AI</Text>
                    </Card>
                </Stack>
            </Stack>
        </>
    )
}

export default SupportCard