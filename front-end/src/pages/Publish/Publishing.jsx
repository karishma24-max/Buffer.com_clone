

import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import UserNavbar from '../../components/UserNavbar';
import Calender from './Component/Calender';
// import 'react-calendar/dist/Calendar.css' 
import "./Component/Calender.css"
import Sidebar from './Component/Sidebar';
const Publishing = () => {
  const [arrdata, setArrdata] = useState([])

  const getdata = async () => {
    let response = await axios.get(`${process.env.REACT_APP_URL}/post`)
    return response

  }
  const [displaydata, setdisplaydata] = useState(0)
  const setdata = () => {
    getdata().then((response) => {
      setdisplaydata(response.data.length) 
      setArrdata(response.data)
    })
  }

  useEffect(() => {
    setdata()
  }, [displaydata])

  return (
    <>
      <UserNavbar />
      <Flex w="100%">
        <Sidebar displaydata={displaydata} />
        <Calender startingDate={new Date()} setdata={setdata} arrdata={arrdata} />
      </Flex>
    </>
  )
}

export default Publishing