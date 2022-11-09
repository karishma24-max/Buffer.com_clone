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
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <Box>
      {/* Section-1 */}
      <Grid
        w="80%"
        m="auto"
        mt="100px"
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
          <Link to="/signup">
          <Button
              border="none"
              background={"blue"}
              fontSize="20px"
              p="10px"
              color="#fff"
            >
              Get started now
            </Button>
          </Link>
            <Button border="none" fontSize="20px" p="10px" color="blue">
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
        <Grid
          m="auto"
          w="80%"
          templateColumns={{
            base: "repeat(2,1fr)",
            sm: "repeat(2,1fr)",
            md: "repeat(6,1fr)",
          }}
          gap={10}
        >
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

        <Text
          mt={{sm:"50px",md:"150px"}}
          fontSize={{sm:"25px",md:"40px"}}
          textAlign="center"
          fontWeight={"700"}
        >
          Grow your following without draining your time
        </Text>
        <Text
          m="20px 0"
          fontSize={"20px"}
          textAlign="center"
          fontWeight={"400"}
        >
          Social media can be the fastest and cheapest way to build <br /> your
          following and grow your business. But it can also take
          <br /> up all your time. Here are four ways Buffer can help.
        </Text>
        <Image
          src="https://buffer.com/static/misc/buffer-loop-v2-variant.svg"
          alt="steps"
        />
      </Box>

      {/* Section-3 */}
      <Box m="50px 0">
        <Grid
          w="70%"
          m="auto"
          alignItems={"center"}
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          gap={10}
        >
          <GridItem>
            <Text color="blue" fontWeight={"600"} fontSize={"20px"}>
              1. SHARE CLICK-WORTHY CONTENT
            </Text>
            <Text fontWeight={"700"}  fontSize={{sm:"25px",md:"40px"}}>
              {" "}
              Get the clicks you deserve
            </Text>
            <Text
              mt="20px"
              fontSize={"20px"}
              color={"gray.700"}
              fontWeight={600}
              lineHeight={2}
            >
              Buffer will tell you when and what to publish to make your content
              stand out.
            </Text>

            <Link to="/signup"><Button mt="20px" color="#fff" background={"blue"}>
              Get Started now
            </Button></Link>
          </GridItem>
          <GridItem>
            <Image
              src="https://buffer.com/static/illustrations/thumb-stop-content-2.webp"
              alt="stage1"
            />
          </GridItem>
        </Grid>
        <Grid
          w="70%"
          m="auto"
          mt="100px"
          alignItems={"center"}
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          gap={10}
        >
          <GridItem>
            <Image
              src="https://buffer.com/static/illustrations/collaborate-more-efficiently@2x.webp"
              alt="stage1"
            />
          </GridItem>
          <GridItem>
            <Text color="blue" fontWeight={"600"} fontSize={"20px"}>
              2. BUILD AN ENGAGED AUDIENCE
            </Text>
            <Text fontWeight={"700"}  fontSize={{sm:"25px",md:"40px"}}>
              Grow your following
            </Text>
            <Text
              mt="20px"
              fontSize={"20px"}
              color={"gray.700"}
              fontWeight={600}
              lineHeight={2}
            >
              Buffer will share your content on the right channels, with
              suggested hashtags to help you grow.
            </Text>

            <Link to="/signup"><Button mt="20px" color="#fff" background={"blue"}>
              Get Started now
            </Button></Link>
          </GridItem>
        </Grid>
        <Grid
          w="70%"
          m="auto"
          mt="100px"
          alignItems={"center"}
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          gap={10}
        >
          <GridItem>
            <Text color="blue" fontWeight={"600"} fontSize={"20px"}>
              3. SAVE TONS OF TIME
            </Text>
            <Text fontWeight={"700"}  fontSize={{sm:"25px",md:"40px"}}>
              Halve your workload
            </Text>
            <Text
              mt="20px"
              fontSize={"20px"}
              color={"gray.700"}
              fontWeight={600}
              lineHeight={2}
            >
              Buffer will publish everything for you to save time and it’ll
              showcase your work with automated reports.
            </Text>

           <Link to="/signup"> <Button mt="20px" color="#fff" background={"blue"}>
              Get Started now
            </Button></Link>
          </GridItem>
          <GridItem>
            <Image
              src="https://buffer.com/static/illustrations/hero-reply@2x-2.webp"
              alt="stage3"
            />
          </GridItem>
        </Grid>
      </Box>

      {/* section-4 */}
      <Box p="1px" boxShadow="rgba(27, 31, 35, 0.04) 0px 10px 10px -10px inset">
        <Grid
          w="90%"
          m="auto"
          mt="100px"
          alignItems={"center"}
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          gap={10}
        >
          <GridItem>
            <Image
              src="https://static.buffer.com/cdn-cgi/image/w=1080,quality=90,format=auto/marketing/static/team/buffer-team-map-2022@2x.jpg"
              alt="last"
            />
          </GridItem>
          <GridItem>
            <Text fontWeight={"700"}  fontSize={{sm:"25px",md:"40px"}}>
              And we are here to help
            </Text>
            <Text
              mt="20px"
              fontSize={"20px"}
              color={"gray.700"}
              fontWeight={600}
              lineHeight={2}
            >
              Our customer advocates are standing by 24/7 to support you via
              email and social media. We also have a comprehensive, regularly
              updated help center for those who prefer to find help themselves.
            </Text>

            <Button
              mt="20px"
              color="blue"
              border={"2px solid blue"}
              background={"#fff"}
            >
              Visit our Help Center
            </Button>
          </GridItem>
        </Grid>
      </Box>
      <Box textAlign={"center"} >
        <Text mt="50px"  fontSize="20px" fontWeight={700}>
          An official marketing partner of the industry leaders
        </Text>
        <Flex mt="50px" justifyContent={"center"} >
          <Image h="60px" src="https://buffer.com/static/ui/meta-business-partner@2x-2.png" alt="1"/>
          <Image h="60px" src="https://buffer.com/static/ui/pinterest-marketing-partner@2x-2.png" alt="1"/>
          <Image h="60px" src="https://buffer.com/static/ui/linkedin-marketing-partner@2x-2.png" alt="1"/>
        </Flex>
      </Box>

      <Box mt="100px" textAlign={"center"} background={"blue.600"}>
         <Text pt="100px"  fontSize={{sm:"25px",md:"40px"}} fontWeight={700} color="#fff" textAlign={"center"}>
         140,000+ people like you use<br/> Buffer to build their brand on<br/> social media every month
         </Text>
         <Link to="/signup"> <Button m="50px 0" color="#ffffff" p="30px" fontSize={"20px"} background='orange' _hover={{boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}>Get started now</Button></Link>
      </Box>
    </Box>
  );
}

export default Home;
