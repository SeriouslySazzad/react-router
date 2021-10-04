import React from 'react';

const Course = (props) => {
    const { name, img, fee, seat } = props.crs;
    return (
        <div className="single-course">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="course-setails">
                <p>Course Name: {name}</p>
                <p>Course Fee: ${fee}</p>
                <p>Available Seat : {seat}</p>
                <button className="read-more-btn">Read More <i class="fas fa-arrow-alt-circle-right"></i> <i class="fas fa-arrow-alt-circle-right"></i></button>
            </div>
        </div>
    );
};

export default Course;