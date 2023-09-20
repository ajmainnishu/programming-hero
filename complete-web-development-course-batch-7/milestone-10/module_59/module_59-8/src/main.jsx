import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from './layout/Main';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import RegisterRBS from './components/RegisterRBS/RegisterRBS';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterBS from './components/RegisterBS/RegisterBS';

const router = createBrowserRouter([
    {
       path: '/',
       element: <Main></Main>,
       children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: '/register-rbs',
                element: <RegisterRBS />
            },
            {
                path: '/register-bs',
                element: <RegisterBS />
            }
       ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)