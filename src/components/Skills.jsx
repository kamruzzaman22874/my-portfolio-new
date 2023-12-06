const Skills = () => {
    const skills = [
        {
            logo: "logo-html5",
            level: "Advance",
            name: 'HTML',
            count: 86,
        },
        {
            logo: "logo-css3",
            level: "Expect",
            name: 'CSS',
            count: 90,
        },
        {
            logo: "logo-javascript",
            level: "Intermediate",
            name: 'JavaScript',
            count: 80,
        },
        {
            logo: "logo-nodejs",
            level: "Beginner",
            name: 'Node.JS',
            count: 40,
        },
        {
            logo: "logo-react",
            level: "Intermediate",
            name: 'React',
            count: 80,
        },
        
        {
            logo: "MongoDB",
            level: "Beginner",
            name: 'MongoDB',
            count: 80,
        },
        
    ];
    return (
        <section id="skills" className="py-10  relative ">
            <div className="mt-8 text-gray-100 text-center">
                <h3 className="text-4xl font-semibold">
                    My <span className="text-cyan-600">Skills</span>
                </h3>
                <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:px-48  items-center md:justify-center mt-12 gap-5 ">
                    {skills?.map((skill, i) => (
                        <div
                            key={i}
                            className="border-2 flex justify-center group border-cyan-600 relative md:min-w-[10rem] md:max-w-[16rem] bg-gray-900 p-10 rounded-xl"
                        >
                           <div className="">
                                <div
                                    style={{
                                        background: `conic-gradient(rgb(8,145,170) ${skill.count}%,#ddd ${skill.count}%)`,
                                    }}
                                    className="w-32 h-32 flex items-center   justify-center rounded-full">
                                    <div className="text-6xl w-28 h-28 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-cyan-600">
                                        <ion-icon name={skill.logo}></ion-icon>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-xl mt-3">{skill.name}</p>
                                    <p className="text-xl mt-3">{skill.level}</p>
                                </div>
                           </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;