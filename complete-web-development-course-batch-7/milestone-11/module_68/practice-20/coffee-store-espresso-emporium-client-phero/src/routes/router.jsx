import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import AddCoffees from "../pages/AddCoffees/AddCoffees";
import UpdateCoffees from "../pages/UpdateCoffees/UpdateCoffees";
import ViewCoffee from "../pages/ViewCoffee/ViewCoffee";
import Empty from "../pages/404/Empty";

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
                path: 'add-coffees',
                element: <AddCoffees />
            },
            {
                path: 'update-coffees/:id',
                element: <UpdateCoffees />,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: 'view-coffees/:id',
                element: <ViewCoffee />,
                loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
            },
            {
                path: '*',
                element: <Empty></Empty>
            }
        ]
    }
])

export default router;