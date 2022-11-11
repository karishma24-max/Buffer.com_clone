import { Button, Image, Collapse, Box, useDisclosure, Input } from "@chakra-ui/react";
import React from "react";

const ButtonComp = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width="400px" margin="auto" marginTop="10px">
      <Button onClick={onToggle} bg="white" width="380px" justifyContent='left' p={7}>
      <Image
            boxSize="32px"
            objectFit="cover"
            src="https://user-images.githubusercontent.com/101625055/201312048-50024f58-a8ae-44bb-b069-39462b51792b.jpg"
            alt="Dan Abramov"
            bg='black'
          />
        Button name
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
            <label>Label</label>
            <Input placeholder="Button name" />
            <label>Link</label>
            <Input placeholder="A link to anything →" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ButtonComp;
