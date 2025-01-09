export default function AboutMe() {
    return(
        <section id="AboutMe"  
        className="about--section">
            <div className="about--section--img">
                <img src="./img/logo512.png" alt="About Me" />
            </div>
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content">
                    <p className="section--title">
                        About
                    </p>
                    <h1 className="skills--section--heading">
                        About Me
                    </h1>
                    <p className="hero--section--description">
                        I am a cs major from rpi, i am looking for a job
                    </p>
                    <p className="hero--section--description">
                        im learning ai and langchain, as well as database systems and sql
                    </p>
                </div>
            </div>
        </section>
    )
}