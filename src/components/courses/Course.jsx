import React from "react";
import { NavLink, useParams } from 'react-router-dom';

const Course = ({ course }) => {
  let { id, title, trainer } = course;
  // console.log(data);
 

  return (
    <section className="course-container">
      <h1>{title} </h1>
      <div>
        <p>Id : <span>{id}</span></p>
        <p>Title : <span>{title}</span></p>
        <p>Trainer : <span>{trainer}</span></p>
        {/* <NavLink to={`/${id}`} state={{id,title,trainer}}>View More</NavLink> */}
        <NavLink to={`/${id}`} state={course}>View More</NavLink>
      </div>
    </section>
  );
};

export default Course;
