import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import IconLink from './icons/IconLink';
import Link from 'next/link';
import Project_short from './projects/Project_short';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const phrases = [
    'Here are some fun facts about me !',
    'My favorite hobby is hating on pickleball',
    'I am passionate about building software',
    'I am a hard core caffeine addict',
    'I love a good bowl of ramen',
    'I am horible at speling',
    'I can bench 215lbs',
    'I can deadlift 365lbs',
    'I enjoy some actions on the tennis court',
    'I live in the gym',
    'I <3 Everything Everywhere All At Once',
    'I am Toe Knee, if you can pronounce it',
    'I own a pair of shark slides',
    'My favorite marvel hero is Tony Stark',
    "I was on 2 dance teams at UCLA",
    'I am currently learning about robotics',
    "I lived in China for 11 years of my life",
    'My drink of choice is a long island iced tea',
    'I achieved elite smash on Pac Man in Smash Bros'
];
const phrases_length = phrases.length;

const Main = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [description, setDescription] = useState(
        phrases[0].split(' ').map((word, index) => {
            return (
              <span key={word + index} className="special">
                {word}
              </span>
            );
        })
    );

    useEffect(() => {
        phrases.shift();
        const intervalId = setInterval(() => {
            let phrase =
                phrases[Math.round(Math.random() * phrases_length)] ??
                phrases[0];
            setDescription(
                phrase.split(' ').map((word, index) => {
                    return (
                        <span key={word + phrase + index} className="special">
                            {word}
                        </span>
                    );
                })
            );
        }, 5500);
        
        return () => clearInterval(intervalId)
    }, []);

    return (
      <>
        <div className="main">
          <motion.div
            className="main__card"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 0.7,
            }}
          >
            <div className="main__image">
              <div className="main__image__wrapper">
                <Image
                  src="/tony-chen-main.JPG"
                  width="300"
                  height="300"
                  layout="responsive"
                ></Image>
              </div>
            </div>
            <div className="main__card__info">
              <div className="main__card__link_container">
                <IconLink
                  href="https://www.instagram.com/chen.thony/"
                  class="main__card__links"
                  img="/instagram.svg"
                  alt="instagram"
                />
                <IconLink
                  href="https://github.com/tonyechen"
                  class="main__card__links"
                  img="/github.svg"
                  alt="github"
                />
                <IconLink
                  href="https://www.linkedin.com/in/anthony-tony-chen/"
                  class="main__card__links"
                  img="/linkedin.svg"
                  alt="linkedin"
                />
                <IconLink
                  href="https://mail.google.com/mail/u/0/?fs=1&to=anchen082016@gmail.com&tf=cm"
                  class="main__card__links"
                  img="/email.svg"
                  alt="email"
                />
              </div>
              <p className="main__card__text">
                I am a recent UCLA CS graduate and a current master&apos;s
                student at UW GIX on the robotics track. I am
                currently seeking internship opportunities for Summer 2026!
              </p>
              <div className="main__card__redirect">
                <Link href="/resume.pdf">
                  <a className="main__card__button">&#x21f1; Resume</a>
                </Link>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="main__intro"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 0.7,
            }}
          >
            <div className="main__intro__text">
              <h4>Hi, I&apos;m</h4>
              <h1>Tony Chen.</h1>
              <div>
                <p className="pop-up-texts">{description}</p>
              </div>
            </div>

            <div className="main__intro__feature__projects">
              <h4>Featured Projects:</h4>
              <div className="main__intro__projects">
                <Project_short
                  image="/bruin-study-logo.png"
                  text="Bruin Study"
                  link="/projects/#bruin-study"
                />
                <Project_short
                  image="/takescout-logo.svg"
                  text="TakeScout"
                  link="/projects/#takescout"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </>
    );
};

export default Main;
