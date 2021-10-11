import { useEffect, useState } from "react"
import initializeAuthentication from "../Firebase/Firebase.init"
import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider} from 'firebase/auth'





initializeAuthentication()





const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
        .catch(error => {
            setError(error.message)
        })
    }
    const signInUsingGithub = () => {
        signInWithPopup(auth, githubProvider)
        .then(result => {
            setUser(result.user)
        })
    }
    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                console.log('inside state change', user)
                setUser(user)
            }
        })
    }, [])
    return {
        user,
        error,
        signInUsingGoogle,
        signInUsingGithub,
        logout
    }
}





export default useFirebase