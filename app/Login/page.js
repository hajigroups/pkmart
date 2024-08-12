"use client"; // This makes the component a client component

import React, { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthContext'; // Adjust the path if necessary

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const passwordRef = useRef(null);
  const eyeIconRef = useRef(null);
  const router = useRouter();
  const { login } = useAuth(); // Use the login function

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        login(); // Call the login function from context
        router.push('/'); // Redirect to the homepage
      } else {
        const result = await response.text();
        alert(result); // Display the error message from the backend
      }
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
    if (eyeIconRef.current) {
      eyeIconRef.current.src = showPassword ? "/eye.png" : "/eyecross.png";
    }
  };

  return (
    <div className='container flex m-auto w-[90%] p-10'>
      <div className="right border-x-2 w-[65%] rounded-l-[50px] relative z-10">
        <h1 className='text-3xl font-bold ml-[185px] mt-10 mb-20'>Login</h1>

        <form onSubmit={handleSubmit} className='flex flex-col space-y-8 w-[80%] ml-[90px] pl-[90px] pr-[40px]'>
          <div className="relative">
            <input
              className="w-full h-16 p-2 text-xl placeholder-gray-500 bg-[#f5f6f6] outline-none"
              type="email"
              name="email"
              id="email"
              placeholder='Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr className='border-[1.5px] w-full absolute bottom-0 left-0' />
          </div>
          <div className="relative">
            <input
              className="w-full h-16 p-2 text-xl placeholder-gray-500 bg-[#f5f6f6] outline-none"
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              ref={passwordRef}
            />
            <span onClick={togglePasswordVisibility} className='absolute inset-y-0 right-3 flex items-center cursor-pointer'>
              <img ref={eyeIconRef} src="/eye.png" className='w-6' alt="Toggle visibility" />
            </span>
            <hr className='border-[1.5px] w-full absolute bottom-0 left-0' />
          </div>
          <div>
            <input
              className="w-full h-16 p-2 text-2xl bg-[#8fcac6] rounded-[20px] placeholder-gray-500 outline-none"
              type="submit"
              value="Login"
            />
          </div>
        </form>
        <div className='m-10 text-center'>
          <p>Don't Have An Account? <a href="/Signup"><span className='text-[#8fcac6]'>Sign Up</span></a></p>
        </div>
      </div>
      <div className="left bg-emerald-500 w-[35%] h-[770px] rounded-r-[50px] overflow-hidden">
        <img
          src="bglogin1.jpeg"
          className="w-full h-[140%] object-cover"
          alt=""
        />
      </div>
    </div>
  );
};

export default Login;
