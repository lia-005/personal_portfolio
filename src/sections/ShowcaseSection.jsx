import react from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);


    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100'
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 2, }
        )

    }, {});
    return (
        <section id='work' ref={sectionRef} className='app-showcase'>
            <div className='w-full'>
                <div className='showcaselayout'>
                    {/*left*/}
                    <div className="w-full p-4" ref={project1Ref}>
                        <div className="w-full h-48 md:h-64 lg:h-80 xl:h-100 bg-gray-200 rounded-xl overflow-hidden">
                            <img
                                src="assets/public/images/project1.png"
                                alt="Netflix_Clone"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className=' text-content'>
                            <h2>A Netflix_Clone built with HTML & CSS to Master the Fundamentals</h2>
                            <p className='text-white-50 md:text-xl'>This is a simple web-based clone of the Netflix homepage created using HTML and CSS. It's designed to give you the feel of the real Netflix site but without any actual functionality like login or video playing. This is just the design (UI).
                                <p>
                                    <a className='underline font-bold text-blue-500' href="https://netflixclone-phi-one.vercel.app/">  Livelink</a>
                                </p>
                            </p>
                        </div>
                    </div>
                    {/*right*/}
                    <div className='project-list-wrapper overflow-hidden'>
                        <div className='project' ref={project2Ref} >
                            <div className='image-wrapper'>
                                <video src="assets/public/images/project2_vd.mp4" autoPlay muted loop alt="Flora"></video>
                                <h2>Flora- Flower CSS Model</h2>
                                <p className='underline font-bold text-blue-500' ><a href="https://github.com/lia-005/Flora">Github</a></p>

                            </div>
                        </div>

                        <div className='project' ref={project3Ref}>
                            <div className='image-wrapper'>
                                <video src="assets\public\images\project3_vd.mp4" autoPlay muted loop alt="Pause-UI Model"></video>
                                <h2>Pause UI-Model of a game</h2>
                                <p className='underline font-bold text-blue-500' ><a href="https://github.com/lia-005/CSS-Animation">Github </a>  </p>
                            </div>
                        </div>
                    </div></div>
            </div>
        </section>
    )
}
export default ShowcaseSection;