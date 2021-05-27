import Head from 'next/head'
import Image from 'next/image'
import HomeNavbar from '../components/HomeNavbar'
import styles from '../styles/Home.module.css'

import styled from 'styled-components'

const Container = styled.div`
  display:flex;
  
`;


export default function Home() {
  return (
    <Container>

      <Head>
        <title>Simon Safos</title>
        <meta name="description" content="Simon Safos, A creative from New York City" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeNavbar />
    </Container>
  )
}
