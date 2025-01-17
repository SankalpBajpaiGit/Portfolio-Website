import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
        <div className="text-center bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-xl w-full">
            <h1 className="text-3xl font-semibold mb-4 text-white">Github Profile</h1>
            <div className="mb-6">
                <a 
                    href="https://github.com/SankalpBajpaiGit" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xl font-medium text-blue-300 hover:text-blue-500 transition-colors duration-300"
                >
                    Visit My GitHub Profile
                </a>
            </div>
            <div className="flex justify-center items-center mb-6">
                <img 
                    src={data.avatar_url} 
                    alt="GitHub avatar" 
                    className="rounded-full border-4 border-gray-300 shadow-xl" 
                    width={200} 
                />
            </div>
            <div className="text-xl text-white">
                <p className="font-semibold">Followers: {data.followers}</p>
            </div>
        </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sankalpbajpaigit')
    return response.json()
}
