import aboutImg from '../assets/images/about-img.png'
import { motion } from "framer-motion"
const About = () => {
    const info = [
        { text: 'Years Experience', count: '01' },
        { text: 'Completed Projects', count: '12' },
        { text: 'Companies Work', count: '02' },
    ]
    return (
        <section id="about" className="py-10">
            <div className="text-center mt-8">
                <h3 className="text-4xl font-semibold">
                    About<span className="text-cyan-600"> Me</span>
                </h3>
                <p className="text-gray-500 my-3 text-lg">My Introduction</p>
                <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
                    <div className='p-2'>
                        <div className="text-gray-300 my-3">
                            <p className='text-justify leading-7 w-11/12 mx-auto'>
                                I am a Front-End Developer specializing in building (and occasionally designing)
                                exceptional digital experiences. Currently,
                                I am focused on building responsive Front-End Developer.
                            </p>
                            <div className="flex mt-10 items-center gap-7">
                                {
                                    info.map(content => (
                                        <div key={content.text}>
                                            <h3 className="md:text-4xl text-2xl font-semibold text-white">{content.count}<span className="text-cyan-600">+</span></h3>
                                            <span className='md:text-base text-xs'>{content.text}</span>
                                        </div>
                                    ))
                                }
                            </div>
                            <a href="https://drive.google.com/file/d/1yuOwTYkrI5ttyZ6p-0W14TfM3IKR4FyG/view">
                                <button className="btn-primary mt-8">Download Resume</button>
                            </a>
                        </div>
                    </div>
                    <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">

                        <motion.div
                            animate={{
                                scale: [1, 1, 1, 0, 1],
                                rotate: [0, 0, 360, 360, 0],
                                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
                                <img src={aboutImg} alt="" className='w-full object-cover bg-cyan-600 rounded-xl h-full hover:rotate-12 hover:delay-300 transition' />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;