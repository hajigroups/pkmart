
"use client"; // This makes the component a client component
import React, { useState, useRef } from 'react';

const Signup = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const eyeIconRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    if (fullname.length < 3) {
      alert('Name must be at least 3 characters long');
      return;
    }
  
    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullname, email, password }),
      });
  
      const result = await response.text(); // Get the response text
  
      if (response.ok) {
        alert('Account created successfully');
        setFullname("");
        setEmail("");
        setPassword("");
      } else {
        alert(result); // Display the error message from the backend
      }
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  };

  const showPassword = () => {
    if (eyeIconRef.current.src.includes("eyecross.png")) {
      eyeIconRef.current.src = "/eye.png";
      if (passwordRef.current) {
        passwordRef.current.type = "password";
      }
    } else {
      eyeIconRef.current.src = "/eyecross.png";
      if (passwordRef.current) {
        passwordRef.current.type = "text";
      }
    }
  };

  return (
    <>
        <head>
      <title>Signup Now</title>
    </head>
      <div className='container flex m-auto w-[90%] p-10'>
        <div className="left bg-emerald-500 w-[35%] h-[770px] rounded-l-[50px] overflow-hidden"> 
          <img
            src="bglogin1.jpeg"
            className="w-full h-[140%] object-cover"
            alt=""
          />
        </div>
        <div className="right border-x-2 w-[65%] rounded-r-[50px] relative z-10">
          <h1 className='text-3xl font-bold ml-[185px] mt-10 mb-10'>Create Account</h1>
         
          <form onSubmit={handleSubmit} className='flex flex-col space-y-8 w-[80%] ml-[90px] pl-[90px] pr-[40px]'>
            <div className="relative">
              <input
                className="w-full h-16 p-2 text-xl placeholder-gray-500 bg-[#f5f6f6] outline-none"
                type="text"
                name="fullname"
                id="fullname"
                placeholder='Full name'
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <hr className='border-[1.5px] w-full absolute bottom-0 left-0' />
            </div>
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
                type="password"
                name="password"
                id="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
              />
              <span onClick={showPassword} className='absolute inset-y-0 right-3 flex items-center cursor-pointer'>
                <img ref={eyeIconRef} src="/eye.png" className='w-6' alt="Toggle visibility" />
              </span>
              <hr className='border-[1.5px] w-full absolute bottom-0 left-0' />
            </div>
            <div>
              <input
                className="w-full h-16 p-2 text-2xl bg-[#8fcac6] rounded-[20px] placeholder-gray-500 outline-none"
                type="submit"
                value="Create Account"
              />
            </div>
          </form>
          <div className='m-10 text-center'>
            <p> Have An Account? <a href="/Login"><span className='text-[#8fcac6]'>Login</span></a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
