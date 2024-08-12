// components/TypedComponent.tsx
"use client";

import { useEffect } from 'react';

const TypedComponent = () => {
  useEffect(() => {
    import('typed.js').then(({ default: Typed }) => {
      const element = document.getElementById('typed-element');
      if (element) {
        new Typed(element, {
          strings: [
            'Quality Products at Great Prices',
            'High-Quality Items for Less',
            'Top Products at Good Prices',
            'Good Quality, Great Deals',
            'Awesome Products, Affordable Prices'
          ],
          typeSpeed: 40,       // Speed at which text is typed
          backSpeed: 10,        // Speed at which text is erased (optional)
          backDelay: 500,       // Delay before starting to erase (optional)
          startDelay: 500,      // Delay before starting to type (optional)
          loop: false,          // Loop the typing animation indefinitely
          showCursor: false,   // Hide the blinking cursor
         
        });
      }
    });
  }, []);

  return (
    <div
      className="text-gray-500 text-2xl mt-2"
      id="typed-element"
    ></div>
  );
};

export default TypedComponent;
