
"use client"; // This makes the component a client component
import React, { useState } from 'react';

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    complain: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Contact form submitted successfully');
        setFormData({
          name: '',
          email: '',
          phone: '',
          complain: '',
        });
      } else {
        alert('Error submitting contact form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
    }
  };

  return (
    <div className='container flex m-auto w-[90%] p-10'>
      <div className="right border-x-2 w-[65%] m-auto mt-[120PX] rounded-[50px] relative z-10">
        <h1 className='text-3xl font-bold ml-[185px] mt-10 mb-10'>Fill The form</h1>
        <form className='flex flex-col space-y-8 w-[80%] ml-[90px] pl-[90px] pr-[40px]' onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full h-16 p-2 text-xl placeholder-gray-500 relative outline-none bg-[#f5f6f6]"
              type="text"
              name="name"
              id="name"
              placeholder='Name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="w-full h-16 p-2 text-xl placeholder-gray-500 outline-none relative bg-[#f5f6f6]"
              type="email"
              name="email"
              id="email"
              placeholder='Email Address'
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              className="w-full h-16 p-2 text-xl placeholder-gray-500 outline-none relative bg-[#f5f6f6]"
              type="number"
              name="phone"
              id="phone"
              placeholder='Phone Number'
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <textarea
              className="w-full h-16 p-2 text-xl placeholder-gray-500 relative outline-none bg-[#f5f6f6]"
              placeholder='Complain-box'
              name="complain"
              id="complain"
              value={formData.complain}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>
            <input
              className="w-full h-16 p-2 text-2xl bg-[#8fcac6] rounded-[20px] placeholder-gray-500 outline-none"
              type="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contactus;
