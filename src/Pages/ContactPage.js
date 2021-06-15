import React from 'react'
import ContactItem from '../Components/ContactItem';
import Title from '../Components/Title';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';

function ContactPage() {
    return (
        <>
            <div className="contact-title">
                <Title title="Contact Me" span="Contact Me" />
            </div>
            <div className="ContactPage">
                <div className="map-sect">
                    <iframe title="My Address" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.997700291165!2d96.15861131463095!3d16.77679002454349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ec879d6f308f%3A0x27bed7689eb1d0b!2s35%20St%2C%20Yangon%2C%20Myanmar%20(Burma)!5e0!3m2!1sen!2ssg!4v1623523555290!5m2!1sen!2ssg" width="600" height="450" style={{ border:'0' }} allowFullScreen="" loading="lazy"></iframe>
                </div>
                <div className="contact-sect">
                    <ContactItem icon={phone} title="Phone" text1="+95 9776612936" text2="" />
                    <ContactItem icon={email} title="Email" text1="aungbhonekhant.dev@gmail.com" text2="" />
                    <ContactItem icon={location} title="Address" text1="No.176(floor), 35.st(middle), kyauttadar township." text2="Yangon, Myanmar" />
                </div>
            </div>
        </>
    )
}

export default ContactPage
