import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInFailure, signInStart, signInSuccess } from '../redux/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import OAuth from '../components/OAuth';

const Signin = () => {
  const [formData, setFormData] = useState({});
  const { loading, error } = useSelector((state) => state.user);
  const [hasAttempted, setHasAttempted] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasAttempted(true);

    try {
      dispatch(signInStart());
      const res = await fetch('/api/auth/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      
      if (!res.ok) {
        dispatch(signInFailure(data.message || 'Invalid credentials'));
        return;
      }

      if (data && data.success === false) {
        dispatch(signInFailure(data.message || 'Sign in failed'));
        return;
      }

      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure('Something went wrong. Please try again.'));
    }
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-violet-50 to-indigo-50 pt-20 pb-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md mx-auto'>
        <div className='bg-white rounded-2xl shadow-xl p-8'>
          <div className='text-center mb-8'>
            <h1 className='text-3xl font-bold text-gray-900'>Welcome Back</h1>
            <p className='mt-2 text-sm text-gray-600'>Please sign in to your account</p>
          </div>
          
          <form onSubmit={handleSubmit} className='space-y-6'>
            <div className='space-y-4'>
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-gray-700'>Email</label>
                <input 
                  type="email" 
                  id='email' 
                  placeholder='Enter your email' 
                  className='mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200' 
                  onChange={handleChange} 
                />
              </div>
              <div>
                <label htmlFor='password' className='block text-sm font-medium text-gray-700'>Password</label>
                <input 
                  type="password" 
                  id='password' 
                  placeholder='Enter your password' 
                  className='mt-1 block w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition-colors duration-200' 
                  onChange={handleChange} 
                />
              </div>
            </div>

            <button 
              disabled={loading} 
              className='w-full py-3 px-4 bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-lg font-medium hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {loading ? (
                <span className='flex items-center justify-center'>
                  <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                  </svg>
                  Signing in...
                </span>
              ) : 'Sign in'}
            </button>
            
            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <div className='w-full border-t border-gray-300'></div>
              </div>
              <div className='relative flex justify-center text-sm'>
                <span className='px-2 bg-white text-gray-500'>Or continue with</span>
              </div>
            </div>
            
            <OAuth />
          </form>

          <div className='text-center mt-6'>
            <p className='text-sm text-gray-600'>
              Don't have an account?{' '}
              <Link to='/signup' className='font-medium text-violet-600 hover:text-violet-500 transition-colors duration-200'>
                Sign up
              </Link>
            </p>
          </div>

          {hasAttempted && error && (
            <div className='mt-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg'>
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Signin