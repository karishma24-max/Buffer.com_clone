import React from "react";
import { MdSlowMotionVideo } from "react-icons/md";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
function Home() {
  return (
    <Box>
      {/* Section-1 */}
      <Grid
        w="80%"
        m="auto"
        alignItems={"center"}
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
      >
        <GridItem>
          <Text fontSize={"50px"}>Grow your audience on social and beyond</Text>
          <br />
          <Text lineHeight={2} fontSize={"20px"} fontWeight="400">
            Buffer helps you build an audience organically. We’re a
            values-driven company that provides affordable, intuitive, marketing
            tools for ambitious people and teams.
          </Text>
          <HStack mt="20px">
            <Button
              border="none"
              background={"blue"}
              fontSize="20px"
              p="10px"
              color="#fff"
            >
              Get started now
            </Button>
            <Button
              border="none"
              fontSize="20px"
              p="10px"
              color="blue"
            >
              <MdSlowMotionVideo color="blue" /> Watch Video
            </Button>
          </HStack>
        </GridItem>
        <GridItem>
          <Image
            w="90%"
            src="https://buffer.com/static/illustrations/all-channels-3.webp"
            alt="socialicons"
          />
        </GridItem>
      </Grid>
      {/* Section-2 */}
      <Box mt="100px">
        <Grid m="auto" w="80%"  templateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(6,1fr)",
        }} >
          <GridItem>
            <Text color="#A0AEC0" fontWeight={"700"} fontSize={"25px"}>
              Huckberry
            </Text>
          </GridItem>
          <GridItem>
            <Text color="#A0AEC0" fontWeight={"700"} fontSize={"25px"}>
              FOOD52
            </Text>
          </GridItem>
          <GridItem>
            <Text color="#A0AEC0" fontWeight={"700"} fontSize={"25px"} as="u">
              The_Sill
            </Text>
          </GridItem>
          <GridItem>
            <Text color="#A0AEC0" fontWeight={"700"} fontSize={"25px"}>
              Barrow
            </Text>
          </GridItem>
          <GridItem>
            <Text color="#A0AEC0" fontWeight={"700"} fontSize={"25px"}>
              HappySocks
            </Text>
          </GridItem>
          <GridItem>
            <Text color="#A0AEC0" fontWeight={"700"} fontSize={"25px"}>
              Dress_up
            </Text>
          </GridItem>
        </Grid>

        <Text mt="150px" fontSize={"40px"} textAlign="center" fontWeight={"700"}>
        Grow your following without draining your time
        </Text>
        <Text  m="20px 0" fontSize={"20px"} textAlign="center" fontWeight={"400"}>Social media can be the fastest and cheapest way to build <br/> your following and grow your business. But it can also take<br/> up all your time. Here are four ways Buffer can help.</Text>
        <Image src="https://buffer.com/static/misc/buffer-loop-v2-variant.svg" alt="steps" />
      </Box>

      {/* Section-3 */}
      <Box mt="50px">
        <Grid  w="70%"
        m="auto"
        alignItems={"center"}
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }} gap={10}>
            <GridItem>
                <Text color="blue"fontWeight={"600"} fontSize={"20px"}>1. SHARE CLICK-WORTHY CONTENT</Text>
                <Text fontWeight={"700"} fontSize={"40px"}> Get the clicks you deserve</Text>
                <Text mt="20px" fontSize={"20px"} color={"gray.700"} fontWeight={600} lineHeight={2}>Buffer will tell you when and what to publish to make your content stand out.</Text>
                
                <Button mt="20px" color="#fff" background={"blue"}>Get Started now</Button>
            </GridItem>
            <GridItem>
                <Image src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp" alt="stage1"/>
            </GridItem>
        </Grid>
        <Grid  w="70%"
        m="auto" mt="100px"
        alignItems={"center"}
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }} gap={10}>
            <GridItem>
                <Image src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp" alt="stage1"/>
            </GridItem>
            <GridItem>
                <Text color="blue"fontWeight={"600"} fontSize={"20px"}>2. BUILD AN ENGAGED AUDIENCE</Text>
                <Text fontWeight={"700"} fontSize={"40px"}>Grow your following</Text>
                <Text mt="20px" fontSize={"20px"} color={"gray.700"} fontWeight={600} lineHeight={2}>Buffer will share your content on the right channels, with suggested hashtags to help you grow.</Text>
                
                <Button mt="20px" color="#fff" background={"blue"}>Get Started now</Button>
            </GridItem>
            
        </Grid>
      </Box>

    </Box>
  );
}

export default Home;
