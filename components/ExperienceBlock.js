import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const ExperienceBlock = ({
  position,
  title,
  date,
  content,
  tools,
  company,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  console.log(tools);
  return (
    <motion.div
      className={'experience__container ' + position}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <div className="experience__content">
        <p className="experience__date">{date}</p>

        <p>{company}</p>
        <p className='experience__title'>{title}</p>
        <p className="experience__text">{content}</p>

        <div className="experience__tool__container">
          {tools.map((tool) => (
            <span className="experience__tool__span">{tool}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceBlock;
