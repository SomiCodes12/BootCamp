import React from 'react'
import styled from 'styled-components';


const Data = [
    {text: "Finance", number: "2456 Jobs", color:"red"},
    {text: "Sale/Marketing", number: "2000 Jobs", color:"yellow"},
    {text: "Education/Trainning", number: "1450 Jobs",color:"blue" },
    {text: "Technologies", number: "5100 jobs",color:"green" },
    {text: "Art/Design", number: "5079 Jobs", color:"purple"},
    {text: "HealthCare", number: "2446 jobs",color:"grey" },
    {text: "Science", number: "2000 jobs",color:"orange" },
    {text: "Food SErvice", number: "1234 jobs",color:"silver" },
]

const Browse = () => {
  return (
    <div>
        <Container>
            <Main>
          <TextHold>
          <Big>Browse Categories</Big>
              <Small>Most popular categories of portal, sorted by popularity</Small>
          </TextHold>
           <MapHold>
           {
                Data.map((props)=>(
                    <Card>
                    <Image bg={props.color}/>
                    <Category>{props.text}</Category>
                    <Job>{props.number}</Job>
                </Card>
                ))
              }
           </MapHold>
            </Main>
        </Container>
    </div>
  )
}

export default Browse;

const MapHold = styled.div`
width: 95%;
height: 100%;
display: flex;
flex-wrap: wrap;
justify-content: center;
`

const TextHold = styled.div`
display: flex;
align-items: center;
flex-direction: column;
margin: 55px 0;
`

const Small = styled.div`
margin-top: 20px;
`

const Big = styled.div`
font-size: 30px;
font-weight: 700;
`

const Job = styled.div``
const Category = styled.div`
font-weight: 600;
font-size: 25px;
margin: 10px 0;
`

const Image = styled.div<{bg?:string}>`
width: 90px;
height: 90px;
border-radius: 50%;
background-color: ${({bg})=> bg};
`

const Card = styled.div`
width: 310px;
height: 250px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: 0.2px solid silver;

`

const Main = styled.div`

`

const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
background-color: #e0e8eb;
`