import { Button, Image, Collapse, Box, useDisclosure, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTemplate, updateTemplate } from "../../redux/Template/template.action";

const ButtonComp = ({id , name, inittext}) => {
  const [text , setText] = useState(inittext)
  const dispatch = useDispatch()

  const handelInput = (e) => {
    const {name , value} = e.target
    setText({[name] : value})
    updateTemplate(id , name , value)
  }

  useEffect(()=> {
    dispatch(getTemplate(id))
  } , [handelInput])



  

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
            height="auto"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
          >
            <label>Label</label>
            <Input name={name.buttonContent}  placeholder="Button name" onChange={handelInput} />
            <label>Link</label>
            <Input onChange={handelInput} name={name.buttonLink} placeholder="A link to anything →" />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ButtonComp;
