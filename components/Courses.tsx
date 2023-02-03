import React from 'react'
import { Flex, Link, Image, Text, Stack, Heading } from '@chakra-ui/react'

export default function Courses() {
    return (
        <div>
            <Stack direction={['column', 'column', 'row']} textAlign={['left','left','center']} justifyContent='center' bgGradient='linear(to-r, black, red)'>
                <Stack >
                    <Flex boxSize={400} p='6'  direction={'column'} _hover={{ textColor: 'white' }}>
                        <Heading>Web 3.0 (Blockchain) and Metaverse Specialization</Heading>
                        <Text>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web
                            3.0 and Metaverse experiences for the next generation of the internet by specializing
                            in building worlds that merge the best of cutting-edge decentralized distributed blockchains
                            with 3D metaverse client experiences.</Text>
                    </Flex>
                    <Flex direction={'column'} _hover={{ textColor: 'white' }} boxSize={400} p='6' >
                        <Heading>Artificial Intelligence (AI) and Deep Learning Specialization</Heading>
                        <Text>The AI and Deep Learning specialization focuses on building and deploying intelligent
                            APIs using OpenAI models and building custom Deep Learning Tensorflow models.</Text>
                    </Flex></Stack>
                <Stack>
                    <Flex direction={'column'} _hover={{ textColor: 'white' }} boxSize={400} p='6' >
                        <Heading>Cloud-Native Computing Specialization</Heading>
                        <Text>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for
                            Kubernetes. </Text>
                    </Flex>
                    <Flex direction={'column'} _hover={{ textColor: 'white' }} boxSize={400} p='6' >
                        <Heading>Ambient Computing and IoT Specialization</Heading>
                        <Text>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories,
                            and Cities using Voice computing, Matter Protocol, and Embedded Devices. </Text>
                    </Flex></Stack>
                <Stack>
                    <Flex direction={'column'} _hover={{ textColor: 'white' }} boxSize={400}>
                        <Heading>Genomics and Bioinformatics Specialization</Heading>
                        <Text>Genomics is the study of the total genetic makeup of individual organisms, and how this genetic
                            information is structured, functions, and has evolved; bioinformatics encompasses a diverse range
                            of analytical methods and tools applied to genomic data. This Specialization focuses on performing
                            complex bioinformatics analysis using the most essential Python libraries and applications.</Text>
                    </Flex>
                    <Flex direction={'column'} _hover={{ textColor: 'white' }} boxSize={400}>
                        <Heading>Network Programmability and Automation Specialization</Heading>
                        <Text>More than ever, network engineers are finding it challenging to complete their duties entirely manually.
                            Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement
                            for enterprises to become more adaptable and agile. This course teaches network engineers how to automate
                            systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</Text>
                    </Flex></Stack>
            </Stack>
        </div>
    )
}