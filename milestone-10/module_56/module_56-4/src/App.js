import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';





initializeAuthentication()
const provider = new GoogleAuthProvider()





function App() {
  const handleGoogleSingIn = () => {
    const auth = getAuth()
    signInWithPopup(auth, provider)
    .then(result => {
      const user = result.user
      console.log(user)
    })
  }
  return (
    <div>
      <button onClick={handleGoogleSingIn}>Google Sing in</button>
    </div>
  );
}





export default App;