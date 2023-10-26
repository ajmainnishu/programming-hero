import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app);
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    // user state
    const [user, setUser] = useState(null);
    // loading state
    const [loading, setLoading] = useState(true);
    // register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user name update
    const userProfileUpdate = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    // login
    const userLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // logout
    const userLogOut = () => {
        signOut(auth)
            .then()
            .catch()
    }
    // user state checked
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        })
        return () => {
            return unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        userProfileUpdate,
        userLogOut,
        userLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;