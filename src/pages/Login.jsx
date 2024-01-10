import React, { useState } from 'react';
import '../styles/Login.css';
import googleLogo from '../assets/all-images/better-img/google-logo.png';
import carLogo from "../assets/all-images/better-img/Quick Wheels 1.png";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import config from "../Config.json"

const { localStorage } = window;

const firebaseConfig = {
    apiKey: "AIzaSyB751KD0JTxQU7OsmJHCDyNucciSrMJYYc",
    authDomain: "carrent-2764c.firebaseapp.com",
    projectId: "carrent-2764c",
    storageBucket: "carrent-2764c.appspot.com",
    messagingSenderId: "761832261411",
    appId: "1:761832261411:web:f3558c7079a8a68ca32e96"
};

const app = initializeApp(firebaseConfig);
function Login() {
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const GoogleSignin = () => {
        signInWithPopup(auth, provider).then(
            async (result) => {

                const params = {

                    "first_name": result.user.displayName.split(" ")[0],
                    "last_name": result.user.displayName.split(" ")[1],
                    "email_id": result.user.email
                }
                const response = await axios.post(config["domain"] + '/api/googlelogin/', params)
                if (response.status === 200) {
                    localStorage.setItem('token', response.data.token);
                    // Redirect to home page
                    navigate('/homeUser');
                }
                else {
                    setErrorMessage('Login failed. Please try again.');
                }
            }


        ).catch((error) => { console.log(error); });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post(
                config["domain"] + '/api/login/',
                { email_id: email, password: password }
            );

            // Check if response status is okay
            if (response.status === 200) {
                localStorage.setItem('token', response.data.token);
                // Redirect to home page
                navigate('/homeUser');
            } else {
                setErrorMessage('Login failed. Please try again.');
            }
        } catch (error) {
            // Handle login error
            setErrorMessage('Login failed. Please try again.');
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            <div className="image-container">
                <img src={require('../assets/all-images/better-img/Front car-bro.svg').default} alt="login" />
            </div>
            <div className="form-container">
                <div className="form-header">
                    <Link to="/home"><img src={carLogo} alt="logo" /></Link>
                </div>
                <div className="form-body">
                    <h2>Hey! Welcome back</h2>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" value={password} onChange={handlePasswordChange} />
                        {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
                        <button type="submit">Login</button>
                    </form>
                    <div className="or-separator">
                        <span>or</span>
                    </div>
                    <div className="social-login">
                        <button onClick={GoogleSignin} >
                            <img src={googleLogo} alt="Google" />
                        </button>
                        {/* <button>
                            <img src={facebookLogo} alt="Facebook" />
                        </button> */}
                    </div>
                    <div className="or-separator">
                    </div>
                    <div className="forgot-password">
                        <Link to="/forgot">Forgot password?</Link>
                    </div>
                    <div className="signup">
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
