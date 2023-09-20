import { useState } from "react";

const Register = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
    }
    return (
        <div>
            <h4>Please Register</h4>
            <form onSubmit={handleSubmit}>
                <input onChange={handleEmailChange} type="email" name="email666" id="email" placeholder="Your Email" />
                <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="password" placeholder="Your Password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;