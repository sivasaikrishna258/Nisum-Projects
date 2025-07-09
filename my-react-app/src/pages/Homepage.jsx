import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/auth.css';

export default function HomePage() {
  return (
    <div className="auth-container">
      <h1>Welcome to React Auth App</h1>
      <p>Please login or create an account to continue.</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/" className="auth-button">Login</Link>{' '}
        <Link to="/signup" className="auth-button">Sign Up</Link>
      </div>
    </div>
  );
}
