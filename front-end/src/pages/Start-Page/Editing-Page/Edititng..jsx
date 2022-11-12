import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { Templates } from "../../../components/Templates/Templates";
import EditingPage from "../../../components/EditingComponents/EditingPage";
import UserNavbar from "../../../components/UserNavbar";

export default function Editing() {

  return (
    <Box display={"flex"} flexDir="row" w="100%">
      {/* <Box boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} borderRadius={"10px"} pr='5' pos='fixed' left={0} h='100%'>
            </Box>  */}
      <Box w="68%" bg="#d9def7">
        <Box>
          <Box
            bg="white"
            h="60px"
            w="100%"
            display="flex"
            justifyContent="right"
            marginBottom="30px"
          >
            <Button
              colorScheme="messenger"
              marginTop="10px"
              marginRight="15px"
              borderRadius="4px"
            >
              Publish Changes
            </Button>
          </Box>
          <Templates />
        </Box>
      </Box>
      <Box
        paddinX="2"
        pl="5"
        h="100%"
        bg="#f5f5f5"
        pos={"fixed"}
        right="0"
        boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
      >
        <EditingPage />
      </Box>
    </Box>
  );
}


    
    return (
        <>
        <UserNavbar />
        <Box display={'flex'} flexDir='row'>
            <Box boxShadow={'rgba(0, 0, 0, 0.35) 0px 5px 15px'} borderRadius={"10px"} pr='5' pos='fixed' left={0} h='100%'>
                <Text>Publish Data Change</Text>
            </Box> 
            <Box mt='2rem' ml={'20rem'} >
                <Templates />
            </Box>
            <Box  paddinX='2' pl='5'  h='100%' pos={"fixed"}  right='0'>
                <EditingPage />
            </Box>
        </Box>
        </>
    )
}

