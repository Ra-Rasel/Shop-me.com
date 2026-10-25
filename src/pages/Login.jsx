import React, { useState } from 'react'

const Login = () => {

  // বর্তমান মোড ট্র্যাক করার জন্য স্টেট ('Sign Up' অথবা 'Login')
  const [currentState, setCurrentState] = useState('Login');

  // ফর্ম ইনপুট স্টেট
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // পরবর্তীতে ব্যাকএন্ড API হ্যান্ডেল করার জন্য
    if (currentState === 'Sign Up') {
      console.log("Signing up with:", { name, email, password });
    } else {
      console.log("Logging in with:", { email, password });
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      
      {/* Title */}
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl font-medium'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>

      {/* Name Field (Only visible in Sign Up mode) */}
      {currentState === 'Sign Up' && (
        <input 
          type="text" 
          onChange={(e) => setName(e.target.value)} 
          value={name} 
          className='w-full px-3 py-2 border border-gray-800 rounded outline-none focus:border-black' 
          placeholder='Name' 
          required 
        />
      )}

      {/* Email Field */}
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
        className='w-full px-3 py-2 border border-gray-800 rounded outline-none focus:border-black' 
        placeholder='Email' 
        required 
      />

      {/* Password Field */}
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        className='w-full px-3 py-2 border border-gray-800 rounded outline-none focus:border-black' 
        placeholder='Password' 
        required 
      />

      {/* Action Links */}
      <div className='w-full flex justify-between text-sm mt-[-8px] text-gray-600'>
        <p className='cursor-pointer hover:text-black transition-colors'>Forgot your password?</p>
        {
          currentState === 'Login'
            ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer hover:text-black transition-colors underline'>Create account</p>
            : <p onClick={() => setCurrentState('Login')} className='cursor-pointer hover:text-black transition-colors underline'>Login Here</p>
        }
      </div>

      {/* Submit Button */}
      <button className='bg-black text-white font-light px-8 py-2.5 mt-4 rounded cursor-pointer active:bg-gray-700 transition-colors'>
        {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
      </button>

    </form>
  )
}

export default Login