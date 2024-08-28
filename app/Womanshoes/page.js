"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Womanshoes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const router = useRouter();

  const cards = [

 
    {
      images: ['/womansuits/MZ96620011INSOLE.jpg','/womansuits/MZ96620011INSOLE-2.jpg',],
      title: `Woman rexine fancyslipper`,
      price: 'Rs1399',
      Description:`•  Material: Rexine
•  Pattern: Plain
•  Gender: Women
•  Product Feature: Fancy
•  Available Sizes: 7, 8, 9, 10
•  Size Chart: Size Chart Attached
•  Color: Brown
•  Package Includes: 1 x Chappal Pair
•  Note: Slight color differences may occur as a result of varying lighting and monitor effects.


`
    },
    {
      images: ['/womansuits/MZ85120033BDSP-4.jpg','/womansuits/MZ85120033BDSP-5.jpg','/womansuits/MZ85120033BDSP-6.jpg',,],
      title: `Woman synthetic leather casual flats`,
      price: 'Rs1500',
      Description:`•  Material: Synthetic Leather
•  Pattern: Rhinestone
•  Gender: Women's
•  Product Feature: Casual
•  Available Sizes: 36, 37, 38, 39, 40, 41
•  Size Chart: Size Chart Attached
•  Color: Beige
•  Package Includes: 1 x Flats
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.


`
    },
    {
      images: ['/womansuits/MZ85120033BDSP.jpg','/womansuits/MZ85120033BDSP-2.jpg','/womansuits/MZ85120033BDSP-3.jpg',],
      title: `Woman synthetic leather casual flats`,
      price: 'Rs1999',
      Description:`•  Material: Synthetic Leather
•  Pattern: Rhinestone
•  Gender: Women's
•  Product Feature: Casual
•  Available Sizes: 36, 37, 38, 39, 40, 41
•  Size Chart: Size Chart Attached
•  Color: Beige
•  Package Includes: 1 x Flats
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.


`
    },
    {
      images: ['/womansuits/MZ65900186FCPK.jpg','/womansuits/MZ65900186FCPK-2.jpg',],
      title: `Woman rexine fancy flats`,
      price: 'Rs1999',
      Description:`•  Material: Rexine
•  Pattern: Plain
•  Gender: Women's
•  Product Feature: Fancy
•  Available Sizes: 36, 37, 38, 39, 40, 41
•  Size Chart: Size Chart Attached
•  Color: Grey
•  Package Includes: 1 x Flats
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.




`
    },
    {
      images: ['/womansuits/MZ65900185FCPK.jpg','/womansuits/MZ65900185FCPK-2.jpg','/womansuits/MZ65900185FCPK-3.jpg', '/womansuits/MZ65900185FCPK-4.jpg' ,],
      title: `Woman rexine fancy flats`,
      price: 'Rs1999',
      Description:`•  Material: Rexine
•  Pattern: Plain
•  Gender: Women's
•  Product Feature: Fancy
•  Available Sizes: 36, 37, 38, 39, 40, 41
•  Size Chart: Size Chart Attached
•  Color: Blue
•  Package Includes: 1 x Flats
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.



`
    },
    {
      images: ['/womansuits/MZ65900185FCPK-3.jpg', '/womansuits/MZ65900185FCPK-4.jpg' ,],
      title: `Woman synthetic leather casual chapple`,
      price: 'Rs3499',
      Description:`•  Material: Synthetic Leather
•  Pattern: Plain
•  Gender: Women's
•  Product Feature: Casual
•  Available Sizes: 36, 37, 38, 39, 40
•  Size Chart: Size Chart Attached
•  Color: Maroon
•  Package Includes: 1 x Chappal
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
.


`
    },
    {
      images: ['/womansuits/MZ85120049BDSP.jpg', '/womansuits/MZ85120049BDSP-2.jpg' ,],
      title: `Woman synthetic leather casual chapple`,
      price: 'Rs3499',
      Description:`•  Material: Synthetic Leather
•  Pattern: Plain
•  Gender: Women's
•  Product Feature: Casual
•  Available Sizes: 36, 37, 38, 39, 40
•  Size Chart: Size Chart Attached
•  Color: Maroon
•  Package Includes: 1 x Chappal
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
.


`
    },
    {
      images: ['/womansuits/MZ85120050BDSP.jpg', '/womansuits/MZ85120050BDSP-2.jpg' ,],
      title: `Woman synthetic leather casual chapple`,
      price: 'Rs3499',
      Description:`•  Material: Synthetic Leather
•  Pattern: Plain
•  Gender: Women's
•  Product Feature: Casual
•  Available Sizes: 36, 37, 38, 39, 40
•  Size Chart: Size Chart Attached
•  Color: Brown
•  Package Includes: 1 x Chappal
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.


`
    },
    {
      images: ['/womansuits/MZ78400061JYWA.jpg', '/womansuits/MZ78400061JYWA-2.jpg' ,'/womansuits/MZ78400061JYWA-3.jpg','/womansuits/MZ78400061JYWA-4.jpg',],
      title: `Woman Fabric  Semi-Formal Flats`,
      price: 'Rs3499',
      Description:`•  Material: Fabric
•  Pattern: Printed
•  Gender: Women's
•  Product Feature: Semi-Formal
•  Available Sizes: 6, 7, 8, 9, 10, 11, 12
•  Size Chart: Size Chart Attached
•  Color: Black
•  Package Includes: 1 x Flats
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.

`
    },
    {
      images: ['/womansuits/MZ65900212FCPK.jpg', '/womansuits/MZ65900212FCPK-2.jpg' ,'/womansuits/MZ65900212FCPK-3.jpg','/womansuits/MZ65900212FCPK-5.jpg','/womansuits/MZ65900212FCPK-6.jpg','/womansuits/MZ65900212FCPK-4.jpg'],
      title: `Women's Rexine fancy flats`,
      price: 'Rs1999',
      Description:`•  Material: Rexine
•  Pattern: Rhinestone
•  Gender: Women's
•  Product Feature: Fancy
•  Available Sizes: 36, 37, 38, 39, 40, 41
•  Size Chart: Size Chart Attached
•  Color: Maroon
•  Package Includes: 1 x Flats
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
`
    },
    {
      images: ['/womansuits/MZ85120005BDSP.jpg', '/womansuits/MZ85120005BDSP-2.jpg' ,'/womansuits/MZ85120005BDSP-3.jpg'],
      title: 'Ladies Fancy Flat',
      price: 'Rs2199',
      Description:`•  Material: Synthetic Leather
•  Pattern: Printed
•  Gender: Women's
•  Available Sizes: 37, 38, 39, 40, 41
•  Color: Beige
•  Package Includes: 1 x Flats Pair
•  Note: Slight color differences may occur as a result of varying lighting and monitor effects`
    },
    
    {
      images: ['/womansuits/MZ85120006BDSP.jpg', '/womansuits/MZ85120006BDSP-2.jpg','/womansuits/MZ85120006BDSP-3.jpg'],
      title: 'Ladies Fancy Flat',
      price: 'Rs2199',
      Description: `•  Material: Synthetic Leather
•  Pattern: Printed
•  Gender: Women's
•  Available Sizes: 37, 38, 39, 40, 41
•  Color: Black
•  Package Includes: 1 x Flats Pair
•  Note: Slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ85120006BDSP`
    },
    {
      images: ['/womansuits/MZ85120001BDSP.jpg', '/womansuits/MZ85120001BDSP-2.jpg', '/womansuits/MZ85120001BDSP-3.jpg', '/womansuits/MZ85120001BDSP-4.jpg','/womansuits/MZ85120001BDSP-5.jpg','/womansuits/MZ85120001BDSP-6.jpg','/womansuits/MZ85120001BDSP-7.jpg',],
      title: 'Ladies fancy Slippers',
      price: 'Rs2199',
      Description: ` Material: Synthetic Leather
•  Pattern: Printed
•  Gender: Women's
•  Available Sizes: 37, 38, 39, 41, 40
•  Color: Red
•  Package Includes: 1 x Flats Pair
•  Note: Slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ85120001BDSP`
    },
    {
      images: ['/womansuits/MZ31720039IEHB.jpg', '/womansuits/MZ31720039IEHB-2.jpg', '/womansuits/MZ31720039IEHB-3.jpg', '/womansuits/MZ31720039IEHB-4.jpg' ,'/womansuits/MZ31720039IEHB-5.jpg'],
      title: 'Womens Stylish Flats',
      price: 'Rs1099',
      Description: `•  Material: PVC, PU-Fabric, PVC Sole
•  Pattern: Beads
•  Gender: Women's
•  Available Sizes: 6, 7, 8, 9, 10
•  Size Chart: Size Chart Attached
•  Color: Green
•  Package Includes: 1 x Flats
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ31720039IEHB`
    },
    {
      images: ['/womansuits/MZ95000004HPYFT.jpg','/womansuits/MZ95000004HPYFT-2.jpg','/womansuits/MZ95000004HPYFT-3.jpg','/womansuits/MZ95000004HPYFT-4.jpg',],
      title: 'Happy Feet-Royal Golden Pumps',
      price: 'Rs2199',
      Description:`•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Pu
•  Product Type: Royal  Pumps
•  Color: Golden
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41

•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000004HPYFT`
    },
    {
      images: ['/womansuits/MZ95000008HPYFT.jpg', '/womansuits/MZ95000008HPYFT-2.jpg', '/womansuits/MZ95000008HPYFT-3.jpg','/womansuits/MZ95000008HPYFT-4.jpg', '/womansuits/MZ95000008HPYFT-5.jpg',],
      title: `Happy Feet Gray  Giltter Pumps`,
      price: 'Rs2199',
      Description:`•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Pu
•  Product Type: Glitter Pumps
•  Color: Grey
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41

•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000008HPYFT`
    },
    {
      images: ['/womansuits/MZ95000002HPYFT.jpg', '/womansuits/MZ95000002HPYFT-2.jpg', '/womansuits/MZ95000002HPYFT-3.jpg', '/womansuits/MZ95000002HPYFT-4.jpg','/womansuits/MZ95000002HPYFT-5.jpg',],
      title: 'Happy feet-brige party pumps',
      price: 'Rs2299',
      Description: `•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Pu
•  Product Type: Party Pumps
•  Color: Beige
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41

•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000002HPYFT`
    },
   
    {
      images: ['/womansuits/MZ95000007HPYFT.jpg', '/womansuits/MZ95000007HPYFT-2.jpg', '/womansuits/MZ95000007HPYFT-3.jpg','/womansuits/MZ95000007HPYFT-4.jpg','/womansuits/MZ95000007HPYFT-5.jpg', ],
      title: `Happy-Feet Black Gilter Pumps`,
      price: 'Rs2099',
      Description: `•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Pu
•  Product Type: Glitter Pumps
•  Color: Black
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41

•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000007HPYFT`
    },
    {
      images: ['/womansuits/MZ95000001HPYFT.jpg', '/womansuits/MZ95000001HPYFT-2.jpg', '/womansuits/MZ95000001HPYFT-3.jpg','/womansuits/MZ95000001HPYFT-4.jpg','/womansuits/MZ95000001HPYFT-5.jpg',],
      title: `Happy Feet Aqua Party Pumps`,
      price: 'Rs2299',
      Description:`•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Pu
•  Product Type: Party Pumps
•  Color: Aqua
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41

•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000001HPYF`
    },
    // next 

    {
      images: ['/womansuits/MZ95000009HPYFT.jpg', '/womansuits/MZ95000009HPYFT-2.jpg', '/womansuits/MZ95000009HPYFT-3.jpg', '/womansuits/MZ95000009HPYFT-4.jpg', ],
      title: 'Happy Feet Silver Fancy Heels',
      price: 'Rs2199',
      Description:`•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Heels
•  Product Type: Fancy Heels
•  Color: Silver
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41

•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000009HPYFT`
    },  
    {
      images: ['/womansuits/MZ95000011HPYFT.jpg', '/womansuits/MZ95000011HPYFT-2.jpg', '/womansuits/MZ95000011HPYFT-3.jpg', '/womansuits/MZ95000011HPYFT-4.jpg','/womansuits/MZ95000011HPYFT-5.jpg',],
      title: `Happy Feet Silver Fancy Heels`,
      price: '2499',
      Description:`•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Heels
•  Product Type: Fancy Heels
•  Color: Silver
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41

•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000011HPYFT`
    },  
   
    {
      images: ['/womansuits/MZ95000014HPYFT.jpg', '/womansuits/MZ95000014HPYFT-2.jpg', '/womansuits/MZ95000014HPYFT-3.jpg', '/womansuits/MZ95000014HPYFT-4.jpg', '/womansuits/MZ95000014HPYFT-5.jpg',],
      title: `Happy Feet Golden Fancy Heels`,
      price: 'Rs2099',
      Description: `•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Heels
•  Product Type: Fancy Heels
•  Color: Golden
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41

•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000014HPYFT`
    },  
    {
      images: ['/womansuits/MZ95000015HPYFT.jpg', '/womansuits/MZ95000015HPYFT-2.jpg', '/womansuits/MZ95000015HPYFT-3.jpg', '/womansuits/MZ95000015HPYFT-4.jpg',  '/womansuits/MZ95000015HPYFT-5.jpg', '/womansuits/MZ95000015HPYFT-5.jpg',],
      title: `Happy Feet Silver fancy heels`,
      price: 'Rs2099',
      Description: `•  Fabric/Material: Pu 
•  Upper Sole: Pu
•  Lower Sole: Heels
•  Product Type: Fancy Heels
•  Color: Silver
•  Sizes Available: 6/36, 7/37, 8/38, 9/39, 10/40, 11/41
•  Retail Price: 210
•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor/screen settings.
•  Product Code: MZ95000015HPYFT`
    },  
    {
      images: ['/womansuits/MZ95000017HPYFT.jpg', '/womansuits/MZ95000017HPYFT-2.jpg','/womansuits/MZ95000017HPYFT-3.jpg','/womansuits/MZ95000017HPYFT-4.jpg','/womansuits/MZ95000017HPYFT-5.jpg',],
      title: `Happy Feet Black Fancy Slippers`,
      price: 'Rs1799',
      Description: ``
    },  
    {
      images: ['/womansuits/MZ85120011BDSP.jpg', '/womansuits/MZ85120011BDSP-2.jpg','/womansuits/MZ85120011BDSP-3.jpg','/womansuits/MZ85120011BDSP-4.jpg','/womansuits/MZ85120011BDSP-5.jpg','/womansuits/MZ85120011BDSP-6.jpg',],
      title: `Womans fancy Flats`,
      price: 'Rs1199',
      Description: `•  Material: Synthetic Upper
•  Pattern: Glitter
•  Gender: Women's
•  Color: Pink
•  Package Includes: 1 x Flats Pair
•  Note: Slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ85120011BDSP`
    },  
    
   
    // ... (same as before)
  ];

  const itemsToShow = 6;

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsToShow < cards.length ? prevIndex + itemsToShow : prevIndex
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsToShow >= 0 ? prevIndex - itemsToShow : 0
    );
  };

  const handleCardClick = (card) => {
    setSelectedCard({ ...card, currentImage: card.images[0] });
  };

  const handleShopNow = (card) => {
    router.push(`/Shop?image=${encodeURIComponent(card.images[0])}&title=${encodeURIComponent(card.title)}&price=${encodeURIComponent(card.price)}`);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const handleModalNext = () => {
    const currentIndex = selectedCard.images.findIndex(image => image === selectedCard.currentImage);
    const nextIndex = (currentIndex + 1) % selectedCard.images.length;
    setSelectedCard(prevCard => ({
      ...prevCard,
      currentImage: selectedCard.images[nextIndex]
    }));
  };

  const handleModalPrevious = () => {
    const currentIndex = selectedCard.images.findIndex(image => image === selectedCard.currentImage);
    const prevIndex = (currentIndex - 1 + selectedCard.images.length) % selectedCard.images.length;
    setSelectedCard(prevCard => ({
      ...prevCard,
      currentImage: selectedCard.images[prevIndex]
    }));
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <>
        <head>
      <title>WomanShoes</title>
    </head>
    <div className="relative flex flex-col items-center mt-[120px] px-4">
      <div className="flex overflow-hidden gap-2 mb-4 flex-wrap justify-center">
        {cards.slice(currentIndex, currentIndex + itemsToShow).map((card, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer mb-4"
            onClick={() => handleCardClick({ ...card, currentImage: card.images[0] })}
          >
            <a href="#">
              <LazyLoadImage
                className="p-4 rounded-t-lg w-full h-auto"
                src={card.images[0]}
                alt={card.title}
                effect="blur"
              />
            </a>
            <div className="px-4 py-3">
              <a href="#">
                <h5 className="text-lg sm:text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{card.title}</h5>
              </a>
              <div className="flex items-center mt-2.5 mb-4">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <svg
                    key={i}
                      className={`w-4 h-4 ${i < 4 ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{card.price}</span>
                <button
                  onClick={() => handleShopNow(card)}
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        aria-label="Previous"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg disabled:bg-gray-300"
        >
        Prev
      </button>
      <button
        onClick={handleNext}
        disabled={currentIndex + itemsToShow >= cards.length}
        aria-label="Next"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-lg disabled:bg-gray-300"
        >
        Next
      </button>
      {selectedCard && (
        <div
        className="fixed top-0 left-0 w-full h-full  bg-black bg-opacity-50 flex items-center justify-center"
        onClick={handleOverlayClick}
        >
          <div className="relative bg-white p-4 md:p-6 rounded-lg max-w-lg mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="flex items-center mb-4">
              <button
                onClick={handleModalPrevious}
                aria-label="Previous Image"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2"
              >
                Prev
              </button>
              <LazyLoadImage
                className="w-full h-auto rounded"
                src={selectedCard.currentImage}
                alt={selectedCard.title}
                effect="blur"
              />
              <button
                onClick={handleModalNext}
                aria-label="Next Image"
                className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg p-2"
              >
                Next
              </button>
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold mb-2">{selectedCard.title}</h2>
            <p className="text-base sm:text-lg mb-4">{selectedCard.Description}</p>
            <p className="text-lg sm:text-xl font-bold mb-4">{selectedCard.price}</p>
            <button
              onClick={() => handleShopNow(selectedCard)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Shop Now
            </button>
          </div>
        </div>
      )}
    </div>
              </>
  );
};

export default Womanshoes;
