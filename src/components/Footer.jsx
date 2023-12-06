const Footer = () => {
    return (
        // <div className="bg-gray-800 text-sm p-4 text-center text-white">
        //     Copyright © 2022 Jamal Hossen.All Rights reserved.
        // </div>
        <footer className="p-10 bg-gray-900 text-primary-content py-20">
            <div className="text-center">
                <h2 className="text-4xl text-cyan-600">JAMAL</h2>
                <ul className="flex justify-center md:gap-8 gap-4 py-10">
                    <li className="hover:text-cyan-600">
                        <a href="#home">Home</a>
                    </li>
                    <li className="hover:text-cyan-600">
                        <a href="#about">About</a>
                    </li>
                    <li className="hover:text-cyan-600">
                        <a href="#skills">Skills</a>
                    </li>
                    <li className="hover:text-cyan-600">
                        <a href="#projects">Project</a>
                    </li>
                    <li className="hover:text-cyan-600">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
        
            </div>
            <div className="mb-10">
                <div className="flex gap-5 justify-center">
                    <ul className="flex gap-5 text-3xl">
                        <li className="hover:text-cyan-600">
                            <a href="https://www.linkedin.com/in/jamalhossen/" target="_blank">
                                <ion-icon name="logo-linkedin"></ion-icon>
                            </a>
                        </li>
                        <li className="hover:text-cyan-600">
                            <a href="https://www.facebook.com/kamruzzaman.joy.63/" target="_blank">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                        </li>
                        <li className="hover:text-cyan-600">
                            <a href="https://www.instagram.com/kamruzzaman.joy.63/" target="_blank">
                                <ion-icon name="logo-instagram"></ion-icon>
                             </a>
                        </li>
                    </ul>
                </div>
                <p className="py-5 text-center">© JAMAL 2020-2023. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;