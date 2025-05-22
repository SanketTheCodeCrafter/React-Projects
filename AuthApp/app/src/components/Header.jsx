import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit';

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <>
            <nav className='bg-slate-300'>
                <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
                    <Link to='/'>
                        <h1 className='font-bold'>AuthApp</h1>
                    </Link>
                    <ul className='flex gap-4'>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/about'>
                            <li>About</li>
                        </Link>
                        <Link to='/profile'>
                            {currentUser ?
                                (<img src={currentUser.profilePicture} alt='profile ' className='w-9 h-9  rounded-3xl object-cover' />) :

                                <li>Sign In</li>
                            }
                        </Link>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Header