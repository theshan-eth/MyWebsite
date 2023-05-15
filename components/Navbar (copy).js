import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar text-white px-6 py-2 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo className="logo" title="Digital Refraction" />
            <main className="navbar-brand hover:underline decoration-blue-300 focus:bg-blue-500"><Link href="/">digital refraction</Link></main>
          </div>
          <div className="hidden md:flex">
            <nav className="flex">
              <Link href="/Services">
                <a className="nav-link hover:underline decoration-blue-300 focus:bg-blue-500 text-white">Services</a>
              </Link>
              <Link href="/Contact">
                <a className="nav-link hover:underline decoration-blue-300 focus:bg-blue-500 text-white">Contact</a>
              </Link>
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" width="24" height="24">
                <path fillRule="evenodd" d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4">
          <nav>
            <Link href="/Services">
              <a className="nav-link block hover:text-blue-300 text-white py-2">Services</a>
            </Link>
            <Link href="/Contact">
              <a className="nav-link block hover:text-blue-300 text-white py-2">Contact</a>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
