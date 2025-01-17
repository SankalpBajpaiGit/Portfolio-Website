import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-screen-xl mx-auto p-4 py-6 lg:py-8">
        <div className="flex justify-between items-center">
          <div className="text-xl font-semibold">Contact</div>
        </div>
        <hr className="my-6 border-gray-200" />
        <div className="flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/sankalp-bajpai-0a9411284/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
          >
            <img
              src="Photos/in.jpeg"
              alt="LinkedIn"
              className="w-8 h-8 transition-transform transform hover:scale-105"
            />
            <span className="sr-only">LinkedIn page</span>
          </a>
          <a
            href="https://github.com/SankalpBajpaiGit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
          >
            <img
              src="Photos/gith.jpeg"
              alt="GitHub"
              className="w-8 h-8 transition-transform transform hover:scale-105"
            />
            <span className="sr-only">GitHub page</span>
          </a>
          <a
            href="https://x.com/sankalp__bajpai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-900"
          >
            <img
              src="Photos/realx.jpg"
              alt="Twitter"
              className="w-8 h-8 transition-transform transform hover:scale-105"
            />
            <span className="sr-only">Twitter page</span>
          </a>
        </div>
        <hr className="my-6 border-gray-200" />
      </div>
    </footer>
  );
}
