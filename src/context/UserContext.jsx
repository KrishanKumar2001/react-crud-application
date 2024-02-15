import { createContext, useContext, useEffect, useReducer } from "react";
import userReducer from "../reducer/userReducer/userReducer";
import { USER_API_INSTANCE } from "../AxiosInstance/UserAxiosInstance";

//----note this users fetchind data is combination of Conetext api and useReducer
export const UserContextAPi = createContext();

let initailState = {
  users: null,
  isLoading: true,
  singleUser:null
};


//-======= this
const UserProvider = ({ children }) => {
  let [state, dispatch] = useReducer(userReducer, initailState);

  let {users,isLoading,singleUser}=state;

  let fetchUsers=async ()=>{
    let {data}=await USER_API_INSTANCE.get("/users");
    //console.log(data,"fetch usrr");
    dispatch({type:"FETCH",payload:data,isLoading:false});
  }

  let fetchSingleUser=async(id)=>{
    try {
      let {data}=await USER_API_INSTANCE.get(`/users/${id}`);
      dispatch({type:"SINGLE_USER",singleUser:data});
    } catch (error) {
      console.log(error);
    }

  }

  //console.log(users,"user global state");
  return (
    <UserContextAPi.Provider value={{ users, dispatch,fetchSingleUser,fetchUsers,singleUser,isLoading}}>
      {children}
    </UserContextAPi.Provider>
  );
};

export default UserProvider;

//========== not creaet here create seperate folder hook
//===  custom hook =======now we directly sendind (no need of use useContext ecery page)

// export let UseAllUsers=()=>{
//      const {users,fetchUsers}=useContext(UserContextAPi);
//      useEffect(()=>fetchUsers(),[]);
//      return users;
// }
