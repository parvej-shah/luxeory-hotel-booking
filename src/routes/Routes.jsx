import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import ErrorPage from "../pages/Error";
import RegisterPage from "../auth/RegisterPage";
import SignInPage from "../auth/SignInPage";
import Rooms from "../pages/Rooms";
import RoomDetails from "../pages/RoomDetails";
import MyBookings from "../pages/MyBookings";
import PrivateRoute from "../auth/PrivateRoute";

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
                path:'/rooms',
                element:<Rooms/>
            },
            {
                path:'/rooms/:id',
                element:<RoomDetails/>
            },
            {
                path:'/my-bookings',
                element:<PrivateRoute><MyBookings/></PrivateRoute> 
            },
            {
                path:'/register',
                element:<RegisterPage/>
            },
            {
                path:'/login',
                element:<SignInPage/>
            },
        ]
    },
    {
        path:'/*',
        element:<ErrorPage/>
    }
    ]);

export default router;
