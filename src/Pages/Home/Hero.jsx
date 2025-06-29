import { Link } from "react-scroll";

export default function Hero() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I am Pradeep</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            CS + FINANCE
                        </span>{" "}
                        <br />
                        AI, ML, AND DATA
                    </h1>
                    <p className="hero--section--description">
                        I am a very ambitious software developer with a unique background that has prepared me to be a team player who communicates effectively, faces problems analytically and has the technical skills to tackle any challenge.
                        <br /> 
                        <br />
                        I love building scalable and efficient applications that deliver outstanding user experiences. I strive to create clean, maintainable code and am always eager to learn more.
                    </p>
                </div>
                <Link
                    activeClass="navbar--active-content"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    to="Contact"
                    className="btn btn-primary"
                >
                    Get In Touch
                </Link>
            </div>
            <div className="hero--section--img">
                <img src="./img/yearbook-photo.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}