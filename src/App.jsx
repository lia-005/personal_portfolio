import Hero from "./section/Hero.jsx";
import ShowcaseSection from "./section/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx"
import LogoSection from "./components/LogoSection.jsx";
import ExperienceSection from "./section/Experience.jsx";
import TechStack from "./section/TechStack.jsx";
import Contact from "./section/contact.jsx";
import Footer from "./section/Footer.jsx";
const App = () => {
    return (
       <>
       <NavBar/>
       <Hero/>
       <ShowcaseSection/>
        <LogoSection/>
        <ExperienceSection/>
        <TechStack/>
        <Contact/>
        <Footer/>
            </>
    )
}
 
export default App;