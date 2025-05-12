import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='max-w-lg mx-auto p-3'>
      <h1 className='text-3xl font-semibold text-center my-7'>Signup</h1>
      <form className='flex flex-col gap-3 '>
        <input type="text" id='username' placeholder='username' className='bg-slate-100 p-3 rounded-lg' />
        <input type="email" id='email' placeholder='email' className='bg-slate-100 p-3 rounded-lg' />
        <input type="password" id='password' placeholder='password' className='bg-slate-100 p-3 rounded-lg' />
        <button className='bg-slate-700 text-white p-3 rounded-lg hover:opacity-95 disabled:opacity-85'>SIGN UP</button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account?</p>
        <Link to={"/signin"}>
          <span className='text-blue-500'>Signin</span>
        </Link>
      </div>
    </div>
  )
}

export default Signup