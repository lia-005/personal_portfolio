import Hero from "./sections/Hero.jsx";
import ShowcaseSection from "./sections/ShowcaseSection.jsx";
import NavBar from "./components/NavBar.jsx"
import LogoSection from "./components/LogoSection.jsx";
import ExperienceSection from "./sections/Experience.jsx";
import TechStack from "./sections/TechStack.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
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