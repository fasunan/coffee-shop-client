import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root';
import AddCoffee from './Component/AddCoffee';
import UpdateCoffee from './Component/UpdateCoffee';
import SignUp from './Component/SignUp';
import LogIn from './Component/LogIn';
import Home from './Component/Home';
import AuthProvider from './AuthProvider';
import Users from './Component/Users';


const router = createBrowserRouter([
  
  {
    path:"/",
    element: <Home></Home>,
    children:[
      
      {
        path: "/",
        element: <Root></Root>,
        loader: ()=> fetch('https://coffee-store-server-40vo326ru-al-sunans-projects.vercel.app/addcoffee')
      },
      {
        path: "/addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`https://coffee-store-server-40vo326ru-al-sunans-projects.vercel.app/addcoffee/${params.id}`)
      },
      {
        path:"/signUp",
        element:<SignUp></SignUp>
      },
      {
        path:"/logIn",
        element:<LogIn></LogIn>
      },
      {
        path:"/users",
        element:<Users></Users>,
        loader : ()=>fetch('https://coffee-store-server-40vo326ru-al-sunans-projects.vercel.app/user')
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
