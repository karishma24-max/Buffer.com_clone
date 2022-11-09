import { Box, Divider, Grid, GridItem, Heading, Text, Image } from "@chakra-ui/react"
import "./MainPage.module.css"

const template_arr = [
    {
        template: 'https://buffer-start-page.s3.amazonaws.com/presets/Default_X2.png',
        title : 'Traveler'

    },
    {
        template: 'https://buffer-start-page.s3.amazonaws.com/presets/Flower_X2.png',
        title : 'Flowers Shop'
    },
    {
        template: 'https://buffer-start-page.s3.amazonaws.com/presets/Pizza_X2.png',
        title : 'Pizza'
    },
    {
        template: 'https://buffer-start-page.s3.amazonaws.com/presets/Alexoo_X2.png',
        title : 'Alexo'
    },
    {
        template: 'https://buffer-start-page.s3.amazonaws.com/presets/Alba_X2.png',
        title : 'Alba'
    },
    {
        template: 'https://buffer-start-page.s3.amazonaws.com/presets/Novika_X2.png',
        title : 'Novika'
    }
]

export const MainPage_Template = () => {
    return (
        <div>
            <div>
                <Heading md='md' my='1%' textAlign='center' fontFamily={'Montserrat'}>
                    Choose a starting template!
                </Heading>
                <Text fontSize={'md'} textAlign='center' fontFamily={'Montserrat'} m='1.5%'>
                    If you don't find a template that matches your brand you can customize it on the next step
                </Text>
                <Text fontFamily={"sans-serif"} fontSize={'md'} textAlign={'center'} m='auto' mt='7%' w='7%' borderBottom={'2px solid blue'}>All Template</Text>
                <Divider />
            </div>
            <Grid w='80%' m='auto' my='3%' templateColumns='repeat(3, 1fr)' gap={6}>
                {
                    template_arr.map((i) => (
                        <GridItem>
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