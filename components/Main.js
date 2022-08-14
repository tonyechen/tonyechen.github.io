import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import IconLink from './IconLink';
import Link from 'next/link';
import Project from './Project';
import Project_short from './Project_short';

const phrases = [
    'I am a Full Stack software developer',
    'I study Computer Science at UCLA',
    'I am a Web Developer for UCLA Anderson',
    'I am passionate about building software',
    'I love learning new things',
    'I am a hard core caffeine addict',
    'I LOVE a good bowl of RAMEN',
    'I am a horrible speller',
];
const phrases_length = phrases.length;

const Main = () => {
    const [description, setDescription] = useState(
        phrases[0].split(' ').map((word) => {
            return (
                <span key={word} className="special">
                    {word}
                </span>
            );
        })
    );

    useEffect(() => {
        setInterval(() => {
            let phrase =
                phrases[Math.round(Math.random() * phrases_length)] ??
                phrases[0];
            setDescription(
                phrase.split(' ').map((word) => {
                    return (
                        <span key={word + phrase} className="special">
                            {word}
                        </span>
                    );
                })
            );
        }, 5500);
    }, []);

    return (
        <>
            <div className="main">
                <div className="main__card">
                    <div className="main__image">
                        <div className="main__image__wrapper">
                            <Image
                                src="/tony_chen.JPG"
                                width="300"
                                height="300"
                                layout="responsive"
                            ></Image>
                        </div>
                    </div>
                    <div className="main__card__info">
                        <div className="main__card__link_container">
                            <IconLink
                                href="https://www.instagram.com/chen.thonyy/"
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
                            I am a second year student at UCLA studying Computer
                            Science. I am currently an NSA for UCLA NSAP and a
                            Web Developer for UCLA Anderson!
                        </p>
                        <div className="main__card__redirect">
                            <Link href="/about">
                                <a className="main__card__button">More Me!</a>
                            </Link>
                            <Link href="/resume.pdf">
                                <a className="main__card__button">Resume</a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="main__intro">
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
                                image="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                                text="Amazon Clone"
                                link=""
                            />
                            <Project_short
                                image="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
                                text="Amazon Clone"
                                link=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
