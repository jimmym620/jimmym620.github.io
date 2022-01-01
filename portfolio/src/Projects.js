import React, { Component } from 'react'
import data from './pages-projects-data'

const Projects = () => {
    return ( 
        <div className="project-list">
            {data.map((project) => {
                const { id, title, link, tag, desc } = project;
                return (
                    <article key={id} className="project" tag={tag}>
                        <div>
                            <h3><a href={link}>{title}</a></h3>
                            <p>{desc}</p>

                        </div>
                    </article>
                    )
            })}
        </div>
     );
}
 
export default Projects;