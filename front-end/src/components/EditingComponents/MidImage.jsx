import {
  Button,
  Collapse,
  Box,
  useDisclosure,
  Input,
  Image,
} from "@chakra-ui/react";
import React from "react";

const MidImage = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width="400px" margin="auto" marginTop="10px">
      <Button onClick={onToggle} bg="white" width="380px" justifyContent='left' p={7} border="1px solid #bfc5c6">
      <Image
            boxSize="32px"
            objectFit="cover"
            src="https://user-images.githubusercontent.com/101625055/201312098-b74e12fe-0732-4259-9b05-aaef93283b03.png"
            alt="Dan Abramov"
            bg='black'
          />
        Add Image
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg="white"
          mt="4"
          rounded="md"
          shadow="md"
          display="flex"
          flexDirection="column"
          gap="2rem"
          width="400px"
          border="1px solid #878787"
        >
          <Box
            height="100px"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
            marginLeft='20px'
          >
            <label>Add photo</label>
            <Input type="file" />
          </Box>
          <Box
            height="100px"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
            marginLeft='20px'
          >
            <label>Image caption</label>
            <Input type="text" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default MidImage;
