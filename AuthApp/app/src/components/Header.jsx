import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <header className='bg-white/80 backdrop-blur-md border-b border-gray-200 fixed w-full top-0 z-50 shadow-sm'>
            <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
                <Link to='/'>
                    <h1 className='font-bold text-2xl bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent hover:from-violet-700 hover:to-indigo-700 transition-all duration-300'>AuthApp</h1>
                </Link>
                <nav>
                    <ul className='flex gap-8 items-center'>
                        <Link to='/'>
                            <li className='text-gray-600 hover:text-violet-600 transition-colors duration-300 font-medium'>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li className='text-gray-600 hover:text-violet-600 transition-colors duration-300 font-medium'>About</li>
                        </Link>
                        <Link to='/profile'>
                            {currentUser ? (
                                <div className='flex items-center gap-3 group'>
                                    <div className='relative'>
                                        <img 
                                            src={currentUser.profilePicture} 
                                            alt='profile' 
                                            className='w-10 h-10 rounded-full object-cover border-2 border-white shadow-md group-hover:border-violet-200 transition-all duration-300' 
                                        />
                                        <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white'></div>
                                    </div>
                                    <span className='text-gray-700 font-medium hidden md:inline group-hover:text-violet-600 transition-colors duration-300'>{currentUser.username}</span>
                                </div>
                            ) : (
                                <li className='text-gray-600 hover:text-violet-600 transition-colors duration-300 font-medium'>Sign In</li>
                            )}
                        </Link>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header