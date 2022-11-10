import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import "./signup.css"
import axios from "axios";
// import blueLackSignimg from "../../../public/assets/blueLackSignimg"
import ReCAPTCHA from "react-google-recaptcha";
const init = {
    name:"",
    email:"",
    password:""
}
const Signup = () =>{
    const [disable, setDisable] = useState(false);
    const [data , setData] = useState(init)
    // console.log(disable)

    const onChangeReacpth = (value) =>{
        setDisable(!disable)
        console.log("captch")
        console.log(value);
    }

    const HandleSubmit = () =>{
        if(data.name===""){
            alert("Please enter the valid name")
        }
        else if(data.email===''){
            alert("Please enter the Valid email ")
        }
        else if(data.password.length<5){
            if(data.password.length=""){
                alert("please enter valid password")
            }else{
                alert("please enter minimum 5 leeters password")
            }
                
        }
        else{
            axios.post("http://localhost:8080/user",data)
            console.log("done")
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
                    {/* <label >Email</label> */}
                        <label className="lable2">Name</label>
                        <div className="inputdiv">
                            <input type="text" className="input" onChange={handleChange} name="name" placeholder="Name" id="" />
                        </div>
                    <p id="lable1">Email </p>

                        <div className="inputdiv" >
                        <input onChange={handleChange} type="text" name="email" placeholder="Email" className="input"  />
                        </div>


                    <label className="lable2">Password</label>
                        <div className="inputdiv">
                            <input type="text" onChange={handleChange} className="input" placeholder="Passsword" name="password" id="" />
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
                        <button disabled={true} className="freetrailbtn">Start Free Trail</button>
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
                        <button  onClick={HandleSubmit}   className="freetrailbtn2" >Sign up</button>
                    </div>
                </div>

                    <div style={{display:"flex", justifyContent:"space-between",marginTop:"10px"}}>
                        <h2>Buffer's Terms of Service</h2>
                        <button>alredy have an account?</button>
                    </div> 
            </div>
                  
        </div>

             <div className="div2">
                <img id="div2imhg" src="" alt="" />
             </div>
            
        </div>
        
    )
}

export default Signup