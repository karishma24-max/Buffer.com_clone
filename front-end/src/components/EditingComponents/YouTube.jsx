import {
  Button,
  Image,
  Collapse,
  Box,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTemplate, updateTemplate } from "../../redux/Template/template.action";

const YouTube = ({id , name , inittext}) => {
  const { isOpen, onToggle } = useDisclosure();

  const [text , setText] = useState(inittext)
  const dispatch = useDispatch()

  const handelInput = (e) => {
    const {name , value} = e.target
    setText(value)
    updateTemplate(id , name , value)
  }

  useEffect(()=> {
    dispatch(getTemplate(id))
  } , [handelInput])

  return (
    <Box width="400px" margin="auto" marginTop="10px">
      <Button
        onClick={onToggle}
        bg="white"
        width="380px"
        marginBottom="10px"
        justifyContent="left"
        border="1px solid #bfc5c6"
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
            height="auto"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
            marginLeft='20px'
          >
            <label>YouTube Video URL</label>
            <Input name={name}  onChange={handelInput} placeholder="Enter YouTube Video URL" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default YouTube;
