import { Link } from "react-router-dom";
import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer-container">
                <div className="footer-content">
                    {/* About Section */}
                    <div className="footer-about">
                        <h2>Podcast Sphere</h2>
                        <p>Your ultimate destination for movies and entertainment!</p>
                        
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h3>Quick Links</h3>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/trending">Trending</Link>
                            </li>
                            <li>
                                <Link to="/bollywood">Bollywood</Link>
                            </li>
                            <li>
                                <Link to="/hollywood">Hollywood</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media Links */}
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="social-icons">
                            <a href="https://www.linkedin.com/in/yashodipjagtap/" className="social-icon">🔗 LinkedIn</a>
                            <a href="https://www.linkedin.com/in/harshal-chavan-b873aa28a/" className="social-icon">🔵 Facebook</a>
                            <a href="#" className="social-icon">🐦 Twitter</a>
                            <a href="https://www.instagram.com/rakesh.kummari_/profilecard/" className="social-icon">📸 Instagram</a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2024 Cinema Sphere. All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
