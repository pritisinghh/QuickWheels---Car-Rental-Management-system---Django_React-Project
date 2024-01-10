import React, { useState } from 'react';
import '../styles/Login.css';
import carLogo from "../assets/all-images/better-img/Quick Wheels 1.png";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import config from "../Config.json"

function Forgot() {
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Check if the email is valid
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setErrorMessage('Email address is not valid');
            return;
        }

        try {
            const response = await axios.post(
                config["domain"] + '/api/forgot/',
                { email_id: email }
            );

            // Check if response status is okay
            if (response.status === 200) {
                // Redirect to Update
                navigate('/home');
            } else {
                setErrorMessage('Please try again.');
            }
        } catch (error) {
            // Handle login error
            setErrorMessage('Email does not exist.');
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            <div className="image-container">
                <img src={require('../assets/all-images/better-img/forgot.svg').default} alt="login" />
            </div>
            <div className="form-container">
                <div className="form-header">
                    <Link to="/home"><img src={carLogo} alt="logo" /></Link>
                </div>
                <div className="form-body">
                    <h2>Forgot your password!!!</h2>
                    <h2>Don't worry.</h2>
                    <p>You can reset it by entering your email address below. We'll send you a passcode that you can use to update your password to a new one.</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" value={email} onChange={handleEmailChange} />
                        {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
                        <button type="submit">Continue</button>
                    </form>
                    <div className="or-separator">
                    </div>
                    <div className="login">
                        Wanna try again? <Link to="/login">Login</Link>
                    </div>
                    <div className="signup">
                        Don't have an account? <Link to="/register">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Forgot;
