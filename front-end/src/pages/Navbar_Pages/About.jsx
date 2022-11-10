import React from "react";
import {
  Box,
  Button,
  Center,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
function About() {
  return (
    <Box>
      <Navbar />
      {/* Section -1 */}
      <Box p="50px" backgroundColor={" rgb(238, 157, 171)"}>
        <Box pt="50px">
          <Text
            fontSize={{ sm: "25px", md: "40px" }}
            fontWeight={700}
            textAlign={"Center"}
          >
            About
          </Text>
        </Box>
        <Box>
          <Image
            ml="25%"
            w="50%"
            src="https://buffer.com/static/about/webp/About-Hero2.webp"
            alt="about"
          />
        </Box>
      </Box>
      {/* Section - 2  */}
      <Box
        w={{ sm: "80%", md: "40%" }}
        m="auto"
        mt={{ sm: "50px", md: "100px" }}
      >
        <Text fontSize={"20px"}>
          We’re a fully distributed team of 82 people living and working in 22
          countries around the world. And we’re working to build the best
          products to help our customers build their brands and grow their
          businesses on social media.
        </Text>
        <Image
          m="30px 0px"
          h="250px"
          w="100%"
          borderRadius={"7px"}
          src="https://tradeandinvestmentpromotion.com/wp-content/uploads/2020/11/global-trade.jpg"
          alt="global network"
        />
        <Text m="30px 0" fontSize={"20px"}>
          We’ve always aimed to do things a little differently at Buffer. Since
          the early days, we’ve had a focus on building one of the most unique
          and fulfilling workplaces by rethinking a lot of traditional
          practices.
        </Text>
        <Text m="30px 0" fontSize={"20px"}>
          A commitment to supporting our team and our customers has helped
          Buffer grow from humble beginnings to now serving more than 140,000
          users. Our passion for making meaningful connections flows through
          everything we do.
        </Text>
        <Text m="30px 0" fontSize={"20px"}>
          We care about building a quality product, trusted relationships with
          our customers, and a sense of community that connects our customers
          and team with one another.
        </Text>
        <Text m="30px 0" fontSize={"20px"}>
          To learn more about our approach to business and work, feel free to
          hop on over to our Open Blog.
        </Text>
        <Box textAlign={"center"}>
          <Link target={"_blank"} href="https://buffer.com/resources/open/">
            <Button
              _hover={{ backgroundColor: "blue" }}
              color={"#FFFFFF"}
              border="none"
              p="30px 20px"
              fontSize={"20px"}
              backgroundColor={"blue"}
            >
              Read the open Blog
            </Button>
          </Link>
        </Box>
      </Box>
      <Box
        p="30px 0"
        backgroundImage={
          "https://buffer.com/static/background/white-doodle-section.png"
        }
        backgroundColor={"gray.200"}
      >
        <Grid
          w="80%"
          m="auto"
          templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          textAlign="center"
        >
          <GridItem>
            <Text
              color={"green"}
              fontSize={{ sm: "30px", md: "40px" }}
              fontWeight={800}
            >
              82
            </Text>
            <Text fontSize={{ sm: "20px", md: "30px" }} as="b">
              teammates
            </Text>
          </GridItem>
          <GridItem>
            <Text
              color={"orange"}
              fontSize={{ sm: "30px", md: "40px" }}
              fontWeight={800}
            >
              22
            </Text>
            <Text fontSize={{ sm: "20px", md: "30px" }} as="b">
              countries
            </Text>
          </GridItem>
          <GridItem>
            <Text
              color={"red.400"}
              fontSize={{ sm: "30px", md: "40px" }}
              fontWeight={800}
            >
              140,000+
            </Text>
            <Text fontSize={{ sm: "20px", md: "30px" }} as="b">
              users
            </Text>
          </GridItem>
        </Grid>
      </Box>
      <Box w={{ sm: "80%", md: "40%" }} m="auto" my="20px">
        <Text fontSize={"25px"} as="b">
          Our values
        </Text>
        <Text fontSize={"20px"}>
          We want to build a different type of company that’s focused not only
          on the bottom line, but also the happiness of our customers and team,
          and our personal growth along the journey. Here are the values that
          collectively guide our decisions and actions:
        </Text>
      </Box>

      <Image
        ml="2%"
        src="https://buffer.com/static/team/team-panorama.jpg"
        alt="team"
      />
      <Box w={{ sm: "80%", md: "40%" }} m="auto" my="20px">
        <Text fontSize={"30px"} as="b">
          Team
        </Text>
        <Text fontSize={"20px"}>
          We’re committed to building a diverse team and a work environment
          that’s inclusive of people of all backgrounds. Get to know the
          wonderful team who’s building our product, supporting our customers,
          and creating educational content.
        </Text>
      </Box>

      <Image
        ml="20%"
        w="60%"
        src="https://buffer.com/static/about/webp/Team2.webp"
        alt="trip"
      />

      <Footer />
    </Box>
  );
}

export default About;
