import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    // user state
    const [user, setUser] = useState(null);
    // loading state
    const [loading, setLoading] = useState(true);
    // user create account using email
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // user update name
    const userProfileUpdate = (name) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    // user log in using email
    const userLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    // user login using google
    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    // user login using facebook
    const facebookLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, facebookProvider);
    }
    // user login using github
    const githubLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }
    // user logout
    const userLogOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // user state checking
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        user,
        loading,
        createUser,
        userLogIn,
        userProfileUpdate,
        googleLogIn,
        facebookLogIn,
        githubLogIn,
        userLogOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;