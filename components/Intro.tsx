import React from 'react'
import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react'

export default function Intro() {
    return (
  
        <Box p={'8'}>
            <Flex background={'ActiveBorder'} bgGradient='linear(to-r, black, grey)' p={'16'}>
                <Box p={'16'} w={'full'} px={'3'}>
                    <Heading textAlign={['left','left','center']} color={'red.900'} fontSize={'7xl'} py={'6'}>Presidential Initiative for Artificial Intelligence and Computing</Heading>
                    <Text textAlign={['left','left','center']} textColor='red.900' fontSize={'3xl'}>In this brand-new type of curriculum, students will learn how
                        to make money and boost exports in the classroom and will begin doing so within six months of the programs
                        beginning. It resembles a cross between a corporate venture and an educational project.
                    </Text>
                </Box>
                <Box w={'full'} px={'3'}>
                    <Image p={'8'} objectFit={'cover'}  src='https://www.piaic.org/static/media/Logo.fb7de414.svg' fit='fill' fallbackSrc='https://via.placeholder.com/150' alt={'Loading...'}/>
                </Box>
            </Flex>
        </Box>
    )
}
   
