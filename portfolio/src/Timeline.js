import React, { Component } from "react";
import timeline from "./abt-timeline-data";

const Timeline = () => {
    return (
        <div className="timeline-list">
            {timeline.map((item) => {
                const { id, heading, yearsBetween, desc } = item;
                return (
                    <article key={id}>
                        <div>
                            <h4>{yearsBetween}</h4>
                            <h5>{heading}</h5>
                            <p className="my-3">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
};

export default Timeline;
