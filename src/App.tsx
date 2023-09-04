import { useState } from "react";
import {Route, Routes, Link } from "react-router-dom";
import Upload from "./routes/Upload";
import Home from "./routes/Home";
import {VscThreeBars } from "react-icons/vsc"
import './CSS/app.css'
// import './CSS/appContainer.css'
// import './CSS/routeButton.css'


function App() {
    
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    
    
    return (
    <>
        

        <div id ='app' className='app'>
            <div className="app__main">
                <header className="app__header">
                    <button 
                        id='menu-button'
                        aria-label="Expand navigation bar"
                        onClick={() => {setIsNavbarActive(!isNavbarActive); console.log(isNavbarActive);}}
                    >
                        <VscThreeBars />
                        
                    </button>
                    <h1>
                        App Title
                    </h1>
                </header>
                <div className={isNavbarActive ? 'app__navbar nav__bar--active' : "app__navbar"}>
                    
                    <nav className={isNavbarActive ? "nav__bar__nav--active" : "nav__bar__nav"}>
                        <ul className='nav__list'>
                            <li className='list__item'>
                                <button className="route-sidebar-button" onClick={() => setIsNavbarActive(false)}>
                                    <Link to="/">
                                        <h2 className="navigator-tag">Home</h2>
                                    </Link>
                                </button>
                            </li>
                            <li>
                                <button className="route-sidebar-button" onClick={() => setIsNavbarActive(false)}>
                                    <Link to="/upload">
                                        <h2 className="navigator-tag">Upload</h2>
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>

            

            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/upload" element={<Upload />}/>
            </Routes >
        </div>

        
    </>
    );

}

export default App;