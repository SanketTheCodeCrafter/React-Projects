import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure, signOut } from '../redux/user/userSlice.js';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [formData, setFormData] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [updateSuccess, setUpdateSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setUpdateSuccess(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData) return;

        try {
            dispatch(updateUserStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(updateUserFailure(data));
                setUpdateSuccess(false);
                console.error("Error updating profile:", data.message);
                return;
            }

            dispatch(updateUserSuccess(data));
            setUpdateSuccess(true);
            console.log("Profile updated successfully:", data);
        } catch (error) {
            setUpdateSuccess(false);
            console.error("Error updating profile:", error);
        }
    }

    const handleDeleteAccount = async () => {
        try {
            dispatch(deleteUserStart());
            const res = await fetch(`/api/user/delete/${currentUser._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(deleteUserFailure(data));
                console.error("Error deleting account:", data.message);
                return;
            }
            dispatch(deleteUserSuccess());
            console.log("Account deleted successfully:", data);
            setUpdateSuccess(false);
            navigate('/signup');
        } catch (error) {
            dispatch(deleteUserFailure(error));
        }
    }

    const handleSignOut = async () => {
        try {
            await fetch('/api/auth/signout')
            dispatch(signOut());
            navigate('/signin');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-2xl mx-auto'>
                <div className='bg-white rounded-2xl shadow-xl p-8'>
                    <div className='text-center mb-8'>
                        <h1 className='text-3xl font-bold text-gray-900'>Profile Settings</h1>
                        <p className='mt-2 text-sm text-gray-600'>Manage your account settings and preferences</p>
                    </div>

                    <form onSubmit={handleSubmit} className='space-y-6'>
                        <div className='flex justify-center mb-6'>
                            <div className='relative group'>
                                <img 
                                    src={currentUser.profilePicture} 
                                    alt="profile" 
                                    className='h-32 w-32 rounded-full object-cover border-4 border-white shadow-lg group-hover:border-violet-200 transition-all duration-300' 
                                />
                                <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    <span className='text-white text-sm font-medium'>Change Photo</span>
                                </div>
                            </div>
                        </div>

                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='username' className='block text-sm font-medium text-gray-700'>Username</label>
                                <input 
                                    defaultValue={currentUser.username} 
                                    type="text" 
                                    id='username' 
                                    className='mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200' 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div>
                                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                                <input 
                                    defaultValue={currentUser.email} 
                                    type="email" 
                                    id='email' 
                                    className='mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200' 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div>
                                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                                <input 
                                    type="password" 
                                    id='password' 
                                    placeholder='Enter new password' 
                                    className='mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200' 
                                    onChange={handleChange} 
                                />
                            </div>
                        </div>

                        <button 
                            type='submit'
                            disabled={loading} 
                            className='w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                        >
                            {loading ? (
                                <span className='flex items-center justify-center'>
                                    <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                                        <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                        <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                                    </svg>
                                    Updating...
                                </span>
                            ) : 'Update Profile'}
                        </button>
                    </form>

                    <div className='mt-8 pt-6 border-t border-gray-200'>
                        <div className='flex justify-between items-center'>
                            <button 
                                onClick={handleDeleteAccount} 
                                className='text-red-600 hover:text-red-700 font-medium transition-colors duration-200'
                            >
                                Delete Account
                            </button>
                            <button 
                                onClick={handleSignOut} 
                                className='text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200'
                            >
                                Sign Out
                            </button>
                        </div>
                    </div>

                    {error && (
                        <div className='mt-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg'>
                            {error}
                        </div>
                    )}
                    {updateSuccess && (
                        <div className='mt-4 p-4 text-sm text-green-700 bg-green-100 rounded-lg'>
                            Profile updated successfully!
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Profile