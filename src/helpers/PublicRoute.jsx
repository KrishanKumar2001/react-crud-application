import { useContext } from "react";
import { authContextApi } from "../context/AuthContex";
import { Navigate } from "react-router-dom";

// public route means if token present local stoarge make visible or public user dashbaord
const PublicRoute=({children})=>{
 
    let {isAuth}=useContext(authContextApi);//null or undefined if no token

    if (isAuth) {
        return <Navigate to="/allusers"></Navigate>
    }else{
        return <>{children}</>
    }
    

}

export default PublicRoute;