import React from 'react'
import styled from 'styled-components';
import pix from "../../src/Components/Assets/img.webp"


const Hero = () => {
  return (
    <div>
        <Container>
            <Main>
                <Left>
                   <AllHolder>
                   <BigText>Find the <br /> job that fits your Life</BigText>
                    <SmallText>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed exercitationem dolor sint dicta ut quod nam omnis error distinctio est! adipisicing elit. Sed exercitationem dolor sint dicta ut </SmallText>
                    <Holder>
                        <Botton placeholder="Job Title or Company Name"></Botton>
                        <Botton placeholder='Locations'></Botton>
                        <Icon>Icon</Icon>
                    </Holder>
                   </AllHolder>
                </Left>
                <Right>
                  <Img src={pix}/>
                </Right>
            </Main>
        </Container>
    </div>
  )
}

export default Hero;

const Img = styled.img`
width: 100%;
height: 370px;
object-fit: cover;
`

const AllHolder = styled.div`
`

const Icon = styled.div`
width: 70px;
height: 60px;
display: flex;
justify-content: center;
align-items: center;
background-color: gray;
`

const Botton = styled.input`
width : 320px;
height: 60px;
border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
background-color: lightblue;
border: none;
outline: none;
padding-left: 5px;
`

const Holder = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 95%;
height: 80px;
`

const SmallText = styled.div`
margin: 50px 0;
width: 80%;
`

const BigText = styled.div`
font-size: 50px;
font-weight: bolder;
`

const Right = styled.div`
width: 40%;
height: 100%;
display: flex;
align-items: center;
`

const Left = styled.div`
width: 59%;
height: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
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
height: calc(100vh - 80px);
display: flex;
justify-content: center;
align-items: center;
`