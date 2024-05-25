import React, { useState } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="shadow-md p-1 md:flex md:justify-around flex justify-between m-2">
        <h1 className="ml-2 font-bold text-xl">furniLux</h1>
        <ul className={`md:flex md:gap-4 font-semibold ${isMenuOpen ? 'block' : 'hidden'}`}>
          <li className="border-b-2 border-gray-400">Home</li>
          <li>Categories</li>
          <li>About Us</li>
          <li>Pages</li>
          <li>Contact Us</li>
        </ul>
        <div className={`md:flex md:gap-3 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <h1>Log In</h1>
          <h1 className='font-bold text-green-600'>Sign Up</h1>
        </div>
        <i className="fa-solid fa-bars md:hidden text-xl" onClick={toggleMenu}></i>
      </div>
    </>
  );
}

export default Navbar;
