import React, { useEffect, useState } from 'react';
import Teacher from '../Teacher/Teacher';
import './About.css'

const About = () => {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetch('./teachers.JSON')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, [])
    return (
        <div>
            <div className="about-contaniner">
                <h1>ABOUT US</h1>
                <h2>OUR TOP TEACHERS ARE :</h2>
                <div className="teachers-container">
                    {
                        teachers.map(teacher => <Teacher
                            key={teacher.id}
                            teacher={teacher}
                        ></Teacher>)
                    }
                </div>
            </div>
        </div>
    );
};

export default About;