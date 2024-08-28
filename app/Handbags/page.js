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
      images: ['/womansuits/MZ60500243BGWRD.jpg', '/womansuits/MZ60500243BGWRD-2.jpg',],
      title: `3pc Woman's PU leather Plain Handbag`,
      price: 'Rs2399',
      Description:`•  Material: PU Leather
•  Product Type: Handbag, Crossbody & Clutch
•  Pattern Design: Plain
•  Details: Elegant, Easy To Carry, Everyday Use
•  Size: HandBag (10 x 11 Inches), Cross Body (7.5 x 7 Inches), Clutch (4 x 8 Inches)
•  Package Includes: 1 x HandBag, 1 x Crossbody, 1 x Clutch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.



`
    },
    {
      images: ['/womansuits/MZ80400024EMSTR.jpg', '/womansuits/MZ80400024EMSTR-2.jpg',],
      title: `3pc Woman's PU leather Plain Handbag`,
      price: 'Rs2199',
      Description:`•  Material: PU Leather
•  Product Type: 3 Pcs Bags
•  Pattern Design: Plain
•  Details: Elegant, Easy To Carry, Everyday Use
•  Size: 14 X 11.5 X 4.5 Inches
•  Package Includes: 1 x Large Bag, 1 x Pouch, 1 x Clutch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.


`
    },
    {
      images: ['/womansuits/MZ80400030EMSTR.jpg', '/womansuits/MZ80400030EMSTR-2.jpg',],
      title: `2pcs Woman's PU Leather  plain Handbag`,
      price: 'Rs2099',
      Description:`•  Material: PU Leather
•  Product Type: 2 Pcs Bags
•  Pattern Design: Plain
•  Details: Elegant, Easy To Carry, Everyday Use
•  Size: 10 X 8.5 X 4.5 Inches
•  Package Includes: 1 x Large Bag, 1 x Pouch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.

`
    },
    {
      images: ['/womansuits/MZ60500374BGWRD.jpg', '/womansuits/MZ60500374BGWRD-2.jpg','/womansuits/MZ60500374BGWRD-3.jpg'],
      title: `3 Pcs Woman's Shoulder Bag`,
      price: 'Rs2399',
      Description:`•  Material/Fabric: Leather
•  Product Pattern: Plain
•  No. Of Pieces: 3 Pcs
•  (1 x Shoulder Bag, 1 x Cross Body, 1 x Clutch)
•  Size:  Shoulder Bag (10 x 11 Inches), Cross Body (6 x 8 Inches)             
•   Package Includes: 1 x Shoulder Bag
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
`
    },
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
`
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
`
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
`
    },
    {
      images: ['/womansuits/MZ57200041GLSNC.jpg', '/womansuits/MZ57200041GLSNC-2.jpg'],
      title: 'Women pure leather Textured Top handle Sholder Bag,Pack of 3',
      price: 'Rs2499',
      Description: `•  Material: Pu Leather
•  Product Type: Shoulder Bag
•  Product Pattern: Textured
•  Details: Zip Closure
•  Size: 10 X 12 Inches
•  Package Includes: 1 X Handbag, 1 X Makeup Pouch, 1 X Wallet, 1X Long Strap, 1 X Golden Chain, 1 X Keychain
•  Package Includes: 1 X Shoulder Bag
•  Note: There Might Be An Error Of 1-3 Cm Due To Manual Measurement, And Slight Color Differences May Occur As A Result Of Varying Lighting And Monitor Effects.
`
    },
    {
      images: ['/womansuits/MZ57200010GLSNC.jpg',],
      title: 'Women pure leather Plain Top handle Sholder Bag',
      price: 'Rs2499',
      Description:`•  Material: PU Leather 
•  Details: Pack of 3 Pcs Set
•  Size: 10 x 12 Inches 
•  Strap Color/Type: Long Strap/Chain 
•  Package Includes: 1 x Handbag, 1 x Makeup pouch, 1 x Wallet, 1x long strap, 1 x Golden Chain, 1 x Keychain
•  Ideal for Office and Party 
•  Note: There might be 1-3 Cm errors of dimension data due to pure manual measurement
•  There might be slight color differences due to different light and monitor effect.
`
    },
    {
      images: ['/womansuits/MZ13120001ZHHE.jpg', '/womansuits/MZ13120001ZHHE-2.jpg', '/womansuits/MZ13120001ZHHE-3.jpg', ],
      title: `Women,s Pure Leather Textured Handbag`,
      price: 'Rs2499',
      Description:`•  Material: PU Leather
