import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import OAuth from '../components/OAuth';

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
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
      });

      let data = null;
      const text = await res.text();
      if (text) {
        try {
          data = JSON.parse(text);
        } catch (jsonError) {
          setError('Server returned invalid response.');
          setLoading(false);
          return;
        }
      }

      setLoading(false);
      setError(false);

      if (!res.ok) {
        setError((data && data.message) || 'Internal Server Error');
        return;
      }

      if (data && data.success === false) {
        setError(data.message || 'Signup failed');
        return;
      }

      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError('Something went wrong. Please try again.');
    }
  }

  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Signup</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3 '>
        <input type="text" id='username' placeholder='username' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="email" id='email' placeholder='email' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <input type="password" id='password' placeholder='password' className='bg-slate-100 p-3 rounded-lg' onChange={handleChange} />
        <button disabled={loading} className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-85'>{loading ? 'LOADING' : 'SIGNUP'}</button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-2">
        <p>Already have an account?</p>
        <Link to={"/signin"}>
          <span className='text-blue-500'>Signin</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-4'>{error}</p>}
    </div>
  )
}

export default Signup