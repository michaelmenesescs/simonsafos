import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const nav_container = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

`; 

const Links  = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`;





const HomeNavbar = () => {
    return (
        <nav_container>
            
            <Links>
            <Link href={"/"}>
                Simon Safos
            </Link>
            <Link href={"/art"}>
                art
            </Link >
            <Link href={"/photography"}>
                photography
            </Link >
            <Link href={"/about"}>
                about
            </Link >
            </Links>
           

        </nav_container>
    )
}

export default HomeNavbar

