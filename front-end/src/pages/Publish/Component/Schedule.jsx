import { Box, Flex, Heading, Image, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { AiFillFileImage, AiFillInstagram } from 'react-icons/ai'


const Schedule = ({text,img,id,date,month,year}) => {
  console.log(img)
  return (
    <Tooltip hasArrow label=<Box><Flex><Box><Flex><Heading size="30px" textAlign={"center"}>Title:-</Heading >{text} </Flex>
     <Flex> <Heading size="30px" >Date:-</Heading>{date}-{month}-{year}</Flex></Box>
    <Image ml="50px" w="100px" h="100px" borderRadius={"10px"} src={img} alt=""/>
    </Flex>
    </Box> placement="right" w="300px" h="200px" textAlign={"center"} alignItems="center" pt="30px" pl="20px" borderRadius={"10px"}>
    <Flex w="80px" mt="3px" h="30px" border="1px solid" borderRadius="10px" bg="#90CDF4" textAlign={"center"}  >
      <AiFillFileImage size="20px"/>
      
      <Text fontSize={"10px"} fontWeight="bold">Post {id}</Text>
      <AiFillInstagram size="20px"/>
      
    </Flex>
    </Tooltip>
  )
}

export default Schedule