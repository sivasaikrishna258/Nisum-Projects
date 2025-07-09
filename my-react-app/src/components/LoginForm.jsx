import React, { useState } from 'react';
import '../styles/auth.css';

export default function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setError('Email and password are required.');
    } else {
      setError('');
      alert(`Logged in as: ${email}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" value={formData.password} onChange={handleChange} />
      {error && <p className="auth-error">{error}</p>}
      <div className="auth-links">
        <a href="#">Forgot Password?</a>
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
