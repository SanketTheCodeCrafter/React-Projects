import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import SideNav from './SideNav'
import TopNav from './TopNav'

const DashboardLayout = ({ title, children }) => {
    return (
        <div>
            <Flex>
                <SideNav />
                <Box flexGrow={1}>
                    <TopNav title={title} />
                    <Container maxW={"80rem"} bg={"#514f4d33"}>{children}</Container>
                </Box>
            </Flex>
        </div>
    )
}

export default DashboardLayout