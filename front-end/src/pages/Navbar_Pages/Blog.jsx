import { Box, Button, Grid, GridItem, Image, Input, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
const blogs = [
  {
    img: "https://buffer.com/resources/content/images/size/w600/2022/11/ASK-BUFFER-03.png",
    heading: "Ask Buffer: How Do I Develop my Brand Voice on Social Media?",
    description:
      "Establishing a clear brand voice will help your online content stand out amongst the crowd and be more memorable for your followers.",
    date: "Nov 3, 2022",
    time: "8 min read",
  },
  {
    img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/11/1.-Blog-header-graphic--5-.png",
    heading: "New from Start Page: Schedule Posts to your Link In Bio for Free",
    description:
      "Schedule new updates to appear on your Start Page to beat the algorithm and get the reach you deserve (oh and it’s included for free!).",
    date: "Nov 2, 2022",
    time: "8 min read",
  },
  {
    img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/11/4.-Blog-header-graphic-extra--1-.png",
    heading: "Start Page Posts: Get the Reach you Deserve",
    description:
      "We’ve built something that could boost your reach by up to 40% Tweets containing a link get less reach, engagement, and retweets. To get the reach you deserve we’ve built Start Page scheduling.",
    date: "Nov 2, 2022",
    time: "8 min read",
  },
  {
    img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/10/Paynter-carelabel-.jpg",
    heading:
      "Why Small Business Owners Need Support Systems, With Examples From 6 Small Business Owners",
    description:
      "In Small Business, Big Lessons, season two, episode six, we detail how the owners of Harlow, SparkToro, Made With Local, Zingerman’s, Destination Unknown Restaurants and Paynter Jackets approach getting support as small business owners.",
    date: "Nov 1, 2022",
    time: "10 min read",
  },
  {
    img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/10/martin-sanchez-x-rqS-3Qi10-unsplash.jpg",
    heading: "An Introduction to Vertical Social Networks",
    description:
      "Vertical networks are social platforms solely dedicated to niche interests. In this article, we’ll go through what vertical networks are and the opportunities for businesses to adopt them in their marketing strategy.",
    date: "Oct 21, 2022",
    time: "6 min read",
  },
  {
    img: "https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/resources/content/images/size/w600/2022/10/chris-montgomery-smgTvepind4-unsplash-1.jpg",
    heading: "How We Set Communications Expectations As A Fully Remote Team",
    description:
      "As an entirely remote team of more than 80 people, how we communicate is critical to how we operate as a company, collaborate, and build a solid remote culture.",
    date: "Oct 15, 2022",
    time: "6 min read",
  },
];
function Blog() {
  return (
    <Box>
      <Navbar />

      <Box mt="100px">
        <Grid p="60px 30px"boxShadow="rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px" w="80%" m="auto" templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(2,1fr)" }} gap={10}>
            <GridItem>
                <Image src="https://buffer.com/resources/content/images/size/w600/2022/11/ChaseBank_Capture_211.JPG" alt="blog"/>
            </GridItem>
            <GridItem >
                <Text fontWeight={700} lineHeight={{sm:"20px",md:"50px"}} fontSize={{sm:"30px",md:"40px"}}>How These Small Businesses Stand Up For What They Believe In</Text>
                <Text fontWeight={400} color={"gray.600"} fontSize={{sm:"20px",md:"25px"}}>These small business owners use their platforms to speak up about deserving causes and have incorporated elements into their businesses to help make a difference.</Text>
                <Text color="grey">Nov 2 2021  Read 5 mins Follow</Text>
                <Box mt="10px" alignItems={"center"} display={"flex"}>
                <Image w="10%" borderRadius={"50%"} src="https://buffer.com/resources/content/images/size/w300/2022/03/Untitled-design.png" alt="uma"/>
                <Text pl="20px" as="b">Umber Bhatti</Text>
                </Box>
            </GridItem>
        </Grid>
        <Grid
          w="80%"
          m="auto"
          mt="50px"
          templateColumns={{ sm: "repeat(1,1fr)", md: "repeat(3,1fr)" }}
          templateRows={{ sm: "repeat(6,1fr)", md: "repeat(2,1fr)" }}
          gap={5}
        >
          {blogs.map((prod, i) => {
            return (
              <GridItem
                p="10px"
                key={prod.img}
                boxShadow="rgba(0, 0, 0, 0.09) 0px 3px 12px"
              >
                <Image w="400px" h="300px" src={prod.img} alt={i} />
                <Text p="10px" mt="10px" fontSize={"25px"} fontWeight={700}>
                  {prod.heading}
                </Text>
                <Text p="10px" fontSize={"20px"} mt="10px">
                  {prod.description}
                </Text>
                <Text p="10px">
                  {prod.date}
                  {prod.date}
                </Text>
              </GridItem>
            );
          })}
        </Grid>
      </Box>
      <Box>
        <Text mt="50px" textAlign={"center"} fontSize="40px" fontWeight={700}>Subscribe to our newsletter</Text>
        <Text textAlign={"center"} fontSize="20px" fontWeight={400} color="gray.400">
          We’ll keep you in the loop on our best advice and strategies for
          social media<br/> marketing and growing a small business.
        </Text>

        <Box mt="50px" textAlign={"center"}>
            <Input border={"2px solid black"} w="300px" p="26px"></Input>
            <Button p="28px" ml="10px"
             color={"#FFFFFF"} backgroundColor={"red.400"} _hover={{background:"red"}}>Subscribe</Button>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Blog;
