import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route, Redirect } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
// import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useState } from 'react';

function App() {
    const [navToggle, setNavToggle] = useState(false);

    const navClick = () => {
        setNavToggle(!navToggle);
    }

    return (
        <div className="App">
            <div className={`sidebar ${ navToggle ? 'nav-toggle' : '' }`}>
                <NavBar navClick={navClick} />
            </div>
            <div className="nav-btn" onClick={navClick}>
                <div className="lines-1"></div>
                <div className="lines-2"></div>
                <div className="lines-3"></div>
            </div>
            <div className="main-content">
                <div className="content">
                    <Switch>
                        <Route path="/" exact>
                            <HomePage />
                        </Route>
                        <Route path="/me" exact>
                            <Redirect to="/"/>
                        </Route>
                        <Route path="/about">
                            <AboutPage />
                        </Route>
                        <Route path="/portfolios">
                            <PortfoliosPage />
                        </Route>
                        {/* <Route path="/blogs">
                            <BlogsPage />
                        </Route> */}
                        <Route path="/contact">
                            <ContactPage />
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}

export default App;
