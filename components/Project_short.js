
const Project_short = (props) => {
    return (
        <div className='project__container'>
            <img
                className="main__intro__project"
                src={props.image}
                alt="amazon clone"
            />
            <p>{props.text}</p>
        </div>
    );
};

export default Project_short;
