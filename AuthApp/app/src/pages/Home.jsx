import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className='min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-white rounded-2xl shadow-xl p-8'>
          <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl text-center mb-8'>
            Welcome to AuthApp
          </h1>
          <p className='text-lg text-gray-600 text-center mb-8'>
            A secure and modern authentication solution for your web applications.
          </p>
          
          <div className='prose prose-lg max-w-none'>
            <p className='text-gray-700 mb-6'>
              AuthApp is a full-stack authentication solution built with the MERN stack (MongoDB, Express.js, React, Node.js). 
              It provides a secure and user-friendly way to handle user authentication in your web applications.
            </p>
            
            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Features</h2>
            <ul className='list-disc list-inside text-gray-700 space-y-2 mb-6'>
              <li>Secure user authentication with email and password</li>
              <li>Google OAuth integration for easy sign-in</li>
              <li>User profile management</li>
              <li>Protected routes and secure API endpoints</li>
              <li>Modern and responsive design</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Technology Stack</h2>
            <ul className='list-disc list-inside text-gray-700 space-y-2'>
              <li>Frontend: React, Redux Toolkit, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB</li>
              <li>Authentication: JWT, Firebase</li>
            </ul>
          </div>

          {!currentUser && (
            <div className='mt-12 text-center'>
              <Link 
                to='/signup' 
                className='inline-block px-8 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-200'
              >
                Get Started
              </Link>
              <p className='mt-4 text-sm text-gray-600'>
                Already have an account?{' '}
                <Link to='/signin' className='font-medium text-violet-600 hover:text-violet-500 transition-colors duration-200'>
                  Sign in
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Home