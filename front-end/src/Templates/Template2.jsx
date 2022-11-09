import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import Styles from "./Template2.css";
// hashim you can send the props to this components from start page input elements
const Template2 = () => {
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
              src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/flowers/flowers-shop-profile.png"
              alt="main logo"
            />
          </Box>
          <Heading color="white">Flowers Shop</Heading>
          <Text color="white">Send Flowers to Family and Friends</Text>
        </Box>
      </Box>
      {/* padding="35px 170px 35px 170px" */}
      <Box>
        <Button colorScheme="green" width="380px" padding="35px 50px 35px 50px">
          Shop Flowers
        </Button>
      </Box>
      <Box width="380px" margin="auto">
        <Image
          src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/flowers/flowers-shop-image1.png"
          alt="mid"
          borderRadius="10px"
        />
      </Box>
      <Box className="description1">
        <Text>
          Show someone you care with a blooming lovely bunch of flowers. Whether
          it's for a birthday, Mother's Day (or Father's Day), or even just for
          yourself.
        </Text>
      </Box>
      <Box
        width="380px"
        margin="auto"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Image
          src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/flowers/flowers-shop-image2.png"
          alt="mid"
          borderRadius="10px"
        />
        <Text>Hand-delivered with care and attention</Text>
      </Box>
      <Box
        width="380px"
        margin="auto"
        backgroundColor="#f5f5f5"
        borderRadius="10px"
      >
        <Image
          src="https://buffer-start-page-uploads.s3.amazonaws.com/defaults/flowers/flowers-shop-image3.png"
          alt="mid"
          borderRadius="10px"
        />
        <Text>Gorgeous, hand-tied bouquets</Text>
      </Box>
      <Box>
        <Button colorScheme="green" width="380px" padding="35px 50px 35px 50px">
          About Us
        </Button>
      </Box>
      <div className="video-responsive">
        <iframe
          width="750"
          height="480"
          src={`https://www.youtube.com/embed/w9Do2qAGDc0`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded youtube"
        />
      </div>
    </Box>
  );
};

export default Template2;
