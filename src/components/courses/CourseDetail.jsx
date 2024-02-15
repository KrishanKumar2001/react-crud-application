import React from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Moment from "moment";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import axios from "axios";
import toast from "react-hot-toast";
import courseServices from "../../services/CourseService";

const CourseDetail = () => {
  let { state } = useLocation();
  //console.log(state);
  let navigate=useNavigate();
  let { id, title, trainer,description,courseCreatedAt,updatedAt } = state;
  //console.log(id,title,trainer);

  //   let x=useParams();
  //   console.log(x,"param")
  //console.log(Moment().format());


  //=====================================delete method
  let deleteCourse=async(id)=>{

  //-------------------------------- delete using axios instance-------------
    courseServices.deleteService(id);
     toast('Successfully deleted!');
     navigate("/");
      
      // if (window.confirm()===true) {
      //  //-------------------------------- delete using axios.delete()-------------
      //   // await axios.delete(`http://localhost:5000/courses/${id}`);
      //   // toast('Successfully deleted!');
      //   // window.location.assign("/");
      
      // }else{
      //   navigate("/");
      // }
  }

  return (
    <div>
      <article className="course_details singleuser">
        <header>
          <h2>{title}</h2>
           <div>
    {/*============== Edit course and delete course================ */}
               <Link to={`/edit/${id}`}>Edit</Link>
               <Link to="/" onClick={()=>deleteCourse(id)}>Delete</Link>
           </div>
        </header>
        <main>
          <p>Id : <strong> {id}</strong></p>
          <p>Trainer :<strong>{trainer}</strong></p>
          <p>{description}</p>  
        </main>
        <footer>
             
               <span>Course updates AT : </span>
               <span><strong>{Moment(courseCreatedAt).fromNow()}</strong></span>
        </footer>

       <div className="back-btn">
             <Link to="/">
             <MdOutlineKeyboardBackspace/>
             </Link>
       </div>
       
      </article>
    </div>
  );
};

export default CourseDetail;
