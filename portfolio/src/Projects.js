import React from "react";
import data from "./projects.json";

const Projects = () => {
    return (
        <div className="project-list">
            {data.map((project, index) => {
                const { id, title, gitLink, link, tag, desc } = project;
                return (
                    <article key={id} className="project">
                        <div>
                            <div className="bg-neutral-300 dark:bg-sky-800 w-1/2 py-2 my-4 md:mx-0 underline">
                                <h3 className="text-center m-0">
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {title}
                                    </a>
                                </h3>
                                <h4 className="text-center m-0">
                                    <a
                                        href={gitLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        GitHub
                                    </a>
                                </h4>
                            </div>

                            <ul className="bg-slate-300 w-1/2 py-1 pl-1 text-center">
                                {tag + " "}
                            </ul>

                            <p className="w-1/2 mx-auto md:mx-0">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Projects;
