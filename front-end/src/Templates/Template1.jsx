import { Box, Button, Drawer, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Editing from "../pages/Editing-Page/Edititng.";
import DrawerComponents from "../pages/Start-Page/Drawer-Components/DrawerComponents";
import Styles from "./Template1.css";
import axios from "axios"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Template3 from "./Template3";
import Template4 from "./Template4"
import Template2 from "./Template2";


const Template1 = () => {
  
  const data = useSelector((store)=> store.template.templatearr)

  const {id} = useParams()

  if(id === "636df8ea89fa2c93fa685748") {
    return (
      data && data.image1display && <Box className="main">
          <Box className="head">
           <Box className="head-div">
             <Box display="flex" justifyContent="center">
               <Image
                 display={data.image1display}
                 boxSize={data.image1boxSize}
                 objectFit={data.image1objectFit}
                 // hashim you can send the props to this components from start page input elements src
                 src={data.image1src}
                 alt={data.image1alt}
               />
             </Box>
             <Heading color={data.heading1color}>{data.heading1content}</Heading>
             <Text color={data.text1color}>{data.text1content}</Text>
           </Box>
         </Box>
         {/* padding="35px 170px 35px 170px" */}
         <Box>
           <Button
             colorScheme={data.button1colorScheme}
             width={data.button1width}
             padding={data.button1padding}
           >
             {data.button1content}
           </Button>
         </Box>
         <Box className="description1">
           <Text>
             {data.descriptioncontent}
           </Text>
         </Box>
         <Box width="380px" margin="auto">
           <Image
             src={data.image2src}
             alt="mid"
             borderRadius={data.image2borderRadius}
           />
         </Box>
         <Box className="description1">
           <Text>
            {data.description2content}
           </Text>
         </Box>
         <div className="video-responsive">
           <iframe
             width={data.iframewidth}
             height={data.iframeheight}
             src={data.iframesrc}
             frameBorder={data.iframeframeBorder}
             allow={data.iframeallow}
             allowFullScreen
             title={data.iframetitle}
           />
         </div>
       </Box>
     )
  } else if (id === "636df8ea89fa2c93fa685749") {

    return <Template2></Template2>

  } else if (id === '636df8ea89fa2c93fa68574a') {
    return <Template3></Template3>
  } else {
    return <Template4 />
  }
 
};

export default Template1;
