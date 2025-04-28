import React from 'react'
import SideNav from '../../components/SideNav'
import TopNav from '../../components/TopNav'
import { Box, Flex, Grid, GridItem } from '@chakra-ui/react'
import DashboardLayout from '../../components/DashboardLayout'
import PortfolioSection from './components/PortfolioSection'
import PricingSection from './components/PricingSection'
import Transactions from './components/Transactions'
import InfoCard from './components/InfoCard'

const Dashboard = () => {
  return (
    <DashboardLayout title={"Dashboard"}>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem colSpan={2}><PortfolioSection/></GridItem>
        <GridItem><PricingSection/></GridItem>
        <GridItem><Transactions/></GridItem>
        <GridItem><InfoCard imgurl={"/dot_bg.svg"} text={"Learn more about Loans – Keep your Bitcoin, access it’s value without selling it"} tagText={"Loan"} inverted={false} /></GridItem>
        <GridItem><InfoCard imgurl={"/dot_bg.svg"} text={"Learn more about our real estate, mortgage, and  corporate account services"} tagText={"Contact"} inverted={true} /></GridItem>
              </Grid>
    </DashboardLayout>
  )
}

export default Dashboard