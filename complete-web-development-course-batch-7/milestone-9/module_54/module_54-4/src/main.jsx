import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import Home from './components/Home/Home.jsx';
import First from './components/First/First.jsx';
import Friends from './components/Friends/Friends.jsx';
import FriendDetail from './components/FriendDetail/FriendDetail.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <First />
            },
            {
                path: 'friends',
                element: <Friends />,
                loader: () => fetch ('https://jsonplaceholder.typicode.com/users')
            },
            {
                path: 'friend/:friendId',
                element: <FriendDetail />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
)