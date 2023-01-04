import { createBrowserRouter } from "react-router-dom";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Main from "../Main/Main";
import Login from "../Login/Login";
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
              }

        ]
    }
])