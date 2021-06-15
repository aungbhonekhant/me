import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
// import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faTwitter} from '@fortawesome/free-brands-svg-icons';
import {faTelegram} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import TypeWriterEffect from 'react-typewriter-effect';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am  &nbsp;
                    <span>
                        <span>A</span>
                        <span>u</span>
                        <span>n</span>
                        <span>g</span>
                        &nbsp;
                        <span>K</span>
                        <span>h</span>
                        <span>a</span>
                        <span>n</span>
                        <span>t</span>
                        <span></span>
                    </span>
                </h1>
                <TypeWriterEffect
                    textStyle={{fontSize:'1.2rem', textAlign: 'center', fontWeight: 'normal', marginBottom: '1rem'}}
                    startDelay={100}
                    cursorColor="#aff806"
                    text="I am a fullstack developer for 2 year experienced.Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora magni similique cupiditate
                    fuga iusto perspiciatis ipsa minus inventore non natus, sit animi magnam eaque eveniet maiores,
                    quo saepe earum ab? Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, tempora 
                    similique! Porro explicabo atque provident. Quasi est accusantium perspiciatis quam assumenda 
                    voluptates beatae veritatis? Et fugiat velit rerum error eius."
                    typeSpeed={50}
                    // scrollArea={myAppRef}
                />

                
                <div className="icons">
                    <Link className="icon-holder fb" to="https://www.facebook.com/winthtet.monkey/">
                        <div className="tooltip">Facebook</div>
                        <FontAwesomeIcon icon={faFacebook} className="icon"/>
                    </Link>
                    <Link className="icon-holder gh" to="https://github.com/aungbhonekhant/">
                        <div className="tooltip">Github</div>
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </Link>
                    <Link className="icon-holder  tw" to="https://twitter.com/AungKha16650025">
                        <div className="tooltip">Twitter</div>
                        <FontAwesomeIcon icon={faTwitter} className="icon"/>
                    </Link>
                    {/* <Link className="icon-holder  yt" to="https://toutube.com">
                        <div className="tooltip">Youtube</div>
                        <FontAwesomeIcon icon={faYoutube} className="icon"/>
                    </Link> */}
                    <Link className="icon-holder tg" to="https://t.me/aungkhant1319">
                        <div className="tooltip">Telegram</div>
                        <FontAwesomeIcon icon={faTelegram} className="icon"/>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
