import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Template4.css";
// hashim you can send the props to this components from start page input elements
const Template4 = ({data}) => {
  // hashim you can send the props to this components from start page input elements

  let res;
  if(data.iframesrc) {
    let a = data.iframesrc;
    let b= "embed/"
  
    res = a.substr(0, 24) + b + a.substr(24);
  }
  
  return (
    <Box className="main">
      <Box className="head">
        <Box className="head-div">
          <Box display="flex" justifyContent="center">
            <Image
              display="block"
              boxSize="100px"
              objectFit="cover"
              borderRadius="50%"
              // hashim you can send the props to this components from start page input elements src
              src={data.image1src}
              alt="main logo"
            />
          </Box>
          <Heading color="white">{data.heading1content}</Heading>
          <Text color="white">{data.text1content}</Text>
        </Box>
      </Box>
      {/* padding="35px 170px 35px 170px" */}
      <Box>
      <a target={"_blank"} href={data.button1link}>
        <Button
          colorScheme="purple"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          {data.button1content}
        </Button>
        </a>
      </Box>
      <Box>
      <a target={"_blank"} href={data.button2link}>
        <Button
          colorScheme="purple"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          {data.button2content}
        </Button>
        </a>
      </Box>
      <Box className="description1">
        <Text>
          {data.description2content}
        </Text>
      </Box>
      <Box width="380px" margin="auto">
        <Image
          src={data.image2src}
          alt="mid"
          borderRadius="10px"
        />
      </Box>
      <Box>
      <a target={"_blank"} href={data.button3link}>
        <Button
          colorScheme="purple"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          {data.button3content}
        </Button>
        </a>
      </Box>
      <Box>
      <a target={"_blank"} href={data.button4link}>
        <Button
          colorScheme="purple"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          {data.button4content}
        </Button>
        </a>
      </Box>
      <div className="video-responsive">
        <iframe
          width="750"
          height="480"
          src={res}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Box>
  );
};

export default Template4;
