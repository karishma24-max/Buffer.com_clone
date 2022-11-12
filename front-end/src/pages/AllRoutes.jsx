
import React from 'react'
import { Route, Routes } from "react-router-dom"
import Home from './Home'
import Publishing from './Publish/Publishing'
import Signup from "./Authentication/Signup";
import Publish from "./Navbar_Pages/Publish";
import Signin from "./Authentication/signin";
import Channels from "./Navbar_Pages/Channels";
import Pricing from "./Navbar_Pages/Pricing";
import Blog from "./Navbar_Pages/Blog";
import About from "./Navbar_Pages/About";
import Customers from "./Navbar_Pages/Customers";
import {
  MainPage_Template,
  template_arr,
} from "./Start-Page/Main-Page-template/Main-Page-template";
import Editing from './Start-Page/Editing-Page/Edititng.'
import PrivRoutes from '../components/PrivateRoutes';
import SinglePublish from './Start-Page/SinglePublish';
import NotFound from './Start-Page/NotFound';



function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/publish" element={<PrivRoutes><Publishing /></PrivRoutes>} />
      <Route path="/toolsdemo" element={<Publish />} />
      <Route path="/channelsdemo" element={<Channels />} />
      <Route path="/pricingdemo" element={<Pricing />} />
      <Route path="/blogdemo" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/customersdemo" element={<Customers />} />
      <Route path="/start-page" element={<PrivRoutes><MainPage_Template /></PrivRoutes>} />
      {template_arr.map((i) => {

        return (
          <Route
            key={i.path}
            path={`/start-page/:id`}
            element={<PrivRoutes><Editing /></PrivRoutes>}
          />
        )
      })}
      <Route path='/publish-website/:id' element={<PrivRoutes><SinglePublish /></PrivRoutes>}></Route>
      <Route path='*' element={<NotFound />}></Route>
    </Routes>
  );

}
export default AllRoutes;