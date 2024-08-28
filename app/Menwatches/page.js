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
            images: ['/womansuits/MZ13500476SRSTR.jpg', '/womansuits/MZ13500476SRSTR-2.jpg', '/womansuits/MZ13500476SRSTR-3.jpg', '/womansuits/MZ13500476SRSTR-4.jpg', '/womansuits/MZ13500476SRSTR-5.jpg',],
            title: 'Mens Formal Analogue Watch',
            price: 'Rs4799',
            Description: `•  Material: Stainless Steel And Leather
•  Brand: Armani
•  Diameter: 35mm
•  Dial: Round
•  Product Code: MZ13500476SRSTR`
        },
        {
            images: ['/womansuits/MZ13500477SRSTR.jpg', '/womansuits/MZ13500477SRSTR-2.jpg', '/womansuits/MZ13500477SRSTR-3.jpg', '/womansuits/MZ13500477SRSTR-4.jpg',],
            title: 'Mens Formal Analogue Watch',
            price: 'Rs4799',
            Description: `•  Material: Stainless Steel
•  Brand: Rolex
•  Diameter: 35mm
•  Dial: Round
•  Product Code: MZ13500477SRSTR`
        },
        {
            images: ['/womansuits/MZ7500164FZI.jpg', '/womansuits/MZ7500164FZI-2.jpg', '/womansuits/MZ7500164FZI-3.jpg', '/womansuits/MZ7500164FZI-4.jpg',],
            title: 'Mens semi formal analog watch',
            price: 'Rs2899',
            Description: `•  Material: Stainless Steel
•  Stainless Steel Wrist Band
•  Suitable For Gents
•  Style: Wrist Watch
•  Type: Fashion Watches
•  Display: Analog With Date Adjust Functions
•  Display Format: 12 Hours Format
•  Water Resistant
•  Suitable For Everyday Use
•  Product Code: MZ7500164FZI`
        },

        {
            images: ['/womansuits/MZ7500206FZI.jpg', '/womansuits/MZ7500206FZI-2.jpg',],
            title: 'Mens causal Analogue watch',
            price: 'Rs1499',
            Description: `•  Material: Steel
•  Wristband Material: Rubber
•  Gender: Men’s
•  Style: Wrist Watch
•  Display Format: 12-Hour Format
•  Water Resistant
•  Product Code: MZ7500206FZI`
        },
        {
            images: ['/womansuits/MZ14600064SRSE.jpg', '/womansuits/MZ14600064SRSE-2.jpg', '/womansuits/MZ14600064SRSE-3.jpg', '/womansuits/MZ14600064SRSE-4.jpg', '/womansuits/MZ14600064SRSE-6.jpg',],
            title: 'Mens Classic Analogue watch',
            price: 'Rs4899',
            Description: `•  Material: Stainless Steel
•  Dial Size: 44 mm
•  Movement Quarts 
•  Number Of Pieces: 1 Pc
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ14600064SRSE`
        },
        {
            images: ['/womansuits/MZ135005576SRSTR.jpg', '/womansuits/MZ135005576SRSTR-2.jpg', '/womansuits/MZ135005576SRSTR-3.jpg', '/womansuits/MZ135005576SRSTR-4.jpg'],
            title: `Men's Analogue Formal Watch`,
            price: 'Rs4899',
            Description: `•  Material: Stainless Steel
•  Product Type: Wrist Watch
•  Dial Size: 42mm
•  Watch Case Shape: Round
•  Details: Strap Material: Stainless Steel, Movement: Quartz
•  Package Includes: 1 x Watch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ135005576SRSTR`
        },
        {
            images: ['/womansuits/MZ14600094SRSE.jpg', '/womansuits/MZ14600094SRSE-2.jpg','/womansuits/MZ14600094SRSE-3.jpg','/womansuits/MZ14600094SRSE-4.jpg',],
            title: 'Mens wrist watch',
            price: 'Rs4899',
            Description: `•  Material: Stainless Steel
•  Gender: Men's
•  Movement Quartz
•  Dial Size: 42mm
•  Watch Case Shape: Round
•  Number Of Pieces: 1 Pc
•  Package Includes: 1 x Watch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ14600094SRSE`
        },
        {
            images: ['/womansuits/MZ14600039SRSE.jpg', '/womansuits/MZ14600039SRSE-2.jpg', '/womansuits/MZ14600039SRSE-3.jpg','/womansuits/MZ14600039SRSE-4.jpg',],
            title: `Mens classic analogue watch`,
            price: 'Rs4899',
            Description: `Material: Stainless Steel
•  Dial Size: 42 mm
•  Movement Quarts
•  Number Of Pieces: 1 Pc
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ14600039SRSE`
        },
        {
            images: ['/womansuits/MZ7500282FZI.jpg', '/womansuits/MZ7500282FZI-2.jpg', '/womansuits/MZ7500282FZI-3.jpg', '/womansuits/MZ7500282FZI-4.jpg',],
            title: 'Mens formak analogue watch',
            price: 'Rs4999',
            Description: `•  Material: Stainless Steel
•  Product Type: Watch
•  Watch Case Shape: Round
•  Details: Strap Material:Stainless steal
•  Movement: Quartz, Water Resistant
•  Display Format: 12-Hour Format
•  Package Includes: 1 x Watch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ7500282FZI`
        },

        {
            images: ['/womansuits/MZ7500278FZI.jpg', '/womansuits/MZ7500278FZI-2.jpg','/womansuits/MZ7500278FZI-3.jpg','/womansuits/MZ7500278FZI-4.jpg','/womansuits/MZ7500278FZI-5.jpg','/womansuits/MZ7500278FZI-6.jpg',],
            title: `Mens formal analogue watch`,
            price: 'Rs5599',
            Description: `  Material: Stainless Steel
•  Product Type: Watch
•  Watch Case Shape: Square
•  Details: Strap Material: Rubber Strap
•  Movement: Quartz, Water Resistant
•  Display Format: 12-Hour Format
•  Package Includes: 1 x Watch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ7500278FZI`
        },
        {
            images: ['/womansuits/MZ13500547SRSTR.jpg', '/womansuits/MZ13500547SRSTR-2.jpg', '/womansuits/MZ13500547SRSTR-3.jpg',],
            title: `Mens Wrist watch`,
            price: 'Rs5599',
            Description: `•  Material: Stainless Steel & Rubber
•  Product Type: Wrist Watch
•  Dial Diameter: 35 mm
•  Movement Quartz
•  Display Format: 12-Hour Format
•  Package Includes: 1 x Watch
•  Note: There might be 1-3 Cm errors of dimension data due to pure manual measurement
•  There might be slightly color difference due to different light and monitor effect.
•  Product Code: MZ13500547SRSTRR`
        },

        {
            images: ['/womansuits/MZ14600105SRSE.jpg', '/womansuits/MZ14600105SRSE-2.jpg', '/womansuits/MZ14600105SRSE-3.jpg', '/womansuits/MZ14600105SRSE-4.jpg',],
            title: 'Men wrist watch',
            price: '4899',
            Description: `•  Material: Stainless Steel
•  Gender: Men's
•  Dial Size: 42mm
•  Movement Quartz
•  Case Shape: Round
•  Number Of Pieces: 1 Pc
•  Package Includes: 1 x Watch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ14600105SRSE`
        },
        {
            images: ['/womansuits/MZ14600033SRSE.jpg', '/womansuits/MZ14600033SRSE-2.jpg', '/womansuits/MZ14600033SRSE-3.jpg', '/womansuits/MZ14600033SRSE-4.jpg',],
            title: `Men wrist watch`,
            price: '4499',
            Description: `•  Material: Stainless Steel
•  Dial Size: 42 mm
•  Movement Quarts
•  Number Of Pieces: 1 Pc
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ14600033SRSE`
        },
        {
            images: ['/womansuits/MZ14600110SRSE.jpg','/womansuits/MZ14600110SRSE-2.jpg','/womansuits/MZ14600110SRSE-3.jpg','/womansuits/MZ14600110SRSE-4.jpg',],
            title: `Men Wrist Watch`,
            price: '4899',
            Description: `•  Material: Stainless Steel
•  Gender: Men's
•  Dial Size: 42mm
•  Movement Quartz
•  Case Shape: Round
•  Number Of Pieces: 1 Pc
•  Package Includes: 1 x Watch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ14600110SRSE`
        },
        {
            images: ['/womansuits/MZ7500281FZI.jpg', '/womansuits/MZ7500281FZI-2.jpg','/womansuits/MZ7500281FZI-3.jpg',],
            title: `Men Wrist Watch`,
            price: '5000',
            Description: `•  Material: Stainless Steel
•  Product Type: Watch
•  Watch Case Shape: Round
•  Details: Strap Material:Stainless steal
•  Movement: Quartz, Water Resistant
•  Display Format: 12-Hour Format
•  Package Includes: 1 x Watch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ7500281FZI`
        },
        {
            images: ['/womansuits/MZ7500160FZI.jpg', '/womansuits/MZ7500160FZI-2.jpg', '/womansuits/MZ7500160FZI-3.jpg', '/womansuits/MZ7500160FZI-4.jpg',],
            title: `Mens Wrist Watch`,
            price: '1599',
            Description: `•  Material: Stainless Steel
•  Rubber Strap
•  Suitable For Gents
•  Style: Wrist Watch
•  Type: Fashion Watches
•  Display: Analog
•  Display Format: 12 Hours Format
•  Water Resistant
•  Suitable For Everyday Use
•  Product Code: MZ7500160FZI`
        },
        {
            images: ['/womansuits/MZ10200906AHGFT.jpg', '/womansuits/MZ10200906AHGFT-2.jpg', '/womansuits/MZ10200906AHGFT-3.jpg', ],
            title: `Wrist Watch`,
            price: '1399',
            Description: `•  Material: Stainless Steel
•  Product Type: Wrist Watch
•  Details: Strap Material: Stainless Steel, Movement: Quartz, Water Resistance, Dial Size: 32mm
•  Package Includes: 1 x Watch
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ10200906AHGFT`
        },
