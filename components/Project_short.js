import Link from "next/link";

const Project_short = (props) => {
    return (
        <Link href={props.link}>
            <div className="project__container">
                <img
                    className="main__intro__project"
                    src={props.image}
                    alt="amazon clone"
                />
                <p>{props.text}</p>
            </div>
        </Link>
    );
};

export default Project_short;
