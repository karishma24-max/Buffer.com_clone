import { Box, Image, Link, Text } from "@chakra-ui/react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import {BsArrowRight} from "react-icons/bs"
const customers = [
    {
        logo:"https://buffer.com/static/caseStudies/campaign-monitor/campaign-monitor-logo.svg",
        img:"https://buffer.com/static/caseStudies/campaign-monitor/aaron-beashel.svg",
        desc:'"Buffer helps us measure what networks, and what content, is working best for us."',
        name:"Aaron Beashel"
    },
    {
        logo:"https://buffer.com/static/caseStudies/fortune/fortune-logo.svg",
        img:"https://buffer.com/static/caseStudies/fortune/heather-muse.svg",
        desc:'"Buffer solved our problem. We don’t post in clusters anymore. We’ve been very happy with it."',
        name:"Heather Muse"
    },
    {
        logo:"https://buffer.com/static/caseStudies/denver-broncos/denver-broncos-logo.svg",
        img:"https://buffer.com/static/caseStudies/denver-broncos/ben-hunt.svg",
        desc:'"Buffer allows everyone on our media team to contribute content and approval on everything that goes out."',
        name:"Ben Hunt"
    },
    {
        logo:"https://buffer.com/static/caseStudies/seattle-times/seattle-times-logo.svg",
        img:"https://buffer.com/static/caseStudies/seattle-times/andrew-macrae.svg",
        desc:'"Since we’ve signed up with Buffer, we’ve had a 150% increase in page views from social media."',
        name:"Andrew Macrae"
    },
    {
        logo:"https://buffer.com/static/caseStudies/about/about-logo.svg",
        img:"https://buffer.com/static/caseStudies/about/matthew-knell.svg",
        desc:'"We’re seeing really good growth, and Buffer allows us to do that at scale more quickly."',
        name:"Matthew Knell"
    },
    {
        logo:"https://buffer.com/static/caseStudies/foster-coffee-company/foster-coffee-company-logo.svg",
        img:"https://buffer.com/static/caseStudies/foster-coffee-company/nicholas-pidek.svg",
        desc:'"We’re seeing really good growth, and Buffer allows us to do that at scale more quickly."',
        name:"Nicholas Pidek"
    },
    {
        logo:"https://buffer.com/static/caseStudies/car-next-door/car-next-door-logo.svg",
        img:"https://buffer.com/static/caseStudies/car-next-door/shannon-barker.svg",
        desc:'"Buffer enables us to plan, schedule and deliver our content in a consistent, yet flexible way"',
        name:"Shannon Barker"
    },
    {
        logo:"https://buffer.com/static/caseStudies/marketeering-group/marketeering-group-logo.svg",
        img:"https://buffer.com/static/caseStudies/marketeering-group/jessica-dringman.svg",
        desc:'"Social was so time-consuming. Buffer made it easy to set and forget our publishing schedule."',
        name:"Jessica Dringman"
    },
    {
        logo:"https://buffer.com/static/caseStudies/social-hire/social-hire-logo.svg",
        img:"https://buffer.com/static/caseStudies/social-hire/tony-restell.svg",
        desc:'"Social was so time-consuming. Buffer made it easy to set and forget our publishing schedule."',
        name:"Tony Restell"
    },
]
function Customers() {
  return (
    <Box>
      <Navbar />
      {/* Body */}
      <Box mt={{sm:"50px",md:"100px"}}>
        {/* Section -1 */}
        <Box textAlign={"center"}>
          <Text fontSize={"4xl"} as="b">YOU'RE IN GOOD COMPANY</Text><br/>
          <Text fontSize={"3xl"} as="b">Featured Customers</Text><br/>
          <Text fontSize={"2xl"} as="b"><br/>
            See how big brands and growing businesses find social media success
            with Buffer
          </Text>
        </Box>
        <Box w="50%" m="auto" textAlign={"center"}>
            {
                customers.map((customer,i)=>{
                    return (
                    <Box p={{sm:"25px",md:"50px"}} border={i%3===0?"5px solid blue":i%2===0?"5px solid orange":"5px solid teal"} m="30px" key={customer.name}>
                        <Box display={"flex"} justifyContent="center"><Image my="30px"src={customer.logo} alt={customer.name}/></Box>
                        <Text fontSize={"2xl"}>{customer.desc}</Text>
                        <Box mt="30px"display={"flex"}fontSize={"1xl"} color="blue" justifyContent={"center"}><Link> Read the case study </Link><BsArrowRight style={{paddingTop:"6px",fontSize:"25px"}}/></Box>
                        
                        <Box mt="30px"display={"flex"} justifyContent="center" alignItems={"center"}> <Image src={customer.img} alt={customer.name} /><Text ml="30px" fontSize={"2xl"} as="b" color={"gray.400"}>{customer.name}</Text></Box>
                        
                    </Box>
                    )
                })
            }
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default Customers;
