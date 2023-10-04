import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from "../firebase/firebase.config";

// create auth context hook
export const AuthContext = createContext(null);
// get firebase config file
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    // email user
    const [user, setUser] = useState('');
    // spinner
    const [loading, setLoading] = useState(true);
    // email register
    const createUserEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    // email log in
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }
    // log out
    const logOut = () => {
        return signOut(auth);
    }
    // email name
    const updateName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
    }
    // send email verification
    const emailVerification = () => {
        sendEmailVerification(auth.currentUser)
            .then()
    }
    // send email to password reset
    const passwordReset = email => {
        return sendPasswordResetEmail(auth, email)
    }
    // user log in or log out state check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe();
        }
    }, [])
    const authInfo = {
        createUserEmail,
        logIn,
        logOut,
        updateName,
        emailVerification,
        passwordReset,
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