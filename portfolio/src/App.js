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
        <div className="App flex flex-col min-h-screen dark:bg-slate-700 dark:text-white">
            <header className="m-4 grid text-center">
                <h1>Chun Ming Jimmy Man</h1>
                <button
                    onClick={handleDarkMode}
                    className=" w-[4rem]  p-2 text-center text-white  bg-blue-900  rounded-lg sm:p-4 sm:flex-shrink"
                >
                    {darkMode ? "Light Mode" : "Dark Mode"}
                </button>
            </header>
            <main className="flex-grow">
                <Router>
                    <div className="main-container md:grid md:grid-cols-3 md:grid-rows-1">
                        <nav className="nav grid justify-items-center md:justify-items-center md:col-span-1 ">
                            <ul>
                                <Link to="/">
                                    <li>
                                        <h3>Home</h3>
                                    </li>
                                </Link>
                                <Link to="/about">
                                    <li>
                                        <h3>About</h3>
                                    </li>
                                </Link>
                                <Link to="/myProjects">
                                    <li>
                                        <h3>Projects</h3>
                                    </li>
                                </Link>
                                <Link to="/contact">
                                    <li>
                                        <h3>Contact</h3>
                                    </li>
                                </Link>
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
            <h2 className="hello">Hello! Welcome to my portfolio</h2>
            <p className="w-4/5 mx-auto md:w-1/2 md:mx-0 ">
                I am Computer Science graduate looking to join the world of web
                development. At the moment, I am seeking work on front end
                development but my goal is to eventually to move into full
                stack.
            </p>
            <h5>Here is my current tech stack:</h5>
            <ul>
                <li>HTML</li>
                <li>CSS and SASS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Python</li>
            </ul>
            <h5>These are what I am currently learning:</h5>
            <ul>
                <li>React Router</li>
                <li>TailwindCSS</li>
                <li>Next.js</li>
            </ul>
            <h5>What I want to learn next...</h5>
            <ul>
                <li>Redux</li>
                <li>Gatsby</li>
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
            <h2>My completed projects </h2>
            <p className="bg-amber-100 dark:bg-yellow-600 w-1/2 mx-auto  py-2 font-bold md:mx-0">
                Click the headings to view the projects
            </p>
            <p className="my-2">
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
            <h3>Email: jimmym620@gmail.com</h3>
            <h3>Phone: (+44) 7587789376</h3>
        </div>
    );
}

export default App;
