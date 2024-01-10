import React, { useState } from 'react';
import '../styles/Login.css';
import carLogo from "../assets/all-images/better-img/Quick Wheels 1.png";
import axios from "axios";
import { useNavigate, Link } from 'react-router-dom';
import config from "../Config.json"

function Update() {
    const [passcode, setPasscode] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handlePasscodeChange = (event) => {
        setPasscode(event.target.value);
    };

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let path = window.location.href;
        let token = path.split('=')[1];
        console.log(path, token);
        try {
            const response = await axios.post(
                config["domain"] + '/api/updatepassword/',
                { code: passcode, password: newPassword, token: token }
            );

            // Check if response status is okay
            if (response.status === 200) {
                // Redirect to home page
                navigate('/login');
            } else {
                setErrorMessage('Please try again.');
            }
        } catch (error) {
            // Handle login error
            setErrorMessage('Please try again.');
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            <div className="image-container">
                <img src={require('../assets/all-images/better-img/update.svg').default} alt="login" />
            </div>
            <div className="form-container">
                <div className="form-header">
                    <Link to="/home"><img src={carLogo} alt="logo" /></Link>
                </div>
                <div className="form-body">
                    <h2>Enter a new password.</h2>
                    <p>The mail sent to you contains a passcode. Enter the passcode along with your new password.</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="passcode">Passcode:</label>
                        <input type="text" id="passcode" value={passcode} onChange={handlePasscodeChange} />
                        <label htmlFor="new-password">New Password:</label>
                        <input type="password" id="new-password" value={newPassword} onChange={handleNewPasswordChange} />
                        {errorMessage && <p className="error-message" style={{ color: 'red' }}>{errorMessage}</p>}
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update;
