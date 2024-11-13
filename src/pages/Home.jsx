import React from 'react'
import { Link } from 'react-router-dom';
import { HomeDiv, HomeImg, HomeBtn } from '../styles/HomeStyle';

function Home() {

    // Img src 링크가 왜 저런 모양인지
    return (
        <>
            <HomeDiv>
                <HomeImg src="/images/pokemon-logo.png" alt="Logo Image" />
                <Link to="dex">
                    <HomeBtn>포켓몬 도감 시작하기</HomeBtn>
                </Link>
            </HomeDiv>
        </>
    )
}

export default Home