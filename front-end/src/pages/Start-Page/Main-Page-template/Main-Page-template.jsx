import { Box, Divider, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import { getId, getTemplate, updateTemplate} from "../../../redux/Template/template.action"
import {useDispatch} from "react-redux"
import UserNavbar from "../../../components/UserNavbar"

export const template_arr = [
    {
    id : "636fde4cf6a43916e145eafb",
    template: "https://buffer-start-page.s3.amazonaws.com/presets/Default_X2.png",
    title : "Traveler",
    path : "636fde4cf6a43916e145eafb",
    
    },
    {
    id : "636fde4cf6a43916e145eafc",
    template : "https://buffer-start-page.s3.amazonaws.com/presets/Flower_X2.png",
    title : "Flowers Shop",
    path : "636fde4cf6a43916e145eafc",
    },
    {
    id : "636fde4cf6a43916e145eafd",
    template : "https://buffer-start-page.s3.amazonaws.com/presets/Pizza_X2.png",
    title : "Pizza",
    path : "636fde4cf6a43916e145eafd"
    },
    {
    id : "636fe09fc6305def2eb21bf6",
    template : "https://buffer-start-page.s3.amazonaws.com/presets/Alexoo_X2.png",
    title : "Alexo",
    path : "636fe09fc6305def2eb21bf6"
    }
]

// fetch

export const MainPage_Template = () => {
    const Navigate = useNavigate()
    const dispatch = useDispatch()

    const handelTemplateNaviate = (path , id) => {
        Navigate(`./${path}`)
        dispatch(getTemplate(id))
        
    }
    
    

    return (
        <div>
            <UserNavbar />
            <div>
                <Heading md='md' my='1%' textAlign='center' fontFamily={'Montserrat'}>
                    Choose a starting template!
                </Heading>
                <Text fontSize={'md'} textAlign='center' fontFamily={'Montserrat'} m='1.5%'>
                    If you don't find a template that matches your brand you can customize it on the next step
                </Text>
                <Text fontFamily={"sans-serif"} fontSize={'md'} textAlign={'center'} m='auto' mt='4%' w='7%' borderBottom={'2px solid blue'}>All Template</Text>
                <Divider />
            </div>
            <Grid w='80%' m='auto' my='3%' templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    template_arr.map((i) => (
                        <GridItem key={i.path} onClick={()=>handelTemplateNaviate(i.path , i.id)}>
                            <Box borderRadius={'10px'} bg={'gray.100'} >
                                <Box w='70%' m='auto' >
                                    <Image pt='2em' src={i.template} />
                                </Box>
                            </Box>
                            <Text my='1%'>
                                {i.title}
                            </Text>
                        </GridItem>
                    ))
                }
            </Grid>
        </div>
    )
}