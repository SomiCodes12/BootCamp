import React from 'react'
import styled from 'styled-components';

const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Left>Logo</Left>
          <Right>
       <NavHolder>
       <Navs>Home</Navs>
            <Navs>About</Navs>
            <Navs>Candidates</Navs>
            <Navs>Employers</Navs>
            <Navs>Blog</Navs>
            <Navs>Contact</Navs>
       </NavHolder>
       <Botton>Post Job</Botton>
          </Right>
        </Main>
      </Container>
    </div>
  )
}

export default Header;

const Botton = styled.div`
width: 150px;
height: 50px;
background-color: grey;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
`

const Navs = styled.div``

const NavHolder = styled.div`
width: 500px;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Right = styled.div`
width: 670px;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Left = styled.div`
font-size: 30px;
font-weight: bold;
color: white;
`

const Main = styled.div`
width: 95%;
height: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Container = styled.div`
width: 100%;
height: 90px;
background-color: grey;
color: white;
display: flex;
justify-content: center;
align-items: center;
`