import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './Home'
import Publishing from './Publish/Publishing'
function AllRoutes() {
  return <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/publish" element={<Publishing/>}/>
  </Routes>
}

export default AllRoutes