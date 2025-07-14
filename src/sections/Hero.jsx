


import Button from "../components/Button.jsx";
import { words } from '../constants/index.js';
import HeroExperience from "../components/Models/HeroModels/HeroExperience.jsx"
import {useGSAP} from "@gsap/react"
import  gsap  from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
const Hero = () => {
    useGSAP(()=>{
gsap.fromTo(".hero-text h1",
    {
        y:50,
        opacity:0
    },

 { y: 0, opacity: 1, stagger: 0.2, duration:1.5, ease: "power2.inOut"}
)
    })
    return (
        <section id='hero' className='relative overflow-hidden' >
            <div className='absolute top-0 left-0 z-10'>
                <img src="public/assets/images/bg.png" alt="background" />
            </div>
            <div className='hero-layout' >
                {/*Left hero content*/}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5 '>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>

                            <h1>
                                I'm a
                                <span className='slide '>
                                    <span className='wrapper'>
                                        {words.map((word) => (
                                            <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                <img
                                                    src={word.imgPath}
                                                    alt={word.text}
                                                    className='xl:size-12 md:size-10 size-7 md:p-1 p-2 rounded-full bg-white-50' />
                                                    <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            
                            <h1>Welcom to</h1>
                            <h1>MY PORTFOLIO</h1>
                            </div>
                            <p className='text-white-50 text-sm md:text-sm relative z-10 pointer-events-none'>
                                Hey there! I'm Dipannita — a developer compiling passion into every line of code I write.
                                </p>
                                <Button className="  px-1 py-2 text-base md:w-60 md:h-20 w-60 h-12" 
                                id="counter"
                                text="See my work" />
                        

                    </div>
                </header>
                {/*Right hero content*/}
<figure>
    <div className='hero-3d-layout '>
        <HeroExperience/>
    </div>
</figure>
            </div>
            <AnimatedCounter/>
        </section>
    )
}
export default Hero;