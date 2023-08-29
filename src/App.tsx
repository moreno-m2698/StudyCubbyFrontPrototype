
import {Route, Routes, Link } from "react-router-dom";
import Upload from "./routes/Upload";
import Home from "./routes/Home";



function App() {

    const test = false;

    return (
        
    <>
        
        {(!test) ? <div className='navigation'>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/upload">upload</Link>
                </li>
            </ul>
        </nav>

        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/upload" element={<Upload />}/>
        </Routes >
        </div>
        : null }
        
    </>
    );

}

export default App;