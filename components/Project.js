import React from "react";

const Project = (props) => {
  return <a className="project__container" href={props.link}>
    <img src={props.image} alt="image" className="project__image"/>
    <p>{props.name}</p>
    <p>{props.description}</p>
  </a>;
};

export default Project;
