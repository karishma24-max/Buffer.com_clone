import React, { useState } from 'react'

import {ArrowBackIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import { background, Box, Button, Flex, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, useDisclosure } from '@chakra-ui/react'
import styled from '@emotion/styled'

// import Days from 'react-calendar/src/MonthView/Days'
const weekday=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

const range=(end)=>{
    const {result}=Array.from({length:end}).reduce(({result,current})=>({
        result:[...result,current],
        current:current+1
    }),{result:[],current:1}
  
    )

    return result
    
    

}
const getdaysinmonth=(month,year)=>{
return new Date(year,month+1,0).getDate()
}

const getSorteddays=(month,year)=>{
    const dayIndex= new Date(year,month,1).getDay() 
    return [...weekday.slice(dayIndex),...weekday.slice(0,dayIndex)]

}

const getdateobj=(day,month,year)=>{
    return new Date (year,month,day)
}

const aredatethesame=(first,second)=>{
    return first.getFullYear()===second.getFullYear()&& first.getMonth()===second.getMonth()&&first.getDate()===second.getDate()

}




const Calender = ({startingDate}) => {
    const [date,setDate]=useState(new Date())
   
   const [currentMonth,setcurrentMonth]=useState(startingDate.getMonth())
    date.setMonth(currentMonth )
   const [currentYear,setcurrentYear]=useState(startingDate.getFullYear());
const getdays=getdaysinmonth(currentMonth,currentYear)
const { isOpen, onOpen, onClose } = useDisclosure()

const nextmonth=()=>{
    if(currentMonth<11)
    {
        setcurrentMonth(prev=>prev+1)
    }
    else{
        setcurrentMonth(0)
        setcurrentYear(prev=>prev+1)
    }
}
    const prevmonth=()=>{
        if(currentMonth>-0)
        {
            setcurrentMonth(prev=>prev-1)
        }
        else{
            setcurrentMonth(11)
            setcurrentYear(prev=>prev-1)
        }
}
const [open,setopen]=useState(false)
function activemodal() {
   setopen(true)
   console.log(open)
    return (
      <>
        
  
        <Modal  onClose={onClose} onopen={open}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  return (
    <div><Flex>
  <Flex>  <Button onClick={prevmonth}><ArrowBackIcon/></Button><Heading>Today</Heading><Button onClick={nextmonth}><ArrowForwardIcon/>
    </Button> <Heading>{date.toLocaleString('en-US',{month:"long"})}{currentYear}</Heading></Flex>
    <Spacer />
     <Box><Button ml={4}>All posts</Button><Button ml={4} c={"blue"} bg={"cornflowerblue"}>Month</Button><Button ml={4} bg={"blue"}>Create Posts</Button></Box></Flex>


    <div className="calender-box">
    <div className="calender-title">{getSorteddays(currentMonth,currentYear).map((day)=><div>{day}</div>)}</div>

    <div className="calender-body">{range(getdays).map((day)=><div className='styledate'  onClick={()=>activemodal()}   active={console.log(aredatethesame(
        new Date(),getdateobj(day,currentMonth,currentYear)
    ))}   >{day} <p>+</p></div>)}</div>
  

    </div>
</div>
  )
}

export default Calender