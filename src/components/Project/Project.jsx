import React from 'react'

export default function Projects() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-5/12 lg:w-5/12">
                        <img
                            className="rounded-lg shadow-lg object-cover"
                            src="Photos/projects.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:w-7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl mb-4">
                            My Projects
                        </h2>
                        <p className="text-lg text-gray-600 mb-6">
                            Here are some of the projects I have worked on. Click on the links below to check them out on GitHub.
                        </p>
                        <div className="space-y-4">
                            <a 
                                href="https://github.com/SankalpBajpaiGit/Youtube-Clone" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                            >
                                Youtube Clone
                            </a>
                            <a 
                                href="https://github.com/SankalpBajpaiGit/JavaScript-Projects" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                            >
                                JavaScript Projects
                            </a>
                            <a 
                                href="https://github.com/SankalpBajpaiGit/React-Projects" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                            >
                                React Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
