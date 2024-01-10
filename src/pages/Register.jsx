import React, { useState } from 'react';
import '../styles/Register.css';
import googleLogo from '../assets/all-images/better-img/google-logo.png';
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';
import config from "../Config.json"

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email_id: '',
    role_type: 'CUSTOMER',
    password: '',
    cpassword: ''
  });
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [fieldEmpty, setFieldEmpty] = useState(false);

  const data = {
    first_name: formData.first_name,
    last_name: formData.last_name,
    email_id: formData.email_id,
    role_type: formData.role_type,
    password: formData.password
  }

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.password !== formData.cpassword) {
      setPasswordsMatch(false);
      return;
    }

    if (!formData.first_name || !formData.last_name) {
      setFieldEmpty(true);
      return;
    }

    axios
      .post(config["domain"]+'/api/signup/', data)
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem('token',response.data.token );
        alert('Signup successful!');
        // Redirect to another page if necessary
        navigate('/login');
      })
      .catch((error) => {
        console.error(error);
        alert('Error occurred during signup');
      });
  };


  return (
    <div className="login-container">
      <div className="image-container">
        <img src={require('../assets/all-images/better-img/register.svg').default} alt="login" />
      </div>
      <div className="form-container">
        <div className="form-body">
          <h2>Sign up today!</h2>
          <form onSubmit={handleSubmit}>
            <div className="name-inputs">
              <div className="form-group">
                <label htmlFor="fname">First name:</label>
                <input
                  type="text"
                  id="fname"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                />
                {fieldEmpty && !formData.first_name && <p style={{ color: 'red' }}>Field empty!</p>}
              </div>
              <div className="form-group">
                <label htmlFor="lname">Last name:</label>
                <input
                  type="text"
                  id="lname"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                />
                {fieldEmpty && !formData.last_name && <p style={{ color: 'red' }}>Field empty!</p>}
              </div>
            </div>
            <div className="name-inputs">
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email_id"
                  value={formData.email_id}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="role_type">Role type:</label>
                <select
                  id="role_type"
                  name="role_type"
                  value={formData.role_type}
                  onChange={handleInputChange}
                >
                  <option value="CUSTOMER">Customer</option>
                  <option value="OWNER">Owner</option>
                </select>
              </div>
            </div>
            <div className="name-inputs">
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="cpassword">Confirm password:</label>
                <input
                  type="password"
                  id="cpassword"
                  name="cpassword"
                  value={formData.cpassword}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {!passwordsMatch && (
              <p style={{ color: 'red' }}>Passwords don't match!</p>
            )}
            <button type="submit">Sign up</button>
          </form>
          <div className="or-separator">
            <span>or</span>
          </div>
          <div className="social-login">
            <button>
              <img src={googleLogo} alt="Google" />
            </button>
          </div>
          <div className="or-separator">
          </div>
          <p>Already an existing user? <Link to="/login">Sign in</Link></p>
          <p><Link to="/">Go to home page</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Signup;