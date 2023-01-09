import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import Products from "../Products/Products";
import Order from "../Order/Order";
import PrivateRoute from "./PrivateRoute";
import HomeFurniture from "../../Pages/HomeFurniture/HomeFurniture";
import Other from "../../Pages/HomeFurniture/Other";
import About from "../About/About";
import CheckOut from "../CheckOut/CheckOut";

export const router= createBrowserRouter([

    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
              path: "/home",
              element: <Home/>,
            },
            {
                path: "/",
                element: <Home/>,
              },
            {
                path: "/blog",
                element: <Blog/>,
              },
              {  
                path: "/login",
                element: <Login/>
              }, 
              {
                path:"registration",
                element:<Registration></Registration>
              },
              {
                path:"about",
                element:<About></About>
              },
              {
                path:"products",
                loader: ()=> fetch('https://wood-decor-server.vercel.app/products'), 
                element:<Products></Products>
              },
              {
                path:"order",
                element:<PrivateRoute><Order></Order></PrivateRoute>
              },
              {
                path:"products/house",
                loader: ()=> fetch('https://wood-decor-server.vercel.app/products/house'), 
                element:<HomeFurniture></HomeFurniture>
              },
              {
                path:"products/office",
                loader: ()=> fetch('https://wood-decor-server.vercel.app/products/office'), 
                element:<HomeFurniture></HomeFurniture>
              },
              {
                path:"products/other",
                loader: ()=> fetch('https://wood-decor-server.vercel.app/products/other'), 
                element:<Other></Other>
              },
              {
                path:"products/checkout/:id",
             
                element:<CheckOut></CheckOut>,
                loader: ({params})=> fetch(`https://wood-decor-server.vercel.app/products/${params.id}`), 
              }
              
              

        ]
    }
])