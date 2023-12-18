"use client"
import React, { useState } from 'react';
import "./globals.css";
import Link from 'next/link';
import credentials from "./credentials.json";

export default function Home() {
  const [orgName, setOrgName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Validating email and password
    const isValidCredentials = credentials.users.some(
      (user) => user.email === email && user.password === password
    );

    if (isValidCredentials) {
      // Store email and password in localStorage
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
  
      // Redirect to the dashboard if credentials are correct
      window.location.href = "/components/Dashboard";
    } else {
      setError('Please enter valid credentials');
    }
  };

  return (
    <section className='Signup'>
      <div className="logocontainer">
        Logo or Illustration
      </div>
      <div className="signupcontainer">
        <header>Welcome to <span>Kentron</span></header>
        <div className="signupbox">
          <h1>Sign in</h1>
          <div className="inputs">
            <p>Organization Name</p>
            <input
              type="text"
              placeholder='Enter organization name'
              value={orgName}
              onChange={(e) => setOrgName(e.target.value)}
            />
          </div>
          <div className="inputs">
            <p>Business Email</p>
            <input
              type="email"
              placeholder='Enter business email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="inputs">
            <p>Password</p>
            <input
              type="password"
              placeholder='Enter password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <p className='forgot'>Forgot Password?</p>
          <button onClick={handleLogin} className='loginbtn'>Login</button>
        </div>
      </div>
    </section>
  );
}
