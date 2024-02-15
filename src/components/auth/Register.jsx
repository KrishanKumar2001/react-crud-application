import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import courseServices from "../../services/CourseService"
import toast from 'react-hot-toast';
import { authContextApi } from '../../context/AuthContex';

const Register = () => {

    let navigate=useNavigate();
    let {signUp}=useContext(authContextApi);
    // console.log(signUp);

    let[state,setState]=useState({
        name:"",
        email:"",
        password:"",
        avatar:"",
        isLoading:false
    });

    let {name,email,password,avatar,isLoading}=state;

    let handleChange=(e)=>{
        // console.log(e.target);
       let {name,value}=e.target;
       setState({...state,[name]:value});
    }

    let handleSubmit= async(e)=>{
       e.preventDefault();
       try {
        let payload={name,email,password,avatar,isLoading};
         console.log(payload,"===payload signup");
         signUp(payload);
       toast.success("Successfully registered! ");
       navigate("/login");


       } catch (error) {
        console.log(error);
       }
       
     }

  return (
    <main className='authBlock' id='signup-page'>
         <h1>Signup</h1>
         
        <form action="" onSubmit={handleSubmit}>
                    
                    <div className='form-group'>
                         <label htmlFor="name">Name</label>
                         <input type="text" name='name' value={name} onChange={handleChange} id='name' placeholder='Enter name' required/>
                    </div>
                    <div className='form-group'>
                         <label htmlFor="email">Email</label>
                         <input type="email" name='email' value={email} onChange={handleChange} id='email' placeholder='Enter email' required/>
                    </div>
                    <div className='form-group'>
                         <label htmlFor="password">Password</label>
                         <input type="password" name='password' value={password} onChange={handleChange} id='password' placeholder='Enter password' required/>
                    </div>
                    
                    <div className='form-group'>
                         <label htmlFor="avatar">Upload Photo</label>
                         <input type='text'  name='avatar' value={avatar} onChange={handleChange} id='avatar'  required/>
                    </div>
                   
                    <div className='form-group'>
                             <button className='register-btn'>{isLoading?"Loading":"Register"}</button>
                    </div>
        </form>

    </main>
  )
}

export default Register