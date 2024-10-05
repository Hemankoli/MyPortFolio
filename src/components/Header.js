import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import {FcHome, FcBusinessman,FcAssistant,FcBookmark,FcDiploma2 } from "react-icons/fc";
import Resume from "../Assets/HEMANT KOLI RESUME.pdf";

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
      <header className="py- shadow-lg fixed top-0 left-0 right-0 z-50 bg-white">
        <div className='flex items-center justify-between mx-4 md:mx-10'>
          <Link to={"/"} className='flex items-center px-0 md:px-4 space-x-0'>
            <img src='https://cdn-icons-png.freepik.com/512/146/146007.png' alt='' className='w-10 h-10' />
            <h1 className='text-4xl font-[900] text-red-400 px-4 py-2'>
              H<span className='text-2xl font-bold text-purple-500'>k.</span>
            </h1>
          </Link>

          {/* Navigation Menu (Tablet and Desktop) */}
          <nav className="font-[500] space-x-4 text-lg md:block hidden ml-auto"> 
            <Link to={"/"} className="inline-flex items-center text-gray-500 hover:bg-red-400 hover:text-black p-2 rounded-lg">
              <FcHome className="w-6 h-6 mr-2" /> Home
            </Link>
            <Link to={"/about"} className="inline-flex items-center text-gray-500 hover:bg-yellow-400  hover:text-black p-2 rounded-lg"> 
              <FcBusinessman className="w-6 h-6 mr-2" /> About
            </Link>
            <Link to={"/project"} className="inline-flex items-center text-gray-500 hover:bg-orange-400 hover:text-black p-2 rounded-lg">
              <FcBookmark className="w-6 h-6 mr-2" /> Projects
            </Link>
            <a href={Resume} download className="inline-flex items-center text-gray-500 hover:bg-purple-400 hover:text-black p-2 rounded-lg">
              <FcDiploma2 className="w-6 h-6 mr-2" /> Resume
            </a> 
            <Link to={"/contact"} className="inline-flex items-center text-gray-500 hover:bg-blue-400 hover:text-black p-2 rounded-lg">
              <FcAssistant className="w-6 h-6 mr-2" /> Contact
            </Link>
          </nav>
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-purple-500 hover:text-red-500">
              {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>

          {/* Navigation Menu (Mobile) */}
          <nav className={`fixed inset-0 flex flex-col items-center bg-white z-20 p-4 transform transition-transform ease-in-out duration-300 ${isMenuOpen ? 'translate-x-0' : '-translate-y-full'}`}>
            <div className="flex justify-end">
              <button onClick={toggleMenu} className="text-gray-500 hover:text-purple-500 absolute top-4 right-4">
                {isMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </button>
            </div>
            <div className="flex font-[500] flex-col mt-8">
              <Link to={"/"} onClick={closeMenu} className="flex items-center text-gray-500 hover:bg-red-400 hover:text-black p-2 rounded-lg mb-4 text-center text-lg">
                <FcHome className="w-6 h-6 mr-2" /> Home
              </Link>
              <Link to={"/about"} onClick={closeMenu} className="flex items-center text-gray-500 hover:bg-yellow-400 hover:text-black p-2 rounded-lg mb-4 text-center text-lg">
                <FcBusinessman className="w-6 h-6 mr-2" /> About
              </Link>
              <Link to={"/project"} onClick={closeMenu} className="flex items-center text-gray-500 hover:bg-orange-400 hover:text-black p-2 rounded-lg mb-4 text-center text-lg">
                <FcBookmark className="w-6 h-6 mr-2" /> Projects
              </Link>
              <a href={Resume} download onClick={closeMenu} className="flex items-center text-gray-500 hover:bg-purple-400 hover:text-black p-2 rounded-lg mb-4 text-center text-lg">
                <FcDiploma2 className="w-6 h-6 mr-2" /> Resume
              </a>
              <Link to={"/contact"} onClick={closeMenu} className="flex items-center text-gray-500 hover:bg-blue-400 hover:text-black p-2 rounded-lg mb-4 text-center text-lg">
                <FcAssistant className="w-6 h-6 mr-2" /> Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <div className="h-24 md:h-0"></div>
    </div>
  );
};

export default Header;
