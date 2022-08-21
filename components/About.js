import React from 'react';

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">&#10020; About Me &#10020;</h1>
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
                    <br />I am the Lead Product Developer for the BruinLabs
                    TakeScout project team, designing a fully functional food
                    delivery service app. I am also currently an New Student
                    Advisor at UCLA, where I help hundreds of students
                    transition into UCLA.
                </p>

                <div className="about__info__subsection">
                    <h3 className="about__subsection__title">Experience</h3>
                    <p>under construction...&#128736;&#128736;&#128736;</p>
                </div>

                <div className="about__info__subsection">
                    <h3 className="about__subsection__title">
                        Relevent Skills
                    </h3>
                    <div>
                        <h4>Strongest Languages:</h4>
                        <p className="about__skills__container">
                            <span>Javascript</span>
                            <span>Python</span>
                            <span>C++</span>
                            <span>C</span>
                        </p>
                    </div>
                    <div>
                        <h4>Technologies:</h4>
                        <p className="about__skills__container">
                            <span>HTML/CSS</span>
                            <span>SASS</span>
                            <span>React</span>
                            <span>Next</span>
                            <span>Recoil</span>
                            <span>Express/Node.js</span>
                            <span>BootStrap</span>
                            <span>TailWindCSS</span>
                        </p>
                    </div>
                    <div>
                        <h4>Database:</h4>
                        <p className="about__skills__container">
                            <span>SQL</span>
                            <span>Firebase</span>
                            <span>MongoDB</span>
                            <span>PostgreSQL</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
