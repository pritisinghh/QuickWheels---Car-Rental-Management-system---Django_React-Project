import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router } from "react-router-dom";
// import Map from "./Map";
import ChatBot from "./components/ChatBot/ChatBot"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <App />
      <ChatBot />
    </Router>
  </React.StrictMode>
);

