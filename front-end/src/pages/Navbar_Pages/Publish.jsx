import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Box, Button, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
function Publish() {
  return (
    <Box>
      <Navbar />
      {/* Section-1 */}
      <Grid
        m="auto"
        mt="100px"
        w="80%"
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
        }}
        gap={10}
      >
        <GridItem>
          <Text fontSize={{ base: "25px", sm: "25px", md: "50px" }} as="b">
            Build your audience
            <br /> and grow your brand
            <br /> on social media
          </Text>
          <Text
            lineHeight={2}
            fontSize={{ base: "20px", sm: "20px", md: "25px" }}
          >
            Plan and publish your content for Instagram,
            <br /> TikTok, Facebook, Twitter, Pinterest, and LinkedIn,
            <br /> all from one simple dashboard.
          </Text>
          <Button
            mt="30px"
            background={"blue"}
            border="none"
            color="#FFFFFF"
            p="30px 30px"
            fontSize={"20px"}
          >
            Get started now
          </Button>
        </GridItem>
        <GridItem>
          <Image
            src="https://i.ibb.co/D730qMk/ezgif-4-2f409f32e8.gif"
            alt="publishgif"
          />
        </GridItem>
      </Grid>

      {/* Section-2 */}
      <Grid
        m="auto"
        w="80%"
        templateColumns={{
          base: "repeat(2,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(6,1fr)",
        }}
        mt="50px"
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
      {/* Section-3 */}
      <Box mt="150px">
        <Text
          fontSize={{ base: "20px", sm: "20px", md: "35px" }}
          fontWeight={700}
          textAlign="center"
        >
          Craft the perfect post for each social
          <br /> network, all in one place
        </Text>
        <Text
          mt="20px"
          fontSize={{ base: "18px", sm: "18px", md: "25px" }}
          fontWeight={400}
          textAlign="center"
        >
          Publishing content on all of your channels shouldn’t be a time-drain.
          Plan and <br /> publish on every channel in one simple-to-use
          dashboard.
        </Text>
        <Image
          src="https://buffer.com/static/google-business-profile/webp/screenshot-all-channels.webp"
          alt="section-3"
        />
      </Box>
      {/* Section -4 */}
      <Box>
        <Grid
          w="80%"
          m="auto"
          templateColumns={{
            base: "repeat(1,1fr)",
            sm: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
          }}
          gap={10}
        >
          <GridItem>
            <Text
              color="blue"
              fontSize={{ sm: "18px", md: "30px" }}
              fontWeight={600}
            >
              ------ Instagram
            </Text>
            <Text fontSize={{ sm: "30px", md: "40px" }} fontWeight={700}>
              Take your Instagram marketing to the next level
            </Text>
            <Text fontSize={{ sm: "20px", md: "25px" }} fontWeight={400}>
              Build your brand on Instagram. Work together with your team to
              plan, preview, and schedule your upcoming Instagram posts,
              carousels, and campaigns.
            </Text>
            <Link
              style={{ color: "blue", fontSize: "20px", paddingTop: "30px" }}
            >
              Learn More →{" "}
            </Link>
          </GridItem>
          <GridItem>
            <Image
              src="https://static.buffer.com/cdn-cgi/image/w=1080,quality=90,format=auto/marketing/static/illustrations/buffer-publish-instagram@2x-2.png"
              alt="Insta"
            />
          </GridItem>
        </Grid>
      </Box>
      {/* Section-4 */}
      <Grid w="80%" m={"auto"} templateColumns={{sm:"repeat(1,1fr)",md:"repeat(3,1fr)"}} gap={10}>
        <GridItem>
          <Image src="https://static.buffer.com/cdn-cgi/image/w=750,quality=90,format=auto/marketing/static/ui/buffer-publish-scheduling@2x.jpeg" alt="Scheduling" />
          <Text textAlign={"center"} fontSize={"20px"} fontWeight={500}>Scheduling</Text>
          <Text textAlign={"center"} fontSize={"18px"} fontWeight={400}>Create a preset publishing schedule for each social account</Text>
        </GridItem>
        <GridItem>
          <Image src="https://static.buffer.com/cdn-cgi/image/w=750,quality=90,format=auto/marketing/static/ui/buffer-publish-tailored-posts-v2@2x.jpg" alt="Posts" />
          <Text textAlign={"center"} fontSize={"20px"} fontWeight={500}>Tailored posts</Text>
          <Text textAlign={"center"} fontSize={"18px"} fontWeight={400}>Custom tailor your posts for each social network</Text>
        </GridItem>
        <GridItem>
          <Image src="https://static.buffer.com/cdn-cgi/image/w=750,quality=90,format=auto/marketing/static/ui/buffer-publish-calendar@2x.jpeg" alt="calender" />
          <Text textAlign={"center"} fontSize={"20px"} fontWeight={500}>Calendar</Text>
          <Text textAlign={"center"} fontSize={"18px"} fontWeight={400}>Get an at-a-glance view of all the content you have lined up</Text>
        </GridItem>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Publish;
