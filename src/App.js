import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/Login";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="navbar">
        <div className="navbar-content">
          <Link to="/" className="brand">
            DEV@Deakin
          </Link>
          <input type="text" placeholder="Search..." className="search-input" />
          <Link to="/login" className="nav-link">
            Login
          </Link>
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
