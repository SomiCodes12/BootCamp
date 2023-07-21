import React from 'react'
import styled from 'styled-components';
// import Botton from '../../Components/Static/Botton';
import {useForm} from "react-hook-form"
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterUser } from "../../Utils/AuthApi"
import { useNavigate } from 'react-router-dom';
import Botton from '../../Components/Static/Botton';

const SignUp = () => {
    const navigate = useNavigate()
    const Model = yup.object({
        userName : yup.string().required(),
        email : yup.string().required(),
        password : yup.string().required(),
        confirm: yup.string().required()
    })
        const {
            register,
            // formState : {errors},
            handleSubmit,
            // reset
        } = useForm({
        resolver : yupResolver(Model)
        })
        const HandleMySubmit = handleSubmit((res)=>{
            const {userName , password , email} = res
         RegisterUser({
            userName , password , email
         }).then(()=>{
          navigate("/sign-in")
         })
        })
       
  return (
    <div>
        <Container>
            <Main>
                <Top>
                    <Logo/>
                    <Title>SignUp</Title>
                    <BottonHold>
    <Botton icon="G" text='Google'/>
    <Botton icon="F" text='Google'/>
                    </BottonHold>
                    <LineHold>
                        <Line></Line>
                        <Text>OR</Text>
                        <Line></Line>
                    </LineHold>
                </Top>
                <Bottom onSubmit={HandleMySubmit}>
             <Holder>
             <String>UserName</String>
                    <InputHold>
                    <Input placeholder='Enter User Name' {...register("userName")}/>
                    </InputHold>
             </Holder>
             <Holder>
             <String>Email</String>
                    <InputHold>
                    <Input placeholder='Enter Email'  {...register("email")}/>
                    </InputHold>
             </Holder>
             <Holder>
             <String>UserName</String>
                    <InputHold>
                    <Input placeholder='Enter User Password'  {...register("password")}/>
                    </InputHold>
             </Holder>
             <Holder>
             <String>UserName</String>
                    <InputHold>
                    <Input placeholder='Confirm your password'  {...register("confirm")}/>
                    </InputHold>
             </Holder>
             <Register type='submit'>SignUp</Register>
             <Span>
                By Registering, You agree to our <span>Terms</span> and <span>Privacy</span>
             </Span>
             <SignIn>
                SignIn
             </SignIn>
                </Bottom>
            </Main>
        </Container>
    </div>
  )
}

export default SignUp;

const SignIn = styled.div`
color : purple;
font-weight : bold;

hover{
    cursor: pointer;
}
`

const Span = styled.div`
margin-left:15px;
span{
    font-weight: bold;
}
`

const Register= styled.button`
width: 100%;
height: 40px;
background-color:purple;
border-radius: 5px;
color: white;
display: flex;
justify-content: center;
align-items: center;
margin : 10px 0 ;
`

const Holder= styled.div`
margin-bottom:10px;
`

const Input= styled.input`
width: 99%;
height: 98%;
outline  : none ;
border : none;
padding-left: 5px;
`

const InputHold= styled.div`
width: 470px;
height: 45px;
border : 1px solid black;
`

const String= styled.div``

const Text= styled.div``

const Line = styled.div`
width : 250px;
height : 1px;
background-color: silver;
`

const LineHold = styled.div`
display : flex;
align-items: center;
width: 100%;
margin-bottom: 10px;
`

const Logo = styled.div`
width : 90px;
height : 60px;
background-color :purple
`

const Title = styled.div`
font-size : 30px;
margin-top : 10px;
`

const BottonHold = styled.div`
display : flex;
margin: 10px 0;
`

const Bottom = styled.form`
display : flex;
flex-direction : column;
align-items: center;
`

const Top = styled.div`
display: flex;
align-items: center;
flex-direction : column;
`

const Main = styled.div`
width : 500px;
min-height : 500px;
background-color: grey;
margin-top : 40px;
padding: 15px;
`

const Container = styled.div`
display : flex;
justify-content: center;
align-items: center;
`