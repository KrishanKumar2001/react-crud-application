// ---------------POST METHOD----------------

import AxiosInstances from "../AxiosInstance/axiosInstance";

const courseServices={
    createService:async(payload)=>{
        await AxiosInstances.post("/courses",payload);
    },
    fetchService:async()=>{
       let {data}=await AxiosInstances.get("/courses");
       return data;
    },
    updateService:async(id,payload)=>{
        await AxiosInstances.put(`/courses/${id}`,payload);
    },
    deleteService:async(id)=>{
        await AxiosInstances.delete(`/courses/${id}`);
    }
    ,
     fetchId:async (id)=>{
       let {data}=await AxiosInstances.get(`/courses/${id}`);
        return data;
     }

};

//console.log(courseServices.fetchId("44be"));

export default courseServices;