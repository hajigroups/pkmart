"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const WomanSuits = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const router = useRouter();

  const cards = [
    {
      images: ['/womansuits/MZ42200545ZUJFB.jpg', '/womansuits/MZ42200545ZUJFB-2.jpg'],
      title: '3 Pcs Womans Unstitched Dhanak Embroidered Suit',
      price: 'Rs3799',
      Description: `• Fabric: Dhanak
    • Shirt Front: Embroidered
    • Neckline: Embroidered Patch
    • Daman: Embroidered Patch
    • Back: Plain
    • Trouser Plain
    • Dupatta: Dhanak Printed
    • Cuttings: Shirt: 2.5 Gazz, Trouser: 2.5 Gazz, Dupatta: 2.5 Gazz
    • Season: Winters
    • Package Includes: 1 x Shirt, 1 x Trousers, 1 x Dupatta
    • Note: There might be 1-3 cm errors of dimension data due to pure manual measurement
    • There might be slight color differences due to different light and monitor effects.
    `
    },
    
    {
      images: ['/womansuits/MZ12320163HNBSSE.jpg', '/womansuits/MZ12320163HNBSSE-2.jpg'],
      title: '3 Pcs Womans Unstitched Lawn Embroidered Suit',
      price: 'Rs3800',
      Description: `•  Fabric: Lawn
    •  Pattern: Embroidered
    •  Shirt Front - Pattern: Embroidered
    •  Shirt Back: Plain
    •  Trouser - Pattern: Dyed
    •  Dupatta - Fabric: Bamber
    •  Dupatta - Pattern: Embroidered
    •  Number Of Pieces: 3 Pcs
    •  Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta
    •  Shirt Cutting: 2.5 Gazz
    •  Trouser Cutting: 2.5 Gazz
    •  Dupatta Cutting: 2.5 Gazz
    •  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
    •  Product Code: MZ12320163HNBSSE'`
    },
    {
      images: ['/womansuits/MZ12320337HNBSSE.jpg', '/womansuits/MZ12320337HNBSSE-2.jpg', '/womansuits/MZ12320337HNBSSE-3.jpg'],
      title: '2 Pcs Womans Unstitched Lawn Embroidered Suit',
      price: 'Rs2399',
      Description: `'  Fabric: Lawn
    •  Pattern: Embroidered
    •  Shirt Front Pattern: Embroidered
    •  Neckline: Embroidered
    •  Daman: Embroidered
    •  Shirt Back Pattern: Plain
    •  Trouser Pattern: Plain
    •  Number Of Pieces: 2 Pcs
    •  Color: Green
    •  Package Includes: 1 x Shirt, 1 x Trouser
    •  Shirt Cutting: 2.5 Meter
    •  Trouser Cutting: 2.5 Meter
    •   Pack Of 1
    •  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
    ' `
    },
    {
      images: ['/womansuits/MZ11201084LYLPR.jpg', '/womansuits/MZ11201084LYLPR-2.jpg'],
      title: '3 Pcs Womans Unstitched Lawn Embroidered Suit',
      price: 'Rs4199',
      Description: `•  Fabric: Lawn
    •  Pattern: Embroidered
    •  Shirt Front: Embroidered
    •  Shirt Back: Plain
    •  Trouser: Plain
    •  Dupatta: Bamber Chiffon Embroidered
    •  Shirt Cutting: 2.5 Gazz
    •  Trouser Cutting: 2.5 Gazz
    •  Dupatta Cutting: 2.5 Gazz
    •  Number Of Pieces: 3 Pcs
    •  Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta
    •  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
    `
    },
    {
      images: ['/womansuits/MZ12320036HNBSSE.jpg', '/womansuits/MZ12320036HNBSSE-2.jpg'],
      title: '3 Pcs Womans Unstitched Organza Embroidered Suit',
      price: 'Rs3599',
      Description: `•  Fabric: Lawn
    •  Pattern: Embroidered
    •  Shirt Front - Pattern: Embroidered
    •  Shirt Back: Plain
    •  Trouser - Pattern: Dyed
    •  Number Of Pieces: 2 Pcs
    •  Shirt Cutting: 2.5 Gaz
    •  Trouser Cutting: 2.5 Gaz
    •  Package Includes: 1 x Shirt, 1 x Trouser
    •  Disclaimer: Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects`
    },
    {
      images: ['/womansuits/MZ48320009ZABE.jpg', '/womansuits/MZ48320009ZABE-2.jpg', '/womansuits/MZ48320009ZABE-3.jpg', '/womansuits/MZ48320009ZABE-4.jpg'],
      title: `2 pc woman's Sticted linen Embroidered shirts and trouser`,
      price: 'Rs2000',
      Description: `•  Gender: Women's
    •  Fabric: Linen
    •  Pattern: Embroidered
    •  Neck Type: Round Neck
    •  Shirt Pattern: Embroidered
    •  Trouser Pattern: Embroidered
    •  Available Sizes: Medium
    •  Number Of Pieces: 2 Pcs
    •  Color: Red
    •  Package Includes: 1 x Shirt, 1 x Trouser
    •  Shirt Length: 37 Inches
    •  Shirt Chest: 20.5 Inches
    •  Trouser Length: 37 Inches
    •  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
    `
    },
    {
      images: ['/womansuits/MZ41000000023LSEEKS.jpg', '/womansuits/MZ41000000023LSEEKS-2.jpg', '/womansuits/MZ41000000023LSEEKS-3.jpg', '/womansuits/MZ41000000023LSEEKS-4.jpg', '/womansuits/MZ41000000023LSEEKS-5.jpg', '/womansuits/MZ41000000023LSEEKS-6.jpg', '/womansuits/MZ41000000023LSEEKS-7.jpg', '/womansuits/MZ41000000023LSEEKS-8.jpg'],
      title: '3pc Womans Stitched Organza Embroidered suit',
      price: 'Rs3699',
      Description: 'A luxurious timepiece crafted to perfection'
    },
    {
      images: ['/womansuits/MZ74820012TYLH.jpg', '/womansuits/MZ74820012TYLH-2.jpg', '/womansuits/MZ74820012TYLH-3.jpg', '/womansuits/MZ74820012TYLH-4.jpg', '/womansuits/MZ74820012TYLH-5.jpg',],
      title: '3 Pcs Womans stitched digital printed shirts and trouser ',
      price: 'Rs1299',
      Description: ` Gender: Women's
    •  Fabric: Linen
    •  Pattern: Digital Print
    •  Shirt - Pattern: Digital Print
    •  Trouser - Pattern: Printed
    •  Available Sizes: Medium
    •  Number Of Pieces: 2 Pcs
    •  Shirt Length: 36/37 Inches
    •  Shirt Chest: 20/21 Inches
    •  Trouser: 37 Inches
    •  Package Includes: 1 x Shirt, 1 x Trouser
    •  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
    `
    },
    {
      images: ['/womansuits/MZ41000000002LSEEKS.jpg', '/womansuits/MZ41000000002LSEEKS-2.jpg', '/womansuits/MZ41000000002LSEEKS-3.jpg', '/womansuits/MZ41000000002LSEEKS-4.jpg', '/womansuits/MZ41000000002LSEEKS-5.jpg',],
      title: '2 Pcs Womans stitched digital printed shirts and trouser',
      price: 'Rs2499',
      Description: `•  Gender: Women
    •  Fabric: Lawn
    •  Pattern: Embroidered
    •  Neck Type: Round Neck
    •  Shirt - Pattern: Embroidered
    •  Trouser - Pattern: Printed
    •  Available Sizes: Medium, Large
    •  Shirt Length: 42 Inches
    •  Shirt Chest: 21 Inches (M), 23 Inches (L)
    •  Trouser Length: 37 Inches
    •  Trouser Waist: 27 Inches
    •  No. Of Pieces: 2 Pcs
    •  Color: Black
    •  Package Includes: 1 x Shirt, 1 x Trouser
    •  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects`
    },
    {
      images: ['/womansuits/MZ19800361GWAS.jpg', '/womansuits/MZ19800361GWAS-2.jpg', '/womansuits/MZ19800361GWAS-3.jpg', '/womansuits/MZ19800361GWAS-4.jpg', '/womansuits/MZ19800361GWAS-5.jpg',],
      title: '2 pc woman stitched lawn digital print Shirt and trouser',
      price: 'Rs3299',
      Description: `•  Fabric: Lawn
    •  Pattern: Embroidered
    •  Shirt Front Pattern: Embroidered
    •  Shirt Back Pattern: Plain
    •  Trouser Pattern: Plain
    •  Number Of Pieces: 2 Pcs
    •  Color: Blue
    •  Package Includes: 1 x Shirt, 1 x Trouser
    •  Shirt Cutting: 2.25 Gazz
    •  Trouser Cutting: 2.25 Gazz
    •  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
    `
    },  
    {
      images: ['/womansuits/MZ106820049SDAS.jpg', '/womansuits/MZ106820049SDAS-2.jpg', '/womansuits/MZ106820049SDAS-3.jpg', '/womansuits/MZ106820049SDAS-4.jpg',],
      title: `2pcs Women's Stitched linen Printed  Shirt And Trouser`,
      price: 'Rs2399',
      Description: `•  Gender: Women's
•  Fabric: Linen
•  Pattern: Printed
•  Shirt Pattern: Embroidered
•  Trouser Pattern: Embroidered
•  Available Sizes: Medium, Large
•  Number Of Pieces: 2 Pcs
•  Color: Black
•  Package Includes: 1 x Shirt, 1 x Trouser
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ106820049SDAS`
    },  
    {
      images: ['/womansuits/MZ106820048SDAS.jpg', '/womansuits/MZ106820048SDAS-2.jpg', '/womansuits/MZ106820048SDAS-3.jpg', '/womansuits/MZ106820048SDAS-4.jpg',],
      title: `2pcs Women's Stitched linen Printed  Shirt And Trouser`,
      price: 'Rs2399',
      Description: `•  Gender: Women's
•  Fabric: Linen
•  Pattern: Printed
•  Shirt Pattern: Embroidered
•  Trouser Pattern: Embroidered
•  Available Sizes: Medium, Large
•  Number Of Pieces: 2 Pcs
•  Color: Blue
•  Package Includes: 1 x Shirt, 1 x Trouser
•  Shirt Length: (M-37), (L-38) Inches
•  Shirt Chest: (M_21), (L-23) Inches
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ106820048SDAS`
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
    
    {
      images: ['/womansuits/MZ92820146PKLS-4.jpg', '/womansuits/MZ92820146PKLS-2.jpg','/womansuits/MZ92820146PKLS-3.jpg','/womansuits/MZ92820146PKLS-4.jpg'],
      title: `2pc Women's Stiched Arabic Lawn Embrodered Shirt And Trouser`,
      price: 'Rs2199',
      Description: `•  Gender: Women's
•  Fabric: Arabic Lawn
•  Pattern: Embroidered
•  Shirt Pattern: Embroidered
•  Trouser Pattern: Plain
•  Available Sizes: Medium, Large
•  Number Of Pieces: 2 Pcs
•  Shirt Length: (M-38), (L-38) Inches
•  Shirt Chest: (M-21), (L-23) Inches
•  Trouser Length: (M-38), (L-38) Inches
•  Package Includes: 1 x Shirt, 1 x Trouser
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ92820146PKLS`
    },  
    {
      images: ['/womansuits/MZ1102079AG-4.jpg', '/womansuits/MZ1102079AG-2.jpg','/womansuits/MZ1102079AG-3.jpg','/womansuits/MZ1102079AG.jpg','/womansuits/MZ1102079AG-5.jpg',],
      title: `2pc woman stiched linan`,
      price: 'Rs1099',
      Description: `•  Gender: Women's
•  Fabric: Linen
•  Pattern: Printed
•  Shirt - Pattern: Printed
•  Trouser - Pattern: Printed
•  Available Sizes: Medium, Large
•  Medium:
•  Shirt Length: 37 Inches
•  Shirt Chest: 20.5 Inches
•  Trouser Length: 37 Inches
•  Trouser Waist: 25 Inches
•  Large:
•  Shirt Length: 38 Inches
•  Shirt Chest: 22.5 Inches
•  Trouser Length: 37 Inches
•  Trouser Waist: 28 Inches
•  Number Of Pieces: 2 Pcs
•  Package Includes: 1 x Shirt, 1 x Trouser
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ1102079AG`
    },  
    {
      images: ['/womansuits/MZ48000049BRKCL.jpg', '/womansuits/MZ48000049BRKCL-2.jpg','/womansuits/MZ48000049BRKCL-3.jpg',],
      title: `2pc woman  stiched linan printed suit`,
      price: 'Rs1099',
      Description: `•  Fabric: Linen
•  Pattern: Printed
•  Available Sizes: Medium
•  Medium Dimensions: Shirt Length: 38 Inches, Chest: 21 Inches, Trouser Length: 37 Inches, Waist: 25 inches
•  Includes: 1 x Shirt, 1 x Trouser
•  Disclaimer: Product color may slightly vary due to photographic lighting sources or your monitor settings
•  There might be 1-3cm errors of dimension data due to pure manual measurement.
•  Product Code: MZ48000049BRKCL`
    },  
    
    {
      images: ['/womansuits/MZ73800052ZAAS.jpg', '/womansuits/MZ73800052ZAAS-2.jpg','/womansuits/MZ73800052ZAAS-3.jpg','/womansuits/MZ73800052ZAAS-4.jpg',],
      title: `3pc woman stiched katan silk plain suit`,
      price: 'Rs1399',
      Description: `•  Gender: Women's
•  Fabric: Katan Silk
•  Pattern: Plain Embroidered Sleeves
•  Shirt - Pattern: Plain
•  Trouser - Pattern: Plain
•  Dupatta - Pattern: Plain
•  Available Sizes: Standard Size
•  Number Of Pieces: 3 Pcs
•  Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta
•  Shirt Length: 38 Inches
•  Shirt Chest: 21 Inches
•  Trouser Length: 38 Inches
•  Trouser Waist: 21 Inches
•  Dupatta Dimensions: 2.5 Gazz
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ73800052ZAAS`
    },  
    {
      images: ['/womansuits/MZ92820092PKLS.jpg', '/womansuits/MZ92820092PKLS-2.jpg','/womansuits/MZ92820092PKLS-3.jpg','/womansuits/MZ92820092PKLS-4.jpg',],
      title: `3pc  womans stiched organza embriodered suit `,
      price: 'Rs2399',
      Description: `•  Gender: Women's
•  Fabric: Organza
•  Pattern: Embroidered
•  Shirt - Pattern: Embroidered
•  Trouser - Pattern: Embroidered
•  Dupatta - Pattern: Embroidered
•  Available Sizes: Medium-Large
•  Number Of Pieces: 3 Pcs
•  Package Includes: 1 x Shirt, 1 x Trouser, 1 x Dupatta
•  Shirt Length: 38 Inches
•  Shirt Chest: 21/23 Inches
•  Trouser Length: 38 Inches
•  Note: There might be an error of 1-3 cm due to manual measurement, and slight color differences may occur as a result of varying lighting and monitor effects.
•  Product Code: MZ92820092PKLS`
    },  
    {
      images: ['/womansuits/MZ41000000021LSEEKS.jpg', '/womansuits/MZ41000000021LSEEKS-2.jpg','/womansuits/MZ41000000021LSEEKS-3.jpg','/womansuits/MZ41000000021LSEEKS-4.jpg','/womansuits/MZ41000000021LSEEKS-5.jpg','/womansuits/MZ41000000021LSEEKS-6.jpg','/womansuits/MZ41000000021LSEEKS-7.jpg',],
      title: `2pcs woman stiched Cotton Printed shirt And trouser `,
      price: 'Rs2799',
      Description: `•  Gender: Women's
•  Fabric: Cotton
•  Pattern: Printed
•  Shirt - Pattern: Printed
•  Trouser - Pattern: Plain
•  Available Sizes: Medium
•  Number Of Pieces: 2 Pcs
•  Shirt Length: 39 Inches
•  Shirt Chest: 21 Inches
•  Shirt Shoulder: 10 Inches
•  Arm Length: 10 Inches
•  Trouser Length: 38 Inches
•  Trouser Waist: 27 Inches
•  Trouser Hip: 16 Inches
•  Sizes: Large
•  Shirt Size 
•  Length: 38
•  Chest: 23
•  Armhole: 9.5
•  Bazo: 21
•  Teera: 15
•  Trouser size 
•  Pattern: Brand pattern
•  Length: 39
•  Width: 28 
•  Asan: 16
•  Package Includes: 1 x Shirt, 1 x Trouser
•  undefined
•  Product Code: MZ41000000021LSEEKS`
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

export default WomanSuits;
