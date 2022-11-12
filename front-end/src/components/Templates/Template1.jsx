import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Template3 from "./Template3";
import Template4 from "./Template4"
import Template2 from "./Template2";


const Template1 = ({data}) => {

  return (
    <Box className="main">
      <Box className="head">
        <Box className="head-div">
          <Box display="flex" justifyContent="center">
            <Image
              display="block"
              boxSize={'100px'}
              objectFit={'cover'}
              // hashim you can send the props to this components from start page input elements src
              src={data.image1src}
              alt={data.image1alt}
            />
          </Box>
          <Heading color={'white'}>{data.heading1content}</Heading>
          <Text color={'white'}>{data.text1content}</Text>
        </Box>
      </Box>
      {/* padding="35px 170px 35px 170px" */}
      <Box>
        <a target={"_blank"} href={data.button1link}>
        <Button
          colorScheme={'yellow'}
          width={'380px'}
          padding={"35px 50px"}
        >
          {data.button1content}
        </Button>
        </a>
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
          borderRadius={'10px'}
        />
      </Box>
      <Box className="description1">
        <Text>
          {data.description2content}
        </Text>
      </Box>
      <div className="video-responsive">
        <iframe
          width={'750'}
          height={'480'}
          src={data.iframesrc}
          frameBorder={0}
          allow={'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'}
          allowFullScreen
          title={'Embedded youtube'}
        />
      </div>
    </Box>
  )
};

export default Template1;
