import React from 'react'
import { Flex, Link, Image, Text, HStack } from '@chakra-ui/react'


export default function Header({ children = '' }) {

    return (

        <div>
            <HStack bgGradient='linear(to-r, black, red)'>
                <Flex color={'#E2EE8F0'} w='full'>
                    <Flex>
                        <Image w={['100', '150', '200']} color='red' src='D:\1.Meta-web3\5.panaversedao\public\image\logos\panaverse80_80.png' />
                    </Flex>

                    <Link href='/' px={5} pt={3} py='20' fontFamily='body' fontSize={['18', '22', '26']} fontWeight='bold' color={'whiteAlpha.800'}>Home</Link>
                    <Link href='https://www.piaic.org' px={5} pt={4} py='20' fontFamily='body' fontSize={['16', '20', '24']} fontWeight='bold' color={'whiteAlpha.800'}>Admission</Link>
                    <Link href='https://www.piaic.org' px={5} pt={4} py='20' fontFamily='body' fontSize={['16', '20', '24']} fontWeight='bold' color={'whiteAlpha.800'}>About</Link>
                </Flex>

                <Flex color={'#E2EE8F0'} >
                    <Link href='https://www.piaic.org' textAlign={'right'} pt={4} px='5' fontFamily='body' fontSize={['16', '20', '24']} fontWeight='bold' color={'whiteAlpha.800'}>PIAIC Website</Link>

                </Flex></HStack>
            <Text textAlign={'right'}>{children}</Text>

        </div>
    )
}