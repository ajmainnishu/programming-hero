import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // user state check
    if (user) {
        return children
    }
    // loading
    if (loading) {
        return <div className="text-center py-20">
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return <Navigate to={`/appointment/login`} state={{ from: location }} replace ></Navigate>
};

export default PrivateRoute;