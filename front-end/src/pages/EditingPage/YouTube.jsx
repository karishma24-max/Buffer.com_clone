import {
  Button,
  Image,
  Collapse,
  Box,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React from "react";

const YouTube = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width="400px" margin="auto" marginTop="10px">
      <Button
        onClick={onToggle}
        bg="white"
        width="380px"
        marginBottom="10px"
        justifyContent="left"
        p={7}
      >
        <Image
          boxSize="32px"
          objectFit="cover"
          src="https://user-images.githubusercontent.com/101625055/201312136-47318dd3-e88b-4c84-b186-6a40f87e3e65.png"
          alt="Dan Abramov"
          bg="black"
        />
        YouTube Video
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
            <label>YouTube Video URL</label>
            <Input placeholder="Enter YouTube Video URL" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default YouTube;
