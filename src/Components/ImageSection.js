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
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis soluta qui sapiente, 
                                        quis excepturi perspiciatis eveniet dolores id perferendis adipisci rerum repellendus 
                                        nam nobis beatae natus placeat veniam quisquam eum.
                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>
                        <p>Phone</p>
                    </div>
                    <div className="right-section">
                        <p>: Aung Bhone Khant</p>
                        <p>: {age}</p>
                        <p>: Burmese</p>
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
