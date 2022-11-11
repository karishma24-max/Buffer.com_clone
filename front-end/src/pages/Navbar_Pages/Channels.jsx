import React from "react";
import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
function Channels() {
  return (
    <Box>
      {/* Imported Navbar  */}
      <Navbar />
      {/* Body */}
      {/* section-1 */}
      
      {/* 1st one  */}
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
            src="https://buffer.com/static/linkedin/webp/BestTimeToPost.webp"
            alt="stage3"
          />
        </GridItem>
        <GridItem>
          <Text fontWeight={"700"} fontSize={{ sm: "25px", md: "40px" }}>
            Schedule LinkedIn posts at the perfect time
          </Text>
          <Text
            mt="20px"
            fontSize={"20px"}
            color={"gray.700"}
            fontWeight={600}
            lineHeight={2}
          >
            The best performing LinkedIn profiles post 3/4 times per day. Not
            all of us can commit to that. Find the perfect time, date, and type
            of post to boost engagement without draining your time and let
            Buffer do the hard work for you.
          </Text>
        </GridItem>
       
      </Grid>
      {/* 2nd one  */}
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
          <Text fontWeight={"700"} fontSize={{ sm: "25px", md: "40px" }}>
          Reach your audience on LinkedIn
          </Text>
          <Text
            mt="20px"
            fontSize={"20px"}
            color={"gray.700"}
            fontWeight={600}
            lineHeight={2}
          >
            On average only 1/5th of your audience will see every post. To reach most of your followers, you’ll need to post at least 20 times a month. Schedule LinkedIn posts in advance to reach all your fans and grow your following with Buffer.
          </Text>
        </GridItem>
        <GridItem>
          <Image
            src="https://buffer.com/static/linkedin/webp/ScheduleInAdvance.webp"
            alt="stage3"
          />
        </GridItem>
        </Grid>{/* 3rd one  */}
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
            src="https://buffer.com/static/linkedin/webp/LinkedinReports.webp"
            alt="stage3"
          />
        </GridItem>
        <GridItem>
          <Text fontWeight={"700"} fontSize={{ sm: "25px", md: "40px" }}>
          Take your social reporting
to the next level
          </Text>
          <Text
            mt="20px"
            fontSize={"20px"}
            color={"gray.700"}
            fontWeight={600}
            lineHeight={2}
          >
            Show off your top performing posts and all the metrics that show your social success in our fully customized (and absolutely stunning) reports—perfect for all-hands presentations, client briefs, and cross-team collaboration.
          </Text>
        </GridItem>
       
        </Grid>{/* 4th one  */}
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
          <Text fontWeight={"700"} fontSize={{ sm: "25px", md: "40px" }}>
          Optimize your LinkedIn posts and receive 98% more comments</Text>
          <Text
            mt="20px"
            fontSize={"20px"}
            color={"gray.700"}
            fontWeight={600}
            lineHeight={2}
          >
          LinkedIn posts with visuals receive 98% more comments than text-only posts. With Buffer, you can include a photo, an infographic, or even a video in your scheduled post. Add hashtags and mention other LinkedIn pages to reach even more people outside of your network.
          </Text>
        </GridItem>
        <GridItem>
          <Image
            src="https://buffer.com/static/linkedin/webp/VisualPosts.webp"
            alt="stage3"
          />
        </GridItem>
      </Grid>
      {/* Imported Footer Part */}
      <Footer />
    </Box>
  );
}

export default Channels;
