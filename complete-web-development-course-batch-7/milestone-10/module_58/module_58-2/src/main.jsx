import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';

const router = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children: [
            {
                path: '/',
                element: <Home />
            }
       ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)