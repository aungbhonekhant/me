import React from 'react';
import avatar from '../img/avatar.jpg';
import {NavLink} from 'react-router-dom';

function NavBar({navClick}) {
    return (
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar}
                        alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active" onClick={navClick}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about"  activeClassName="active" onClick={navClick}>
                            About
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/portfolios"  activeClassName="active" onClick={navClick}>
                            Portfolios
                        </NavLink>
                    </li>
                    {/* <li className="nav-item">
                        <NavLink to="/blogs"  activeClassName="active" onClick={navClick}>
                            Blogs
                        </NavLink>
                    </li> */}
                    <li className="nav-item">
                        <NavLink to="/contact"  activeClassName="active" onClick={navClick}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
                <footer className="footer">
                    <p>
                        @2021 All Rights Reserved
                    </p>
                </footer>
            </nav>
        </div>
    )
}

export default NavBar
