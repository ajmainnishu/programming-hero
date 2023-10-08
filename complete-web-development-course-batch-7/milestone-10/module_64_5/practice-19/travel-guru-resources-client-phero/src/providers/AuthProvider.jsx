import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

const AuthProvider = ({ children }) => {
    // user hook
    const [user, setUser] = useState(null);
    // spinner hook
    const [loading, setLoading] = useState(true); 
    // email registration
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // email name update
    const userName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            .then()
            .catch()
    }
    // email log in
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // email password reset
    const passwordReset = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email);
    }
    // facebook log in
    const facebookSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider);
    }
    // google log in
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider);
    }
    // log out
    const logOut = () => {
        signOut(auth)
            .then()
            .catch()
    }
    // user log in or log out checking
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            setUser(loggedUser);
            setLoading(false);
        })
        return (() => {
            unsubscribe();
        })
    }, [])
    const authInfo = {
        createUser,
        logIn,
        passwordReset,
        googleSignIn,
        userName,
        facebookSignIn,
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