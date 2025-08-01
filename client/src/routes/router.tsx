import type {RouteObject} from "react-router-dom";
import {Navigate} from "react-router-dom";
import Register from "../components/Auth/Register.tsx";
import Login from "../components/Auth/Login.tsx";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Navigate to="/login" replace/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/register",
        element: <Register/>,
    },
    {
        path: "/chat",
        element: <div>Chat</div>,
    }

];

export default routes;
