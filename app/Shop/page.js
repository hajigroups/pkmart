"use client"; // Marking this file as a Client Component

import React, { useState, Suspense } from 'react';
import Head from 'next/head';
import { useSearchParams } from 'next/navigation';

const ShopNow = () => {
  const searchParams = useSearchParams();

  // Retrieve query parameters from the URL
  const image = searchParams.get('image') || '';
  const title = searchParams.get('title') || '';
  const price = searchParams.get('price') || '';

  const [fullname, setFullname] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const orderData = {
      fullname,
      address,
      city,
      email,
      description,
      product: {
        image,
        title,
        price,
      },
    };

    try {
      const response = await fetch('http://localhost:5000/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order placed successfully');
        // Optionally, you could clear the form here
        setFullname('');
        setAddress('');
        setCity('');
        setEmail('');
        setDescription('');
      } else {
        const errorData = await response.json();
        alert(`Error placing order: ${errorData.message || 'Unknown error'}`);
      }
    } catch (error) {
      alert(`Error placing order: ${error.message || 'Unknown error'}`);
    }
  };

  return (
    <>
      <Head>
        <title>Order Now</title>
      </Head>
      <div className='text-center p-6 md:p-20 lg:p-40'>
        <h1 className='text-2xl md:text-3xl font-bold mb-5 md:mb-10'>Place the Order</h1>
        <form onSubmit={handleSubmit}>
          <div className='Product-image m-2 md:m-3'>
            {image && (
              <img
                src={image}
                alt={title}
                className='w-[60%] md:w-[40%] lg:w-[20%] h-auto mx-auto bg-[#F0ECE3] rounded-xl'
              />
            )}
          </div>
          <div className='Product-title m-2 md:m-3'>
            <input
              type="text"
              className='w-[90%] md:w-[75%] lg:w-[50%] p-2 md:p-4 text-xl md:text-2xl bg-[#F0ECE3] rounded-xl outline-none'
              placeholder='Product Title'
              value={title}
              readOnly
            />
          </div>
          <div className='Product-price m-2 md:m-3'>
            <input
              type="text"
              className='w-[90%] md:w-[75%] lg:w-[50%] p-2 md:p-4 text-xl md:text-2xl bg-[#F0ECE3] rounded-xl outline-none'
              placeholder='Product Price'
              value={price}
              readOnly
            />
          </div>
          <div className='Customer-name m-2 md:m-3'>
            <input
              type="text"
              className='w-[90%] md:w-[75%] lg:w-[50%] p-2 md:p-4 text-xl md:text-2xl bg-[#F0ECE3] rounded-xl outline-none'
              placeholder='Full Name'
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
          </div>
          <div className='Customer-email m-2 md:m-3'>
            <input
              type="email"
              className='w-[90%] md:w-[75%] lg:w-[50%] p-2 md:p-4 text-xl md:text-2xl bg-[#F0ECE3] rounded-xl outline-none'
              placeholder='Enter Your Email Address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='Customer-address m-2 md:m-3'>
            <input
              type="text"
              className='w-[90%] md:w-[75%] lg:w-[50%] p-2 md:p-4 text-xl md:text-2xl bg-[#F0ECE3] rounded-xl outline-none'
              placeholder='Address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
          </div>
          <div className='Customer-city m-2 md:m-3'>
            <input
              type="text"
              className='w-[90%] md:w-[75%] lg:w-[50%] p-2 md:p-4 text-xl md:text-2xl bg-[#F0ECE3] rounded-xl outline-none'
              placeholder='City'
              value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            />
          </div>
          <div className='Customer-description m-2 md:m-3'>
            <textarea
              name="description"
              id="description"
              placeholder='Write about Product'
              className='w-[90%] md:w-[75%] lg:w-[50%] p-2 md:p-4 text-xl md:text-2xl bg-[#F0ECE3] rounded-xl outline-none'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <input
            type="submit"
            className='w-fit p-2 md:p-4 m-2 md:m-4 text-xl md:text-2xl bg-[#F0ECE3] rounded-xl outline-none cursor-pointer'
            value="Order Now"
          />
        </form>
      </div>
    </>
  );
};

const ShopNowPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ShopNow />
  </Suspense>
);

export default ShopNowPage;
