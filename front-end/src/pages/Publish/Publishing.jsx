

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
    let response = await axios.get("http://localhost:8000/data")
    return response

  }
  const [displaydata, setdisplaydata] = useState(0)
  const [userdisplay, setUserdisplay] = useState("")
  const setdata = () => {
    getdata().then((response) => {
      setdisplaydata(response.data.length)
      setUserdisplay(response.data[displaydata - 1].text)
      setArrdata(response.data)
    })
  }

  useEffect(() => {
    setdata()
  }, [displaydata, userdisplay])

  return (
    <>
      <UserNavbar />
      <Flex w="100%">
        <Sidebar displaydata={displaydata} userdisplay={userdisplay} />
        <Calender startingDate={new Date()} setdata={setdata} arrdata={arrdata} />
      </Flex>
    </>
  )
}

export default Publishing