import React, { Component } from "react";
import data from "./pages-projects-data";

const Projects = () => {
    return (
        <div className="project-list">
            {data.map((project) => {
                const { id, title, link, tag, desc } = project;
                return (
                    <article key={id} className="project" tag={tag}>
                        <div>
                            <h3 className="border-t-2 border-b-2 border-blue-800 w-1/2 text-center py-1 ">
                                <a href={link} target="_blank" rel="noreferrer">
                                    {title}
                                </a>
                            </h3>
                            <p className="w-1/2">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Projects;
