

import { Flex } from '@chakra-ui/react';
import Calender from './Component/Calender';
// import 'react-calendar/dist/Calendar.css' 
import "./Component/Calender.css"
import Sidebar from './Component/Sidebar';
const Publishing = () => {
    

  return (
    <Flex w="100%">
    <Sidebar/>
    <Calender startingDate={new Date()}/>
   </Flex>
  )
}

export default Publishing