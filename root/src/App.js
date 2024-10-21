import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './login/login.js';
import Signup from './sign-up/sign-up.js';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav className="navbar">
            <div className="logo">
              <h1>FitFusion</h1>
            </div>
            <ul className="nav-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/articles">Articles</Link></li>
              <li><Link to="/trainers">Trainers</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
            </ul>
            <div className="auth-buttons">
              <Link to="/login" className="login-button"> Log In</Link>
              <Link to="/signup" className="signup-button">Sign Up</Link>
            </div>
          </nav>
        </header>
        <div className="portal-page">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            {/* Add other routes as needed */}
          </Routes>
        </div>
        <div>
            body content;
        </div>
      </div>
    </Router>
  );
};

export default App;