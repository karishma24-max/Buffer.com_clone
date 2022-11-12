import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import "./signup.css"
import axios from "axios";
import {  useNavigate } from "react-router-dom";
// import blueLackSignimg from "../../../public/assets/blueLackSignimg"
import ReCAPTCHA from "react-google-recaptcha";
import { ClassNames } from "@emotion/react";
import { useToast } from '@chakra-ui/react'

const init = {
    name:"",
    email:"",
    password:""
}
const Signup = () =>{
    const toast = useToast()
    const[stateO, setStateO] = useState("Sign Up")
    let navigate = useNavigate();
    const [disable, setDisable] = useState(false);
    const [data , setData] = useState(init);
    const [captcha , setcaptcha] = useState(false);
    // console.log(disable)
    const[Existemail  ,setExistemail] = useState(false)

    const[crtname , setcratname] = useState(false);
    const[nameinput  , setnameinput] = useState("input")

   


    const onChangeReacpth = (value) =>{
        setDisable(!disable)
        console.log("captch")
        setcaptcha(true);
        console.log(value);
    }

    const HandleSubmit = (set) =>{
       
        if(data.name===""){
            toast({
                title: 'Enter the name',
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
            setnameinput("innpput")
        }
        else if(data.name.length < 4){
            toast({
                title: 'Name minimum 4 Characters',
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
            setnameinput("innpput")
        }
        else if(data.email===''){
            toast({
                title: 'Enter Email',
                status: 'warning',
                duration: 2000,
                isClosable: true,
              })
            
        }
        else if(data.email[data.email.length-10] !== "@"){
            toast({
                title: 'Invalid Email',
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
        }
        else if(data.password.length<5){
            toast({
                title: 'Password Should be 5 Characters',
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
                
        }else if(!captcha){
            toast({
                title: 'Complete The Captcha',
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
        }
        else{
            
            setStateO("Loading...")
            axios.post('https://bluelock.cyclic.app/user/signup', {
            name: data.name,
            email: data.email,
            password:data.password
            })
            .then((response) => {
                console.log(response.data);
                console.log(`New user Created on ${response.data.user.createdAt}..user id:${response.data.user._id}`)
                setStateO("Sign Up")
                toast({
                    title: 'Sugn in Succesfull',
                    description:"Welcome To Buffer",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                  })
                navigate("/publish")
               
            }, (error) => {
               if(error.response.data){
                toast({
                    title: error.response.data,
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                  })
                setStateO("Sign Up")
                if(error.response.data === 'we can"t able to create email alreay in use'){
                    setExistemail(true)
                    window.scrollBy(0,100)
                   
                }
               }else{
                console.log(error)
                setStateO("Sign Up")
               }
               
            });
        }
        
    }

    

    const handleChange = (e) =>{
        const {value,name} = e.target;
    
        setData({...data,[name]:value})
        console.log(data)
        
    }


     return (
        <div className="Container">


             <div className="div1">
                <img id="bufferimg" src="https://static.buffer.com/login/public/img/buffer-logo.svg" alt="" />
                
                <div id="formdiv">
                <div id="headingdiv"><h1 id="headingline">Let's get your account set up</h1></div>
                   
                        {/* <label className="lable2">Name</label> */}
                        <div className="inputdiv">
                            <input type="text" className={nameinput} onChange={handleChange} name="name" placeholder="Name" id="" />
                        </div>
                      
                        {/* <p id="lable1">Email </p> */}
                        <div className="inputdiv" >
                        

                        <input onChange={handleChange} type="text" name="email" placeholder="Email" className={nameinput}  />
                        </div>


                    {/* <label className="lable2">Password</label> */}
                        <div className="inputdiv">
                            <input type="text" onChange={handleChange} className={nameinput} placeholder="Passsword" name="password" id="" />
                        </div>

                        
                    {/* =============== */}
                 <div id="catptchdiv">
                 <ReCAPTCHA
                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                    onChange={onChangeReacpth}
                 />
                 </div>
                {/* =============== */}

                <div className="FullPackage">
                    <div>
                    <div>
                        <h2 className="fullpack">The Full Package</h2>
                    </div>
                    <div className="unilimited">
                        <p>Unlimited use of our publishing,analytics, and engagement tools</p>
                    </div>
                    </div>
                    <div>
                        <button onClick={()=> toast({
                                                    title: 'Currently this future not awaialable',
                                                    status: 'error',
                                                    duration: 2000,
                                                    isClosable: true,
                                                })} 
                                                className="freetrailbtn">
                                                    Start Free Trail 
                                                    </button>
                    </div>
                </div>

                <div className="FullPackage">
                <div>
                    <div>
                        <h2 className="fullpack">Free</h2>
                    </div>
                    <div className="unilimited">
                        <p>For individuals getting started with social media</p>
                        
                    </div>
                    </div>
                    <div>
                        <button  onClick={()=>HandleSubmit(setStateO)}   className="freetrailbtn2" >{stateO}</button>
                    </div>
                </div>
                {Existemail && <p id="exitemail" onClick={()=>navigate("/signin")}> &#x26A0; There seems to be an existing Buffer account for this email. Please login.</p> }
                <div className="lastdivs">
                    <button>Buffer's Terms Of Service</button>
                  
                    <button onClick={()=>navigate("/signin")}>Already Have an Account?</button>
                    
                </div>
              
            </div>
        </div>
         

             <div className="div2">
                <img id="div2imhg" src="https://www.linkpicture.com/q/blueLockSignimg.png" alt="" />
             </div>
            
        </div>
        
    )
}

export default Signup