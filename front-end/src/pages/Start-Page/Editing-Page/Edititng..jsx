import { Box, Button, HStack, Spacer, Text, useToast } from "@chakra-ui/react";
import { Templates } from "../../../components/Templates/Templates";
import EditingPage from "../../../components/EditingComponents/EditingPage";
import UserNavbar from "../../../components/UserNavbar";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useRef } from "react";

export default function Editing() {
    const { id } = useParams()
    const Navigate = useNavigate()
    const toast = useToast(0)
    const timerId = useRef()
    const [count, setCount] = useState(5)

    const handelNavigate = () => {
        timerId.current = setInterval(() => {
            setCount((prev) => prev - 1)
        }, 1000)

        toast({
            title: `Redirecting in Publish Website`,
            position: "top",
            status: 'success',
            duration: 5000,
            isClosable: true,
        });
    }


    

    if (count === 0) {
        Navigate(`/publish-website/${id}`)
        clearTimeout(timerId.current)
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





