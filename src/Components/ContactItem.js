import React from 'react'

function ContactItem({icon, title, text1, text2}) {
    return (
        <div className="ContactItem">
            <div className="contact">
                <img src={icon} alt={title}/>
                <div className="right-items">
                    <h6>{title}</h6>
                    <p>{text1}</p>
                    <p>{text2}</p>
                </div>
            </div>
        </div>
    )
}

export default ContactItem
