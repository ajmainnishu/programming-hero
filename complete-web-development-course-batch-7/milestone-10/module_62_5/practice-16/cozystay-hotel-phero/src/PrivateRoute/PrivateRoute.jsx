import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({ children }) => {
    // private route use
    const { user, loading } = useContext(AuthContext);
    // pages location use hook
    const location = useLocation();
    // when data comes then spinner show
    if (loading) {
        return (
            <div className='text-center py-5 my-5'>
                <Spinner animation="border" size="sm" />
                <Spinner animation="border" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" />
            </div>
        )
    }
    // if user have then show
    if (user) {
        return children
    }
    // if user not have then redirect login page
    return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>
};

export default PrivateRoute;