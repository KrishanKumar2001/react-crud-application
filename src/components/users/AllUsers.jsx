import { Fragment } from "react";
import Spinner from "../../pages/spinner/Spinner";
import useFetchUser from "../hooks/UserHook"
import { NavLink } from "react-router-dom";

const AllUsers = () => {

  //const val=useFetchUser();
  //console.log(val,"val using hook");
  // let {users,isLoading}=useFetchUser();
  //  console.log(users,isLoading);
  let {users,isLoading}=useFetchUser();
  // console.log(x,"all userssss-====");
  
 
  return ( 
    <section className="userBlock">
        <article>
              <header>
                   <h2>Users</h2>
              </header>
              <main>
                   <table >
                    <thead>
                       <tr>
                        <th>Id</th>
                        <th>Photo</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th></th>
                       </tr>
                    </thead>
                     <tbody>
                      {
                        isLoading===true?<Spinner/>:users.map((user)=>{
                           return <tr key={user.id}>
                                  <td>{user.id}</td>
                                  <td><img src={user.avatar}  alt="" /></td>
                                  <td>{user.name}</td>
                                  <td>{user.email}</td>
                                  <td>{user.role}</td>
                                  <td><NavLink to={`/users/${user.id}`} className="nav-link">View More</NavLink></td>
                           </tr>
                        })
                      }
                     </tbody>
                   </table>
              </main>
              
        </article>
    </section>
  )
}

export default AllUsers