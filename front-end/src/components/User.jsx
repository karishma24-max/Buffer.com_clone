import React from 'react';
import {useDispatch} from "react-redux";
import { logout } from "../redux/Authenticated/authenticated.action";
import {Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure} from "@chakra-ui/react";
import UserNavbar from './UserNavbar';
function User() {
  let dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure()
    let user = JSON.parse(localStorage.getItem("user")) || {
        email: "BlueLock",
        };
  return (
    <Box>
        <UserNavbar/>

        <Box fontFamily={"sans-serif"} mt={"50px"} textAlign="left" p=" 10% 30%">
            <Text fontWeight={600} fontSize={"30px"}>Name: <span style={{color:"blue",fontWeight:"900"}}>{user.name}</span></Text>
            <Text fontWeight={600} fontSize={"30px"}>Email:<span style={{color:"blue",fontWeight:"900"}}>{user.email}</span> </Text>
            <Text fontWeight={600} fontSize={"30px"}>Password: <span style={{color:"blue",fontWeight:"900"}}>{user.password}</span></Text>
            <Button mt="30px "color={"red"} border="1px solid red" background={"none"} p="20px 40px" onClick={onOpen}>Logout</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"red.500"}>Logout</ModalHeader>
          <ModalCloseButton />
          <ModalBody color={"blue"} fontSize={"20px"}>
            Click on to Logout
          </ModalBody>

          <ModalFooter>
            <Button variant='ghost' colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button onClick={()=>dispatch(logout())} color={"red"} variant='ghost'>Logout</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>
    </Box>
  )
}

export default User
