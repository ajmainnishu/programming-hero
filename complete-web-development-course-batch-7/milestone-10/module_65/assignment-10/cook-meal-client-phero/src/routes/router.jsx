import { createBrowserRouter } from "react-router-dom";
import Home from "../layout/Home";
import Main from "../pages/Main/Main";
import Chefs from "../pages/Main/Chefs/Chefs";
import ChefRecipes from "../pages/Main/ChefRecipes/ChefRecipes";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoute from "../providers/PrivateRoute";
import EmptyPage from "../pages/EmptyPage/EmptyPage";
import Blog from "../layout/Blog";
import Favorites from "../pages/Main/Favorites/Favorites";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <Main />
            },
            {
                path: '/chef-recipes/:id',
                element: <PrivateRoute><ChefRecipes /></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/chef-recipes/${params.id}`)
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path:  'blog',
                element: <Blog />
            },
            {
                path: 'favorites',
                element: <Favorites />
            },
            {
                path: '*',
                element: <EmptyPage></EmptyPage>
            }
        ]
    }
])

export default router;