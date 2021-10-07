import {getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut} from 'firebase/auth'
import { useState } from 'react';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';





initializeAuthentication()
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()





function App() {
  const [user, setUser] = useState([])
  const auth = getAuth()
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const {displayName, email, photoURL} = result.user
      const logedInUser = {
        name: displayName,
        email: email,
        photo: photoURL
      }
      setUser(logedInUser)
    })
    .catch(error => {
      console.log(error.message)
    })
  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
    .then(result => {
      const user = result.user
      console.log(user)
    })
  }
  const handleSignOut = () => {
    signOut(auth)
    .then(() => {
      setUser({})
    })
  }
  return (
    <div>
      { !user.name ?
      <div>
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
        <button onClick={handleGithubSignIn}>Github Sign in</button>
      </div>
      :
      <div>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
      }
      {
        user.email && <div>
            <h2>Welcome {user.name}</h2>
            <p>I know your email address: {user.email}</p>
            <img src={user.photo} alt="" />
          </div>
      }
    </div>
  );
}





export default App;