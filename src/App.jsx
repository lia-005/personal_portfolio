import Hero from "./sections/Hero.js";
import ShowcaseSection from "./sections/ShowcaseSection.js";
import NavBar from "./components/NavBar.jsx"
import LogoSection from "./components/LogoSection.jsx";
import ExperienceSection from "./sections/Experience.js";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.js";
import Footer from "./sections/Footer.js";
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