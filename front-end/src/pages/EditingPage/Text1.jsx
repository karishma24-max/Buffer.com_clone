import { Button, Image,Collapse, Box, useDisclosure, Input } from "@chakra-ui/react";
import React from "react";

const Text1 = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width="400px" margin="auto" marginTop="10px">
      <Button onClick={onToggle} bg="white" width="380px" justifyContent='left' p={7}> 
      <Image
            boxSize="32px"
            objectFit="cover"
            src="https://user-images.githubusercontent.com/101625055/201312083-fbffd575-3bae-45b0-9c0a-db69ff71518c.png"
            alt="Dan Abramov"
            bg='black'
          />
        Text Edit
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg="#f5f5f5"
          mt="4"
          rounded="md"
          shadow="md"
          display="flex"
          flexDirection="column"
          gap="2rem"
          width="400px"
        >
          <Box
            border="1px solid black"
            height="auto"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
          >
            <label>Text</label>
            <Input placeholder="Enter description" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Text1;
