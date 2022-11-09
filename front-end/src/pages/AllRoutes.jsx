import { Switch } from '@chakra-ui/react'
import React from 'react'
import {Route,Routes} from "react-router-dom"
import Signup from './Authentication/Signup'
import Home from './Home'
import { MainPage_Template, template_arr } from './Start-Page/Main-Page-template/Main-Page-template'

import Publishing from './Publish/Publishing'

import { MainPage_Template } from './Start-Page/Main-Page-template/Main-Page-template'
function AllRoutes() {
  return (<Routes>
    <Route path="/" element={<Home/>}/>

    <Route path="/signup" element={<Signup/>}/>

    <Route path="/publish" element={<Publishing/>}/>

    <Route path="/start-page" element={<MainPage_Template/>}/>
    {
      template_arr.map((i)=> {
        if(i.file) {
          return <Route path={`/start-page/${i.path}`} element={i.file} /> 
        } else {
          return <Route path={`/start-page/${i.path}`} element={<h1>No data is here</h1>} />
        }
      })
    }

  </Routes>)
}

export default AllRoutes