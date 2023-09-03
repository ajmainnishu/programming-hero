import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/about',
        element: <div>This is the about page</div>
    },
    {
        path: '/contact',
        element: <div>Contact us now, right now</div>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)