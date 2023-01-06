import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Main from "../Main/Main";
import Login from "../Login/Login";
import Registration from "../Login/Registration";
import Products from "../Products/Products";
import Order from "../Order/Order";
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
                path:"products",
                element:<Products></Products>
              },
              {
                path:"order",
                element:<Order></Order>
              }

        ]
    }
])