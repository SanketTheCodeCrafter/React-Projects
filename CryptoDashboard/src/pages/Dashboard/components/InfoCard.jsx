import { Card, Tag, Text } from '@chakra-ui/react'
import React from 'react'

const InfoCard = ({ imgurl, text, tagText, inverted }) => {
  return (
    <div>
      <Card
        bgColor={inverted ? "#5F00D9" : "white"}
        bgImage={imgurl}
        bgSize={"cover"}
        bgRepeat={"no-repeat"}
        marginBottom={"1rem"}
      >
        <Tag
          color={inverted ? "#5F00D9" : "white"}
          bg={inverted ? "white" : "#5F00D9"}
          borderRadius={"full"}
          h={5}
          width={100}
          fontSize={"lg"}
          fontWeight={600}
          padding={5}
          marginLeft={"1rem"}
          marginTop={"1rem"}
        >

          {tagText}</Tag>
        <Text
        color={inverted ? "white" : "black"} 
        fontWeight={"bold"}
        margin={5}
        fontSize={"1rem"}
        >{text}</Text>
      </Card>
    </div>
  )
}

export default InfoCard