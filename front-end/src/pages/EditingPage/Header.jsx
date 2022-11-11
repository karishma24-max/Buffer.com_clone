import {
  Button,
  Collapse,
  Box,
  useDisclosure,
  Input,
  Image,
} from "@chakra-ui/react";
import React from "react";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width="400px" margin="auto" marginTop="10px">
      <Box>
        <Button
          onClick={onToggle}
          bg="white"
          width="380px"
          marginTop="10px"
          justifyContent="left"
          p={7}
        >
          <Image
            boxSize="32px"
            objectFit="cover"
            src="https://user-images.githubusercontent.com/101625055/201311974-d4a192c7-97c8-47f1-b598-d6bfee303ba5.jpg"
            alt="Dan Abramov"
            bg="black"
          />
          Profile Image / Logo
        </Button>
      </Box>
      <Collapse in={isOpen} animateOpacity>
        <Box
          //   p="40px"
          //   color="white"
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
            height="100px"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
          >
            <label>Logo or personal photo</label>
            <Input type="file" />
          </Box>
          <Box
            border="1px solid black"
            height="100px"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
          >
            <label>Your business or personal name</label>
            <Input type="text" />
          </Box>
          <Box
            border="1px solid black"
            height="100px"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
          >
            <label>A few words about you or your business</label>
            <Input type="text" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Header;
