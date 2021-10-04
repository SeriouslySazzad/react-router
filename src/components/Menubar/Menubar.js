import React from 'react';
import './Menubar.css'
import { Link } from "react-router-dom";

const Menubar = () => {
    return (
        <div className="menubar">
            <div className="navbar">
                <div className="">
                    <Link to="/home" className="logo items">
                        <li>Edu-Care</li>
                    </Link>
                </div>
                <div className="nav-items">
                    <ul>
                        <Link to="/home" className="items">
                            <li>Home</li>
                        </Link>
                        <Link to="/services" className="items">
                            <li>Services</li>
                        </Link>
                        <Link to="/about" className="items">
                            <li>About</li>
                        </Link>
                        <Link to="/store" className="items">
                            <li>Store</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menubar;