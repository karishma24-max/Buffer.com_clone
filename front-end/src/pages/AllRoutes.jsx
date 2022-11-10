import React from 'react'
import {Route,Routes} from "react-router-dom"
import Signup from './Authentication/Signup'
import Publish from './Navbar_Pages/Publish'
import Home from './Home'
import Publishing from './Publish/Publishing'
import { MainPage_Template } from './Start-Page/Main-Page-template/Main-Page-template'
import Channels from './Navbar_Pages/Channels'
function AllRoutes() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/signup" element={<Signup/>}/>
    <Route path="/publish" element={<Publishing/>}/>
    <Route path="/toolsdemo" element={<Publish/>}/>
    <Route path="/channelsdemo" element={<Channels/>}/>
    <Route path="/start-page" element={<MainPage_Template/>}/>
  </Routes>
}

export default AllRoutes