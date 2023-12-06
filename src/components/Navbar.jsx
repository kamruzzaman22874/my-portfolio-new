/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import {
    FaGithub,
    FaLinkedin,
    FaCloudDownloadAlt,
} from 'react-icons/fa';
import { AiFillFacebook } from 'react-icons/ai'
import { motion } from "framer-motion"

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "HOME", link: "#home" },
        { name: "ABOUT", link: "#about" },
        { name: "SKILLS", link: "#skills" },
        { name: "PROJECTS", link: "#projects" },
        { name: "CONTACT", link: "#contact" }
    ]

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        })
    }, [])
    return (
        <nav className={`fixed w-full top-0 left-0 z-[999] ${sticky ? 'bg-white/60 text-gray-900' : 'text-white'}`}>
            <motion.div className="flex items-center justify-between"
                initial={{ y: -250 }}
                animate={{ y: -10 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
            >
                <div className="mx-7">
                    <h4 className="text-4xl font-bold">
                        JA<span className="text-cyan-600">MA</span>L
                    </h4>
                </div>
                <div className={`${sticky ? 'md:bg-white/0 bg-white' : 'bg-white'} text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>

                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {
                            menuLinks?.map((menu, i) =>
                                <li className="px-6 hover:text-cyan-600" key={i}>
                                    <a href={menu.link}>{menu?.name}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className={`z-[999] ${open ? 'text-gray-900' : 'text-gray-100'} text-3xl md:hidden m-5`}>
                    <ion-icon name="menu"></ion-icon>
                </div>
                <div className={`md:hidden text-white absolute w-2/3 h-screen px-7 py-2 font-medium bg-black top-0 opacity-80 duration-500 ${open ? 'right-0' : 'right-[-100%]'}`}>
                    <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
                        {
                            menuLinks.map((menu, i) => (
                                <li onClick={() => setOpen(false)} className="px-6 hover:text-cyan-600" key={i}>
                                    <a href={menu?.link}>{menu?.name}</a>
                                </li>
                            )

                            )
                        }
                    </ul>
                </div>
            </motion.div>
            <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
                <ul className='text-gray-300'>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 p-4 my-2'>
                        <a
                            href='https://www.linkedin.com/in/jamalhossen/'
                            target='_blank'
                            className='flex justify-between items-center w-full text-gray-300'>
                            Linkedin <FaLinkedin size={30}></FaLinkedin>
                        </a>
                    </li>


                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333] p-4 my-2'>
                        <a
                            href='https://github.com/kamruzzaman22874'
                            target='_blank'
                            className='flex justify-between items-center w-full text-gray-300'>
                            Github <FaGithub size={30}></FaGithub>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0] p-4 my-2'>
                        <a href="https://www.facebook.com/kamruzzaman.joy.63/"
                            target="_blank"
                            className='flex justify-between items-center w-full text-gray-100 cursor-pointer'
                        >

                            Facebook <AiFillFacebook size={30}></AiFillFacebook>
                        </a>
                    </li>
                    <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69] p-4 my-2'>
                        <a
                            href='https://drive.google.com/file/d/1qHhb34rAMBeq8c4nrFg0Ptf7ANB6nifk/view'
                            className='flex justify-between items-center w-full text-gray-300'>
                            Resume <FaCloudDownloadAlt size={30}></FaCloudDownloadAlt>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;