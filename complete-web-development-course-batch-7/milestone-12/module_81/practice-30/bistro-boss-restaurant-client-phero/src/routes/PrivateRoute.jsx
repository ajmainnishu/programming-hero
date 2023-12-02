import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();
    if (user) {
        return children
    }
    if (loading) {
        return <div className="py-20 text-center">
            <progress className="progress w-56"></progress>
        </div>
    }
    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;