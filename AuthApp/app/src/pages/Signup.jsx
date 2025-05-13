import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setError(false);

      if(data.success==false){
        setError(true);
        return;
      }
      navigate('/signin')
    } catch (error) {
      setLoading(false);
      setError(true)
      console.log(error);
    }


  }

  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Signup</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 '>
        <input type="text" id='username' placeholder='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="email" id='email' placeholder='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="password" id='password' placeholder='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-85'>{loading? 'LOADING':'SIGNUP'}</button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className='text-blue-500'>Signin</span>
        </Link>
      </div>
      <p className='text-red-500 mt-4'>{error && 'Something went wrong'}</p>
    </div>
  )
}

export default Signup