import { Box, Button, HStack, Spacer, Text } from "@chakra-ui/react";
import { Templates } from "../../../components/Templates/Templates";
import EditingPage from "../../../components/EditingComponents/EditingPage";
import UserNavbar from "../../../components/UserNavbar";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export default function Editing() {
    const { id } = useParams()
    const Navigate = useNavigate()

    const handelNavigate = () => {
        Navigate(`/publish-website/${id}`)
        
    }

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
                            onClick={handelNavigate}
                        >
                            Publish Changes
                        </Button>
                    </Box>
                    <Templates />
                </Box>
            </Box>
            <Box
                paddingX="2"
                pl="5"
                h="100%"
                bg="#f5f5f5"
                pos={"fixed"}
                overflow={'scroll'}
                right="0"
                boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            >
                <EditingPage />
            </Box>
        </Box>
    );
}





