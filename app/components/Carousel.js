"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Handbags = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const router = useRouter();

  const cards = [
    {
      images: ['/womansuits/MZ59120005GNCR.jpg', '/womansuits/MZ59120005GNCR-2.jpg'],
      title: 'Pure Leather Plain Hand Bag With Long Chain  strap',
      price: 'Rs2299',
      Description:`•  Material: PU Leather
•  Pattern: Plain
•  Size: 7 Inch Height 9 Inch width
•  No. Of Pieces: 2 Pc
•  Package Includes: 1 x Hand Bag
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ59120005GNCR`
    },
    
    {
      images: ['/womansuits/MZ59120020GNCR.jpg', '/womansuits/MZ59120020GNCR-2.jpg'],
      title: 'Pure Leather Plain Hand Bag With Long Chain  strap',
      price: 'Rs2299',
      Description: `•  Material: PU Leather
•  Pattern: Plain
•  Size: 7x9 Inches
•  No. Of Pieces: 1 Pc
•  Package Includes: 1 x Hand Bag
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ59120020GNCR`
    },
    {
      images: ['/womansuits/MZ59120010GNCR.jpg', '/womansuits/MZ59120010GNCR-2.jpg', ],
      title: 'Pure Leather Plain Hand Bag ',
      price: 'Rs2299',
      Description: `•  Material: PU Leather
•  Pattern: Plain
•  Size: 7 Inch Height 9 Inch width
•  No. Of Pieces: 2 Pc
•  Package Includes: 1 x Hand Bag
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ59120010GNCR`
    },
    {
      images: ['/womansuits/MZ23401302FZGRM.jpg', '/womansuits/MZ23401302FZGRM-2.jpg', '/womansuits/MZ23401302FZGRM-3.jpg', '/womansuits/MZ23401302FZGRM-4.jpg',],
      title: `2pcs Women's Stitched linen Printed  Shirt And Trouser`,
      price: 'Rs2399',
      Description: `•  Gender: Women's
•  Fabric: Linen
•  Pattern: Embroidered
•  Shirt - Pattern: Embroidered
•  Trouser - Pattern: Embroidered
•  Available Sizes: Medium
•  Number Of Pieces: 2 Pcs
•  Package Includes: 1 x Shirt, 1 x Trouser
•  Shirt Length: 38 Inches
•  Shirt Chest: 21 Inches (M),23 Inches (L).
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ23401302FZGRM`
    },  
    {
      images: ['/womansuits/MZ41000000006LSEEKS.jpg', '/womansuits/MZ41000000006LSEEKS-2.jpg',],
      title: `2pc Women's Stiched Arabic Lawn Embrodered Shirt And Trouser`,
      price: 'Rs2299',
      Description: `•  Gender: Women
•  Fabric: Lawn
•  Pattern: Embroidered
•  Neck Type: Round Neck
•  Shirt - Pattern: Embroidered
•  Trouser - Pattern: Plain
•  Available Sizes: Medium, Large
•  Shirt Length: 40 Inches
•  Shirt Chest: 21 Inches (M), 23 Inches (L)
•  Trouser Length: 37 Inches
•  Trouser Waist: 27 Inches
•  No. Of Pieces: 2 Pcs
•  Package Includes: 1 x Shirt, 1 x Trouser
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ41000000006LSEEKS`
    },  
    {
      images: ['/womansuits/MZ1102109AG.jpg', '/womansuits/MZ1102109AG-2.jpg','/womansuits/MZ1102109AG-3.jpg','/womansuits/MZ1102109AG-4.jpg',],
      title: `2pc Women's Stiched  Linan Sequiens Embrodered Shirt And Trouser`,
      price: 'Rs2199',
      Description: `  Gender: Women's
•  Fabric: Linen
•  Pattern: Sequins Embroidered
•  Shirt Pattern: Sequins Embroidered
•  Trouser Pattern: Plain
•  Available Sizes: Standard Size
•  Number Of Pieces: 2 Pcs
•  Shirt Length: 38 Inches
•  Shirt Chest: 21 Inches
•  Shirt Shoulder: 18 Inches
•  Arm Length: 10 Inches
•  Trouser Length: 37 Inches
•  Trouser Waist: 26 Inches
•  Trouser Hip: 15 Inches
•  Package Includes: 1 x Shirt, 1 x Trouser
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ1102109AG`
    },  
    // ... (same as before)
  ];

  const itemsToShow = 9;

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
  );
};

export default Handbags;
