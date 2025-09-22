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
          Hi there! My name is Anthony Chen, but you can call me Tony! I
          recently graduated from University of California, Los Angeles with a
          B.S. in Computer Science. During my time at UCLA, I developed a strong
          passion for creating impactful technology. My experience spans from
          building fulll-stack web applications as a Software Engineering Intern
          at the{' '}
          <a rel="stylesheet" href="https://eitm.org/">
            <u>Ellison Institute</u>
          </a>{' '}
          to teaching hands-on engineering as an Instructor for UCLA&apos;s
          Autonomous Rover course. I was also actively involved in multiple
          hackathons and numerous project clubs across UCLA.
          <br />
          <br />I am currently pursuing a Master&apos;s in Technology Innovation
          at the University of Washington, focusing on the robotics track.
          Through this program, I aim to expand my skills in product
          prototyping, embbeded programming, robotics, and machine learning.
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
            <ExperienceBlock
              position="left"
              date="June 2023 - September 2024"
              content="I built and maintain business applications to facilitate the daily operations of the research institute. I work closely with cross functional teams including AI engineers, researchers, and project managers. My notible controbutions include a python data upload automation script, an image processing user dashboard, and a project lifecycle tracking application."
              title="Software Engineering Intern"
              company="Ellison Institute of Technology"
              tools={[
                'Python',
                'Next.js',
                'TypeScript',
                'Microsoft',
                'Assana',
                'Oracle',
                'PL/SQL',
              ]}
            />
            <ExperienceBlock
              position="right"
              date="June 2023 - Present"
              content="I designed and taught a hands-on engineering course aimed at equipping early-year engineering students with essential industry skills and foundational engineering principles. Through this course, students gained practical experience in Solidworks, C++ Programming, Circuit Design and Wiring"
              title="E96 Autonomous Rover Instructor"
              company="University of California, Los Angeles"
              tools={['SolidWorks', 'C++']}
            />
            <ExperienceBlock
              position="left"
              date="Feburary 2022 - June 2022"
              content="I performed various website maintenance and global style repair/upgrade for the UCLA school of Anderson."
              title="Web Developer"
              company="UCLA Anderson School of Management"
              tools={['HTML', 'CSS', 'SASS', 'JavaScript', 'Drupal']}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
