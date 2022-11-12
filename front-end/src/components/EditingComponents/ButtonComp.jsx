import {
  Button,
  Image,
  Collapse,
  Box,
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getTemplate,
  updateTemplate,
} from "../../redux/Template/template.action";

const ButtonComp = ({ id, name, inittext }) => {
  const [text, setText] = useState(inittext);
  const dispatch = useDispatch();

  const handelInput = (e) => {
    const { name, value } = e.target;
    setText({ [name]: value });
    updateTemplate(id, name, value);
  };

  useEffect(() => {
    dispatch(getTemplate(id));
  }, [handelInput]);

  const { isOpen, onToggle } = useDisclosure();
  return (
    <Box width="400px" margin="auto" marginTop="10px">
      <Button
        onClick={onToggle}
        bg="white"
        width="380px"
        border="1px solid #bfc5c6"
        justifyContent="left"
        p={7}
      >
        <Image
          boxSize="32px"
          objectFit="cover"
          src="https://user-images.githubusercontent.com/101625055/201480366-869e5ec3-f9db-4ad2-8add-8e80ea2d7cd6.png"
          alt="Dan Abramov"
          bg="black"
        />
        Button name
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          bg="white"
          mt="4"
          rounded="md"
          shadow="md"
          display="flex"
          flexDirection="column" 
          border="1px solid #878787"
          gap="2rem"
          width="400px"
        >
          <Box
            height="auto"
            display="flex"
            flexDirection="column"
            gap="1rem"
            bg="white"
            marginLeft='20px'
          >
            <label>Label</label>
            <Input
              name={name.buttonContent}
              placeholder="Button name"
              onChange={handelInput}
            />
            <label>Link</label>
            <Input
              onChange={handelInput}
              name={name.buttonLink}
              placeholder="A link to anything →"
            />
          </Box>
        </Box>
      </Collapse>
    </Box>
  );
};

export default ButtonComp;
