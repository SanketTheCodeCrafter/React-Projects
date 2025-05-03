import React from 'react'
import ContactCard from './components/ContactCard'
import DashboardLayout from '../../components/DashboardLayout'
import { Text } from '@chakra-ui/react'
import SupportCard from './components/SupportCard'

const Support = () => {
  return (
    <DashboardLayout title={"Support"}>    
      <ContactCard/>
      <SupportCard/>
    </DashboardLayout>
  )
}

export default Support