import Hero from "../Hero";
import MySkills from "../Skills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../Portfolio";
import ContactMe from "../ContactMe";
import Footer from "../Footer";


export default function Home () {
    return (
        <>
            <Hero />
            <MySkills />
            <AboutMe />
            <MyPortfolio />
            <ContactMe />
            <Footer />
        </>
    )
}