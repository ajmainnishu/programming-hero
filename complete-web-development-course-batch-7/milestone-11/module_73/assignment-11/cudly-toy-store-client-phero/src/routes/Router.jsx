import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Contact/Login/Login";
import Registration from "../pages/Contact/Registration/Registration";
import Blogs from "../pages/Blogs/Blogs";
import AllToys from "../pages/AllToys/AllToys";
import SingleToy from "../pages/Home/Categories/SingleToy";
import PrivateRoute from "./PrivateRoute";
import AddToy from "../pages/AddToy/AddToy";
import MyToys from "../pages/MyToys/MyToys";
import EmptyPage from "../EmptyPage/EmptyPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
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
                path: 'registration',
                element: <Registration />
            },
            {
                path: 'blogs',
                element: <Blogs />
            },
            {
                path: 'all-toys',
                element: <AllToys />,
                loader: () => fetch('http://localhost:5000/toys')
            },
            {
                path: 'toy/:id',
                element: <PrivateRoute><SingleToy /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toy/${params.id}`)
            },
            {
                path: 'add-toy',
                element: <PrivateRoute><AddToy /></PrivateRoute>
            },
            {
                path: 'my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            }
        ]
    },
    {
        path: '*',
        element: <EmptyPage />
    }
])

export default router;