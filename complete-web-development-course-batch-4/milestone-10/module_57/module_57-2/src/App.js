import {getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';





initializeAuthentication()
const googleProvider = new GoogleAuthProvider()





function App() {
  const auth = getAuth()
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user
      console.log(user)
    })
  }
  const handleRegistration = (e) => {
    console.log('registration will be added')
    e.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleRegistration}>
        <h3>Please Register</h3>
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="" />
        <input type="submit" value="Register" />
      </form>
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </div>
  );
}





export default App;