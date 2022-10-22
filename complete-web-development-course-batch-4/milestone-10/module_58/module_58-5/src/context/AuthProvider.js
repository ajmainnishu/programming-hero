import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';





const AuthContext = createContext()





// const AuthProvider = (props) => {
//     return (
//         <AuthContext.Provider value="dynamic">
//             {props.children}
//         </AuthContext.Provider>
//     );
// };





// const AuthProvider = (props) => {
//     const {children} = props
//     return (
//         <AuthContext.Provider value="dynamic">
//             {children}
//         </AuthContext.Provider>
//     );
// };





// const AuthProvider = ({children}) => {
//     const allContext = useFirebase()
//     return (
//         <AuthContext.Provider value={allContext}>
//             {children}
//         </AuthContext.Provider>
//     );
// };





export default AuthProvider;