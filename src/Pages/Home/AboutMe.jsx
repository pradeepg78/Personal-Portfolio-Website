export default function AboutMe() {
    return(
        <section id="AboutMe"  
        className="about--section">
            <div className="about--section--img">
                <img src="./img/about-me-photo.png" alt="About Me" />
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
                        Hello! I'm Pradeep Giri, a dedicated software engineer based in New York City. I'm currently studying Computer Science with a minor in Finance at Rensselaer Polytechnic Institute, set to graduate in May 2027. My professional experience includes roles as a Software Engineering Fellow at Headstarter and a Tax Intern at PS Business Management, where I honed my skills in algorithms, data structures, and financial statement preparation.                       
                    </p>
                    <p className="hero--section--description">
                        I have developed projects like CApy, a club management software, and Stock Predictor, an AI-driven stock forecasting model. My technical skills include Java, Python, C++, JavaScript, and tools like React.js and Node.js. I'm actively involved in HackRPI and Lambda Chi Alpha fraternity, where I engage in community events and leadership activities.
                    </p>
                    <p className="hero--section--description">
                        Feel free to explore my projects and connect with me on LinkedIn or GitHub. Let's build something amazing together! 
                    </p>
                    {/* <p className="hero--section--description">
                        im learning ai and langchain, as well as database systems and sql. i am good at java python and c++, and i am interested i spftware engineering as well as ml and ai
                    </p> */}
                </div>
            </div>
        </section>
    )
}