//         {
//             images: ['/womansuits/MZ2600350ARCC.jpg', '/womansuits/MZ2600350ARCC-2.jpg', '/womansuits/MZ2600350ARCC-3.jpg', '/womansuits/MZ2600350ARCC-4.jpg',],
//             title: `Set of 10 dragon  lipstick set`,
//             price: '1599',
//             Description: `•  Size: 10 Pcs
// •  Brand: Dragon Ranee
// •  Long Lasting Make-up
// •  Easy To Carry
// •  Product Code: MZ2600350ARCC`
//         },
//         {
//             images: ['/womansuits/MZ18700224RFAAC.jpg',],
//             title: `Pack of 6 waterproof lipliner`,
//             price: '499',
//             Description: `•  Lipliner
// •  Lipstick Pencils
// •  High Pigmentation
// •  Easy to Carry
// •  Pack of 6
// •  Waterproof
// •  Product Code: MZ18700224RFAAC`
//         },
//         {
//             images: ['/womansuits/MZ18700411RFAAC.jpg', '/womansuits/MZ18700411RFAAC-2.jpg', '/womansuits/MZ18700411RFAAC-3.jpg',],
//             title: `Makeup Brush Set of 10`,
//             price: '650',
//             Description: `•  Makeup Brush Set
// •  Pack Of 10
// •  Premium Synthetic Makeup Brushes
// •  Soft And Non Shedding
// •  Foundation, Blending, Face Powder, Eyeshadow, Eyebrows
// •  Makeup Combo Brush Kit
// •  Product Code: MZ18700411RFAAC`
//         },
//         {
//             images: ['/womansuits/MZ18700470RFAAC.jpg', '/womansuits/MZ18700470RFAAC-2.jpg', '/womansuits/ MZ18700470RFAAC-3.jpg',],
//             title: `•  Vitamin C Serum 50 ml Whitening, Moisturizing And Anti Wrinkle`,
//             price: '999',
//             Description: `  Vitamin C Serum
// •  50 ml
// •  Whitening, Moisturizing And Anti Wrinkle
// •  Vitamin C Face Serum Is A Thin And Extremely Efficient Serum That Is Easy To Use
// •  It Will Aid In The Fading Of Sun Spots And Discoloration, The Refinement Of Skin Texture, The Reduction Of Wrinkle Production, And The Minimization Of Existing Wrinkles
// •  All Skin Types
// •  Disclaimer: Before Using A New Cosmetic Product, Try A Test On A Small Area Of Your Skin. If You Have A Specific Allergy Or Sensitivity, Check The Ingredients To Avoid A Reaction. Always Read Warning Labels And Directions On The Package For Using Any Cosmetics.
// •  Product Code: MZ18700470RFAAC`
//         },
//         {
//             images: ['/womansuits/MZ60320022MNSRPS.jpg', '/womansuits/MZ60320022MNSRPS-2.jpg', '/womansuits/MZ60320022MNSRPS-3.jpg', '/womansuits/MZ60320022MNSRPS-4.jpg', '/womansuits/MZ60320022MNSRPS-5.jpg',],
//             title: `Night cream`,
//             price: '799',
//             Description: `•  Package Includes: 1 x Night Cream
// •  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read the warning labels and directions on the package for using any cosmetic products.
// •  Product Code: MZ60320022MNSRPS`
//         },
//         {
//             images: ['/womansuits/MZ55000000001EISHAS.jpg', '/womansuits/MZ55000000001EISHAS-2.jpg', '/womansuits/MZ55000000001EISHAS-3.jpg', '/womansuits/MZ55000000001EISHAS-4.jpg', '/womansuits/MZ55000000001EISHAS-5.jpg', '/womansuits/MZ55000000001EISHAS-6.jpg', '/womansuits/MZ55000000001EISHAS-7.jpg',],
//             title: `3 in 1 rice kit`,
//             price: '1399',
//             Description: `•  Material: Powder & Liquid
// •  Package Includes: 
// •   rice extract
// •  3 steps facail kit
// •   
// •  Product Fragrance (YES) 
// •  Product Warranty (7 days check warenty)
// •  Product Ingredient (natural skin 
// •  Disclaimer: Before using a new cosmetic product, conduct a test on a small area of your skin. If you have a specific allergy or sensitivity, check the ingredients to avoid a reaction. Always read the warning labels and directions on the package for using any cosmetic products.
// •  Product Code: MZ55000000001EISHAS`
//         },

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
      <title>Watches</title>
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

export default Cosmetics;
