import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-alpha-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <div className="font-montserrat font-bold text-alpha-warm">
          ALPHA TRANSFER
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-alpha-warm text-sm font-medium transition-opacity hover:opacity-80">
            Home
          </a>
          <a href="#" className="text-alpha-warm text-sm font-medium transition-opacity hover:opacity-80">
            Services
          </a>
          <a href="#" className="text-alpha-warm text-sm font-medium transition-opacity hover:opacity-80">
            Fleet
          </a>
          <a href="#" className="text-alpha-warm text-sm font-medium transition-opacity hover:opacity-80">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;