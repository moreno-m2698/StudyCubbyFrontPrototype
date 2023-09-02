
import {Route, Routes, Link } from "react-router-dom";
import Upload from "./routes/Upload";
import Home from "./routes/Home";
import { AiOutlineBars } from "react-icons/ai";
import './CSS/appContainer.css'



function App() {
    return (
        
    <>
        

        <div className='app-grid-container'>
            <div className='page-navigator-container'>
                <button className='route-sidebar-button'>
                    <AiOutlineBars />
                </button>
                <nav className="page-navigator ">
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