import Link from 'next/link';

const Project_short = (props) => {
    return (
        <Link href={props.link}>
            <div className="main__project__container">
                <img
                    className="main__intro__project"
                    src={props.image}
                    alt={props.text}
                />
                <p>
                    <b>{props.text}</b>
                </p>
            </div>
        </Link>
    );
};

export default Project_short;
