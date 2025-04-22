import './signupPage.css';
import Logo from './assets/logo-mavinix-studios.png';
import { Link } from 'react-router-dom';
import React from 'react';

function SignupPage() {
  return (
    <div>
      <header>
        <div className="header">
          <div className="logo-group">
            <img
              className="logo"
              src="images/logo-mavinix-studios.png"
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

      <div className="container">
        <div className="left-panel">
          <h2 style={{marginBottom: '2rem'}}>Create account</h2>
            <form className="form">
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button className="" type="submit">Sign up</button>
            <p className="login-link">
              Already have an account?{" "}
              <a>
                <Link to='/login'>Login</Link>
              </a>
            </p>
          </form>
        </div>

        <div className="right-panel">
          <div className="content">
            <img
              src="https://via.placeholder.com/300x200"
              alt="Device Screenshot"
            />
            <h3>Check the status</h3>
            <p>It's easy to check the status of your online orders</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
