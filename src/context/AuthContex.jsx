import { createContext, useEffect, useReducer } from "react";
import AuthInstance from "../AxiosInstance/AuthInstance";
import authReducer from "../reducer/authReducer/authReducer";
import { USER_API_INSTANCE } from "../AxiosInstance/UserAxiosInstance";
//note* till token present it is autenticated user else anonymous user
export const authContextApi=createContext();

const intialState={
    payload:null,
    profile:null,
    isLoading:true,
    
}


//passed this AuthProvider globally to main.jsx
const AuthProvider=({children})=>{
    let [auth,dispatch]=useReducer(authReducer,intialState);

    const signUp= async (payload)=>{

        let {data}=await AuthInstance.post("/users",payload);// access and refresh token
         dispatch({type:"SIGNUP",payload:data});
    // console.log(data,"data------------------") returned data with id and role also
    //{access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsI…Dk3fQ.          ZpoAw5tpenuAIL_phyvD2cDdqohy7FYWV8zGvznmfi0', refresh_token:   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsI…Dk3fQ.MG51YAWb3AEVwdaSMgeefssDa_8rC4OGijWrXpGIK0I'}
       
    }

    const login= async(payload)=>{
        let {data}=await AuthInstance.post("/auth/login",payload);
        window.localStorage.setItem("TOKEN",JSON.stringify(data));//it is storing data in object we want as sting so
         // console.log(data,"data in form of token we get in login()---");//store this data in 
        dispatch({type:"LOGIN",payload:data});
        
    }

    const fetchAccessToken=()=>{
       let token=window.localStorage.getItem("TOKEN");//string
       let parsedToken=JSON.parse(token);//{token objet}
       dispatch({type:"ACCESS_TOKEN",payload:parsedToken});
         //console.log(token,"token===");
         //console.log(parsedToken,"token===");
    }


    //=========== logout user by removing access token from local storage=====
    let Logout=()=>{
           window.localStorage.removeItem("TOKEN");
           window.location.assign("/login");
           dispatch({type:"LOGOUT",payload:null});
           
    }

     
    let isAuth=auth?.payload?.access_token;
    let current_user=auth.profile;
     //console.log(isAuth,"%%%%%% access token");

    //console.log(auth,"auth data----");

    //=============geting accces token directly from local storage

    let TOKEN=window.localStorage.getItem("TOKEN");
    let parsedToken=JSON.parse(TOKEN);
    let access_token=parsedToken?.access_token;
    
   
    //console.log(access_token,"paresd access token only--");

    //============ vimp== redirect user profile on user login===============
    let getMe=async()=>{
        
            try {
                   
                
                   let {data}=await USER_API_INSTANCE.get(`/auth/profile`,{
                    headers:{
                        Authorization:`Bearer ${access_token}`
                      }
                  })
                 
                  dispatch({type:"GETME",profile:data});

             

            } catch (error) {
              console.log(error);
            }

    }

    useEffect(()=>{
       // fetchAccessToken();
          getMe();
    },[]);

   return <authContextApi.Provider value={{signUp,auth,login,fetchAccessToken,isAuth,Logout,current_user}}> {children}</authContextApi.Provider>
}

export default AuthProvider

