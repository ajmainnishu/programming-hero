import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children:  [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'checkout/:id',
                element: <CheckOut></CheckOut>,
                loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            }
        ]
    }
])

export default router;