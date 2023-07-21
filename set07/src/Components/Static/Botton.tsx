import React from 'react'
import styled from 'styled-components';

interface iBtn {
    icon? : any;
    text? : string;
}

const Botton : React.FC<iBtn> = ({text , icon}) => {
  return (
    <div>
        <Main>
            <Icon>{icon}</Icon>
            <Text>{text}</Text>
        </Main>
    </div>
  )
}

export default Botton;

const Text = styled.div`
margin-left: 10px;
`

const Icon = styled.div``

const Main = styled.div`
width:170px;
height : 40px;
background-color : lightblue;
margin : 10px;
display : flex;
justify-content : center;
align-items : center;
`