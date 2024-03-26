import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <header className=" mt-4 shadow-lg">
        <div className='flex items-center justify-between mx-4 md:mx-40'>
          <NavLink to={"/"} >
            <h1 className='text-4xl font-bold text-red-400 px-4 py-2 '>P<span className='text-4xl font-bold text-purple-500'>ortfolio.</span></h1>
          </NavLink>
          
          <nav className=" font-[500] space-x-12 text-lg md:block hidden">
            <NavLink to={"/"} className="text-purple-500 hover:text-purple-500">Home</NavLink>
            <NavLink to={"/about"} className="text-gray-500 hover:text-purple-500">About</NavLink>
            <NavLink to={"/project"} className="text-gray-500 hover:text-purple-500">Projects</NavLink>
            <NavLink to={"/contact"} className="text-gray-500 hover:text-purple-500">Contact</NavLink>
          </nav>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-500 hover:text-purple-500">
              {isMenuOpen ? <HiX className="w-6 h-6 " /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
          {/* Navigation Menu (Mobile) */}
          <nav className={`fixed inset-0 bg-white z-20 p-4 transform transition-transform ease-in-out duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-purple-500">
                <HiX className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col mt-8">
              <NavLink to={"/"} onClick={closeMenu} className="text-gray-500 hover:text-purple-500 mb-4 text-center text-lg">Home</NavLink>
              <NavLink to={"/about"} onClick={closeMenu} className="text-gray-500 hover:text-purple-500 mb-4 text-center text-lg">About</NavLink>
              <NavLink to={"/project"} onClick={closeMenu} className="text-gray-500 hover:text-purple-500 mb-4 text-center text-lg">Projects</NavLink>
              <NavLink to={"/contact"} onClick={closeMenu} className="text-gray-500 hover:text-purple-500 mb-4 text-center text-lg">Contact</NavLink>
              {/* Phone Icon and Number */}
            </div>
          </nav>
        </div>
      </header>
      <div className="h-24 md:h-0"></div>
    </div>
  );
};

export default Header;
