import { createBrowserRouter } from "react-router-dom";
import LayOut from "../Components/Block/LayOut";
import Hero from "../Pages/Hero";
import Job from "../Pages/Job";
import SignUp from "../Pages/Auths/SignUp";

export const MainRoute =  createBrowserRouter(
    [
        {
            path : "",
            element : <LayOut/>,
            children : [
                {
                    index : true,
                    element : <Hero/>
                },
                {
                    path : "job",
                    element : <Job/>
                },
                {
                    path : "sign-up",
                    element : <SignUp/>
                }
            ]
        }
    ]
)