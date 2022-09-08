import Project from './Project';
import Project_short from './Project_short';

const Projects = () => {
    return (
        <div className="project">
            <h1 className="project__title">Projects</h1>
            <input
                className="project__search__bar"
                type="text"
                placeholder="search..."
            />
            <div className="projects__container">
                <Project
                    image={'/takescout-logo.svg'}
                    name={'TakeScout'}
                    description={'A delivery service app'}
                />
                <Project
                    image={'/bruin-study-logo.png'}
                    name={'Bruin Study'}
                    description={'A student pairing app'}
                />
                <Project
                    image={
                        'http://vagas.aldeia.cc/wp-content/uploads/2021/04/Amazon.jpg'
                    }
                    name={'Amazon clone'}
                    description={'A light weight amazon clone'}
                />
                <Project
                    image={
                        'https://www.pngmart.com/files/22/Spotify-Logo-PNG-Transparent.png'
                    }
                    name={'Spotify Player'}
                    description={'A simple spotify music player'}
                />
            </div>
        </div>
    );
};

export default Projects;
