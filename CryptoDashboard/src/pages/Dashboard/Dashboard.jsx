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
    <DashboardLayout title={"Dashboard"}
    >
      <Grid>
        <GridItem><PortfolioSection/></GridItem>
        <GridItem><PricingSection/></GridItem>
        {/* <GridItem><Transactions/></GridItem>
        <GridItem><InfoCard/></GridItem>
        <GridItem><InfoCard/></GridItem> */}
      </Grid>
    </DashboardLayout>
  )
}

export default Dashboard