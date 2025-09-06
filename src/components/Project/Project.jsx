import React from 'react';

const projectsData = [
  {
    id: 1,
    title: 'Video with AI',
    description: 'This is a full-stack video sharing platform, similar to YouTube Shorts or Instagram Reels, built with Next.js. It allows users to register, log in, upload their own short videos, and browse a feed of videos uploaded by others. This uses AI from the powerful video processing and optimization features built into ImageKit for Automatic Thumbnail Generation.',
    imageUrl: '/images/aivid.png',
    link: 'https://reelwithai.vercel.app/',
  },
  {
    id: 2,
    title: 'Blog Website',
    description: 'A full-featured blog platform built with the MERN stack. It includes user authentication, post creation, and a responsive design for a seamless reading experience.',
    imageUrl: '/images/blog.png',
    link: 'https://mitstudentblog.netlify.app/',
  },
  {
    id: 3,
    title: 'YouTube Clone',
    description: 'A video-sharing application inspired by YouTube. It leverages external APIs to fetch and display video content, search results, and channel pages.',
    imageUrl: '/images/youtube.png',
    link: 'https://github.com/SankalpBajpaiGit/Youtube-Clone',
  },
  {
    id: 4,
    title: 'JavaScript Projects',
    description: 'A collection of small, fun projects built with vanilla JavaScript, HTML, and CSS to demonstrate core web development skills and DOM manipulation.',
    imageUrl: '/images/projectjs.png',
    link: 'https://github.com/SankalpBajpaiGit/JavaScript-Projects',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
      <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

// --- Main Projects Page Component ---
export default function Projects() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl text-gray-900 font-bold md:text-5xl">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Here are some of the projects I've worked on. Feel free to explore them.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
