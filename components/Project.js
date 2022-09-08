import React from "react";

const Project = (props) => {
  return <div className="project__container">
    <img src={props.image} alt="image" className="project__image"/>
    <p>{props.name}</p>
    <p>{props.description}</p>
  </div>;
};

export default Project;
