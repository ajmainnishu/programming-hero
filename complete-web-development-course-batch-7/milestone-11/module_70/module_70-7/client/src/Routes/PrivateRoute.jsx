import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    if(user?.email) {
        return children
    }
    if(loading) {
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to={`/login`} replace></Navigate>
};

export default PrivateRoute;