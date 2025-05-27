import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <div className='bg-white rounded-2xl shadow-xl p-8'>
          <h1 className='text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl text-center mb-8'>
            About AuthApp
          </h1>
          <p className='text-lg text-gray-600 text-center mb-8'>
            Learn more about our authentication solution and its features.
          </p>

          <div className='prose prose-lg max-w-none'>
            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Our Mission</h2>
            <p className='text-gray-700 mb-6'>
              AuthApp was created to provide developers with a secure, modern, and easy-to-use authentication solution. 
              We believe that authentication should be both secure and user-friendly, and we've built AuthApp with these principles in mind.
            </p>

            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Technology Stack</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Frontend</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                  <li>React for building the user interface</li>
                  <li>Redux Toolkit for state management</li>
                  <li>Tailwind CSS for styling</li>
                  <li>React Router for navigation</li>
                </ul>
              </div>
              <div className='bg-gray-50 p-6 rounded-xl'>
                <h3 className='text-xl font-semibold text-gray-900 mb-3'>Backend</h3>
                <ul className='list-disc list-inside text-gray-700 space-y-2'>
                  <li>Node.js and Express.js for the server</li>
                  <li>MongoDB for the database</li>
                  <li>JWT for authentication</li>
                  <li>Firebase for OAuth</li>
                </ul>
              </div>
            </div>

            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>Security Features</h2>
            <ul className='list-disc list-inside text-gray-700 space-y-2 mb-6'>
              <li>Secure password hashing and storage</li>
              <li>JWT-based authentication</li>
              <li>Protected API routes</li>
              <li>Google OAuth integration</li>
              <li>Secure session management</li>
            </ul>

            <h2 className='text-2xl font-semibold text-gray-900 mt-8 mb-4'>User Experience</h2>
            <ul className='list-disc list-inside text-gray-700 space-y-2'>
              <li>Clean and intuitive interface</li>
              <li>Responsive design for all devices</li>
              <li>Fast and reliable authentication</li>
              <li>Easy profile management</li>
              <li>Seamless Google sign-in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About