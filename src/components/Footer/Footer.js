import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h1>The roots of education are bitter, but the fruit is sweet.</h1>
                    <button className="btn-regular">Learn More</button>
                    <h2>FOLLOW US :</h2>
                    <div className="social-icons">
                        <li><i class="fab fa-facebook"></i></li>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                    </div>
                </div>
                <div className="footer-middle">
                    <ul>
                        <Link className="nev-item" to="/home"><li>Home</li></Link>
                        <Link className="nev-item" to="/services"><li>Services</li></Link>
                        <Link className="nev-item" to="/about"><li>About</li></Link>
                        <Link className="nev-item" to="/store"><li>Store</li></Link>
                    </ul>
                </div>
                <div className="footer-right">
                    <h2>CALL US : <i class="fas fa-phone-volume"> +1 8 800 555 35 35</i></h2>
                    <h3>Our Location: 160 Broadway, New York, NY 10038,
                        102 1st Avenue, New York, NY 100.</h3>
                        <hr />
                        <p>Copyright © 2021 Edu-Care.com</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;