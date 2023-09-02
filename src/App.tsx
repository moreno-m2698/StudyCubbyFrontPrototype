import { useState } from "react";
import {Route, Routes, Link } from "react-router-dom";
import Upload from "./routes/Upload";
import Home from "./routes/Home";
import { AiOutlineBars } from "react-icons/ai";
import './CSS/appContainer.css'
import './CSS/routeButton.css'


function App() {
    
    const [isNavbarActive, setIsNavbarActive] = useState(false);
    
    
    return (
    <>
        

        <div className='app-grid-container'>
            <div className='page-navigator-container app-grid-container-1'>
                <button 
                    className='route-sidebar-button'
                    aria-label="Expand navigation bar"
                    onClick={() => {setIsNavbarActive(!isNavbarActive); console.log(isNavbarActive);}}
                >
                    <AiOutlineBars />
                </button>
                <nav className={isNavbarActive ? "page-navigator active" : "page-navigator"}>
                    <ul>
                        <li >
                            <Link to="/">
                                <h2 className="navigator-tag">Home</h2>
                            </Link>
                        </li>
                        <li>
                            <Link to="/upload">
                                <h2 className="navigator-tag">Upload</h2>
                            </Link>
                        </li>
                    </ul>
                </nav>
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