import React, { useState } from 'react';
import Image from 'next/image';
import { useEffect } from 'react';
import IconLink from './IconLink';
import Link from 'next/link';

const phrases = [
    'I am a Full Stack software developer',
    'I study Computer Science at UCLA',
    'I am a Web Developer for UCLA Anderson',
    'I am passionate about building software',
    'I love learning new things',
    'I am a hard core caffine addict',
    'I LOVE a good bowl of RAMEN',
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
                                href="https://www.linkedin.com/in/anthony-chen-84391821a/"
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
                        <p className='main__card__text'>There is a paragraph here, WHAT?????!!!!</p>
                        <Link href="/about">
                            <a className="main__card__redirect">
                                Know more about me
                            </a>
                        </Link>
                        <Link href="/resume.pdf">
                            <a className="main__card__redirect">
                                Checkout my Resume
                            </a>
                        </Link>
                    </div>
                </div>

                <div className="main__intro">
                    <h4>Hi, I'm</h4>
                    <h1>Tony Chen.</h1>
                    <div>
                        <p className="pop-up-texts">{description}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Main;
