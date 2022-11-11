import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Header from "./Header";
import ButtonComp from "./ButtonComp";
import Text1 from "./Text1";
import MidImage from "./MidImage";
import Text2 from "./Text2";
import YouTube from "./YouTube";
const EditingPage = () => {
  //   const { isOpen, onToggle } = useDisclosure();
  return (
    <Box bg="#f5f5f5" w="420px" margin="auto">
      <Heading as="h4" size="md" marginTop="10px" display="block">
        Your Site Layout
      </Heading>
      <Header />
      <ButtonComp />
      <Text1 />
      <MidImage />
      <Text2 />
      <YouTube />
    </Box>
  );
};

export default EditingPage;
