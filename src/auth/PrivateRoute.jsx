import {Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import LoadingClip from "../components/LoadingClip";

// eslint-disable-next-line react/prop-types
export default function PrivateRoute({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();
  if(!loading){
    if (user && user?.email) return children ;
    else return <Navigate to={'/login'} state={{ from: location.pathname }}></Navigate>;
  }
  else{
    return <LoadingClip/>;
  }
}
