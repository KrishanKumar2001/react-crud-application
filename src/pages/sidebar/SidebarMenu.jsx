import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { authContextApi } from "../../context/AuthContex";

const SidebarMenu = () => {


  let {isAuth,Logout}=useContext(authContextApi);

  const IsAuth=()=>{
    return <Fragment>
                <li>
                   <NavLink to="/createcourse" className={({isActive})=>isActive===true?"active":""}>Create Course</NavLink>
                </li>
              <li>
                  <NavLink to="/allusers"  className={({isActive})=>isActive===true?"active":""}>Users</NavLink>
              </li>    
              <li>
                  <NavLink to="/git-users"  className={({isActive})=>isActive===true?"active":""}>Github Users</NavLink>
              </li>    
              <li>
                  <NavLink to="/create-product"  className={({isActive})=>isActive===true?"active":""}>craete product</NavLink>
              </li>    
          
           </Fragment>
      }



  return (
    <div className="sidebar-menu">
      <ul>
        <li>
        <NavLink to="/" className={({isActive})=>{return isActive===true?"active":""}}>Home</NavLink>
        </li>

        { isAuth?<IsAuth/>:""}


        {/* <li>
          <NavLink to="/createcourse" className={({isActive})=>isActive===true?"active":""}>Create Course</NavLink>
        </li>
        <li>
            <NavLink to="/allusers"  className={({isActive})=>isActive===true?"active":""}>Users</NavLink>
        </li> */}

        {/* <li>
          <NavLink to="/viewcourses" className={({isActive})=>isActive===true?"active":""}>View Courses</NavLink>
        </li> */}
      </ul>
    </div>
  );
};

export default SidebarMenu;
