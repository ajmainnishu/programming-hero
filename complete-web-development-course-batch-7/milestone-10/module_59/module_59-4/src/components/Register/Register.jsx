import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth';
import app from "../../firebase/firebase.init";

const auth = getAuth(app)

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const loggedUser = result;
            console.log(loggedUser);
        })
        .catch(error => {
            console.error(error);
        })
    }
    return (
        <div className="w-50 mx-auto">
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input className="w-50 mb-4 rounded ps-2" type="email" name="email666" id="email" placeholder="Your Email" />
                <br />
                <input className="w-50 mb-4 rounded ps-2" type="password" name="password" id="password" placeholder="Your Password" />
                <br />
                <input className="btn btn-primary" type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;