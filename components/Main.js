import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import IconLink from './icons/IconLink';
import Link from 'next/link';
import Project_short from './projects/Project_short';

const phrases = [
    'I am a Full Stack software developer',
    'I love any raquet sports, ESPECIALLY TENNIS',
    'I am passionate about building software',
    'I am a hard core caffeine addict',
    'I LOVE a good bowl of RAMEN',
    'I am horible at speling',
    'I can bench 195lbs , this is not a flex',
    'I wish I can bench 225 lbs',
    'I am currently getting my feet wet with AI !',
    'I enjoy a good game of TENNIS',
    'I did mention I like beach volleyball, right?',
    'I <3 EVERYTHING EVERYWHERE ALL AT ONCE',
    'I am Toe Knee, if you can pronounce it',
    'I am an aspiring brogrammer',
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
                            I am an avid developer and a 3rd year student at UCLA studying Computer
                            Science! I am currently on the hunt for an
                            internship for summer 2024!
                        </p>
                        <div className="main__card__redirect">
                            <Link href="/about">
                                <a className="main__card__button">More</a>
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
                </div>
            </div>
        </>
    );
};

export default Main;
