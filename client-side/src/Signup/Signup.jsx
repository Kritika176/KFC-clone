import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import "./signup.css"
export  function Signup() {

    const [user,setUser] = useState({
        username:"",
        email:"",
        password:""
 
    })
    const navigate = useNavigate();
    const createUser = (e) =>{
        const name = e.target.name;
        const value = e.target.value
       setUser({...user,[name]:value})
     
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();
         axios.post(("http://localhost:8800/signup"),
             user
         ).then((res) =>{
          console.log(res.data)
          if(res.data.username)
          {
             
              navigate("/signin")
          }
          else{
              alert("User already exists")
          }
      }).catch((err) => console.log(err))
      }
  return (
    <div className="container">
    <div className="main">
      <div className="signup">
				<form onSubmit={handleSubmit}>
					<div className='align'><img className="kfcLogo" src="data:image/png;base64,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" alt="kfc logo" tabindex="1"/>
                   
                    </div>
                    <div className='align'><span className='signinPara' >LET'S SIGNUP</span></div>
					<input type="text" name="username" placeholder="Username" onChange={createUser} />
					<input type="email" name="email" placeholder="Email" onChange={createUser}/>
					<input type="password" name="password" placeholder="Password" onChange={createUser}/>
                    <p className='passwordAlert'>Password must contain atleast 1 lowercase[a-z],1[uppercase[A-Z], symbol and a numeric value. </p>
                    <button type={"submit"} disabled={!user.username || !user.email || !user.password}  >SIGN UP</button>
				</form>
               
			</div>
    </div>
    </div>
  )
}
