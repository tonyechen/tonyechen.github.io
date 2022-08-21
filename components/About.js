import React from 'react';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">About Tony</h1>
            <div className="about__container about__info">
                <div className="about__info__pic">
                    <img src="/tony-chen-ucla.JPG" alt="eww pic of tony" />
                </div>

                <p className="about__info__content">
                    Hello! My name is Anthony Chen, but you can call me Tony! I
                    am a second-year at UCLA studying Computer Science.
                    <br />
                    <br />
                    My current interest is building full-stack web applications,
                    but I love to explore other fields of CS as well: data
                    analytics, mobile development, machine learning, operating
                    system, cloud computing, game development, computer
                    graphics, you name it!
                    <br />
                    <br />
                    I am the Lead Product Developer for the BruinLabs
                    TakeScout project team, designing a fully functional food
                    delivery service app. I am also currently an New Student
                    Advisor at UCLA, where I help hundreds of students
                    transition into UCLA.
                </p>
            </div>

            <hr />

            <h1 className="about__title">Experience</h1>
            <div className="about__container about__experience">
                Things that I&apos;ve been doing...
            </div>
        </div>
    );
};

export default About;
