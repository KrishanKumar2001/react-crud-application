import React from 'react'

const userReducer = (state,action) => {
   let {type,payload,singleUser}=action;
   switch(type){
    case "FETCH":return {
        ...state,
        users:payload,
        isLoading:false
    };
    case "SINGLE_USER":return{
           ...state,
           singleUser,
        //    singleUser:singleUser,
            isLoading:false
    };
     default:return{
        state
    }

   };
}

export default userReducer;
