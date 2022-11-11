import { Box, Button, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineThunderbolt, AiTwotoneCalendar} from "react-icons/ai"
import {ChevronDownIcon} from "@chakra-ui/icons"
const Sidebar = () => {

  return (
    <Box w="280px" border="1px solid grey" ml="10px"  mt="30px"><Box w="170px" pr="20px" pl="10px" pt="10px" ml="10px"  h="50px" mt="30px" fontWeight="bold"  borderRadius="5px" color='blue' bg="rgb(91, 141, 234)" size='md' ><Flex><AiTwotoneCalendar pr="5px" pt="3px"/><Spacer/> Calender</Flex></Box>
    <Flex w="200px" ml="10px" alignItems="center" w="170px"  fontWeight="bold"     h="50px" mt="30px" borderRadius="5px"  ><AiOutlineThunderbolt color="grey" ml="10px" size="20px"/> Campaign  <Spacer/>     <Box w="50px" h="30px" pt="7px" pl="14px"  bg="#E9D8FD" borderRadius="20px"><AiOutlineThunderbolt color="#9F7AEA"/></Box></Flex>
    
    <Box w="100px" fontWeight="bold" pl="10px"    h="50px" mt="30px" borderRadius="5px" b> <ChevronDownIcon/> Queue</Box>
    </Box>
  )
}

export default Sidebar