import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Timeline from "./Timeline";
import { SocialIcon } from "react-social-icons";
import Projects from "./Projects";

function App() {
    return (
        <>
            <header>
                <h1>Chun Ming Jimmy Man</h1>
            </header>
            <main>
                <Router basename="/">
                    <div className="main-container">
                        <nav className="navbar">
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
                        <div className="page">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/pages" element={<Pages />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </div>
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
            <h3>Welcome to my portfolio</h3>
            <p>
                A Computer Science graduate looking to join the world of web
                development.
            </p>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About me</h2>

            <h3>My current career timeline</h3>
            <Timeline />
        </div>
    );
}

function Pages() {
    return (
        <div>
            <h2>My Pages</h2>
            <h4>Here is a list of some projects I have created so far:</h4>
            <Projects />
        </div>
    );
}
function Contact() {
    return (
        <div>
            <h2>Contact me</h2>
            <div className="icon-container">
                <SocialIcon
                    url="https://github.com/jimmym620"
                    target="_blank"
                />
                <SocialIcon
                    url="https://www.linkedin.com/in/chun-ming-jimmy-man"
                    target="_blank"
                />
                <SocialIcon
                    url="https://discordapp.com/users/175963962003685376"
                    target="_blank"
                />
            </div>
        </div>
    );
}

export default App;
