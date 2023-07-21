import React from 'react'
import styled from 'styled-components'

const Job = () => {
  return (
    <div>
        <Container>
            <Main>
           <MainHolder>
           <Title>Post A New Job</Title>
                <Holder>
                    <Name>Job Title</Name>
                    <InputHolder>
                        <Input placeholder='Write Job Title'/>
                    </InputHolder>
                </Holder>
                <Holder>
                    <Name>Company</Name>
                    <InputHolder>
                        <Input placeholder='Write Company Name'/>
                    </InputHolder>
                </Holder>
                <Holder>
                    <Name>Location (optional)</Name>
                    <InputHolder>
                        <Input placeholder='e.g:London'/>
                    </InputHolder>
                </Holder>
                <Holder>
                    <Name>Category</Name>
                    <InputHolder>
                        <Input placeholder='All Categories'/>
                    </InputHolder>
                </Holder>
                <Holder>
                    <Name>Job Tags</Name>
                    <InputHolder>
                        <Input placeholder='e.g:Management , PHP , Socialmedia'/>
                    </InputHolder>
                </Holder>
                <Botton>Post Job</Botton>
           </MainHolder>
            </Main>
        </Container>
    </div>
  )
}

export default Job

const Botton = styled.div`
width: 98%;
height: 50px;
border-radius: 30px;
background-color: dodgerblue;
display: flex;
justify-content: center;
align-items: center;
margin-top: 40px;
`

const MainHolder = styled.div`
width: 90%;
`

const Title = styled.div`
font-weight: 700;
margin: 15px 0;
font-size: 20px;
`

const Input = styled.input`
width: 100%;
height: 55px;
border-radius: 30px;
padding-left: 10px;
outline: none;
border: none;
`

const InputHolder = styled.div`
border-radius: 30px;
margin-top: 5px;
`

const Name = styled.div`
font-size: 20px;
`

const Holder = styled.div`
margin: 13px 0;
`

const Main = styled.div`
width: 60%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding-left: 10px;
background-color: lightgray;
margin-top: 40px;
`

const Container = styled.div`
width: 100%;
height: 670px;
display: flex;
justify-content: center;
`