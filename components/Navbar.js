import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '../components/Logo';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [password, setPassword] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowPasswordModal(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === 'theshan') {
      setShowPasswordModal(false);
      setPassword('');
      window.location.href = '/Contact';
    } else {
      alert('Incorrect password');
    }
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setShowPasswordModal(false);
    }
  };

  return (
    <header className="navbar text-white px-6 py-2 sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo className="logo" title="Digital Refraction" />
            <main className="navbar-brand hover:underline decoration-blue-300 focus:bg-blue-500">
              <Link href="/">digital refraction</Link>
            </main>
          </div>
          <div className="hidden md:flex">
            <nav className="flex">
              <Link href="/Services">
                <a className="nav-link hover:underline decoration-blue-300 focus:bg-blue-500 text-white rounded-md">Services</a>
              </Link>
              <Link href="/Experiments">
                <a className="nav-link hover:underline decoration-blue-300 focus:bg-blue-500 text-white rounded-md">Experiments</a>
              </Link>
              
              <Link href="/Contact">
                <a
                  href="/Contact"
                  className="nav-link hover:underline decoration-blue-300 focus:bg-blue-500 text-white rounded-md"
                  onClick={handleContactClick}
                >
                  Client Portal
                </a>
              </Link>
            </nav>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path
                  fillRule="evenodd"
                  d="M2 5a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm0 6a1 1 0 011-1h14a1 1 0 110 2H3a1 1 0 01-1-1zm1 5a1 1 0 100 2h14a1 1 0 100-2H3z"
                  clipRule="evenodd"
                />
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
            <Link href="/Experiments">
              <a className="nav-link block hover:text-blue-300 text-white py-2">Experiments</a>
            </Link>
            <Link href="/Contact">
              <a
                href="/Contact"
                className="nav-link hover:underline decoration-blue-300 focus:bg-blue-500 text-white" onClick={handleContactClick}>
Client Portal
</a>
</Link>
</nav>
</div>
)}
{showPasswordModal && (
<div
       className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
       onClick={handleOverlayClick}
     >
<div
className="bg-white rounded p-6"
style={{ backgroundColor: 'black', opacity: 0.9 }}
>
<h2 className="text-xl mb-4">Client Access: Please Enter Password</h2>
  
<form onSubmit={handlePasswordSubmit}>
  <input
    type="password"
    className="password-input border border-gray-300 rounded p-2 mb-4 w-full"
    placeholder="Password"
    value={password}
    onChange={handlePasswordChange}
  />
  <div className="flex justify-between">
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
    >
      Submit
    </button>
    <button
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      onClick={() => window.location.href = "mailto:info@digitalrefraction.com"} > Email for access </button>
  </div>
</form>

</div>
</div>
)}
</header>
);
};

export default Navbar;
