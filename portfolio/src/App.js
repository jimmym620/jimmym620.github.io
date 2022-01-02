import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Timeline from "./Timeline";
import { SocialIcon } from "react-social-icons";
import Projects from "./Projects";
import { useState, useEffect } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);

    const handleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="App flex flex-col min-h-screen bg-gray-200 dark:bg-slate-700 dark:text-white">
            <header className="m-10 grid text-center">
                <h1>Chun Ming Jimmy Man</h1>
                <button
                    onClick={handleDarkMode}
                    className="w-[8rem] p-4 text-center text-white  bg-blue-900  rounded-lg"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </header>
            <main className="flex-grow">
                <Router>
                    <div className="main-container grid grid-cols-3 grid-rows-1">
                        <nav className="nav grid justify-items-center col-span-1">
                            <ul>
                                <li>
                                    <h3>
                                        <Link to="/">Home</Link>
                                    </h3>
                                </li>
                                <li>
                                    <h3>
                                        <Link to="/about">About</Link>
                                    </h3>
                                </li>
                                <li>
                                    <h3>
                                        <Link to="/myProjects">Projects</Link>
                                    </h3>
                                </li>
                                <li>
                                    <h3>
                                        <Link to="/contact">Contact</Link>
                                    </h3>
                                </li>
                            </ul>
                        </nav>
                        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                        <div className="page col-span-2 grid justify-items-start text-left ">
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route
                                    path="/myProjects"
                                    element={<MyProjects />}
                                />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </div>
                    </div>
                </Router>
            </main>

            <footer>
                <p className="bg-blue-500 inline-block align-text-bottom">
                    This site is a work in progress
                </p>
            </footer>
        </div>
    );
}

function Home() {
    return (
        <div>
            <h2 className="">Hello! Welcome to my portfolio</h2>
            <p className="w-1/2">
                I am Computer Science graduate looking to join the world of web
                development. At the moment, I am seeking work on front end
                development but my goal is to eventually to move into full
                stack.
            </p>
            <h5>Here is my current tech stack:</h5>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
            </ul>
            <h5>These are what I am currently learning:</h5>
            <ul>
                <li>SASS</li>
                <li>React Router</li>
                <li>TailwindCSS</li>
            </ul>
            <h5>What I want to learn next...</h5>
            <ul>
                <li>Redux</li>
                <li>Bulma (CSS framework)</li>
                <li>Next.js or Gatsby</li>
            </ul>
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

function MyProjects() {
    return (
        <div>
            <h2>My Projects</h2>
            <p className="bg-amber-100 dark:bg-yellow-600 w-1/2 py-1">
                Click the headings to view the projects
            </p>
            <p>
                {`All of these projects can be viewed on my `} 
                <a
                    href="https://github.com/jimmym620"
                    className="text-blue-600 dark:text-cyan-500 font-bold underline"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </p>
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
