import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import NavbarContainer from './pages/navbar/NavbarContainer';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Menu from './pages/navbar/Menu';
import CreateCourse from './components/courses/CreateCourse';
import ViewCourses from './components/courses/ViewCourses';
import AllCourses from './components/courses/AllCourses';
import CourseDetail from './components/courses/CourseDetail';
import EditCourse from './components/courses/EditCourse';
import AllUsers from './components/users/AllUsers';
import SingleUser from './components/users/SingleUser';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import PrivateRoute from './helpers/PrivateRoute';
import PublicRoute from './helpers/PublicRoute';
import Modal from './helpers/modals/Modal';
import FetchGitUsers from './components/users/FetchGitUsers';
import axios from 'axios';
import CreateProduct from './components/products/CreateProduct';


let router=createBrowserRouter([
   {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        children:[
          {
           index:true,
            element: 
                 <AllCourses/>
           
          },
          {
            path:"/createcourse",
            element: <PrivateRoute>
                          <CreateCourse/>
                     </PrivateRoute> 
          },
          {
            path:"/git-users",
            element: (<PrivateRoute>
                          <FetchGitUsers/>
                     </PrivateRoute> ),
            loader:async()=>{
              let {data}=await axios.get("https://api.github.com/users");
              return data;
            }    
          },
          {
            //data api with mutation create or update----
            path:"/create-product",
            element: (<PrivateRoute>
                          <CreateProduct/>
                     </PrivateRoute> ),
            action:async({request})=>{

                let data=await request.formData();
                //console.log(data,"data ");
                let name=data.get("name");
                let email=data.get("email");
                let password=data.get("password");
                let avatar=data.get("avatar");
               
                
                let payload={name,email,password,avatar};
                return await window.fetch("https://api.escuelajs.co/api/v1/users/",{
                  method:"POST",
                  body:JSON.stringify(payload),
                  headers:{
                    "content-type":"application/json"
                  }
                })
              // return await axios.post("https://api.escuelajs.co/api/v1/products/",payload);
            }         
            
          }
          
          ,{
            path:":id",
            element:<PrivateRoute>
                    <CourseDetail/>
            </PrivateRoute>
           
          },
          {
            path:"edit/:id",
            element:
            <PrivateRoute>
                <EditCourse/>
            </PrivateRoute>

          },{
            path:"/allusers",
            element:<PrivateRoute>
                         <AllUsers />
            </PrivateRoute>
            
          },{
            path:"/users/:id",
            element: <PrivateRoute>
                  <SingleUser />
            </PrivateRoute>
            
          },
          
          
          // ,{
          //   path:"/viewcourses",
          //   element:<ViewCourses/>
          // }
         

        ]
      },
      
      {

        path:"/login",
        element:<PublicRoute>
             <Modal> <Login /></Modal>
       </PublicRoute> 
      },
      {
        path:"/signup",
        element: <PublicRoute>
                     <Register />
                </PublicRoute> 
      },
      {
        path:"*",
        element:<NotFound/>
      }
      
      
    ]
   }
]);

const App = () => {

  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App

//=============
// let router=createBrowserRouter([
//   {
//    path:"/",
//    element:<Layout/>,
//    children:[
//      {
//        path:"/",
//        element:<Home/>,
//        children:[
//          {
//           index:true,
//            element: <AllCourses/>
//          },
//          {
//            path:"/createcourse",
//            element:<CreateCourse/>
//          },{
//            path:"/viewcourses",
//            element:<ViewCourses/>
//          }

//        ]
//      },
//      {
//        path:"*",
//        element:<NotFound/>
//      }
     
     
//    ]
//   }
// ]);

