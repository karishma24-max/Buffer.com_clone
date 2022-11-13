import { Box, Flex, Heading, Image, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { AiFillFileImage, AiFillInstagram } from 'react-icons/ai'


const Schedule = ({text,img,id,date,month,year}) => {
  console.log(img)
  return (
    <Tooltip hasArrow label=<Box>
    <Box > <Image ml="20px"  w="200px" h="160px" mb="50px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} borderRadius={"5px"} src={img} alt=""/></Box>
    
  </Box>
   
  
     placement="right" w="300px" h="200px" bg="white" pb="30px" textAlign={"center"} alignItems="center" pt="30px" pl="20px" borderRadius={"10px"}>
    <Flex w="85px" mt="3px" h="30px" pt="5px" boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px;"} borderRadius="10px" textAlign={"center"}  >
      <AiFillFileImage size="20px"/>
      
      <Text fontSize={"10px"} fontWeight="bold">12:00 PM</Text>
      <AiFillInstagram size="20px"/>
      {/* <Image w="20px" h="20px" borderRadius={"10px"} src={img} alt=""/> */}
    </Flex>
    </Tooltip>
  )
}

export default Schedule