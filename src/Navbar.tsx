// ...existing code...
import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">

          {/* Left: Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/Favicon.jpeg"
              alt="Home"
              className="h-10 w-10 object-cover rounded-full"
            />
            <span className="text-xl font-semibold text-gray-800 hidden md:block">
              Portfolio
            </span>
          </a>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="text-gray-700 focus:outline-none"
              type="button"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Right: Links */}
          <ul
            className={`flex-col md:flex md:flex-row md:flex-grow md:justify-end md:gap-10
            ${open ? 'block' : 'hidden'} md:block`}
          >
            <li>
              <a href="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</a>
            </li>
            <li>
              <a href="/projects" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Projects</a>
            </li>
            <li>
              <a href="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// ...existing code...
