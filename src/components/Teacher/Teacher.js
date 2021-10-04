import React from 'react';
import './Teacher.css'

const Teacher = (props) => {
    const {name, img, sallery, gender, subject} = props.teacher;
    
    return (
        <div className="single-teacher">
            <img src={img} alt="" />
            <p>Name: {name}</p>
            <p>Subject: {subject}</p>
            <p>Salary: ${sallery}</p>
            <p>Gender: {gender}</p>
            <button className="read-more-btn">Read More <i class="fas fa-arrow-alt-circle-right"></i> <i class="fas fa-arrow-alt-circle-right"></i></button>
        </div>
    );
};

export default Teacher;