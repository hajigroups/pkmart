import React from 'react';

const Services = () => {
  return (
    <>
        <head>
      <title>Services</title>
    </head>
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-[#0d98ba] text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold">Our Services</h1>
        </div>
      </header>
      
      <main className="container mx-auto p-6">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Cash on Delivery</h2>
          <p className="text-gray-700">
            We offer a convenient cash on delivery (COD) service. You can place your order online and pay in cash when the products are delivered to your doorstep. This option ensures a secure and hassle-free payment process for our customers.
          </p>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">24/7 Store Availability</h2>
          <p className="text-gray-700">
            Our online store is available 24/7, allowing you to shop anytime, anywhere. Whether it's day or night, you can browse our products, place orders, and enjoy a seamless shopping experience at your convenience.
          </p>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-4">Return Policy</h2>
          <p className="text-gray-700">
            We want you to be completely satisfied with your purchase. If you need to return an item, you can do so within [X days] of receiving your order. Please ensure the item is in its original condition and packaging. For more details on our return process, visit our <a href="/return-policy" className="text-blue-500 hover:underline">Return Policy</a> page.
          </p>
        </section>
      </main>
      
      <footer className="bg-[#0d98ba]  text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} Pkmart. All rights reserved.</p>
        </div>
      </footer>
    </div>
    </>
  );
}

export default Services;
