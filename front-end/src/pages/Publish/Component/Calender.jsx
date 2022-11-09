import React, { useState } from 'react'
import Calendar  from 'react-calendar'

const Calender = () => {
    const [date,setDate]=useState(new Date())
const handleclick=()=>{
    console.log("gg")
    
}

  return (
    <div><Calendar onChange={setDate}  value={date}>
       
        
    </Calendar>
     <div className="text-center">
      Selected date: {date.toDateString()}
      </div></div>
  )
}

export default Calender