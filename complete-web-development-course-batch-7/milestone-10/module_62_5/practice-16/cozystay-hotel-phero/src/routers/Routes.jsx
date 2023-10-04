import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import hotelInfo from "../Utilities/hotelInfo";
import RoomInfo from "../pages/Home/RoomInfo/RoomInfo";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import NavRoom from "../pages/NavRoom/NavRoom";
import Book from "../pages/Home/Book/Book";
import EmptyPage from "../EmptyPage/EmptyPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: hotelInfo
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/roominfo/:id',
                element: <RoomInfo />,
                loader: hotelInfo
            },
            {
                path: '/rooms',
                element: <PrivateRoute><NavRoom /></PrivateRoute>
            },
            {
                path: 'book',
                element: <PrivateRoute><Book /></PrivateRoute>
            },
            {
                path: '*',
                element: <EmptyPage />
            }
        ]
    }
])

export default router;