// app/Login/page.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthContext'; // Adjust path if necessary

const Dashboard = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const { login } = useAuth(); // Use the login function

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json(); // Get the response JSON

      if (response.ok) {
        login({ ...result.user, password }); // Set user data in context
        router.push('/Dashboard'); // Redirect to the dashboard page
      } else {
        alert(result.message); // Display the error message from the backend
      }
    } catch (error) {
      alert('An error occurred');
      console.error(error);
    }
  };

  return (
    <div className='container flex m-auto w-[90%] p-10'>
      {/* Form and other UI elements */}
      <form onSubmit={handleSubmit} className='flex flex-col space-y-8 w-[80%] ml-[90px] pl-[90px] pr-[40px]'>
        <div>
          <input
            className="w-full h-16 p-2 text-xl placeholder-gray-500 relative outline-none bg-[#f5f6f6]"
            type="email"
            name="email"
            id="email"
            placeholder='Email Address'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            className="w-full h-16 p-2 text-xl placeholder-gray-500 relative outline-none bg-[#f5f6f6]"
            type="password"
            name="password"
            id="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default Dashboard;
