import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth/useAuth";
import useAdmin from "../hooks/useAdmin/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();
    if (user && isAdmin) {
        return children
    }
    if (loading || isAdminLoading) {
        return <div className="py-20 text-center">
            <progress className="progress w-56"></progress>
        </div>
    }
    return <Navigate to={'/'} state={{ from: location }} replace></Navigate>
};

export default AdminRoute;