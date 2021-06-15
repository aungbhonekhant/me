import React from 'react';
import Title from '../Components/Title';
import ImageSection from '../Components/ImageSection';
import SkillsSection from '../Components/SkillsSection';
import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gameDev from '../img/game-dev.svg';

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
                    <SkillsSection skill="Javascript" progress="90%"/>
                    <SkillsSection skill="React Js" progress="80%"/>
                    <SkillsSection skill="Node.Js" progress="75%"/>
                    <SkillsSection skill="Express Js" progress="60%"/>
                    <SkillsSection skill="MongoDb" progress="50%"/>
                    <SkillsSection skill="PHP" progress="40%"/>
                    <SkillsSection skill="Laravel" progress="50%"/>
                    <SkillsSection skill="HTML5" progress="70%"/>
                    <SkillsSection skill="CSS" progress="65%"/>
                    <SkillsSection skill="Jquery" progress="60%"/>
                    <SkillsSection skill="Ajax" progress="80%"/>
                </div>
            </div>
            
            <div className="my-services">
                <Title title="Services" span="Services"/>

                <div className="services-container">
                    <ServicesSection image={design} title="Web Design" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at quis maxime ipsam omnis sint."/>
                    <ServicesSection image={intelligence} title="Intelligence" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at quis maxime ipsam omnis sint." />
                    <ServicesSection image={gameDev} title="Game Dev" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique at quis maxime ipsam omnis sint." />
                </div>
            </div>
            
        </div>
    )
}

export default AboutPage
