import { Button, Image,Collapse, Box, useDisclosure, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getTemplate, updateTemplate } from "../../redux/Template/template.action";

const Text1 = ({id , name , inittext}) => {
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
      <Button onClick={onToggle} bg="white" width="380px" justifyContent='left' p={7} border="1px solid #bfc5c6"> 
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
            <label>Text</label>
            <Input name={name}  onChange={handelInput} placeholder="Enter description" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default Text1;
