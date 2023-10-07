import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    // user state
    const [user, setUser] = useState(null);
    // spinner state
    const [loading, setLoading] = useState(true);
    // email registration
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // google login
    const createGoogleUser = () => {
        return signInWithPopup(auth, googleProvider)
    }
    // github login
    const createGithubUser = () => {
        return signInWithPopup(auth, githubProvider)
    }
    // email login
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    // email photo and name update
    const emailNamePhotoUpdate = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then()
            .catch()
    }
    // log out
    const logOut = () => {
        signOut(auth)
            .then()
            .catch()
    }
    // user log in or log out hook
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        createUser,
        logIn,
        logOut,
        emailNamePhotoUpdate,
        user,
        createGoogleUser,
        createGithubUser,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;