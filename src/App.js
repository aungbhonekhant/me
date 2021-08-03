import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route } from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import PortfoliosPage from './Pages/PortfoliosPage';
// import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import { useEffect, useState } from 'react';
import Loader from './Components/Loader';

function App() {
    const [navToggle, setNavToggle] = useState(false);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => setLoading(false), 2000)
    }, [])

    const navClick = () => {
        setNavToggle(!navToggle);
        setLoading(true);
        setTimeout(() => setLoading(false), 2000)
    }

    return (
        <>
            {loading === false ? (
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
                            <Route exact path="/" exact>
                                <HomePage />
                            </Route>
                            {/* <Route path="/me" exact>
                                <Redirect to="/"/>
                            </Route> */}
                            <Route exact path="/about">
                                <AboutPage />
                            </Route>
                            <Route exact path="/portfolios">
                                <PortfoliosPage />
                            </Route>
                            {/* <Route path="/blogs">
                                <BlogsPage />
                            </Route> */}
                            <Route exact path="/contact">
                                <ContactPage />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            ) : (
                <Loader />
            )}
        </>
    );
}

export default App;
