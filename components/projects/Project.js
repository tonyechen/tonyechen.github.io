import React from "react";

// TODO: expand these to fill the wholon
// include descriptions
// link and stuff
const Project = (props) => {
  return <a className="project__container" href={props.link}>
    <img src={props.image} alt="image" className="project__image"/>
    <p>{props.name}</p>
    <p>{props.description}</p>
  </a>;
};

export default Project;
