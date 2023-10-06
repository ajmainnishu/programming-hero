import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MiddleSide from "../Pages/Home/Main/MiddleSide/MiddleSide";
import News from "../Pages/News/News";

const router =  createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <MiddleSide></MiddleSide>,
                loader: () => fetch(`http://localhost:5000/categories/0}`)
            },
            {
                path: 'news/:id',
                element: <News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/categories/:id',
                element: <MiddleSide></MiddleSide>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])

export default router;