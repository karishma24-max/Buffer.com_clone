
import { Box, EditableInput, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Template1 from "../../Templates/Template1";
import { Templates } from "../../Templates/Templates";
import EditingPage from "../EditingPage/EditingPage";
import DrawerComponents from "../Start-Page/Drawer-Components/DrawerComponents";


export default function Editing() {

    
    return (
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
    )
}