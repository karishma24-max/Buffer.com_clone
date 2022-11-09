import { Box, Button, Drawer, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Editing from "../pages/Editing-Page/Edititng.";
import DrawerComponents from "../pages/Start-Page/Drawer-Components/DrawerComponents";
import Styles from "./Template1.css";
// hashim you can send the props to this components from start page input elements



const Template1 = () => {
  // hashim you can send the props to this components from start page input elements
  return (
    <>
    <Editing />
    {/* <Box className="main">
      <h2>Hello</h2>
    </Box> */}
    </>
  );
};

export default Template1;
