import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Template3.css";
// hashim you can send the props to this components from start page input elements
const Template3 = ({data}) => {
  // hashim you can send the props to this components from start page input elements
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
        <Button
          colorScheme="orange"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          {data.button1content}
        </Button>
      </Box>
      <Box className="description1">
        <Text>
          {data.descriptioncontent}
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
        <Button
          colorScheme="orange"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          {data.button2content}
        </Button>
      </Box>
      <Box
        width="380px"
        margin="auto"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Image
          src={data.image3src}
          alt="mid"
          borderRadius="10px"
        />
        <Text>{data.text3content}</Text>
      </Box>
      <Box className="description1">
        <Text>
          {data.description2content}
        </Text>
      </Box>
      <Box
        width="380px"
        margin="auto"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Image
          src={data.image4src}
          alt="mid"
          borderRadius="10px"
        />
        <Text>{data.text4content}</Text>
      </Box>
      <div className="video-responsive">
        <iframe
          width="750"
          height="480"
          src={data.iframesrc}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Box>
  );
};

export default Template3;
