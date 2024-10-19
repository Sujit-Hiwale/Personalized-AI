// Layout.js
import React from "react";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const Layout = ({ children }) => {
    return (
        <div className="d-flex">
            <nav className="bg-secondary sidebar d-flex flex-column align-items-center" style={{ width: "120px", height: "100vh" }}>
                <h5 className="text-center mt-3">My App</h5>
                <Link to="/" className="btn btn-dark w-100 mb-2">Home</Link>
                <Link to="#about" className="btn btn-dark w-100 mb-2">About</Link>
                <Link to="/signup" className="btn btn-dark w-100 mb-2">Sign Up</Link>
                <Link to="/login" className="btn btn-dark w-100">Login</Link>
            </nav>
            <div className="main-content" style={{ marginLeft: "120px", padding: "20px", flexGrow: 1 }}>
                {children}
            </div>
        </div>
    );
};

export default Layout;
