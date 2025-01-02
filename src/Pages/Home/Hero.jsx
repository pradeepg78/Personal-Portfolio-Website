export default function Hero() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I am Pradeep</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            Computer Science
                        </span>{" "}
                        <br />
                        Student
                    </h1>
                    <p className="hero--section--description">
                        I am a passionate software engineer with a profound knowledge of JavaScript, React, and Node.js. I love building scalable and efficient applications that deliver outstanding user experiences. I strive to create clean, maintainable code and always eager to learn more.
                        <br /> Please Hire me.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/HS Yearbook Photo.jpg" alt="Hero Section" />
            </div>
        </section>
    );
}