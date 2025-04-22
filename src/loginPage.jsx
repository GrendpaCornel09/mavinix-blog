import './loginPage.css';
import Logo from './assets/logo-mavinix-studios.png';
import React from 'react';
import { Link } from 'react-router-dom';
import 'animate.css';

function LoginPage() {
  return (
    <div className="login-page">
      {/* Header */}
      <header>
        <div className="header">
          <div className="logo-group">
            <img
              className="logo"
              src={Logo}
              alt="Mavinix Studios Logo"
            />
            <span className="logo-text">Mavinix Studios</span>
          </div>
          <nav className="lists">
            <a href="#">Home</a>
            <a href="#">Information</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>
        </div>
      </header>

      {/* Login Container */}
      <div className="login-container">
        <h2 className="animate__animated animate__backInDown">HTML5</h2>
        <input type="text" className="form-input animate__animated animate__backInDown animate__delay-1s" placeholder="Username" />
        <input type="password" className="form-input animate__animated animate__backInDown animate__delay-2s" placeholder="Password" />
        <button className="btn animate__animated animate__backInDown animate__delay-3s">L O G I N</button>
        <div className="links">
          <a href="#">Forgot Password?</a>
          <p>
            Don't have an account?{" "}
            <Link to='/signup'>Sign Up here</Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        © 2025 Copyright. All Rights Reserved | Mavinix Studios
      </div>
    </div>
  );
};

export default LoginPage;
