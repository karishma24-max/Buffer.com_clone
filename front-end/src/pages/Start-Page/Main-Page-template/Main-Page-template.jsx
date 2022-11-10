import { Box, Divider, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import Template2 from "../../../Templates/Template2"
import Template1 from "../../../Templates/Template1"
import "./MainPage.module.css"
import Editing from "../../Editing-Page/Edititng."

export const template_arr = [
    {
    id : 1,
    template: "https://buffer-start-page.s3.amazonaws.com/presets/Default_X2.png",
    title : "Traveler",
    path : "Traveler-Template",
    file : <Template1 />
    
    },
    {
    template : "https://buffer-start-page.s3.amazonaws.com/presets/Flower_X2.png",
    title : "Flowers Shop",
    path : "Flowers-Shop-Template",
    file : <Template2 />
    },
    {
    template : "https://buffer-start-page.s3.amazonaws.com/presets/Pizza_X2.png",
    title : "Pizza",
    path : "Pizza-Template"
    },
    {
    template : "https://buffer-start-page.s3.amazonaws.com/presets/Alexoo_X2.png",
    title : "Alexo",
    path : "Alexo-Template"
    },
    {
    template : "https://buffer-start-page.s3.amazonaws.com/presets/Alba_X2.png",
    title : "Alba",
    path : "Alba-Template"
    },
    {
    template : "https://buffer-start-page.s3.amazonaws.com/presets/Novika_X2.png",
    title : "Novika",
    path : "Novika-Template"
    }
]

// fetch

export const MainPage_Template = () => {
    const Navigate = useNavigate()

    const handelTemplateNaviate = (path , id) => {
        
        console.log(id)
        Navigate(`./${path}`)
        
    }
    
    

    return (
        <div>
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