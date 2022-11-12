import React from "react";
import { Box, Flex, Button, HStack, Spacer, Image, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { AiOutlineTeam } from "react-icons/ai";
import { ChevronDownIcon } from "@chakra-ui/icons";
function UserNavbar() {
  return (
    <Box>
      <Flex h="70px" w="95%" m="auto">
        <Box display={"Flex"}>
          <Link to="">
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
          </Link>
          <Link to="">
            <Button
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
          </Link>
          <Link to="">
            <Button
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
          </Link>
          <Link to="">
            <Button
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
          </Link>
          <Link to="">
            <Button
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
          </Link>
        </Box>
        <Spacer />
        <HStack>
          <Box display={"Flex"} color="blue" fontFamily={"sans-serif"} fontSize={"18px"}>
            <AiOutlineTeam style={{fontSize:"20px" }} />
            <Link to="" style={{paddingLeft:"5px"}}>Invite your Team</Link>
          </Box>
         
          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    App
  </MenuButton>
  <MenuList>
    <MenuItem>Buffer for iOS</MenuItem>
    <MenuItem>Buffer for Android</MenuItem>
    <MenuItem>Remix By Buffer</MenuItem>
    <MenuItem>Integrations</MenuItem>
  </MenuList>
</Menu>
        
          <Menu>
  <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Help
  </MenuButton>
  <MenuList>
    <MenuItem>Visit Help Center</MenuItem>
    <MenuItem>Quick Help</MenuItem>
    <MenuItem>Status</MenuItem>
    <MenuItem>Pricing & plans</MenuItem>
    <MenuItem>Wishist</MenuItem>
    <MenuItem>Changelog</MenuItem>
  </MenuList>
</Menu>
          <Link to="">
            <Button
              background={"none"}
              color="grey"
              borderRadius={0}
              fontSize={"18px"}
              p="30px 10px"
              fontFamily={"sans-serif"}
              fontWeight={700}
            >
              User
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
}

export default UserNavbar;
