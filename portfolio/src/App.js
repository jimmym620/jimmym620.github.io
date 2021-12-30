import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <>
            <header>
                <h1>Chun Ming Jimmy Man</h1>
            </header>
            <main>
                <Router>
                    <div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/pages">Pages</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </nav>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/pages" element={<Pages />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    </div>
                </Router>

                <article className="current-page"></article>
                <div className="socialBtns"></div>
            </main>
        </>
    );
}

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Pages() {
    return (
        <div>
            <h2>My Pages</h2>
        </div>
    );
}
function Contact() {
    return (
        <div>
            <h2>Contact me</h2>
        </div>
    );
}

export default App;
