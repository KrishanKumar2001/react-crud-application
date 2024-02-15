import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import Course from "./Course";
import Spinner from "../../pages/spinner/Spinner";
import courseServices from "../../services/CourseService";
import SearchCourse from "../SearchFilter/SearchCourse";
import { UserContextAPi } from "../../context/UserContext";



const AllCourses = () => {

  let [state, setState] = useState(null);
  let [searchTerm,setSearchTerm]=useState("");

//=============user context api cosumer using useContext need only two thing contextapi and useContext() method and destrure their value

  //@let {users,dispatch,fetchUsers}=useContext(UserContextAPi);
   
   //console.log(users,"user data using context api and reducer");




  let fetchData = async () => {
    // let { data } = await axios.get("http://localhost:5000/courses");
    // setState(data);

    //==================fetch using axios instance
    let data= await courseServices.fetchService();
    //console.log(data,'dataa');
    setState(data);
  };

  //@ useEffect(() => {
  //   fetchUsers();
    
  // }, []);

  useEffect(() => {
    
    fetchData();
  }, []);

  //======================handle search=========
  let handleSearch=(term)=>{
    //  console.log(term);
     setSearchTerm(term);
  }


  let FilteredCourse=state?.filter(val=>{
     if(searchTerm===""){
        return val;
     }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
      return val;
     }
  }).map((course) => {
    return (
     
      <Fragment key={course.id}>
        <Course course={course} key={course.id} />
        {/* <Course {...course} key={course.id}></Course> */}
      </Fragment>
    );
  })

  //console.log(state);
  //console.log(seachTerm,"searched term");
  return (
    <section id="all-course-container">
      <div className="all-course-search">
          <h1>All Courses</h1>
      {/* //=================search course ===================    */}
          <div>
            <SearchCourse  handleSearch={handleSearch}></SearchCourse>
          </div>
      </div>
      <article>
        {state === null
          ? <Spinner/>
          :FilteredCourse}
      </article>
    </section>
  );
};

export default AllCourses;
