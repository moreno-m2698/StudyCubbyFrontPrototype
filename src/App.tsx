
import {Route, Routes, Link } from "react-router-dom";
import Upload from "./routes/Upload";
import Home from "./routes/Home";
// const exampleSong: Track = {
//   title: "Welcome to the Pooh Corner",
//   artist: "Sephiroth",
//   src: "",
//   image_src: "https://cdn.discordapp.com/attachments/709251252311031860/1081072843502125066/Sin.png"
// }

function App() {

    return (
    <>
    
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
    </>
    );

}

export default App;