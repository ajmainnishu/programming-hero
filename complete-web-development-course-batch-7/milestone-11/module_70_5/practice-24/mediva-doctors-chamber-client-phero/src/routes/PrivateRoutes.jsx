import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // user check
    if (user) {
        return children
    }
    // loading state
    if (loading) {
        return <div className="py-20 text-center">
            <span className="loading loading-infinity loading-xs"></span>
            <span className="loading loading-infinity loading-sm"></span>
            <span className="loading loading-infinity loading-md"></span>
            <span className="loading loading-infinity loading-lg"></span>
        </div>
    }
    return <Navigate to={`/login`} state={{ from: location }} replace></Navigate>
};

export default PrivateRoutes;