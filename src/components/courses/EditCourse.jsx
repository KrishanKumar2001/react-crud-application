import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import courseServices from '../../services/CourseService';
import toast from 'react-hot-toast';


const EditCourse = () => {

  //useParams() to fetch id from url
   let {id}=useParams();
   //console.log(id);

    let navigate=useNavigate();

    let[state,setState]=useState({
        title:"",
        trainer:"",
        description:"",
        updatedAt:"",
        isLoading:false
    });

    
    let {title,trainer,isLoading,description,updatedAt}=state;
    

    //========== to already fill user data in form field=========
    
    useEffect(()=>{

      let fetchCourse=async()=>{

  //---------------------------using axios-------------  
        // let {data}= await axios.get(`http://localhost:5000/courses/${id}`);
        // //console.log(data,"data");
        // setState(data);
  //---------------------------using axios Instance-------------
      let data=await courseServices.fetchId(id); 
       //console.log(data,"kjs");  
     setState(data);

     //---------------- 
      }
      fetchCourse();
    },[]);

    //================================ handleChnage==========
    let handleChange=(e)=>{
        // console.log(e.target);
       let {name,value}=e.target;
       setState({...state,[name]:value});
    }

    //===================handleSubmit=============
    let handleSubmit= async(e)=>{
       e.preventDefault();
       try {
        let payload={title,trainer,description,updatedAt};
        //console.log(payload,"payload");

     //1(a)------------------------update using axios.put()-------------   
      //  await axios.put(`http://localhost:5000/courses/${id}`,payload);
      //  navigate("/");

      //1(b)------------------------update using axios instance-------------  
      courseServices.updateService(id,payload);
      toast.success("Course Successfully Updated");
      navigate("/");
        
       } catch (error) {
        console.log(error);
       }
       
     }
     //console.log(state);

     //===========================return ==================
  return (
    <main className='authBlock'>
         <h1>Update Course</h1>
         
        <form action="" onSubmit={handleSubmit}>
                    
                    <div className='form-group'>
                         <label htmlFor="">Title</label>
                         <input type="text" name='title' value={title} onChange={handleChange} id='title' placeholder='Enter title' required/>
                    </div>
                    <div className='form-group'>
                         <label htmlFor="">Trainer</label>
                         <input type="text" name='trainer' value={trainer} onChange={handleChange} id='trainer' placeholder='Enter trainer' required/>
                    </div>
                    <div className='form-group'>
                         <label htmlFor="description">Description</label>
                         <textarea  name='description' rows={3} value={description} onChange={handleChange} id='description' placeholder='Write description' required/>
                    </div>
                    {/* <div className='form-group'>
                         <label htmlFor="courseCreatedAt">Course Created At</label>
                         <input type='date'  name='courseCreatedAt' value={courseCreatedAt} onChange={handleChange} id='courseCreatedAt'  required/>
                    </div> */}
                    <div className='form-group'>
                         <label htmlFor="updatedAt">Course Updated At</label>
                         <input type='date'  name='updatedAt' value={updatedAt} onChange={handleChange} id='updatedAt'  required/>
                    </div>
                    <div className='form-group'>
                             <button>{isLoading?"Loading":"Update"}</button>
                    </div>
        </form>
      <Link to="/">Back</Link>
    </main>
  )
}

export default EditCourse