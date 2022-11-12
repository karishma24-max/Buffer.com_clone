import React, { useEffect, useState } from 'react'

import {ArrowBackIcon,ArrowForwardIcon } from '@chakra-ui/icons'
import { background, Box, Button, Flex, Heading, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer, Text, Tooltip, useDisclosure } from '@chakra-ui/react'

import { AiFillFileImage } from 'react-icons/ai'
import axios from 'axios'
import Schedule from './Schedule'

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












const Calender = ({startingDate,displaydata,userdisplay,setdata,arrdata}) => {


  


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


    
  
  let x= new Date()

  const current= x.getDate()
  const current1= x.getMonth()
  const current2= x.getFullYear()
  console.log(current)
  const [userdata,setUserdata]=useState({img:"",text:"",date:""})
  
  const handledata=(e,day)=>{
    const {value, name} = e.target
    
        setUserdata({...userdata,[name]:value,date:day})
}

const handlesubmit=()=>
{
let response=axios.post("http://localhost:8000/data",userdata)
console.log(response.data)
setdata()
}
  return (
    <div><Flex mt="30px">
    <img src="C:\fakepath\WhatsApp Image 2022-10-10 at 8.57.28 PM.jpeg" alt=""/>
  <Flex>  <Button ml="50px" onClick={prevmonth}><ArrowBackIcon/></Button><Heading size='md'>Today</Heading><Button onClick={nextmonth}><ArrowForwardIcon/>
    </Button> <Heading  size='md' ml="10px">{date.toLocaleString('en-US',{month:"long"})}{currentYear}</Heading></Flex>
    <Spacer />
     <Box><Button ml={4}>All posts</Button><Button ml={4}>All Channels</Button><Button ml={4} c={"blue"} bg={"cornflowerblue"}>Month</Button><Button ml={4} bg={"blue"}>Create Posts</Button></Box></Flex>


    <div className="calender-box">
    <div className="calender-title">{getSorteddays(currentMonth,currentYear).map((day)=><div>{day}</div>)}</div>

    <div className="calender-body">{range(getdays).map((day)=>
<Tooltip  hasArrow  label='Create Post' bg="cornflowerblue"  placement='right'><div className='styledate' 
style={{
         background: current > day ? 'rgb(237, 229, 229)': "white" ,
        
         fontWeight:current===day?"bold":"none",
         color:current === day? "cornflowerblue":"black"
        }}


 onClick={onOpen}    ><Box w="50px" h="50px" >{day}{arrdata.map((ele)=><div >{ele.date == day? <Schedule text={ele.text} img={ele.img} id={ele.id} date={ele.date} month={current1} year={current2}/>:""}</div>)}
 
  
  
  
  
  
  
  
  </Box> 
    
  </div></Tooltip>)}</div> 
  </div>
 
  <Box>
<Modal isOpen={isOpen} onClose={onClose} size="xl" bg="white">
        <ModalOverlay  />
        <ModalContent bg="white" height="500px">
          
          <ModalCloseButton color="grey" />
         <ModalBody>
         
         
         
         <Box border="2px solid lightgrey" mt={10} ml={10} mr={10} mb={10} height="420px">
         <Flex><Box w="120px" color="blue" textAlign={"center"}><Input type="file" color="grey" border="2px dotted" mr="20px" mt="50px"   name="img" onChange={handledata} / >
        <Box ml="35px" mt="40px"> <AiFillFileImage size="50px" color="rgb(91, 87, 87)"/>
         </Box>select your file 
         <Input onChange ={handledata}  name="date" />

          </Box>

        <Input placeholder="What would you like to share" name="text" onChange={handledata} w="70%" h="300px" />

         </Flex> </Box> <Button onClick={handlesubmit}>Submit</Button></ModalBody>
         </ModalContent>
          </Modal>
  
          </Box> 
    
</div>
  )
}

export default Calender