import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  VStack,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {Link} from "react-router-dom"
const Links = [
  { name: "Tools", id: "/tools" },
  { name: "Skills", id: "/channels" },
  { name: "Pricing", id: "/pricing" },
  { name: "Blog", id: "/blog" },
  { name: "About", id: "/about" },
  { name: "Customers", id: "/customers" },
  { name: "Login", id: "/login" },
];

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        backgroundColor={"#ffffff"}
        px={{ base: "3", md: "8" }}
        position="sticky"
        top="0"
        w={{base:"auto",sm:"auto",md:"90%"}}
        m="auto"
        boxShadow= "rgba(149, 157, 165, 0.2) 0px 8px 24px"
        p={{sm:"auto",md:"20px 0px 10px 0px"}}
        zIndex={4}
        borderRadius="7px"
      >
        <Flex
          h={{ base: 70, sm: 70, md: 16 }}
          alignItems={"center"}
          justifyContent={"space-around"}
        >
          <IconButton
            size={"md"}
            icon={
              isOpen ? (
                <CloseIcon color={"black"} />
              ) : (
                <HamburgerIcon color={"black"} />
              )
            }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"}>
            <Heading letterSpacing={3} fontFamily={"Inspiration"}>
              <Link to={"/"} key={"home"}>
                <Image w="60%" src="https://i.ibb.co/bJy3Fdq/blulock.webp" alt="logo" />
              </Link>
            </Heading>
          </HStack>
          <Flex>
            <HStack
              as={"nav"}
              spacing={5}
              display={{ base: "none", md: "flex" }}
              fontWeight="500"
              fontSize="16px"
            >
              {Links.map((link) => (
                <Link to={link.id} style={{ cursor: "pointer" }} key={link.name}>
                  <Text fontSize="20px" as="b">
                    {link.name}
                  </Text>
                </Link>
              ))}
              <Link to="/signup"><Button border={"none"} _hover={{background:"blue"}} background={"blue"} color="white">Get Started</Button></Link>
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <VStack
            justifyContent={"center"}
            flexDirection="row"
            textAlign="center"
            alignItems="center"
            h="100vh"
            display={{ md: "none" }}
            fontWeight="500"
            fontSize="16px"
          >
            <VStack spacing={14} mt="20">
              {Links.map((link) => (
                <Link
                  style={{ cursor: "pointer" }}
                  key={link.name}
                  onClick={isOpen ? onClose : onOpen}
                >
                  <Text fontSize="20px" as="b" >
                    {link.name}
                  </Text>
                </Link>
              ))}
              <Link to="/signup"><Button border={"none"} _hover={{background:"blue"}} background={"blue"} color="white">Get Started</Button></Link>

            </VStack>
          </VStack>
        ) : null}
      </Box>
    </>
  );
}

export default Navbar;
