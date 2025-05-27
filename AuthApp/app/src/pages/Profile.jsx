import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { updateUserStart, updateUserSuccess, updateUserFailure, deleteUserStart, deleteUserSuccess, deleteUserFailure } from '../redux/user/userSlice.js';

const Profile = () => {
    const { currentUser, loading, error } = useSelector((state) => state.user);
    const [formData, setFormData] = useState(null);
    const dispach = useDispatch();
    const [updateSuccess, setUpdateSuccess] = useState(false);


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
        setUpdateSuccess(false);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData) return;

        try {
            dispach(updateUserStart());
            const res = await fetch(`/api/user/update/${currentUser._id}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            if (data.success === false) {
                dispach(updateUserFailure(data));
                setUpdateSuccess(false);
                console.error("Error updating profile:", data.message);
                return;
            }

            dispach(updateUserSuccess(data));
            setUpdateSuccess(true);
            console.log("Profile updated successfully:", data);
        } catch (error) {
            setUpdateSuccess(false);
            console.error("Error updating profile:", error);
        }
    }

    const handleDeleteAccount = async ()=>{
        try {
            dispach(deleteUserStart());
            const res= await fetch(`/api/user/delete/${currentUser._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const data = await res.json();
            if(data.success === false){
                dispach(deleteUserFailure(data));
                console.error("Error deleting account:", data.message);
                return;
            }
            dispach(deleteUserSuccess());
            console.log("Account deleted successfully:", data);
            setUpdateSuccess(false);
            // Optionally, redirect to login or home page after deletion
            navigate('/signup');

        } catch (error) {
            dispach(deleteUserFailure(error));
        }
    }

    return (
        <div className='p-3 max-w-lg mx-auto'>
            <h1 className='text-center font-semibold text-3xl my-7'>Profile</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 max-w-lg mx-auto'>
                <img src={currentUser.profilePicture} alt="profile" className='h-24 w-24 self-center cursor-pointer rounded-full object-cover' />

                <input defaultValue={currentUser.username} type="text" placeholder='Username' id='username' className='bg-slate-100 rounded-lg p-3' onChange={handleChange} />
                <input defaultValue={currentUser.email} type="email" placeholder='Email' id='email' className='bg-slate-100 rounded-lg p-3' onChange={handleChange} />
                <input type="password" placeholder='Password' id='password' className='bg-slate-100 rounded-lg p-3' onChange={handleChange} />

                <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading...' : "Update"}</button>
            </form>
            <div className="flex justify-between mt-5">
                <button onClick={handleDeleteAccount} className='text-red-700 cursorpointer'>
                    Delete
                </button>
                <button className='text-red-700 cursorpointer'>
                    Sign out
                </button>
            </div>
            <p className='text-red-700 mt-5 text-center'>{error && "Something went wrong!"}</p>
            {updateSuccess && <p className='text-green-700 mt-5 text-center'>Profile updated successfully!</p>}
        </div>
    )
}

export default Profile