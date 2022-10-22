import {getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged} from 'firebase/auth'
import { useEffect, useState } from 'react'
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'





initializeAuthentication()





const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const auth = getAuth()
    const signInUsingGoogle = () => {
        setIsLoading(true)
        const googleProvider = new GoogleAuthProvider()
        signInWithPopup(auth, googleProvider)
        .then(result =>  {
            setUser(result.user)
        })
        .finally (() => setIsLoading(false))
    }
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if(user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed
    }, [])
    const logOut = () => {
        signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false))
    }
    return {
        user,
        signInUsingGoogle,
        logOut
    }
}





export default useFirebase