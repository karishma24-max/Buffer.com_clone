import { Box, Button, Drawer, Heading, Image, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Editing from "../pages/Editing-Page/Edititng.";
import DrawerComponents from "../pages/Start-Page/Drawer-Components/DrawerComponents";
import Styles from "./Template1.css";
import axios from "axios"
import { useSelector } from "react-redux";


const Template1 = () => {
  
  const data = useSelector((store)=>store.template.payload)


  return (
    data && data.image1 && <Box className="main">
       <Box className="head">
        <Box className="head-div">
          <Box display="flex" justifyContent="center">
            <Image
              display={data.image1.display}
              boxSize={data.image1.boxSize}
              objectFit={data.image1.objectFit}
              // hashim you can send the props to this components from start page input elements src
              src={data.image1.src}
              alt={data.image1.alt}
            />
          </Box>
          <Heading color={data.heading1.color}>{data.heading1.content}</Heading>
          <Text color={data.text1.color}>{data.text1.content}</Text>
        </Box>
      </Box>
      {/* padding="35px 170px 35px 170px" */}
      <Box>
        <Button
          colorScheme={data.button1.colorScheme}
          width={data.button1.width}
          padding={data.button1.padding}
        >
          {data.button1.content}
        </Button>
      </Box>
      <Box className="description1">
        <Text>
          {data.description.content}
        </Text>
      </Box>
      <Box width="380px" margin="auto">
        <Image
          src={data.image2.src}
          alt="mid"
          borderRadius={data.image2.borderRadius}
        />
      </Box>
      <Box className="description1">
        <Text>
         {data.description2.content}
        </Text>
      </Box>
      <div className="video-responsive">
        <iframe
          width={data.iframe.width}
          height={data.iframe.height}
          src={data.iframe.src}
          frameBorder={data.iframe.frameBorder}
          allow={data.iframe.allow}
          allowFullScreen
          title={data.iframe.title}
        />
      </div>
    </Box>
  );
};

export default Template1;
