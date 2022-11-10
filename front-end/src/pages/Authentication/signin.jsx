import React, { useEffect, useState } from "react";
import "./signin.css"
// import BLSignin from "./images/BLSignin.png"
import axios from "axios"


const init = {
    email:"",
    password:""
}

const getusers = async ()=>{
    let data = await fetch("http://localhost:8080/user")
    data = data.data;
    console.log(data);
}

const Signin = ()=>{
    const[data , setdata] = useState({});

    const[state, setstate] = useState(false);

    // const[users , setusers] = useState([]);

    const handleChange = (e) =>{
        const {value, name} = e.target
        setdata({...data,[name]:value})
        // console.log(data);
    }
  
    const handleSubmit = () =>{
        console.log(data);
        // axios({
        //     method: 'post',
        //     url: 'http://localhost:8080/user',
        //     data: data
        // })
        // .then((res)=>{
        //     console.log(res)
        //     // Naviagete to next page ; 
        // })
        // .catch( (error) => {
        //     console.log(error);
        //     alert("Please Enter The Valid Credentioals");
        // });
    }
    
   
   
    return (
        <div id="Container">

            <div id="div1">
                <div id="bufferimgdiv">
                    <img id="bufferimg" src="https://static.buffer.com/login/public/img/buffer-logo.svg" alt="" />
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
                            <button id="loginbtn" onClick={handleSubmit}>LOGIN</button>
                        </div> 

                        <div id="cafp">
                            <button id="CRA">Creat an account</button>
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
                <img id="BLSignimg" src="https://github.com/karishma24-max/aberrant-coast-299/blob/main/front-end/public/assets/BLSignin.png?raw=true" alt="" />
            </div>
        </div>
    )
}

export default Signin