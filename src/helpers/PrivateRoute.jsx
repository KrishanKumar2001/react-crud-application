import { useContext } from "react";
import { authContextApi } from "../context/AuthContex";
import { Navigate } from "react-router-dom";

const PrivateRoute=({children})=>{

    let {isAuth}=useContext(authContextApi);//null or undefined if no token
    if (isAuth === undefined||null) {
        return <Navigate to="/login"></Navigate>
    }else{
        return <>{children}</>
    }
    

}

export default PrivateRoute;