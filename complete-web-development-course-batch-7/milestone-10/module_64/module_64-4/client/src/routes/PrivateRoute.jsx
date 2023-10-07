import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    return <Navigate state={{from: location}} to='/login' replace></Navigate>

};

export default PrivateRoute;