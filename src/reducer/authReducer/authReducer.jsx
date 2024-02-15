//useReducer() method takes this authReducer method at its first parameter and  intail state as 2nd parameter
// and return array of [state , dispatch] so whenever dispatch method execute it calls reducer methid 
const authReducer=(state,action)=>{

   // console.log(state,"===state of reducer====")
    let {type,payload,profile}=action;
    switch(type){

        case "SIGNUP":return {
            ...state,
             payload,
            isLoading:false
        };

        case "LOGIN":return {
            ...state,
             payload,
            isLoading:false
        }

        case  "ACCESS_TOKEN":return {
            ...state,payload
        }
        
        case "LOGOUT":return {
            ...state,payload
        }
        case "GETME":return {
            ...state,
            profile
        }

        default :return{
            ...state
        }
        
}
 
}

export default authReducer;