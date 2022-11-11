import React from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Link,
  Text,
} from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaShopify,
  FaTiktok,
} from "react-icons/fa";
import { SiGooglemybusiness } from "react-icons/si";
import { useState } from "react";
function Pricing() {
  const [state, setState] = useState(true);
  return (
    <Box>
      <Navbar />
      <Text
        mt={{ sm: "50px", md: "100px" }}
        textAlign={"center"}
        fontSize={{ sm: "30px", md: "50px" }}
        fontWeight={700}
      >
        Publish Flawlessly.
        <br />
        Analyze Effortlessly. Engage Authentically.
      </Text>
      <Text
        mt="10px"
        textAlign={"center"}
        fontSize={"20px"}
        fontWeight={500}
        lineHeight={2}
      >
        We’ve built simpler social media tools for busy people. Enjoy our free
        plan as
        <br /> you get started, or trial our full toolkit priced to make
        marketing your business
        <br /> on social affordable.
      </Text>
      <Box mt="50px" textAlign={"center"}>
        <Button
          color="blue" 
          border={state === true ? "1px solid blue" : "1px solid grey"}
          p="30px"
          borderRightRadius={"0px"}
          backgroundColor={state === true ? "grey.400" : "#FFFFFF"}
          onClick={() => setState(true)}
        >
          Yearly
        </Button>
        <Button
          color="blue" 
          border={state === true ? "1px solid grey" : "1px solid blue"}
          backgroundColor={state === true ? "#FFFFFF" : "grey.400"}
          p="30px"
          borderLeftRadius={"0px"}
          onClick={() => setState(false)}
        >
          Monthly
        </Button>
      </Box>
      <Flex ml="45%" mt="50px">
        <FaInstagram style={{ paddingRight: "10px" }} fontSize={"25px"} />
        <FaFacebookF style={{ paddingRight: "10px" }} fontSize={"25px"} />
        <FaTwitter style={{ paddingRight: "10px" }} fontSize={"25px"} />
        <FaPinterest style={{ paddingRight: "10px" }} fontSize={"25px"} />
        <FaShopify style={{ paddingRight: "10px" }} fontSize={"25px"} />
        <FaTiktok style={{ paddingRight: "10px" }} fontSize={"25px"} />{" "}
        <SiGooglemybusiness fontSize={"25px"} />
      </Flex>
      {/* Plans */}
      <Box>
        <Grid  w="90%" m="auto" mt="50px" templateColumns={{base:"repeat(1,1fr)",sm:"repeat(1,1fr)",md:"repeat(4,1fr)"}} gap={10}>
          <GridItem  boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" p="30px">
            <Text fontSize={{sm:"20px",md:"40px"}} fontWeight="700">Free</Text>
            <Text fontSize={"20px"}   fontWeight={400} >
              For individuals and businesses getting started with social media.
            </Text>
            <Text  fontSize={"18px"} fontWeight={400} >
              Manage up to three channels Billed at
              {state === true ? " $0/year" : "Monthly"}
            </Text>
            <Button mt="20px"color="#FFFFFF" background="blue" fontSize={"20px"} p="30px 40px" border={"none"}>Get Started</Button>
            <Text  fontSize={"18px"} mt="20px"  fontWeight={400} >✓ Basic publishing tools</Text>
            <Text  fontSize={"18px"} mt="20px" fontWeight={400} >✓ Landing page builder</Text>
            <Link  color="blue"  >See all fetures</Link>
          </GridItem>
          <GridItem  boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" p="30px">
            <Text fontSize={{sm:"20px",md:"40px"}} fontWeight="700">Essentials</Text>
            <Text>
              For professionals who use publishing, analytics & engagement
              tools.
            </Text>
            <Text>
              {state === true
                ? "$ 5 /month per channel"
                : "$ 6 /month per channel"}
            </Text>
            <Text>
              {state === true
                ? "Add additional channels for $5/month Billed at $72 $60/year"
                : "Add additional channels for $6/month Billed monthly"}
            </Text>
            <Text>
              {state === true ? "Billed at $100 $120/year" : "Billed monthly"}
            </Text>
            <Button mt="20px"color="#FFFFFF" background="blue" fontSize={"20px"} p="30px 40px" border={"none"}>Try free for 14 days</Button>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Planning & publishing tools</Text>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Analytics tools</Text>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Engagement tools</Text>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Landing page builder</Text>
            <Link color="blue" >See all fetures</Link>
          </GridItem>
          <GridItem  boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" p="30px">
            <Text fontSize={{sm:"20px",md:"40px"}} fontWeight="700">Team</Text>
            <Text>
              For teams who want unlimited user seating, collaboration, and
              reporting.
            </Text>
            <Text>
              {state === true
                ? " $ 10 /month per channel"
                : " $ 8 /month per channel"}
            </Text>
            <Text>
              {state === true
                ? "Add additional channels for $10/month"
                : "Add additional channels for $12/month"}
            </Text>
            <Text>
              {state === true ? "Billed at $144 $120/year" : "Billed monthly"}
            </Text>
            <Button mt="20px"color="#FFFFFF" background="blue" fontSize={"20px"} p="30px 40px" border={"none"}>Try free for 14 days</Button>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Essentials features</Text>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Unlimited team members & clients</Text>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Draft collaboration tools</Text>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Easy, clear exportable reports</Text>
            <Link color="blue" >See all fetures</Link>
          </GridItem>
          <GridItem boxShadow= "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset" p="30px">
            <Text fontSize={{sm:"20px",md:"40px"}} fontWeight="700">Agency</Text>
            <Text>
              {state === true
                ? "$100/month for 10 channels"
                : "$120 /month for 10 channels"}
            </Text>
            <Text>For marketing agencies with 10 or more social channels.</Text>
            <Text>
              {state === true
                ? "Billed at $1440 $1200/year"
                : "Add additional channels for $12 $6/month"}
            </Text>
            <Button mt="20px"color="#FFFFFF" background="blue" fontSize={"20px"} p="30px 40px" border={"none"}>Try free for 14 days</Button>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Team features</Text>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Custom access & permissions</Text>
            <Text fontSize={"18px"} mt="20px"  fontWeight={400}>✓ Agency-friendly pricing</Text>
            <Link color="blue" >See all features</Link>
          </GridItem>
        </Grid>
      </Box>
      <Footer />
    </Box>
  );
}

export default Pricing;
