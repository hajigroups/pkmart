"use client"
import Carousel from "./components/Carousel"
import TypedComponent from "./components/Typed"

import { useState } from "react";
export default function Home() {
  const cards = [/* your card data */];
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex < cards.length ? nextIndex : prevIndex;
    });
  };
  return (
    <>

      <div className="flex justify-around items-center bg-gray-200 h-[70vh] ">
        <div className="">
          <h1 className="text-4xl w-36  ">Exclusive   </h1>
          <span className="text-red-400 text-5xl  ">Finds Just For You</span>
          <p className="text-gray-500 text-2xl mt-2">
          </p>
            <TypedComponent/>
       

          <button type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mt-8 ml-28 ">Shop Now</button>
        </div>
        <img src="shopping2.png" alt="shoping" />
      </div>
       <Carousel/>
    </>
  );
}
