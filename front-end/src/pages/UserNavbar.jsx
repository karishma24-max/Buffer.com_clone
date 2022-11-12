import React from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  HStack,
  Spacer,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";
function UserNavbar() {
  let data = JSON.parse(localStorage.getItem("user")) || {
    user: { email: "BlueLock" },
  };
  console.log(data);
  return (
    <Box backgroundColor={"#FFFFFF"} fontFamily={"sans-serif"}>
      <Flex h="70px" w="95%" m="auto">
        <Box display={"Flex"}>
         {/*  //add the navigation to publishing Link */}
          <NavLink to="">
            <Button
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 10px"
              fontFamily={"sans-serif"}
              fontWeight={700}
            >
              <Image
                w="200px"
                h="70px"
                src="https://i.ibb.co/6JkQKCN/Bluelock.png"
                alt="logo"
              />
            </Button>
          </NavLink>
          {/*  //add the navigation link to publishing */}
          <NavLink to="">
            <Button
              _hover={{ color: "blue" }}
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 10px"
              fontFamily={"sans-serif"}
              fontWeight={700}
            >
              Publishing
            </Button>
          </NavLink>
          {/*   //add the navigation link to analytics*/}
          <NavLink to="">
            <Button
              _hover={{ color: "blue" }}
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 10px"
              fontFamily={"sans-serif"}
              fontWeight={700}
            >
              Analytics
            </Button>
          </NavLink>
         {/* //add the navigation to Engagement */}
          <NavLink to="">
            <Button
              _hover={{ color: "blue" }}
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 10px"
              fontFamily={"sans-serif"}
              fontWeight={700}
            >
              Engagement
            </Button>
          </NavLink>
          {/*  //add the navigation link to start page */}
          <NavLink to=""> 
            <Button
              _hover={{ color: "blue" }}
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 10px"
              fontFamily={"sans-serif"}
              fontWeight={700}
            >
              Start Page
            </Button>
          </NavLink>
        </Box>
        <Spacer />
        <HStack>
          <Box
            display={"Flex"}
            color="blue"
            fontFamily={"sans-serif"}
            fontSize={"18px"}
          >
            <AiOutlineTeam style={{ fontSize: "20px" }} />
            <NavLink to="" style={{ paddingLeft: "5px" }}>
              Invite your Team
            </NavLink>
          </Box>

          <Menu>
            <MenuButton
              _hover={{ color: "blue" }}
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 20px"
              fontFamily={"sans-serif"}
              fontWeight={700}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              App
            </MenuButton>
            <MenuList>
              <Link
                target={"_blank"}
                href="https://apps.apple.com/app/apple-store/id490474324"
              >
                <MenuItem>Buffer for iOS</MenuItem>
              </Link>
              <Link
                target={"_blank"}
                href="https://play.google.com/store/apps/details?id=org.buffer.android"
              >
                <MenuItem>Buffer for Android</MenuItem>
              </Link>
              <Link href="">
                <MenuItem>Remix By Buffer</MenuItem>
              </Link>
              <Link href="">
                <MenuItem>Integrations</MenuItem>
              </Link>
            </MenuList>
          </Menu>

          <Menu>
            <MenuButton
              _hover={{ color: "blue" }}
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 20px"
              fontFamily={"sans-serif"}
              fontWeight={700}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              Help
            </MenuButton>
            <MenuList>
              <MenuItem>Visit Help Center</MenuItem>
              <MenuItem>Quick Help</MenuItem>
              <MenuItem>Status</MenuItem>
              <NavLink to="/pricingdemo">
                <MenuItem>Pricing & plans</MenuItem>
              </NavLink>
              <MenuItem>Wishist</MenuItem>
              <MenuItem>Changelog</MenuItem>
            </MenuList>
          </Menu>
          <Menu>
            <MenuButton
              _hover={{ color: "blue" }}
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 10px"
              fontFamily={"sans-serif"}
              fontWeight={700}
              as={Button}
              rightIcon={<ChevronDownIcon />}
            >
              <Box display={"Flex"} alignItems="center">
                <Text> {data.user.email}</Text>{" "}
                <Image src="https://i.ibb.co/VL94j8H/user.png" alt="user" />
              </Box>
            </MenuButton>
            <MenuList>
              <Link to="/userdetails"><MenuItem>Account</MenuItem></Link>
              <MenuItem>My preferences</MenuItem>
              <MenuItem>Channels</MenuItem>
              <MenuItem>Team</MenuItem>
              <MenuItem>
                <Button
                  background={"none"}
                  _hover={"none"}
                  color="red"
                  onClick={""}  // pass the dispatch function to remove the user data in redux as well as Localstorage
                >
                  Logout
                </Button>
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </Flex>
    </Box>
  );
}

export default UserNavbar;
