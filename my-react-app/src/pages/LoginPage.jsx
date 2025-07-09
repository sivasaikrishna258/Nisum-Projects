import React from 'react';
import LoginForm from '../components/LoginForm';
import logo from '../assets/logo.png';
import '../styles/auth.css';

export default function LoginPage() {
  return (
    <div className="auth-container">
      <img src={logo} alt="Logo" className="auth-logo" />
      <h2>Login to Your Account</h2>
      <LoginForm />
      <p className="auth-bottom-text">
        Don’t have an account? <a href="/signup">Sign up</a>
      </p>
    </div>
  );
}
