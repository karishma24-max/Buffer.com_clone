import { Box, Button, Drawer, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Editing from "../pages/Editing-Page/Edititng.";
import DrawerComponents from "../pages/Start-Page/Drawer-Components/DrawerComponents";
import Styles from "./Template1.css";
// hashim you can send the props to this components from start page input elements

const getData = (id) => {
  console.log(id)

  return (id)
}




const Template1 = () => {
  // hashim you can send the props to this components from start page input elements


  const id = getData('Hello')

  console.log(id)

  return (
    <Box className="main">
       <Box className="head">
        <Box className="head-div">
          <Box display="flex" justifyContent="center">
            <Image
              display="block"
              boxSize="100px"
              objectFit="cover"
              // hashim you can send the props to this components from start page input elements src
              src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/1630246015634.buffer-logo.png"
              alt="main logo"
            />
          </Box>
          <Heading color="white">Start Page</Heading>
          <Text color="white">A place your business can call home</Text>
        </Box>
      </Box>
      {/* padding="35px 170px 35px 170px" */}
      <Box>
        <Button
          colorScheme="yellow"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          A link to anything →
        </Button>
      </Box>
      <Box className="description1">
        <Text>
        Make it your own! You can edit any of the existing blocks of content on this page or add new blocks.
        </Text>
      </Box>
      <Box width="380px" margin="auto">
        <Image
          src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/product-image.png"
          alt="mid"
          borderRadius="10px"
        />
      </Box>
      <Box className="description1">
        <Text>
          Second description lnosdfcndo dncdovnfv odncvdovhnervc
          odnveovcnefrvlnosdfcndo dncdovnfv odncvdovhnervc odnveovcnefrv
          dhnvcovcn dhnvcovcn
        </Text>
      </Box>
      <div className="video-responsive">
        <iframe
          width="750"
          height="480"
          src={`https://www.youtube.com/embed/EcDgL0ap60M`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Box>
  );
};

export default Template1;
