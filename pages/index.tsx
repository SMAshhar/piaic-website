import Link from 'next/link'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Courses from '../components/Courses'


const IndexPage = () => (
  <ChakraProvider>
    <Header />
    <Intro/>
    <Courses />
  <Layout title="PIAIC">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
  
  </ChakraProvider>
)

export default IndexPage
