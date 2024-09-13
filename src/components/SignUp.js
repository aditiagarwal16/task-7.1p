import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'; // Import the auth object from firebase.js
import './SignUp.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Basic validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // If account creation is successful, redirect the user to login
      navigate('/login');
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message);
    }
  };

  return (
    <div className="signup-page">
      <h2>Create a DEV@Deakin Account</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Show error message if any */}
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Create</button>
      </form>
      <div className="login-redirect">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default SignUp;
