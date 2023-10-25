import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    // user state
    const [user, setUser] = useState(null);
    // loading state
    const [loading, setLoading] = useState(true);
    // user create email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // create user name update
    const userInfoUpdate = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    // user log in
    const userSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user google log in
    const userGoogleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // user facebook log in
    const userFacebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    // user log out
    const logOut = () => {
        signOut(auth)
            .then()
            .catch()
    }
    // user state check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        createUser,
        userInfoUpdate,
        userSignIn,
        userGoogleSignIn,
        userFacebookSignIn,
        logOut,
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;