import React from 'react'

export default function Certification() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-16">
                    {/* Certificate 1 */}
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:w-5/12 lg:w-5/12">
                            <img
                                className="rounded-lg shadow-lg object-cover"
                                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~VRBLX8LVAWVZ/CERTIFICATE_LANDING_PAGE~VRBLX8LVAWVZ.jpeg"
                                alt="Accelerated Computer Science Fundamentals Certificate"
                            />
                        </div>
                        <div className="md:w-7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl mb-4">
                                Accelerated Computer Science Fundamentals
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                I have successfully completed the "Accelerated Computer Science Fundamentals" certification from Coursera. This course deepened my understanding of core computer science principles and helped me enhance my problem-solving skills in various fields of computer science.
                            </p>
                            <a 
                                href="https://www.coursera.org/learn/accelerated-computer-science-fundamentals"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>

                    {/* Certificate 2 */}
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:w-5/12 lg:w-5/12">
                            <img
                                className="rounded-lg shadow-lg object-cover"
                                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~EZ4A6D7GHGY9/CERTIFICATE_LANDING_PAGE~EZ4A6D7GHGY9.jpeg"
                                alt="Python for Data Science, AI & Development Certificate"
                            />
                        </div>
                        <div className="md:w-7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl mb-4">
                                Python for Data Science, AI & Development
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                This certificate from Coursera covers the fundamentals of Python programming in the context of data science, AI, and development. It has provided me with the foundational skills required to work on AI and data science projects.
                            </p>
                            <a 
                                href="https://www.coursera.org/learn/python-for-applied-data-science-ai"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>

                    {/* Certificate 3 */}
                    <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                        <div className="md:w-5/12 lg:w-5/12">
                            <img
                                className="rounded-lg shadow-lg object-cover"
                                src="https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~RRPRDGLFPHNS/CERTIFICATE_LANDING_PAGE~RRPRDGLFPHNS.jpeg"
                                alt="Exploratory Data Analysis for Machine Learning Certificate"
                            />
                        </div>
                        <div className="md:w-7/12 lg:w-6/12">
                            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl mb-4">
                                Exploratory Data Analysis for Machine Learning
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                In this course, I learned various techniques to explore, clean, and visualize data, enabling more effective machine learning models. This certification helped me understand data preprocessing and feature engineering better.
                            </p>
                            <a 
                                href="https://www.coursera.org/learn/exploratory-data-analysis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-xl font-medium text-blue-600 hover:text-blue-800 transition-colors duration-300"
                            >
                                View Certificate
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
