import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import Header from "./Header";
import ButtonComp from "./ButtonComp";
import Text1 from "./Text1";
import MidImage from "./MidImage";
import YouTube from "./YouTube";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getTemplate } from "../../redux/Template/template.action";
import { useDispatch } from "react-redux";

const EditingPage = () => {
  //   const { isOpen, onToggle } = useDisclosure();

  const {id} = useParams()
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(getTemplate(id))
  },[id])

  

  return (
    <Box  w="420px" margin="auto">
      <Heading as="h4" size="md" marginTop="10px" display="block">
        Your Site Layout
      </Heading>
      <Header id={id} initText={{heading1content: "",text1content : ""}} name={{headingContent : "heading1content" , textcontent : "text1content" }}/>
      <ButtonComp id={id} name={{buttonContent : "button1content" , buttonLink : "buttonLink"}} inittext={{buttonContent : "" , buttonLink : ""}}/>
      <Text1 id={id} name={'descriptioncontent'} inittext={""} />
      <MidImage id={id}/>
      <Text1 id={id} name={'description2content'} inittext={""} />
      <YouTube id={id} name={'iframesrc'} inittext={""}/>
    </Box>
  );
};

export default EditingPage;
