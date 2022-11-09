import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import { MainPage_Template } from './Start-Page/Main-Page-template/Main-Page-template'
function AllRoutes() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/start-page" element={<MainPage_Template/>}/>
  </Routes>
}

export default AllRoutes