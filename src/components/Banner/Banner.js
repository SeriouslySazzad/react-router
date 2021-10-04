import React from 'react';
import bannerImg from '../../images/banner.jpg'
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner">
            <div className="banner-left">
                <h1>Education is the passport to the future, for tomorrow belongs to those who prepare for it today.</h1>
                <button className="btn-regular">Learn More</button>
            </div>
            <div className="banner-right">
                <img src={bannerImg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;