"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Cosmetics = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const router = useRouter();

  const cards = [
    {
      images: ['/womansuits/MZ23900071GLMRS.jpg', '/womansuits/MZ23900071GLMRS-2.jpg','/womansuits/MZ23900071GLMRS-3.jpg','/womansuits/MZ23900071GLMRS-4.jpg','/womansuits/MZ23900071GLMRS-5.jpg',],
      title: '6 in 1 Matte LipStick Set',
      price: 'Rs999',
      Description:`•  Set Of 6
•  Matte Shades
•  Shades: Grapefruit Pink, Rotten Tomato, True Red, Diamond Red, Brick Red, And Reddish Brown
•  Disclaimer: Before using a new cosmetic product, try a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read warning labels and directions on the package for using any cosmetics.
•  Product Code: MZ23900071GLMRS`
    },
    {
      images: ['/womansuits/MZ90920010MPFR.jpg', '/womansuits/MZ90920010MPFR-2.jpg',],
      title: '16 items Makeup Deal',
      price: 'Rs2799',
      Description:`•  Fixer
•  Fitme Tube
•  Contour Stick
•  Loose Powder
•  Compact Powder
•  Primer
•  Gloss
•  Brushes Pack
•  Mascara
•  Liner
•  White Pencil
•  Lipstick
•  Dermatol
•  Blender
•  Iconic Highlighter
•  Pro Concealer
•  Weight: 0.5kg
•  Package Includes: 16 x Makeup Deal
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ90920010MPFR`
    },
    {
      images: ['/womansuits/MZ90900000001MPFR.jpg', '/womansuits/MZ90900000001MPFR-2.jpg',],
      title: 'Deal 15 Items',
      price: 'Rs2099',
      Description:`•  Package Includes: 
•  Deal Description:
•  1) Miss Rose Fixer
•  2) Miss Rose Foundation
•  3) Miss Rose Loose Powder
•  4) Miss Rose Kajal
•  5) Dermacol Base
•  6) 5 in 1 Lipstick
•  7) Fitme Primer
•  8) Flormar Pencil
•  9) White Pencil
•  10) Wow Gloss
•  11) Blender Puff
•  12) Pro Concealer
•  13) 36H Liner
•  14) Miss Rose Nailpolish
•  15) Essence Mascara 
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ90900000001MPFR`
    },
    
    {
      images: ['/womansuits/MZ20700035BTYGM.jpg', ],
      title: 'Heng Fang pack of 6 mini lipstick',
      price: 'Rs999',
      Description: `Brand: Heng Fang
•  Pack Of 6
•  Matte Lipsticks
•  Highly Pigmented
•  Disclaimer: Before using a new cosmetic product, try a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read warning labels and directions on the package for using any cosmetics.
•  Product Code: MZ20700035BTYGM`
    },
    {
      images: ['/womansuits/MZ18700649RFAAC.jpg', '/womansuits/MZ18700649RFAAC-2.jpg','/womansuits/MZ18700649RFAAC-3.jpg','/womansuits/MZ18700649RFAAC-4.jpg', ],
      title: '4 in1 makeup deal',
      price: 'Rs1299',
      Description: `•  Material: Liquid
•  Product Type: Highlighter, Eyeliner, Tint And Foundation
•  Package Includes: 1 x Foundation, 1 x Highlighter, 1 x Tint, 1 x Eyeliner
•  Foundation Shade: Natural
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin
•  If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction
•  Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ18700649RFAAC`
    },
    {
      images: ['/womansuits/MZ63900033TCGLW.jpg', '/womansuits/MZ63900033TCGLW-2.jpg','/womansuits/MZ63900033TCGLW-3.jpg','/womansuits/MZ63900033TCGLW-4.jpg'],
      title: `High Pigmented Liquid Highlighter`,
      price: 'Rs499',
      Description: `•  Material: Liquid
•  Product Type: High Pigmented Liquid Highlighter
•  Details: Highlighter Is A Lightweight, Creamy Formula That Is Easy To Blend And Provides A Natural Looking, Luminous Finish, The Ultimate Solution For Achieving A Glowing And Radiant Complexion
•  Shade: Shine 1.0, Original 2.0, Blossom 4.0
•  Package Includes: 1 x Liquid Highlighter
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin
•  If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction
•  Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ63900033TCGLW`
    },
    {
      images: ['/womansuits/MZ63900137TCGLW.jpg','/womansuits/MZ63900137TCGLW-2.jpg',],
      title: '24 hours waterproof foundation 35ml',
      price: 'Rs1199',
      Description:`•  Material: Liquid
•  Shade: 1, 2, 3, 4, 5
•  Product Feature: High Coverage
•  Package Includes: 1 x Foundation
•  Note: Before using any new cosmetic product, perform a patch test on a small skin area. Verify ingredients for allergies and follow package warnings and directions.
•  Product Code: MZ63900137TCGLW`
    },
    {
      images: ['/womansuits/MZ67400107CYCH.jpg', '/womansuits/MZ67400107CYCH-2.jpg', '/womansuits/MZ67400107CYCH.jpg', ],
      title: `Hair removal Spray ,150ml`,
      price: 'Rs799',
      Description:`•  Material: Liquid
•  Its A Revolutionary Solution Designed To Make Hair Removal Easier
•  Package Includes: 1 x Hair Removal Spray
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ67400107CYCH`
    },
    {
      images: ['/womansuits/MZ23900004GLMRS.jpg', '/womansuits/MZ23900004GLMRS-2.jpg', '/womansuits/MZ23900004GLMRS-3.jpg', '/womansuits/MZ23900004GLMRS-4.jpg',],
      title: 'Slique Eyebrow , Face Threding Remover Tool',
      price: 'Rs599',
      Description: `•  Brand: Slique
•  Removes Hair Instantly
•  Precise, Easy To Use Hair Removal
•  Twisted Thread Loops
•  Removes An Entire Straight Line Of Hairs At Once
•  Less Irritating To Skin Than Waxing
•  Product Code: MZ23900004GLMRS`
    },
   
    {
      images: ['/womansuits/MZ49200029AFTRD.jpg', '/womansuits/MZ49200029AFTRD-2.jpg', ],
      title: `2 in1 Eyebrow And Facial Hair Trimmer`,
      price: 'Rs1099',
      Description: `•  Material: ABS Plastic, Metal
•  Product Details: Remove Unwanted Facial Hair, Perfect For Eyebrows, Leaving Your Clean And Flawless, Safe And Gentle, Durable And Long Lasting, Easy To Use, Smooth Hair Free Skin
•  Package Includes: 1 x Trimmer
•  Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions
•  Product Code: MZ49200029AFTRD`
    },
    {
      images: ['/womansuits/MZ103420032FSBY.jpg', '/womansuits/MZ103420032FSBY-2.jpg', '/womansuits/MZ103420032FSBY-3.jpg',],
      title: `Hair oil`,
      price: 'Rs560',
      Description:`•  Material: Oil
•  Anti-Dandruff, Anti-Hair Fall, Damaged Hair
•  Package Includes: 1 x Hair Oil
•  Note: Before using any new cosmetic product, perform a patch test on a small skin area. Verify ingredients for allergies and follow package warnings and directions.
•  Product Code: MZ103420032FSBY`
    },

    {
      images: ['/womansuits/MZ23900139GLMRS.jpg', '/womansuits/MZ23900139GLMRS-2.jpg', '/womansuits/MZ23900139GLMRS-3.jpg', '/womansuits/MZ23900139GLMRS-4.jpg',],
      title: 'Matte Lip Gloss, Pack 12',
      price: '1399',
      Description:`•  Material: Cream
•  Product Type: Matte Lip Gloss
•  Product Details: Highly Pigmented, Soft And Smooth Texture Gives A Perfect Application, Rich Color, Beautiful Velvety Texture, Waterproof, Long Lasting
•  Package Includes: 12 x Lip Gloss
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin
•  If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction
•  Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ23900139GLMRS`
    },  
    {
      images: ['/womansuits/MZ726002809BSMCS.jpg', '/womansuits/MZ726002809BSMCS-2.jpg', '/womansuits/MZ726002809BSMCS-3.jpg', '/womansuits/MZ726002809BSMCS-4.jpg',],
      title: `10 in1 Makeup Deal`,
      price: '2099',
      Description:`•  Package Includes:
•  1 x 36H Liner
•  1 x Liquid Concealer(Random)
•  1 x Mascara
•  1 x Benetint
•  1 x Pro Conceal(Random)
•  1 x Fixer
•  1 x Liquid Highlighter(Random)
•  1 x Baby Skin
•  1 x Matte Foundation(Random)
•  1 x Beauty Blender
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ726002809BSMCS`
    },  
    {
      images: ['/womansuits/MZ18700311RFAAC.jpg',],
      title: `Nail Polish Pack of 12`,
      price: '999',
      Description:`•  Pack of 12
•  Nail Polish
•  Disclaimer: Before using a new cosmetic product, try a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read warning labels and directions on the package for using any cosmetics.
•  Product Code: MZ18700311RFAAC`
    },  
    {
      images: ['/womansuits/MZ83420001ASGM.jpg','/womansuits/MZ83420001ASGM-2.jpg',],
      title: `Elictric Heated Eyelash Curler`,
      price: '1099',
      Description:` Material: ABS Plastic
•  Power: 6W
•  Features: 2 Temperature Modes, Mini, Long-lasting
•  Size: 13cm x 6.5cm x 4.1cm/5.12" x 2.56" x 1.61" 
•  Package Includes: 1 x Curler
•  Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.
•  Product Code: MZ83420001ASGM`
    },  
    {
      images: ['/womansuits/MZ15300384WZRSP.jpg','/womansuits/MZ15300384WZRSP-2.jpg','/womansuits/MZ15300384WZRSP-3.jpg','/womansuits/MZ15300384WZRSP-4.jpg','/womansuits/MZ15300384WZRSP-5.jpg','/womansuits/MZ15300384WZRSP-6.jpg',],
      title: `3 in1 Hair Straightener curling irons`,
      price: '2999',
      Description:`•  Material: ABS Plastic, Metal
•  Hair Straightener Curling Irons KM-1291
•  Slim And Elegant Style
•  It Has Ion Technology To Soften Hair. Ions Can Neutralize The Cause Of Hair Damage
•  Soften Hair, And Repair Dry Hair Or Yellow Hair
•  Suitable For All Hair Types
•  Fast Heat Up Technology, Heat Within 1 Minute
•  Color: Black
•  Package Includes: 1 x Hair Straightener
•  Note: Please ensure to follow the instructions provided in the user manual for proper usage and safety precautions.
•  Product Code: MZ15300384WZRSP`
    },  
    {
      images: ['/womansuits/MZ95900000016STPSADCS.jpg','/womansuits/MZ95900000016STPSADCS-2.jpg','/womansuits/MZ95900000016STPSADCS-3.jpg','/womansuits/MZ95900000016STPSADCS-4.jpg',],
      title: `Long lasting Perfume for women 50ml`,
      price: '999',
      Description:`•  Fragrance: Fruity
•  Material: Oil
•  Top Note: Citrus And Fruity
•  Middle Note: Orange Blossom, Coffee
•  Base Note: Vanilla, Woody, Musky
•  Gender Type: Women
•  Quantity: 50 ml
•  Package Includes: 1 x Perfume
•  Note: For external use only. Patch test before regular use, Discontinue if irritation occurs|Avoid contact with eyes.
•  Product Code: MZ95900000016STPSADCS`
    },  
    {
      images: ['/womansuits/MZ2600350ARCC.jpg','/womansuits/MZ2600350ARCC-2.jpg','/womansuits/MZ2600350ARCC-3.jpg','/womansuits/MZ2600350ARCC-4.jpg',],
      title: `Set of 10 dragon  lipstick set`,
      price: '1599',
      Description:`•  Size: 10 Pcs
•  Brand: Dragon Ranee
•  Long Lasting Make-up
•  Easy To Carry
•  Product Code: MZ2600350ARCC`
    },  
    {
      images: ['/womansuits/MZ18700224RFAAC.jpg',],
      title: `Pack of 6 waterproof lipliner`,
      price: '499',
      Description:`•  Lipliner
•  Lipstick Pencils
•  High Pigmentation
•  Easy to Carry
•  Pack of 6
•  Waterproof
•  Product Code: MZ18700224RFAAC`
    },  
    {
      images: ['/womansuits/MZ18700411RFAAC.jpg','/womansuits/MZ18700411RFAAC-2.jpg','/womansuits/MZ18700411RFAAC-3.jpg',],
      title: `Makeup Brush Set of 10`,
      price: '650',
      Description:`•  Makeup Brush Set
•  Pack Of 10
•  Premium Synthetic Makeup Brushes
•  Soft And Non Shedding
•  Foundation, Blending, Face Powder, Eyeshadow, Eyebrows
•  Makeup Combo Brush Kit
•  Product Code: MZ18700411RFAAC`
    },  
    {
      images: ['/womansuits/MZ18700470RFAAC.jpg','/womansuits/MZ18700470RFAAC-2.jpg','/womansuits/ MZ18700470RFAAC-3.jpg',],
      title: `•  Vitamin C Serum 50 ml Whitening, Moisturizing And Anti Wrinkle`,
      price: '999',
      Description:`  Vitamin C Serum
•  50 ml
•  Whitening, Moisturizing And Anti Wrinkle
•  Vitamin C Face Serum Is A Thin And Extremely Efficient Serum That Is Easy To Use
•  It Will Aid In The Fading Of Sun Spots And Discoloration, The Refinement Of Skin Texture, The Reduction Of Wrinkle Production, And The Minimization Of Existing Wrinkles
•  All Skin Types
•  Disclaimer: Before Using A New Cosmetic Product, Try A Test On A Small Area Of Your Skin. If You Have A Specific Allergy Or Sensitivity, Check The Ingredients To Avoid A Reaction. Always Read Warning Labels And Directions On The Package For Using Any Cosmetics.
•  Product Code: MZ18700470RFAAC`
    },  
    {
      images: ['/womansuits/MZ60320022MNSRPS.jpg','/womansuits/MZ60320022MNSRPS-2.jpg','/womansuits/MZ60320022MNSRPS-3.jpg','/womansuits/MZ60320022MNSRPS-4.jpg','/womansuits/MZ60320022MNSRPS-5.jpg',],
      title: `Night cream`,
      price: '799',
      Description:`•  Package Includes: 1 x Night Cream
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ60320022MNSRPS`
    },  
    {
      images: ['/womansuits/MZ55000000001EISHAS.jpg','/womansuits/MZ55000000001EISHAS-2.jpg','/womansuits/MZ55000000001EISHAS-3.jpg','/womansuits/MZ55000000001EISHAS-4.jpg','/womansuits/MZ55000000001EISHAS-5.jpg','/womansuits/MZ55000000001EISHAS-6.jpg','/womansuits/MZ55000000001EISHAS-7.jpg',],
      title: `3 in 1 rice kit`,
      price: '1399',
      Description:`•  Material: Powder & Liquid
•  Package Includes: 
•   rice extract
•  3 steps facail kit
•   
•  Product Fragrance (YES) 
•  Product Warranty (7 days check warenty)
•  Product Ingredient (natural skin 
•  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read the warning labels and directions on the package for using any cosmetic products.
•  Product Code: MZ55000000001EISHAS`
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

export default Cosmetics;
