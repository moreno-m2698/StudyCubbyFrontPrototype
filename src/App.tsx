import { useState } from "react";
import {Route, Routes, Link } from "react-router-dom";
import Upload from "./routes/Upload";
import Home from "./routes/Home";
import {VscThreeBars } from "react-icons/vsc"
import './CSS/app.css'

function App() {
    
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    
    
    return (
    <>
        

        <div id ='app' className='app'>
            <div className="app__main">
                <header className="app__header">
                    <button 
                        id='menu-button'
                        aria-haspopup="true" 
                        aria-expanded={`${isNavbarActive}`}
                        onClick={() => {setIsNavbarActive(!isNavbarActive); console.log(isNavbarActive);}}
                    >
                        <VscThreeBars />
                    </button>
                    <h1 id='app-logo'>
                        App Title
                    </h1>
                    <nav className="app__nav" aria-hidden='true'>
                        {/*ask zach why we can get away without a list and why use a over buttons */}
                        <a className="route-sidebar-button" onClick={() => setIsNavbarActive(false)} aria-hidden='true'>
                            <Link to="/">
                                <h2 className="navigator-tag">Home</h2>
                            </Link>
                        </a>
                        <a className="route-sidebar-button" onClick={() => setIsNavbarActive(false)}  aria-hidden='true'>
                            <Link to="/upload">
                                <h2 className="navigator-tag">Upload</h2>
                            </Link>
                        </a>
                    </nav>
                </header>
                <div className={isNavbarActive ? 'app__navbar nav__bar--active' : "app__navbar"}>
                    
                    
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