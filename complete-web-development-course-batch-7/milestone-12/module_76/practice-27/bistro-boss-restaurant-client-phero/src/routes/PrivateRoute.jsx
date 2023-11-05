import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
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