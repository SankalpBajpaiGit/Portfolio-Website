import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div 
            className="mx-auto w-full max-w-7xl bg-cover bg-center relative"
            style={{ backgroundImage: 'url("/images/background.avif")' }}
        >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <aside className="relative overflow-hidden text-white rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-8 sm:space-y-0 sm:space-x-16 text-center sm:text-left">
                        <div className="sm:w-1/2 w-full">
                            <h2 className="text-4xl font-bold sm:text-5xl text-white leading-tight">
                                About Me
                            </h2>
                            <p className="text-xl mt-4 text-white max-w-xl mx-auto sm:mx-0">
                                Hi, I'm Sankalp Bajpai, a passionate and driven B.Tech student at 
                                Manipal Institute of Technology, Manipal. I'm constantly exploring the realms of technology and programming.
                            </p>
                            <p className="text-xl mt-4 text-white max-w-xl mx-auto sm:mx-0">
                                I have a deep interest and proficiency in Web Development, 
                                Data Structures & Algorithms (DSA), and Generative AI. I love solving complex problems and building
                                efficient, scalable systems.
                            </p>
                            <p className="text-xl mt-4 text-white max-w-xl mx-auto sm:mx-0">
                                When I'm not coding, I enjoy contributing to the tech community and learning new advancements in 
                                the field. I aim to leverage my skills to create impactful solutions in the world of technology.
                            </p>
                        </div>
                        <div className="sm:w-1/2 w-full mt-8 sm:mt-0 flex justify-center items-center">
                            <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                                <img 
                                    className="w-full h-full rounded-full object-cover border-4 border-white shadow-lg hover:scale-105 transition-transform duration-300" 
                                    style={{ objectPosition: 'center 34%' }} 
                                    src="/images/me.jpg" 
                                    alt="Sankalp Bajpai"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
}
