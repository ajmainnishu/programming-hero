import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react';
import './App.css';
import initializeAuthentication from './Firebase/firebase.initialize';





initializeAuthentication()
const googleProvider = new GoogleAuthProvider()





function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLogin, setIsLogin] = useState(false) 
  const auth = getAuth()
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user
        console.log(user)
      })
  }
  const handleRegistration = (e) => {
    e.preventDefault();
    console.log(email, password)
    if (password.length < 6) {
      setError('Password should be at least 6 characters')
      return
    }
    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError('Password should be contain 2 upper case')
      return
    }
    isLogin ? processLogin(email, password) : registerNewUser(email, password)
  }
  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user
      console.log(user)
    })
    .catch(error => {
      setError(error.message)
    })
  }
  const toggleLogin = e => {
    // console.log(e.target.checked)
    setIsLogin(e.target.checked)
  }
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }
  const registerNewUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result => {
      const user = result.user
      console.log(user)
      setError('')
    })
    .catch(error => {
      setError(error.message)
    })
  }
  return (
    <div className='mx-5'>
      <form onSubmit={handleRegistration}>
        <h3 className="text-primary">Please {isLogin ? "Login" : "Register"}</h3>
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" required />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" required />
          </div>
        </div>
        
        <div className="row mb-3">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input" type="checkbox" id="gridCheck1" />
              <label className="form-check-label" htmlFor="gridCheck1" >
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <div className="row mb-3 text-danger">{error}</div>
        <button type="submit" className="btn btn-primary">{isLogin ? "Login" : "Register"}</button>
      </form>
      <button onClick={handleGoogleSignIn}>Google Sign in</button>
    </div>
  );
}





export default App;