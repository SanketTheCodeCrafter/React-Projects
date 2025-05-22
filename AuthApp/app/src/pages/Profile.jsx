import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { currentUser } = useSelector((state) => state.user);
    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-center font-semibold text-3xl my-7'>Profile</h1>
            <form className='flex flex-col gap-3 max-w-lg mx-auto'>
                <img src={currentUser.profilePicture} alt="profile" className='h-24 w-24 self-center cursor-pointer rounded-full object-cover' />

                <input defaultValue={currentUser.username} type="text" placeholder='Username' id='username' className='bg-slate-100 rounded-lg p-3' />
                <input defaultValue={currentUser.email} type="email" placeholder='Email' id='email' className='bg-slate-100 rounded-lg p-3' />
                <input type="password" placeholder='Password' id='password' className='bg-slate-100 rounded-lg p-3' />

                <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>update</button>
            </form>
            <div className="flex justify-between mt-5">
                <button className='text-red-700 cursorpointer'>
                    Delete
                </button>
                <button className='text-red-700 cursorpointer'>
                    Sign out
                </button>
            </div>
            </div>
            )
}

            export default Profile