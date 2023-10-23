import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NewChocolate from "../pages/NewChocolate/NewChocolate";
import Home from "../pages/Home/Home";
import EditChocolate from "../pages/EditChocolate/EditChocolate";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element:  <Home></Home>,
                loader: () => fetch('http://localhost:5000/chocolates')
            },
            {
                path: 'new-chocolate',
                element: <NewChocolate></NewChocolate>
            },
            {
                path: 'edit-chocolate/:id',
                element: <EditChocolate></EditChocolate>,
                loader: ({params}) => fetch(`http://localhost:5000/chocolates/${params.id}`)
            }
        ]
    }
])

export default router;