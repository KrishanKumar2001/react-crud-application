import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import courseServices from "../../services/CourseService"
import toast from 'react-hot-toast';

const CreateCourse = () => {

    let navigate=useNavigate();

    let[state,setState]=useState({
        title:"",
        trainer:"",
        description:"",
        courseCreatedAt:"",
        updatedAt:"",
        isLoading:false
    });

    let {title,trainer,isLoading,description,courseCreatedAt,updatedAt}=state;

    let handleChange=(e)=>{
        // console.log(e.target);
       let {name,value}=e.target;
       setState({...state,[name]:value});
    }

    let handleSubmit= async(e)=>{
       e.preventDefault();
       try {
        let payload={title,trainer,description,courseCreatedAt,updatedAt};
        //console.log(payload,"payload");

//1(a)----------------------------------------create course using axios.post---------------------
      // await axios.post("http://localhost:5000/courses",payload);
     // navigate("/");
//1(b)------------------------------ create course using axios instance     ---------------------------
       courseServices.createService(payload);
       toast.success("Successfully course created!");
       navigate("/");
//--------------------------------------------------------------------------------------       
        //let {data}=await axios.post("http://localhost:5000/courses",payload);
          //console.log(data,"data");
          

        //=============================using bulit in fetch method
        //   await window.fetch("http://localhost:5000/courses",{
        //     method:"POST",
        //     headers:{ "Content-Type":"application/json"},
        //     body:JSON.stringify(payload),
        //     });
        //     navigate("/");

       } catch (error) {
        console.log(error);
       }
       
     }

     //console.log(state);
  return (
    <main className='authBlock'>
         <h1>Create Course</h1>
         
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
                    <div className='form-group'>
                         <label htmlFor="courseCreatedAt">Course Created At</label>
                         <input type='date'  name='courseCreatedAt' value={courseCreatedAt} onChange={handleChange} id='courseCreatedAt'  required/>
                    </div>
                    {/* <div className='form-group'>
                         <label htmlFor="updatedAt">Course Updated At</label>
                         <input type='date'  name='updatedAt' value={updatedAt} onChange={handleChange} id='updatedAt'  required/>
                    </div> */}
                    <div className='form-group'>
                             <button>{isLoading?"Loading":"Create Course"}</button>
                    </div>
        </form>

    </main>
  )
}

export default CreateCourse