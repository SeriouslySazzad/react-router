import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="App not-found">
            <h1>OPPPPS !!</h1>
            <h1>404</h1> 
            <h2>THE PAGE YOU ENTERED IT IS NOT DEFINED. <br /> WRITE THE URL CAREFULLY</h2>
            <Link to="/home"><button className="btn-regular">CLICK HERE TO GO HOMEPAGE</button></Link>
            
        </div>
    );
};

export default NotFound;