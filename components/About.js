import React from 'react';
import ExperienceBlock from './ExperienceBlock';

const languages = ['Javascript', 'TypeScript', 'Python', 'C++', 'C', 'HTML/CSS', 'SASS'];
const technologies = [
  'React',
  'React Native',
  'Next',
  'Recoil',
  'Redux',
  'Express/Node.js',
  'BootStrap',
  'TailWindCSS',
  'Selenium',
  'Git',
  'AWS',
  'Docker'
];
const databases = ['SQL', 'Firebase', 'MongoDB', 'PostgreSQL', 'Oracle'];

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">About Me</h1>
      <div className="about__container about__info">
        <div className="about__info__pic">
          <img src="/tony-chen-professional.JPG" alt="eww pic of tony" />
        </div>

        <p className="about__info__content">
          Hello! My name is Anthony Chen, but you can call me Tony! I am a 3rd
          year at UCLA studying Computer Science.
          <br />
          <br />
          My current interest is building full-stack web applications, but
          I&apos;m actively exploring other fields of CS as well: embedded
          system, data analytics, mobile development, machine learning,
          operating system, cloud computing, computer graphics, you name it!
          <br />
          <br />I am currently an Intern at{' '}
          <a rel="stylesheet" href="https://eitm.org/">
            <u>Ellison Institute</u>
          </a>{' '}
          working on business software. I am also an Instructor at UCLA for
          Autonomous Rover.
        </p>

        <div className="about__info__subsection">
          <h3 className="about__subsection__title">Relevent Skills</h3>
          <div>
            <h4>Strongest Languages:</h4>
            <p className="about__skills__container">
              {languages.map((item) => {
                return <span key={item}>{item}</span>;
              })}
            </p>
          </div>
          <div>
            <h4>Technologies:</h4>
            <p className="about__skills__container">
              {technologies.map((item) => {
                return <span key={item}>{item}</span>;
              })}
            </p>
          </div>
          <div>
            <h4>Database:</h4>
            <p className="about__skills__container">
              {databases.map((item) => {
                return <span key={item}>{item}</span>;
              })}
            </p>
          </div>
        </div>

        <div className="about__info__subsection">
          <h3 className="about__subsection__title">Experience</h3>
          <p>under construction...&#128736;&#128736;&#128736;</p>
          <ExperienceBlock></ExperienceBlock>
        </div>
      </div>
    </div>
  );
};

export default About;
