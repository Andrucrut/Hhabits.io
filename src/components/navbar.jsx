import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import "./navbar.css";

export const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="menu-toggle">
                <button onClick={toggleMenu}>
                    {menuOpen ? "Hide Menu" : "Show Menu"}
                </button>
            </div>
            <div className={`links ${menuOpen ? "open" : ""}`}>
                <Link to="/" className={location.pathname === "/" ? "active" : ""}>
                    <span>Description</span>
                </Link>
                <Link to="/theory" className={location.pathname === "/theory" ? "active" : ""}>
                    <span>Theory</span>
                </Link>
                <Link to="/habits" className={location.pathname === "/habits" ? "active" : ""}>
                    <span>Habits</span>
                </Link>
                <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
                    <span>Contact</span>
                </Link>
            </div>
            <div className={`right ${menuOpen ? "open" : ""}`}>
                <Link to="/reg" className={location.pathname === "/reg" ? "reg-link active" : "reg-link"}>
                    <AiOutlineUser size={24} />
                    <span>Registration</span>
                </Link>
                <div className="vertical-line"></div>
                <Link to="/login" className={location.pathname === "/login" ? "login-link active" : "login-link"}>
                    <span>Login</span>
                </Link>
            </div>
        </div>
    );
};
