import React, { useEffect, useState } from 'react';
import RatedCourse from '../RatedCourse/RatedCourse';
import './Service.css'

const Service = () => {
    const [course, setCourse] = useState([]);

    useEffect(() => {
        fetch('./courses.JSON')
            .then(res => res.json())
            .then(data => setCourse(data))
    }, [])
    return (
        <div className="service">
            <h1>Services</h1>
            <h2>Our Top Rated Courses :</h2>
            <div className="service-container">
                {
                    course.map(crs => <RatedCourse
                        key={crs.key}
                        crs={crs}
                    ></RatedCourse>)
                }
            </div>
            <hr />
        </div>
    );
};

export default Service;