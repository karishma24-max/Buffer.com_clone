import { Box, Button, Flex, Spacer, Text, Tooltip } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import {AiFillInstagram, AiOutlineThunderbolt, AiTwotoneCalendar} from "react-icons/ai"
import {ChevronDownIcon} from "@chakra-ui/icons"
import axios from 'axios'

const Sidebar = ({displaydata,userdisplay}) => {
  
  return (
    <Box w="250px" ml="10px" h="570px" borderRadius={"10px"} boxShadow={" rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset"} 
    mt="30px" ><Box w="170px" pr="20px" pl="10px" pt="10px" ml="10px"  
     h="50px" mt="30px" fontWeight="bold" borderRadius={'5px'}  color='blue' bg="rgb(91, 141, 234)" size='md' ><Flex><AiTwotoneCalendar pr="5px" pt="3px" bg="white"/><Spacer/> Calender</Flex></Box>
  
 

    <Flex w="200px" ml="10px" alignItems="center" w="170px"  fontWeight="bold"     h="50px" mt="30px" borderRadius="5px"  ><AiOutlineThunderbolt color="grey" ml="10px" size="20px"/> Campaign  <Spacer/>     <Box w="50px" h="30px" pt="7px" pl="14px"  bg="#E9D8FD" borderRadius="20px"><AiOutlineThunderbolt color="#9F7AEA"/></Box></Flex>
    <hr/>
    <Box w="200px" fontWeight="bold" pl="10px"    h="50px" mt="30px" borderRadius="5px" b> <ChevronDownIcon/> Queue
    <Box><Flex  mt="10px" bg="#E9D8FD" height="40px" width="170px" borderRadius="10px" pl="10px" alignItems={"center"}><AiFillInstagram/> {displaydata}<Button w="20px" h="20px" 
    borderRadius="10px" bg="lightgreen" ml="60px">new</Button></Flex></Box></Box>




    </Box>
  )
}

export default  Sidebar