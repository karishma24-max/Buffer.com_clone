import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaTiktok,
  FaLinkedin,
  FaPinterest,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <Box pb="20px">
      <Box mt="100px" textAlign={"center"} background={"blue.600"}>
        <Text
          pt="100px"
          fontSize={{ sm: "25px", md: "40px" }}
          fontWeight={700}
          color="#fff"
          textAlign={"center"}
        >
          140,000+ people like you use
          <br /> Buffer to build their brand on
          <br /> social media every month
        </Text>
        <Link to="/signup">
         
          <Button
            m="50px 0"
            color="#ffffff"
            p="30px"
            fontSize={"20px"}
            background="orange"
            _hover={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
          >
            Get started now
          </Button>
        </Link>
      </Box>
      <Grid
        w="80%"
        m="auto"
        mt="100px"
        templateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(1,1fr)",
          md: "40% 60%",
        }}
        gap={10}
      >
        <GridItem>
          <NavLink to="/">
            <Image
              w="60%"
              src="https://i.ibb.co/6JkQKCN/Bluelock.png"
              alt="logo"
            />
          </NavLink>
          <Flex m="50px 0px 20px 0px">
            <Link target={"_blank"} href="https://www.instagram.com/buffer/">
              <BsInstagram style={{ paddingRight: "10px", fontSize: "30px" }} />
            </Link>
            <Link target={"_blank"} href="https://www.facebook.com/bufferapp">
              <FaFacebookF style={{ paddingRight: "10px", fontSize: "30px" }} />
            </Link>
            <Link target={"_blank"} href="https://twitter.com/buffer">
              <FaTwitter style={{ paddingRight: "10px", fontSize: "30px" }} />
            </Link>
            <Link target={"_blank"} href="https://tiktok.com/@bufferapp">
              <FaTiktok style={{ paddingRight: "10px", fontSize: "30px" }} />
            </Link>
            <Link
              target={"_blank"}
              href="https://www.linkedin.com/company/bufferapp/"
            >
              <FaLinkedin style={{ paddingRight: "10px", fontSize: "30px" }} />
            </Link>
            <Link target={"_blank"} href="https://in.pinterest.com/bufferapp/">
              <FaPinterest style={{ fontSize: "30px" }} />
            </Link>
          </Flex>
          <Text fontSize={"20px"} as="b">
            Download
          </Text>
          <br />
          <Link
            target={"_blank"}
            href="https://apps.apple.com/app/apple-store/id490474324?pt=936146&ct=SiteFooter&mt=8"
          >
            <Button
              borderRadius={"50px"}
              m="10px 10px 10px 0px"
              border={"1px solid blue"}
              color="blue"
              background={"none"}
            >
              <FaApple style={{ marginRight: "5px" }} /> App Store
            </Button>
          </Link>
          <Link
            href="https://play.google.com/store/apps/details?id=org.buffer.android&hl=en&pli=1"
            target={"_blank"}
          >
            <Button
              m="10px 10px 10px 0px"
              borderRadius={"50px"}
              border={"1px solid blue"}
              color="blue"
              background={"none"}
            >
              <FaGooglePlay style={{ paddingRight: "5px" }} />
              Google Play
            </Button>
          </Link>
          <Text fontSize={"10px"}>
            Copyright ©2022 Buffer | Privacy | Terms | Security
          </Text>
        </GridItem>
        <GridItem>
          <Grid
            templateColumns={{
              base: "repeat(1,1fr)",
              sm: "repeat(1,1fr)",
              md: "repeat(4,1fr)",
            }}
          >
            <GridItem>
              <Text lineHeight={"35px"} fontWeight={"700"} fontSize="25px">
                Tools
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Publishing
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Analytics
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Enagagement
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Start PAge
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Extras
              </Text>
            </GridItem>
            <GridItem>
              <Text lineHeight={"35px"} fontWeight={"700"} fontSize="25px">
                Resources
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Blog
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Content library
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Browser extenstion
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Free imae editor
              </Text>
            </GridItem>
            <GridItem>
              <Text lineHeight={"35px"} fontWeight={"700"} fontSize="25px">
             
                Support
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Help Center
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Status
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                changelog
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Product Road map
              </Text>
            </GridItem>
            <GridItem>
              <Text lineHeight={"35px"} fontWeight={"700"} fontSize="25px">
                Companay
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                About
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Transparancy
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                carrers
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Press
              </Text>
              <Text lineHeight={"35px"} fontWeight={"400"} fontSize="18px">
                Sitemap
              </Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
}

export default Footer;
