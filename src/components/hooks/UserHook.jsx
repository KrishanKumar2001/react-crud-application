import { useContext, useEffect } from "react";
import { UserContextAPi } from './../../context/UserContext';
import { useParams } from "react-router-dom";



//custom hook start with use keyword lower
 const useFetchUser=()=>{
   
    // let val=useContext(UserContextAPi);
    // console.log(val,'=======================');
    // useEffect(()=>{val.fetchUsers()},[]);
    //  return val.users;
    
    let {fetchUsers,singleUser,users,fetchSingleUser,isLoading}=useContext(UserContextAPi);
    useEffect(()=>{
      
        fetchUsers();
        // singleUser(1);
       
    },[]);

    let data={users,singleUser,fetchSingleUser,isLoading}
     return data;
}

export default useFetchUser;