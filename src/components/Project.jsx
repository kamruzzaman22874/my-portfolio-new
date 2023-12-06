// import project1 from '../assets/images/dance-maser.png'
import project2 from '../assets/images/cur-hub2.png'
import project3 from '../assets/images/Fashion-Design.png'
import project4 from '../assets/images/Educational.png'
import profileImg from '../assets/images/about-img.png'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";
const Project = () => {

    const projects = [
        {
            img: project2,
            name: "Car-Hub",
            github_client: "https://github.com/kamruzzaman22874/rent-carHub",
            github_server: "https://github.com/kamruzzaman22874/car-hub-server",
            live_link: "https://rent-car-hub.vercel.app/",
        },
        {
            img: project3,
            name: "Fashion-Design",
            github_client: "https://github.com/kamruzzaman22874/fashion-design-client",
            github_server: "https://github.com/kamruzzaman22874/fashion-design-server",
            live_link: "https://fashion-design-67ed7.web.app/",
        },
        {
            img: project4,
            name: "Educational-Toys",
            github_client: "https://github.com/kamruzzaman22874/educational-toys-client",
            github_server: "https://github.com/kamruzzaman22874/educational-toys-server",
            live_link: "https://educational-toys-47491.web.app/",
        },
    ];

    return (
        <section id="projects" className="py-10 text-white">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Projects</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
            </div>
            <br />
            <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
                <div className="lg:w-2/3 w-full">
                    <Swiper
                        slidesPerview={1.2}
                        spaceBetween={20}
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                    >
                        {projects.map((project_info, i) => (
                            <SwiperSlide key={i}>
                                <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                                    <img src={project_info.img} alt="" className="rounded-lg h-[200px]" />
                                    <h3 className="text-xl my-4">{project_info.name}</h3>
                                    <div className="flex gap-5 justify-center">
                                        <a href={project_info.github_client} target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 border-b-2 border-b-gray-900 hover:border-b-cyan-600 inline-block rounded bg-cyan-600 hover:bg-gray-800 cursor-pointer"
                                        >
                                            Client
                                        </a>
                                        <a
                                            href={project_info.github_server}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 border-b-2 hover:border-b-2 hover:border-b-gray-900 inline-block rounded border-b-cyan-600 bg-gray-800 hover:bg-cyan-600"
                                        >
                                            Server
                                        </a>
                                        <a href={project_info.live_link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="px-4 py-2 border-b-2 hover:border-b-cyan-600 border-b-gray-900 inline-block rounded bg-cyan-600 hover:bg-gray-800"
                                        >
                                            Live
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                {/* <div className="lg:block hidden">
                    <img className='h-96 bg-cyan-600 rounded-xl ' src={profileImg} alt="" />
                </div> */}
                <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center ml-5">
                    <div className='lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg'>
                        <img src={profileImg} alt="" className='w-full object-cover bg-cyan-600 rounded-xl h-full hover:rotate-12 hover:delay-300 transition' />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Project;