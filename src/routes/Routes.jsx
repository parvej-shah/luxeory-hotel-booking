import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/Error";
import RegisterPage from "../auth/RegisterPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/register',
                element:<RegisterPage/>
            },
        ]
    },
    {
        path:'/*',
        element:<ErrorPage/>
    }
    ]);

export default router;
