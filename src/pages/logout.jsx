import { Navigate } from "react-router-dom";


export function Logout(){
    localStorage.clear();
    return <Navigate to="/"/>
}