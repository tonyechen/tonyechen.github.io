import React from 'react';
import ExperienceBlock from './ExperienceBlock';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const languages = [
  'Javascript',
  'TypeScript',
  'Python',
  'C++',
  'C',
  'HTML/CSS',
  'SASS',
];
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
  'Docker',
];
const databases = ['SQL', 'Firebase', 'MongoDB', 'PostgreSQL', 'Oracle'];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      className="about"
      id="about"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h1 className="about__title">About Me</h1>
      <div className="about__container about__info">
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

        {/* <div className="about__info__subsection">
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
        </div> */}

        <div className="about__info__subsection">
          <h1 className="about__subsection__title">Experience</h1>
          <div className="about__subsection___experience__container">
            <motion.div
              className="experience__bar"
              ref={ref}
              initial={{ height: '0%' }} // Start with 0% width
              animate={isInView ? { height: '100%' } : {}} // Expand to 100% width when in view
              transition={{ duration: 5.0, ease: 'easeInOut' }} // Smooth transition
            />
            <ExperienceBlock position="left" />
            <ExperienceBlock position="right" />
            <ExperienceBlock position="left" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
