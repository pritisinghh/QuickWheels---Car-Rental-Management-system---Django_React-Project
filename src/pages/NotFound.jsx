import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/NotFound.css';
import notFoundImage from "../assets/all-images/better-img/NotFound.svg";

function NotFound() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/');
  };

  return (
    <div className="not-found-container">
      <img src={notFoundImage} alt="Not Found" className="not-found-image" />
      <h2>Oops! Page not found.</h2>
      <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
      <p>It is also possible that we, SE Team 18 - SP23, may have forgotten to implement it. hehe!</p>
      <button onClick={handleButtonClick}>Go to Home Page</button>
    </div>
  );
}

export default NotFound;
