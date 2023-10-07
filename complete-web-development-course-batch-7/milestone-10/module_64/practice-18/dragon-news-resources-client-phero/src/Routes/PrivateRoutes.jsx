import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className="text-center py-5">
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
        </div>
    }
    if (user) {
        return children
    }
    return <Navigate to='/login' state={{from: location }} replace></Navigate>
};

export default PrivateRoutes;