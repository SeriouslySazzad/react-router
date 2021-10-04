import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';
import './Services.css'

const Services = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./allcourse.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div>
            <div className="service">
                <h1>The Services We Provide</h1>
                <h2>This courses are available for you. You can admit on your <br /> favourite course. we will provide you highest learning experience.</h2>
                <div className="service-container">
                    {
                        courses.map(crs => <Course
                            key={crs.key}
                            crs={crs}
                        ></Course>)
                    }
                </div>
                <hr />
            </div>
        </div>
    );
};

export default Services;