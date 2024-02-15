import React, { useContext, useEffect } from "react";
import useFetchUser from "../hooks/UserHook";
import { UserContextAPi } from "../../context/UserContext";
import { NavLink, useParams } from "react-router-dom";
import Spinner from "../../pages/spinner/Spinner";

const SingleUser = () => {
  let { id } = useParams();
  let { fetchSingleUser, singleUser, isLoading } = useFetchUser();

  useEffect(() => {
    try {
       fetchSingleUser(id);
    } catch (error) {
      console.log(error, "error");
    }
  }, [id]);



  //  console.log(singleUser,isLoading," ----------------singleuser");

  return (



    <div className="course-container">
             {singleUser &&<section >
         
         <h1>{singleUser.name} </h1>
         <div>
           <p>Email : <span>{singleUser?.email}</span></p>
           <p>Role : <span>{singleUser?.role}</span></p>
           <p>Id : <span>{singleUser?.id}</span></p>
             <NavLink to="/">Back</NavLink>
              <NavLink to="/">Edit</NavLink>
              <NavLink to="/">Delete</NavLink>
          
         </div>
              <div>
                <img src={singleUser.avatar} height={200} width={200} alt="" />
              </div>
     
         
          </section>
         }
       </div>
       

    
      //  <div className="course-container">
      //        { isLoading===true?<Spinner />:<section >
         
      //    <h1>{singleUser.name} </h1>
      //    <div>
      //      <p>Email : <span>{singleUser?.email}</span></p>
      //      <p>Role : <span>{singleUser?.role}</span></p>
      //      <p>Id : <span>{singleUser?.id}</span></p>
      //        <NavLink to="/">Back</NavLink>
      //         <NavLink to="/">Edit</NavLink>
      //         <NavLink to="/">Delete</NavLink>
          
      //    </div>
      //         <div>
      //           <img src={singleUser.avatar} height={200} width={200} alt="" />
      //         </div>
     
         
      //     </section>
      //    }
      //  </div>
       
      
  );
};

export default SingleUser;
