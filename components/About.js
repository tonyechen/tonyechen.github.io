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
          graduated from UCLA with a B.S. in Computer Science, where I developed
          a strong passion for building impactful technology — from full-stack
          web applications as a Software Engineering Intern at the{' '}
          <a rel="stylesheet" href="https://eitm.org/">
            <u>Ellison Institute</u>
          </a>{' '}
          to teaching hands-on engineering as the Autonomous Rover course
          instructor. I was also deeply involved in hackathons and project clubs
          across campus.
          <br />
          <br />I am currently pursuing a Master&apos;s in Technology Innovation
          at the University of Washington on the robotics track, and I will be
          joining Google as a Software Engineering Intern this summer. Through my
          graduate program, I am expanding my skills in embedded programming,
          robotics, and machine learning.
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
              date="June 2026 – September 2026"
              content="I will be joining the Geo Map Route Decoration Platform team, working on systems that power map rendering and route visualization at scale."
              title="Software Engineering Intern"
              company="Google"
              tools={['C++']}
            />
            <ExperienceBlock
              position="right"
              date="June 2023 – September 2024"
              content="I built and maintained business applications to facilitate the daily operations of the research institute. Working closely with cross-functional teams including AI engineers, researchers, and project managers, my notable contributions include a Python data pipeline, a computer vision model dashboard, and a project lifecycle tracking application."
              title="Software Engineering Intern"
              company="Ellison Institute of Technology"
              tools={[
                'Python',
                'Next.js',
                'TypeScript',
                'Docker',
                'Nginx',
                'Oracle',
                'REST API',
              ]}
            />
            <ExperienceBlock
              position="left"
              date="September 2023 – June 2025"
              content="I designed and taught a hands-on engineering course equipping early-year students with essential industry skills and foundational engineering principles, including SolidWorks, C++ programming, Arduino, and circuit design and wiring. I instructed 100+ students across two years."
              title="E96 Autonomous Rover Instructor"
              company="University of California, Los Angeles"
              tools={['SolidWorks', 'C++', 'Arduino']}
            />
            <ExperienceBlock
              position="right"
              date="February 2022 – June 2022"
              content="I performed global-styling repairs and code maintenance for the UCLA Anderson School of Management website, and managed the event website for the Riordan Programs Anniversary using responsive web design principles."
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
