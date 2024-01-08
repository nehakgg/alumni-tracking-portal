import "./App.css";
import React from "react";
import { createBrowserRouter,Route,Link,RouterProvider, createRoutesFromElements} from "react-router-dom";
import Routes from "./Routes";
import NotableAlumni from "./Pages/NotableAlumni";
import Header from "./Components/Header";
import Body from "./Components/Body";
import TextEffect from "./Components/TextEffect";
import AboutUs from "./Pages/AboutUs";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import AdminLogin from "./Admins/AdminLogin";
import AdminSignup from "./Admins/AdminSignup";



// const router = createBrowserRouter(

//   createRoutesFromElements(
//     <Route path="/" element={<Routes/>}>
//       <Route path="alumni" element={<Body/>}/>
//       <Route path="/notable-alumni" element={<NotableAlumni/>}/>
//     </Route>
//   )
// )

const router = createBrowserRouter([
  {
    path:"/",
    element:<Routes/>,
    children:[
      {
        path:"",
        element:<Body/>
      },
      {
        path:"/notable-alumni",
        element:<NotableAlumni/>
      },
      {
        path:"/about-us",
        element:<AboutUs/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/signup",
        element:<SignUp/>
      }
    ]
  },
  {
    path:"/admin-login",
    element:<AdminLogin/>
  },
  {
    path:"/admin-signup",
    element:<AdminSignup/>
  },
]);


function App() {
  return (
    <>
     <RouterProvider router = {router} />
    </>
  );
};


export default App;