•  Pattern: Textured
•  Number Of Pieces: 1 Pc
•  Gender: Women's
•  Color: Green
•  Package Includes: 1 x Hand Bag
•  Size:10×9 inches
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
`
    },
    {
      images: ['/womansuits/MZ61220084FECS.jpg', '/womansuits/MZ61220084FECS-2.jpg', '/womansuits/MZ61220084FECS-3.jpg', '/womansuits/MZ61220084FECS-4.jpg',],
      title: 'GIRLS Rexine Textured Had bag',
      price: 'Rs2499',
      Description: `•  Material: Rexine
•  Pattern: Textured
•  Number Of Pieces: 1 Pc
•  Gender: Girl's
•  Color: Brown
•  Package Includes: 1 x Hand Bag
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
`
    },
   
    {
      images: ['/womansuits/MZ60500318BGWRD.jpg', '/womansuits/MZ60500318BGWRD-2.jpg', '/womansuits/MZ60500318BGWRD-3.jpg', ],
      title: `Women's leather plain  shoulder bag pack of 3`,
      price: 'Rs2899',
      Description: `•  Material: Leather
•  Product Type: Pack Of 3 Shoulder Bag
•  Product Pattern: Plain
•  Details: 1 Main Zip Closure, Easy To Carry, Elegant, Perfect For Daily Use
•  Size: (Shoulder Bag: 13 x 11 Inches), (Crossbody Bag: 6 x 6 Inches)
•  Strap Color/Type: Long Shoulder Strap
•  Package Includes: 1 x Shoulder Bag, 1 x Crossbody Bag, 1 x Wallet
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
`
    },
    {
      images: ['/womansuits/MZ60500369BGWRD.jpg', '/womansuits/MZ60500369BGWRD-2.jpg', '/womansuits/MZ60500369BGWRD-3.jpg',],
      title: `3 pcs women's leather plain handbag set`,
      price: 'Rs2899',
      Description:`•  Material: Leather
•  Product Type: 3 Pcs Hand Bag Set
•  Pattern Design: Plain
•  Details: Elegant, Easy To Carry, Everyday Use
•  With Long Shoulder Strap
•  Package Includes: 1 x Shoulder Bag With Strap(10 x 11 Inches), 1 x Cross Body (6 x 8 Inches)
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
`
    },

    {
      images: ['/womansuits/MZ62420015BSWD.jpg', '/womansuits/MZ62420015BSWD-2.jpg', '/womansuits/MZ62420015BSWD-3.jpg', '/womansuits/MZ62420015BSWD-4.jpg', '/womansuits/MZ62420015BSWD-5.jpg','/womansuits/MZ62420015BSWD-6.jpg',],
      title: '2 pc woman stitched lawn digital print Shirt and trouser',
      price: 'Remain',
      Description:`•  Material: Leather
•  Pattern: Printed
•  No. Of Pieces: 2 Pc
•  Color: White
•  Package Includes: 1 x Hand Bag, 1 x Crossbody Bag
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
`
    },  
    {
      images: ['/womansuits/MZ97700000025STPK.jpg', '/womansuits/MZ97700000025STPK-2.jpg', '/womansuits/MZ97700000025STPK-3.jpg', '/womansuits/MZ97700000025STPK-4.jpg','/womansuits/MZ97700000025STPK-5.jpg','/womansuits/MZ97700000025STPK-6.jpg','/womansuits/MZ97700000025STPK-7.jpg','/womansuits/MZ97700000025STPK-8.jpg',],
      title: `4 PC women's Royal PU leather shoulder bag`,
      price: 'remain',
      Description:`•  Material/Fabric: PU Leather
•  Product Pattern: Plain
•  No. Of Pieces: 4 Pcs
•  Size Dimensions: -
•  Handbag: Height 9 Inches, Width 9 Inches, Bottom 4 Inches
•  Makeup Bag: Height 6 Inches, Width 8 Inches, Bottom 1.8 Inches
•  Clutch: Height 4 Inches, Width 6 Inches
•  Card Diary: Height 2 Inches, Width 2 Inches
•  Package Includes: 1 x Shoulder Bag, 1 x Makeup Pouch, 1 x Clutch, 1 x Card Diary
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
`
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
      <title>Woman Handbags</title>
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

export default Handbags;
