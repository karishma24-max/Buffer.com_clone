import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Template4.css";
// hashim you can send the props to this components from start page input elements
const Template4 = () => {
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
              src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/alexoo/alexoo-profile.png"
              alt="main logo"
            />
          </Box>
          <Heading color="white">Alexoo</Heading>
          <Text color="white">New album is OUT NOW!</Text>
        </Box>
      </Box>
      {/* padding="35px 170px 35px 170px" */}
      <Box>
        <Button
          colorScheme="purple"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          Never know (New Song)
        </Button>
      </Box>
      <Box>
        <Button
          colorScheme="purple"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          Ask me Anything
        </Button>
      </Box>
      {/* <Box className="description1">
        <Text>
          Tell your story, connect with your audience. With text blocks, you can
          easily share news, announcements or share your story with your
          audience
        </Text>
      </Box> */}
      <Box width="380px" margin="auto">
        <Image
          src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/alexoo/alexoo-image1.png"
          alt="mid"
          borderRadius="10px"
        />
      </Box>
      <Box>
        <Button
          colorScheme="purple"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          Pre-Order my new album
        </Button>
      </Box>
      <Box>
        <Button
          colorScheme="purple"
          width="380px"
          padding="35px 50px 35px 50px"
        >
          Watch now on Youtube
        </Button>
      </Box>
      <Box
        width="380px"
        margin="auto"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Image
          src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/pizza/pizza-image2.png"
          alt="mid"
          borderRadius="10px"
        />
        <Text>We put 100% love and dedication in our pizza</Text>
      </Box>
      {/* <Box className="description1">
        <Text>
          We use only fresh products and take care of each dish in detail. Our
          pizzas are varied in order to satisfy all the tastes and preferences
          of our customers, although they can also choose the ingredients they
          prefer.
        </Text>
      </Box> */}
      <Box
        width="380px"
        margin="auto"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Image
          src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/pizza/pizza-image3.png"
          alt="mid"
          borderRadius="10px"
        />
        <Text>The Best Homemade Pizza You'll Ever Eat</Text>
      </Box>
      <div className="video-responsive">
        <iframe
          width="750"
          height="480"
          src={`https://www.youtube.com/embed/cxB4ACaaR4I`}
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
