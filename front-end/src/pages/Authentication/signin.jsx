import React, { useEffect, useState } from "react";
import "./signin.css"
// import BLSignin from "./images/BLSignin.png"
import axios from "axios"
import { useNavigate } from "react-router-dom";


const init = {
    email:"",
    password:""
}

const getusers = async ()=>{
    let navigate = useNavigate();
    let data = await fetch("http://localhost:8080/user")
    data = data.data;
    console.log(data);
}

const Signin = ()=>{
    const[data , setdata] = useState({});

    const[state, setstate] = useState(false);

    const[error , seterror] = useState("")

    // const[users , setusers] = useState([]);

    const handleChange = (e) =>{
        const {value, name} = e.target
        setdata({...data,[name]:value})
        // console.log(data);
    }
  
    const handleSubmit = (seterror) =>{
        console.log(data);
        axios({
            method: 'post',
            url: 'http://localhost:8080/user/signin',
            data: data
        })
        .then((res)=>{
            console.log(res)
            // Naviagete to next page ; 
            alert("..Success");
            navigate("./start-page")

        })
        .catch( (error) => {
            console.log(error.message);
            // alert("Please Enter The Valid Credentioals");
            seterror(error.message);
        });
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
                            <button id="loginbtn" onClick={()=>handleSubmit(seterror)}>LOGIN</button>
                            {error && <h1>{error}</h1>}
                        </div> 

                        <div id="cafp">
                            <button onClick={()=>navigate("./signup")} id="CRA">Creat an account</button>
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