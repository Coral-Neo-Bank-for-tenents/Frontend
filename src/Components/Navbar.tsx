import '../styles/tailwind.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-greenTheme fixed top-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img>
            </img>
            <a href="/" className="text-black font-bold text-lg">
              Coral
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex space-x-4">
              <a href="/about" className="text-black hover:bg-greenThemeDark px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="/contact" className="text-black hover:bg-greenThemeDark px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
              <div className='flex justify-end'>
              <a className="text-black mx-1 bg-green-300 px-3 py-2 rounded-md text-sm font-medium">
                <Link to='/login'>Login</Link>
              </a>
              <a className="text-black mx-1 bg-green-300 px-3 py-2 rounded-md text-sm font-medium">
                <Link to='/CreateProfile'>Create Profile</Link>
              </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 text-black hover:bg-greenThemeDark rounded-md focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="/about" className="text-black hover:bg-greenThemeDark block px-3 py-2 rounded-md text-base font-medium">
            About
          </a>
          <a href="/contact" className="text-black hover:bg-greenThemeDark block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </a>
          <a className="text-black hover:bg-greenThemeDark block px-3 py-2 rounded-md text-base font-medium">
          <Link to='/login'>Login</Link>
          </a>
          <a className="text-black hover:bg-greenThemeDark block px-3 py-2 rounded-md text-base font-medium">
            <Link to='/CreateProfile'>Create Profile</Link>
          </a>
        </div>
      </div>
    )}
  </nav>
);
};

export default Navbar;
