import { Box,
     Button,
     Drawer,
     DrawerBody,
     DrawerCloseButton,
     DrawerContent,
     DrawerFooter,
     DrawerHeader,
     DrawerOverlay,
     Input,
     Text,
     useDisclosure
     } from "@chakra-ui/react";

import React from "react"
import {TriangleDownIcon} from "@chakra-ui/icons"
import {GoTriangleLeft, GoTriangleRight} from "react-icons/go"

const drawerItem = [
    {
        id : 1,
        title : 'Profile Image/Logo',
        icon : ''
    },
    {
        id : 2,
        title : 'Text',
        icon : ''
    },
    {
        id : 3,
        title : 'Image',
        icon : ''
    },
    {
        id : 4,
        title : 'Text',
        icon : ''
    },
    {
        id : 5,
        title : 'Youtube Video',
        icon : ''
    },
    {
        id : 6,
        title : 'Social Links',
        icon : ''
    }
]



export default function DrawerComponents(id) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    
    const width = isOpen ? '5%' : '100%'
    const display = isOpen ? 'block' : "none"

    return (
        <>
           <Box h='100%' pos={'fixed'} right='0' zIndex='1' bgColor={'white'} display={'flex'} justifyContent={'center'}>
            <Box display={"flex"} justifyContent='center' alignItems={'center'}  w={width} textAlign={'center'}>
                {isOpen ? <GoTriangleLeft onClick={onClose}/> : <GoTriangleRight onClick={onOpen}/>}
            </Box>
            <Box w='95%'  display={display}>
                <Box py='10' px='4' display={'grid'} gridTemplateRows={`repeat(${drawerItem.length} , 50px)`} gap='40px' justifyContent={'center'} alignItems='center'>
                    {
                      drawerItem.map((i) => (
                        <Box  borderRadius={'10px'} border={'1px solid gray'}  key={i.id}>
                            <Text py='5' w='100%' px='4rem'>{i.title}</Text>
                        </Box>
                      ))
                    }
                </Box>
            </Box>
           </Box>
        </>
    )
}