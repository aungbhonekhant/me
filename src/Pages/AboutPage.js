import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import webdevelopment from '../img/webdevelopment.svg';
import api from '../img/api.svg';

function AboutPage() {
    return (
        <div className="AboutPage">
            <div className="about-me">
                <div className="about-title">
                    <Title title="About Me" span="About Me"/>
                </div>

                <ImageSection/>
            </div>
            
            <div className="my-skill">
                <Title title="My Skills" span="My Skills"/>
                <div className="skillsContainer">
                    <SkillsSection skill="HTML5" progress="90%"/>
                    <SkillsSection skill="CSS" progress="70%"/>
                    <SkillsSection skill="Javascript" progress="70%"/>
                    <SkillsSection skill="Bootstrap" progress="95%"/>
                    <SkillsSection skill="Jquery" progress="60%"/>
                    <SkillsSection skill="Ajax" progress="70%"/>
                    <SkillsSection skill="PHP" progress="70%"/>
                    <SkillsSection skill="Laravel" progress="80%"/>
                    <SkillsSection skill="React Js" progress="70%"/>
                    <SkillsSection skill="Node.Js" progress="75%"/>
                    <SkillsSection skill="Express Js" progress="60%"/>
                    <SkillsSection skill="MongoDb" progress="65%"/>
                    
                </div>
            </div>
            
            <div className="my-services">
                <Title title="Services" span="Services"/>

                <div className="services-container">
                    <ServicesSection image={design} title="Web Design" text="Build the product you need on time with an experienced team that uses a clear and effective design process."/>
                    <ServicesSection image={webdevelopment} title="Web Development" text="I carry more than just good coding skills. My experience makes us stand out from other web development. " />
                    <ServicesSection image={api} title="RestApi" text="API integration and built REST Api for mobile app and front-end development. Speed and secure is my priority." />
                </div>
            </div>
            
        </div>
    )
}

export default AboutPage
