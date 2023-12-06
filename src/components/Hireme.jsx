import hireMe from '../assets/images/about-img.png'
const Hireme = () => {
    return (
        <section id="hireme" className="py-10 px-3">
            <div className="text-center">
                <h3 className="text-4xl font-semibold">
                    Hire <span className="text-cyan-600">Me</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">Do you have any work?</p>
            </div>
            <div className="relative md:px-40 flex lg:flex-row flex-col-reverse">
                <div className='md:w-1/2 mt-16'>
                    <h2 className="text-2xl font-semibold">
                        Do you want any work from me?
                    </h2>
                    <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
                            I am always interested in new opportunities and challenges.
                            Could you please provide more details about the project or the type of work you have in mind? This will help me understand if it aligns with my skills and expertise. Once I have a clearer picture, I can let you know if I am available and if we can proceed further. Looking forward to hearing more about it.
                    </p>
                    <button className="btn-primary mt-10">Say Hello</button>
                </div>
                <div className='md:w-1/2 ml-8 my-5 profile-img'>
                    <div className='img-border'>
                        <img
                            src={hireMe}
                            alt=""
                            className="w-full h-full bottom-0 right-28 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hireme;

// relative rounded - 2xl py - 5 lg: max - w - 5xl mx - auto min - h - [24rem] mt - 24 flex gap - 6 lg: flex - row flex - col - reverse justify - between items - center