import { createRoot } from 'react-dom/client'
import './index.css'
import {createBrowserRouter, Route, RouterProvider} from "react-router-dom";
import Search from "./components/Search.jsx";
import Weather from "./components/Weather.jsx";
import MainLayout from "./layouts/MainLayout.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path:"",
                element: <Search/>
            },
            {
                path:"/weather/:city",
                element: <Weather/>
            }]
    },
    {
        path:"*",
        element: <h1>Not found.</h1>
    }
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
