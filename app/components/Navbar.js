"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useAuth } from './AuthContext'; // Adjust the path if necessary

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname

  // State to manage dropdown visibility
  const [showDropdown, setShowDropdown] = useState(false); 
  const [activeSubDropdown, setActiveSubDropdown] = useState(null);

  // State for search bar
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Ref for the dropdown container
  const dropdownRef = useRef(null);

  // List of pages for search
  const pages = [
    { name: 'Home', href: '/' },
    { name: 'Contact', href: '/Contact' },
    { name: 'Services', href: '/Services' },
    { name: 'Suits', href: '/WomanSuits' },
    { name: 'Shoes', href: '/Womanshoes' },
    { name: 'Handbags', href: '/Handbags' },
    { name: 'Cosmetics', href: '/cosmetics' },
    { name: 'Watches', href: '/Menwatches' },
    { name: 'Casual', href: '/casual' },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Living Room', href: '/living-room' },
    { name: 'Bedroom', href: '/bedroom' },
    { name: 'Decor', href: '/decor' },
    { name: 'Utensils', href: '/utensils' },
    { name: 'Appliances', href: '/appliances' },
    { name: 'Storage', href: '/storage' },
    { name: 'About Us', href: '/About' }
  ];

  const handleLogout = () => {
    logout(); // Call the logout function from context
    router.push('/Login'); // Redirect to the login page
  };

  // Toggle the main dropdown and close any open sub-dropdowns
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
    if (!showDropdown) {
      setActiveSubDropdown(null); // Close all sub-dropdowns when opening the main dropdown
    }
  };

  // Handle sub-dropdown toggles and ensure only one is open
  const handleSubDropdownToggle = (dropdown) => {
    setActiveSubDropdown(prevDropdown => (prevDropdown === dropdown ? null : dropdown));
  };

  // Function to determine if the link is active
  const isActive = (path) => pathname === path;

  // Handle clicks outside the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false); // Close the dropdown when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filter pages based on the search query
  useEffect(() => {
    if (searchQuery) {
      const results = pages.filter(page =>
        page.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <nav className="flex flex-col lg:flex-row justify-between items-center p-4 md:p-6 bg-white shadow-md">
      <div className="logo mb-4 lg:mb-0">
        <img src="logo2.png" className="w-36" alt="Logo" />
      </div>
      <div className="relative w-full lg:w-auto mb-4 lg:mb-0">
        <input
          type="text"
          placeholder="Search..."
          className="w-full lg:w-64 p-2 border rounded"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        {searchQuery && searchResults.length > 0 && (
          <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-full lg:w-64">
            {searchResults.map(result => (
              <li key={result.href}>
                <Link
                  href={result.href}
                  className={`block py-2 px-4 hover:bg-gray-100 ${isActive(result.href) ? 'text-blue-500 font-bold' : ''}`}
                  onClick={() => setSearchQuery('')} // Clear the search query on click
                >
                  {result.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className="flex flex-col lg:flex-row lg:space-x-8 mt-4 lg:mt-0 text-lg lg:text-xl font-medium">
        <li>
          <Link 
            className={`block py-2 px-4 ${isActive('/') ? 'text-blue-500 font-bold' : 'hover:text-red-500'}`} 
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link 
            className={`block py-2 px-4 ${isActive('/Contact') ? 'text-blue-500 font-bold' : 'hover:text-red-500'}`} 
            href="/Contact"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link 
            className={`block py-2 px-4 ${isActive('/Services') ? 'text-blue-500 font-bold' : 'hover:text-red-500'}`} 
            href="/Services"
          >
            Services
          </Link>
        </li>
        <li className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="block py-2 px-4 hover:text-red-500 hover:font-bold"
          >
            All Products
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg w-48 lg:w-64">
              <button
                onClick={() => handleSubDropdownToggle('women')}
                className="block py-2 px-4 hover:bg-gray-100 w-full text-left"
              >
                Women Collections
              </button>
              {activeSubDropdown === 'women' && (
                <div className="absolute top-0 left-full ml-2 mt-2 bg-white shadow-lg rounded-lg w-48">
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/WomanSuits') ? 'text-blue-500 font-bold' : ''}`} href="/WomanSuits">Suits</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/Womanshoes') ? 'text-blue-500 font-bold' : ''}`} href="/Womanshoes">Shoes</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/Handbags') ? 'text-blue-500 font-bold' : ''}`} href="/Handbags">Handbags</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/cosmetics') ? 'text-blue-500 font-bold' : ''}`} href="/cosmetics">Cosmetics</Link>
                </div>
              )}
              <button
                onClick={() => handleSubDropdownToggle('men')}
                className="block py-2 px-4 hover:bg-gray-100 w-full text-left"
              >
                Men Collections
              </button>
              {activeSubDropdown === 'men' && (
                <div className="absolute top-0 left-full ml-2 pl-4 mt-2 bg-white shadow-lg rounded-lg">
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/Menwatches') ? 'text-blue-500 font-bold' : ''}`} href="/Menwatches">Watches</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/casual') ? 'text-blue-500 font-bold' : ''}`} href="/casual">Casual</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/accessories') ? 'text-blue-500 font-bold' : ''}`} href="/accessories">Accessories</Link>
                </div>
              )}
              <button
                onClick={() => handleSubDropdownToggle('home')}
                className="block py-2 px-4 hover:bg-gray-100 w-full text-left"
              >
                Home Collection
              </button>
              {activeSubDropdown === 'home' && (
                <div className="absolute top-0 left-full ml-2 pl-4 mt-2 bg-white shadow-lg rounded-lg">
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/living-room') ? 'text-blue-500 font-bold' : ''}`} href="/living-room">Living Room</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/bedroom') ? 'text-blue-500 font-bold' : ''}`} href="/bedroom">Bedroom</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/decor') ? 'text-blue-500 font-bold' : ''}`} href="/decor">Decor</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/utensils') ? 'text-blue-500 font-bold' : ''}`} href="/utensils">Utensils</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/appliances') ? 'text-blue-500 font-bold' : ''}`} href="/appliances">Appliances</Link>
                  <Link className={`block py-2 px-4 hover:bg-gray-100 ${isActive('/storage') ? 'text-blue-500 font-bold' : ''}`} href="/storage">Storage</Link>
                </div>
              )}
            </div>
          )}
        </li>
        <li>
          <Link
            className={`block py-2 px-4 ${isActive('/About') ? 'text-blue-500 font-bold' : 'hover:text-red-500'}`}
            href="/About"
          >
            About Us
          </Link>
        </li>
        <li>
          {isAuthenticated ? (
            <button
              className="block py-2 px-4 hover:text-red-500"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link
              className={`block py-2 px-4 ${isActive('/Login') ? 'text-blue-500 font-bold' : 'hover:text-red-500'}`}
              href="/Login"
            >
              Login
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
