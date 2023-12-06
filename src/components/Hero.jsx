import hero from '../assets/images/profile-bg2-.png'
import Typical from 'react-typical'
import { FaHome } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { GiSkills } from 'react-icons/gi';
import { GrProjects } from 'react-icons/gr';
import { Link } from 'react-scroll';
import { motion } from "framer-motion"


const Hero = () => {
    const social_media = [
        { icons: 'logo-facebook', name: 'https://www.facebook.com/kamruzzaman.joy.63/' },
        { icons: 'logo-linkedin', name: 'https://www.linkedin.com/in/jamalhossen/' },
        { icons: 'logo-github', name: 'https://github.com/kamruzzaman22874' },
    ]
    return (
        <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay: .5, duration: 1.5}}
        >
            <section id="home" className="relative min-h-screen flex py-10 md:flex-row flex-col items-center my-10">
                <div className=' md:ml-48'>
                    <div className='flex-1 flex items-center justify-center  h-full profile-img'>
                        <img src={hero} alt="" className='h-full object-cover img-border' />
                    </div>
                </div>
                <div className='flex-1 md:ml-36'>
                    <div className='md:text-left text-center'>
                        <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold'>
                            <span className='text-cyan-600 '>
                                Hello!
                                <br />
                            </span>
                            <Typical
                                className="hidden md:block"
                                loop={Infinity}
                                steps={[
                                    "My Name is MD.",
                                    500,
                                    "JAMAL HOSSEN",
                                    500,
                                ]}

                            />
                        </h1>
                        <Typical
                            className='md:text-3xl md:block hidden text-lg md:leading-normal leading-5 mt-4 font-bold text-gray-600'
                            loop={Infinity}
                            steps={[
                                "Full-Stack Developer 😄",
                                1000,
                                "Front-End Developer 🧟",
                                800,
                                "MERN-Stack Developer 🏩",
                                700,
                                "Web Developer 😻",
                                600,
                                "React Developer 🥰",
                                500,
                            ]}
                        />
                        <Link to='contact'>
                            <motion.button className='btn-primary mt-8 text-black'
                                whileHover={{
                                    scale: 1.1,
                                    textShadow: "0px 0px 8px rgb(255, 255,255)",
                                    boxShadow: "0px 0px 8px rgb(255, 255,255)"

                                }}
                            >Contact Me</motion.button></Link>
                        <div className='mt-8 text-3xl flex items-center md:justify-start justify-center gap-6'>
                            {
                                social_media.map(icon => (
                                    <div key={icon} className='text-gray-600 hover:text-white cursor-pointer'>
                                        <a href={icon.name} target='_blank'>
                                            <ion-icon name={icon.icons}></ion-icon>
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='absolute w-full md:left-[40%] left-10 right-[40%]'>
                    <div className='fixed flex gap-6 z-50 bottom-10 bg-cyan-600 px-10 py-2 rounded-full text-center text-white text-2xl'>
                        <Link className="flex justify-center rounded-full cursor-pointer" to='home' smooth={true} scope={100}>
                            <FaHome></FaHome>
                        </Link>
                        <Link className="flex justify-center rounded-full text-white cursor-pointer" to='about' smooth={true} scope={100}>
                            <FcAbout className=""></FcAbout>
                        </Link>
                        <Link className="flex justify-center rounded-full cursor-pointer" to='skills' smooth={true} scope={100}>
                            <GiSkills></GiSkills>
                        </Link>
                        <Link className="flex justify-center rounded-full text-white cursor-pointer" to='projects' smooth={true} scope={100}>
                            <GrProjects></GrProjects>
                        </Link>
                    </div>
                </div>

            </section>
        </motion.div>
    );
};

export default Hero;