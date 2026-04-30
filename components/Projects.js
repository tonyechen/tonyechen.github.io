import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Project from './projects/Project';

const projects = [
  // Software
  {
    name: 'Autocreator',
    category: 'software',
    description: 'A web app that lets you generate and schedule social media content across platforms from a single dashboard. Powered by a microservices backend with async content workers.',
    tools: ['Next.js', 'Node.js', 'AWS Lambda', 'SQS', 'S3', 'Python', 'OAuth'],
  },
  {
    name: 'LeoFitness',
    category: 'software',
    description: 'The backend for a React Native fitness app where users can build workout plans and log activities. Built for UCLA Creative Labs.',
    tools: ['React Native', 'MongoDB', 'Express.js', 'AWS Elastic Beanstalk', 'SwaggerUI'],
  },
  {
    name: 'Hitchhiker',
    category: 'software',
    description: 'An AI travel companion that generates personalized day-by-day trip itineraries based on your preferences. Built at LA Hacks.',
    tools: ['TypeScript', 'Next.js', 'Firebase', 'OpenAI API', 'Figma'],
  },
  {
    name: 'Bruin Study',
    category: 'software',
    description: 'A matchmaking app for UCLA students to find compatible study partners by subject and availability.',
    tools: ['PostgreSQL', 'Express.js', 'React', 'Node.js', 'Heroku'],
    link: 'https://github.com/tonyechen/bruin-study',
  },
  // Robotics
  {
    name: 'Autonomous Cinematography Robot',
    category: 'robotics',
    description: 'A TurtleBot3 that autonomously tracks and films a moving subject in real time using YOLO object detection, a PID servo camera controller, and LiDAR-based obstacle avoidance.',
    tools: ['ROS2', 'Python', 'YOLO', 'LiDAR', 'Nav2', 'SLAM', 'Gazebo', 'Docker'],
  },
  {
    name: 'Autonomous Maze Navigation',
    category: 'robotics',
    description: 'A TurtleBot4 that maps an unknown maze, locates ArUco fiducial markers, and navigates autonomously to a precision docking target',
    tools: ['ROS2', 'SLAM Toolbox', 'Nav2', 'OpenCV', 'ArUco', 'Gazebo', 'Docker'],
  },
  {
    name: 'Human-in-the-Loop Robot Control',
    category: 'robotics',
    description: 'A custom wireless robot vehicle paired with a handheld ESP32 controller. The robot drives autonomously but a human can take over steering at any time via BLE.',
    tools: ['ESP32', 'C++', 'BLE UART', 'CircuitPython', 'PWM', 'L298N', 'ADXL345'],
  },
];

const filters = ['all', 'software', 'robotics'];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const visible = projects.filter(p => filter === 'all' || p.category === filter);

  return (
    <motion.div
      className="project"
      id="projects"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h1 className="project__title">Projects</h1>
      <div className="project__filter">
        {filters.map(f => (
          <button
            key={f}
            className={`project__filter__btn${filter === f ? ' active' : ''}`}
            onClick={() => setFilter(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>
      <motion.div className="projects__container" layout transition={{ duration: 0.3, ease: 'easeInOut' }}>
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.div
              key={p.name}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.15 } }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{ width: '100%' }}
            >
              <Project
                name={p.name}
                description={p.description}
                tools={p.tools}
                link={p.link}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
