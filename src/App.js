import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/Login";
import { auth } from './firebase'; // Import Firebase auth
import { signOut } from 'firebase/auth'; // Import signOut
import SignUp from "./components/SignUp";
import "./App.css";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!user);
    });

    return () => unsubscribe(); 
  }, []);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log('User logged out');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-content">
          <Link to="/" className="brand">
            DEV@Deakin
          </Link>
          <input type="text" placeholder="Search..." className="search-input" />
          {!isLoggedIn ? (
          <Link to="/login"><button onClick={handleLogout}>Logout</button></Link>
        ) :(<div></div>)}
        </div>
      </div>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
