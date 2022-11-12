
import React from 'react'
import {Route,Routes} from "react-router-dom"
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



function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/publish" element={<Publishing />} />
      <Route path="/toolsdemo" element={<Publish />} />
      <Route path="/channelsdemo" element={<Channels />} />
      <Route path="/pricingdemo" element={<Pricing />} />
      <Route path="/blogdemo" element={<Blog />} />
      <Route path="/about" element={<About />} />
      <Route path="/customersdemo" element={<Customers />} />
      <Route path="/start-page" element={<MainPage_Template />} />
      {template_arr.map((i) => {

          return (
            <Route
              key={i.path}
              path={`/start-page/:id`}
              element={<Editing />}
            />
          )
      })}
    </Routes>
  );

}
export default AllRoutes;