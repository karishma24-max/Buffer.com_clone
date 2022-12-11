import {
  Button,
  Collapse,
  Box,
  useDisclosure,
  Input,
  Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTemplate, updateTemplate } from "../../redux/Template/template.action";

const Header = ({ id , name , initText }) => {
  const { isOpen, onToggle } = useDisclosure();

  const [text, setText] = useState(initText)
  const dispatch = useDispatch()

  const handelInput = (e) => {
    const { name, value } = e.target
    setText({[name] : value})

    updateTemplate(id, name, value)
  }

  useEffect(() => {
    dispatch(getTemplate(id))
  }, [handelInput])



  return (
    <Box width="400px" margin="auto" marginTop="10px">
      <Box>
        <Button
          onClick={onToggle}
          bg="white"
          width="380px"
          marginTop="10px"
          justifyContent="left"
          border="1px solid #bfc5c6"
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
            justifyContent={"center"}
            gap="1rem"
            bg="white"
            marginLeft='20px'
          >
            <label>Logo or personal photo</label>
            <Input type="file" />
          </Box>
          <Box
            height="100px"
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            gap="1rem"
            bg="white"
            marginLeft='20px'
          >
            <label>Your business or personal name</label>
            <Input onChange={handelInput} name={name.headingContent} type="text" />
          </Box>
          <Box
            height="100px"
            display="flex"
            flexDirection="column"
            justifyContent={"center"}
            gap="1rem"
            bg="white"
            marginLeft='20px'
          >
            <label>A few words about you or your business</label>
            <Input onChange={handelInput} name={name.textcontent} type="text" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Header;
