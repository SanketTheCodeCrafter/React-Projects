import { Box, Button, Checkbox, FormControl, FormLabel, HStack, Icon, Input, Stack, Text, Textarea } from '@chakra-ui/react'
import React from 'react'
import { IoMdMail } from "react-icons/io"


const ContactCard = () => {
    return (
        <>
            <Stack direction={"row"} gap={5} p={"1.4rem"}>

                <Box w={"50%"}>
                    <Stack gap={4}>
                        <Icon as={IoMdMail} fontSize={"2xl"} color={"#5F00D9"} />
                        <Text fontSize={"3xl"} fontWeight={"bold"} color={"#5F00D9"}>Contact Us</Text>
                        <Text>Have a question or just want to know more? Feel free to reach out to us.</Text>
                    </Stack>
                </Box>
                <Box w={"50%"}>
                    <Stack bg={"white"} p={6} borderRadius={"xl"}>
                        <Text fontWeight={"bold"} mb={1}>
                            You will receive response within 24 hours of time of submit.
                        </Text>
                        <HStack flexDir={{
                            base: "column",
                            md: "row",
                        }}>
                            <FormControl>
                                <FormLabel fontWeight={"bold"}>Name</FormLabel>
                                <Input placeholder='James' />
                            </FormControl>
                            <FormControl>
                                <FormLabel fontWeight={"bold"}>Surname</FormLabel>
                                <Input placeholder='Arthur' />
                            </FormControl>
                        </HStack>
                        <FormControl>
                            <FormLabel fontWeight={"bold"}>
                                Email
                            </FormLabel>
                            <Input placeholder='name@gmail.com' />
                        </FormControl>
                        <FormControl>
                            <FormLabel fontWeight={"bold"}>
                                Message
                            </FormLabel>
                            <Textarea placeholder='Your message' />
                        </FormControl>
                        <Checkbox>
                            <Stack direction={"row"}>
                                <Text fontWeight={"bold"}>I agree with
                                </Text>
                                <Box as='span' color={"#5F00D9"} fontWeight={"bold"}>  Terms & conditions</Box>
                            </Stack>
                        </Checkbox>
                        <Stack>
                            <Button fontWeight={"bold"}>Send a Message</Button>
                            <Button fontWeight={"bold"}>Book a Meeting</Button>
                        </Stack>
                    </Stack>
                </Box>
            </Stack>

        </>
    )
}

export default ContactCard