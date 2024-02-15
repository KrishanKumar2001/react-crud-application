import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import courseServices from "../../services/CourseService"
import toast from 'react-hot-toast';
import { authContextApi } from '../../context/AuthContex';

const Login = () => {

    let navigate=useNavigate();
    let {login}=useContext(authContextApi);
    // console.log(signUp);
    

    let[state,setState]=useState({
       
        email:"",
        password:"",
        isLoading:false
    });

    let {email,password,isLoading}=state;

    

    let handleChange=(e)=>{
        // console.log(e.target);
       let {name,value}=e.target;
       setState({...state,[name]:value});
    }

    let handleSubmit= async(e)=>{
       e.preventDefault();
       try {
        let payload={email,password};
        // console.log(payload,"===payload loginpage");
         await login(payload);
        toast.success("Successfully Logged in! ");
         navigate("/allusers");


       } catch (error) {
        toast.error(error.response.statusText);
        //console.log(error,"error********");
        // toast.error(error.message);
        
       }
       
     }

  return (
    <main className='authBlock' id='login-page'>
         
         
        <form action="" onSubmit={handleSubmit}>
                    
        <h1>Login</h1>
                    <div className='form-group'>
                         <label htmlFor="email">Email</label>
                         <input type="email" name='email' value={email} onChange={handleChange} id='email' placeholder='Enter email' required/>
                    </div>
                    <div className='form-group'>
                         <label htmlFor="password">Password</label>
                         <input type="password" name='password' value={password} onChange={handleChange} id='password' placeholder='Enter password' required/>
                    </div>
                    
                    <div className='form-group'>
                             <button className='register-btn'>{isLoading?"Loading":"Sign In"}</button>
                    </div>
        </form>

    </main>
  )
}

export default Login