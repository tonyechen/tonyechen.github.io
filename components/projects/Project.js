import React from "react";

const Project = ({ name, description, tools, link }) => {
  const inner = (
    <>
      <p className="project__name">{name}</p>
      <p className="project__description">{description}</p>
      <div className="project__tools">
        {tools.map(t => <span key={t} className="experience__tool__span">{t}</span>)}
      </div>
    </>
  );
  return link
    ? <a className="project__container" href={link} target="_blank" rel="noreferrer">{inner}</a>
    : <div className="project__container">{inner}</div>;
};

export default Project;
