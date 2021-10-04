import React from 'react';
import './Store.css'
import str1 from '../../images/1.PNG'
import str2 from '../../images/2.png'
import str3 from '../../images/3.png'
import str4 from '../../images/4.jpg'
import str5 from '../../images/5.png'

const Store = () => {
    return (
        <div className="store-container">
            <h1>WHY PEOPLE LIKE OUR COUSES?</h1>
            <h2>LET'S FIND OUT.</h2>
            <div className="store-details">
                <div className="">
                    <img src={str1} alt="" />
                    <h3>Monitoring Students</h3>
                    <p>We have some extraordinary teachers in our institution. They try thier level best to solve each student problems. Students also love their teachers much.</p>
                </div>
                <div className="">
                    <img src={str2} alt="" />
                    <h3>Provide Extra Sheets</h3>
                    <p>After very classes we give some extraordinary sheets to the students so that they can understand every concept so easily. The teachers made sheets.</p>
                </div>
                <div className="">
                    <img src={str3} alt="" />
                    <h3>Examination Tests</h3>
                    <p>After end of any chapter we organize an examination so we understans how much student learn from the classes. The marks we sent to every student gurdians.</p>
                </div>
                <div className="">
                    <img src={str4} alt="" />
                    <h3>Organize Extra Classes</h3>
                    <p>We take class on everyday. But someone miss any classes we will provide them some online classes so that they can cover all the syllabus in proper time. </p>
                </div>
                <div className="">
                    <img src={str5} alt="" />
                    <h3>Proper Guidence</h3>
                    <p>We take class on time. We take exam on time. We care for our students. We try to make them as strong as much as we can. Our teachers also monitors their students.</p>
                </div>
            </div>
        </div>
    );
};

export default Store;