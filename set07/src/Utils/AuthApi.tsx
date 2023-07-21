import axios from "axios"
const url = "http://localhost:2233/api/v1/auth"

export const RegisterUser = async(data : any)=>{
    try {
        await axios.post(`${url}/register` , data).then(()=>{
            return data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}

export const SignInUser = async(data : any)=>{
    try {
        await axios.post(`${url}/sign-in` , data).then(()=>{
            return data.data
        })
    } catch (error) {
        console.log(error);
        
    }
}