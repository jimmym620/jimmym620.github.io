import React from "react";
import data from "./pages-projects-data";

const Projects = () => {
    return (
        <div className="project-list">
            {data.map((project) => {
                const { id, title, link, tag, desc } = project;
                return (
                    <article key={id} className="project" tag={tag}>
                        <div>
                            <h3 className="  bg-neutral-300 dark:bg-sky-800 w-1/2 text-center py-4 mx-auto my-2 md:mx-0">
                                <a href={link} target="_blank" rel="noreferrer">
                                    {title}
                                </a>
                            </h3>
                            <p className="w-1/2 mx-auto md:mx-0">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Projects;
