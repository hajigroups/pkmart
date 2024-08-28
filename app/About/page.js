import React from 'react';

const About = () => {
  return (
    <>
      <head>
        <title>About us</title>
      </head>
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-[#73a9c2] text-white py-6">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-bold">About Pkmart</h1>
          </div>
        </header>

        <main className="container mx-auto p-6">
          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
            <p className="text-gray-700">
              Welcome to Pkmart, your number one source for all things [product category]. We're dedicated to providing you the very best of [product category], with an emphasis on quality, customer service, and uniqueness.
            </p>
            <p className="text-gray-700 mt-4">
              Founded in 2024, Pkmart has come a long way from its beginnings in [Starting Location]. When we first started out, our passion for [specific goal or mission] drove us to start our own business.
            </p>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="text-gray-700">
              Our mission is to provide high-quality [products/services] and exceptional customer service. We believe that every customer deserves a unique shopping experience, and we strive to make every visit to Pkmart memorable.
            </p>
          </section>

          <section className="bg-white shadow-md rounded-lg p-6 mb-6">
            <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
            <p className="text-gray-700">
              If you have any questions or need support, feel free to <a href="mailto:pkmart786122@gmail.com" className="text-blue-500 hover:underline">email us</a>. We’d love to hear from you!
            </p>
            <p className="text-gray-700 mt-4">
              Alternatively, you can also reach out to us at <a href="mailto:pkmart786122@gmail.com" className="text-blue-500 hover:underline">pkmart786122@gmail.com</a>.
            </p>
          </section>
        </main>

        <footer className="bg-[#73a9c2] text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; {new Date().getFullYear()} Pkmart. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default About;
