import React, { useEffect, useState } from "react";
import "./signin.css"
import { Navigate, useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import { login } from "../../redux/Authenticated/authenticated.action";

import { useToast } from '@chakra-ui/react'

const init = {
    email:"",
    password:""
}


const Signin = ()=>{
    const toast = useToast()
    let navigate = useNavigate();
    const[data , setdata] = useState(init);
    const dispatch = useDispatch()
    const {isAuth} = useSelector((store) => store.auth.data)
    const {loading , error} = useSelector((store) => store.auth)

    const handleChange = (e) =>{
        const {value, name} = e.target
        setdata({...data,[name]:value})
    }

    if(error) {
        toast({
            title: 'Wrong username or password.',
            position : "top",
            status: 'error',
            duration: 2000,
            isClosable: true,
          });
    }

  
    const handelSubmit = () => {
        
        if(data.email === ""){
            toast({
                title: 'Please Enter a Valid Email Address',
                position : "top",
                status: 'error',
                duration: 2000,
                isClosable: true,
              });
        }else if(data.password === ""){
            toast({
                title: 'Please Enter a Valid Password',
                status: 'error',
                position : "top",
                duration: 2000,
                isClosable: true,
              });
        }
        else{
            dispatch(login(data))
        }
       
    }

    

    if(isAuth) {
        toast({
            title: 'Sign in SuccessFully.',
            description: "Welcome Back To Bluelock.",
            position : "top",
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
        return <Navigate to={"/publish"} />
    }
    
    
    return (
        <div id="Container">
            <div id="div1">
                <div id="bufferimgdiv">
                    <img id="bufferimg" src="https://i.ibb.co/6JkQKCN/Bluelock.png" alt="" />
                </div>

                <div id="formdiv">

                        <h1 id="LOGIN">Log in</h1>
                        <h4 className="lables">Email Adress</h4>
                        <div>
                        <input  type="text" onChange={handleChange} name="email" id="inputs" placeholder="Email" />
                        </div>

                        <h4 className="lables">Password</h4>
                        <div>
                        <input  type="text" onChange={handleChange} name="password" id="inputs" placeholder="Password" />
                        </div>

                        <div>
                            <button id="loginbtn" onClick={handelSubmit}>{loading ? "signinng" : 'LOGIN'}</button>
                            { <h1 id="errormsg">{error}</h1>}
                        </div> 

                        <div id="cafp">
                            <button onClick={()=>navigate("/signup")} id="CRA">Create an account</button>
                            <button id="FRP">Forgot Password</button>
                        </div>     
                        
                        <div id="suppordiv">
                            <p>We no longer support social sign on. Please click here to set your password and access your account.</p>
                        </div>

                        <div id="lastdiv">
                            <a href="">&#x2022; Terms of Service</a>
                            <a href="">&#x2022; Privacy Policy</a>
                            <a href="">&#x2022; Security</a>
                        </div>

                </div>

            </div>


            <div id="div2">
                <img id="BLSignimg" src="https://www.linkpicture.com/q/BLSignin.png" alt="IMG" />
            </div>
        </div>
    )
}

export default Signin