import React from 'react';
import {useEffect, useState} from 'react';
import about from '../img/about1.jpg';
import cv from '../Cv/AungBhoneKhant.pdf';
import {Link} from 'react-router-dom';

function ImageSection() {
    const [age, setAge] = useState();
    const getYear = () => setAge(new Date().getFullYear() - 1996)


    useEffect(() => {
        getYear();
    }, [])
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about}
                    alt=""/>
            </div>
            <div className="about-info">
                <h4>I am
                    <span> Aung Khant</span>
                </h4>
                <p className="about-text">
                    I have been performing as a Full-Stack web developer for 2 years and am still in the process of gaining more experiences through more years. My educational background possesses a Diploma in Web Development. Some effective on-job training makes me more skilled in this field to work in any circumstances. I graduated from Dagon University with a degree in B.A Archeology.
                    I am passionate about websites and back-end coding. I like to play with codes and results in the best output from my work. 
                    Also, I have experienced in Accounting. I got the LCCI 3 diploma. I worked as a Junior accountant for two years.
                    I spend my free time playing games and music, watching movie series, and enjoying time with friends and family.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Phone</p>
                    </div>
                    <div className="right-section">
                        <p>: Aung Bhone Khant</p>
                        <p>: {age}</p>
                        <p>: Myanmar, English</p>
                        <p>: Yangon, Myanmar</p>
                        <p>: +95 9776612936</p>
                    </div>
                </div>
                <Link to="/contact" className="btn">
                    Contact Me
                </Link>
                <a href={cv} download className="btn-download-cv">
                    Download CV
                </a>
            </div>
        </div>
    )
}

export default ImageSection
