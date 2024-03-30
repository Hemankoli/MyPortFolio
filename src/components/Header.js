import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import { IoHomeOutline } from 'react-icons/io5';
import { AiOutlineUser, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';
import { FaFilePdf } from 'react-icons/fa';

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
      <header className="py-2 shadow-lg fixed top-0 left-0 right-0 z-50 bg-white">
        <div className='flex items-center justify-between mx-4 md:mx-20'>
          <Link to={"/"} className='flex items-center px-0 md:px-4 space-x-4'>
            <h1 className='text-4xl font-bold text-red-400 px-4 py-2 italic'>
              H<span className='text-2xl font-bold text-purple-500'>k.</span>
            </h1>
          </Link>

          {/* Navigation Menu (Tablet and Desktop) */}
          <nav className="font-[500] space-x-4 text-lg md:block hidden ml-auto"> {/* Added ml-auto to move the navigation to the right */}
            <Link to={"/"} className="inline-flex items-center text-gray-500 hover:bg-red-400 hover:text-black p-2 rounded-lg">
              <IoHomeOutline className="w-6 h-6 mr-2" /> Home
            </Link>
            <Link to={"/about"} className="inline-flex items-center text-gray-500 hover:bg-yellow-400 hover:text-black p-2 rounded-lg"> 
              <AiOutlineUser className="w-6 h-6 mr-2" /> About
            </Link>
            <Link to={"/project"} className="inline-flex items-center text-gray-500 hover:bg-green-400 hover:text-black p-2 rounded-lg">
              <AiOutlineFundProjectionScreen className="w-6 h-6 mr-2" /> Projects
            </Link>
            <Link to={"/resume"} className="inline-flex items-center text-gray-500 hover:bg-purple-400 hover:text-black p-2 rounded-lg">
              <FaFilePdf className="w-6 h-6 mr-2" /> Resume
            </Link>
            <Link to={"/contact"} className="inline-flex items-center text-gray-500 hover:bg-blue-400 hover:text-black p-2 rounded-lg">
              <RiContactsLine className="w-6 h-6 mr-2" /> Contact
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
                <IoHomeOutline className="w-6 h-6 mr-2" /> Home
              </Link>
              <Link to={"/about"} onClick={closeMenu} className="flex items-center text-gray-500 hover:bg-yellow-400 hover:text-black p-2 rounded-lg mb-4 text-center text-lg">
                <AiOutlineUser className="w-6 h-6 mr-2" /> About
              </Link>
              <Link to={"/project"} onClick={closeMenu} className="flex items-center text-gray-500 hover:bg-green-400 hover:text-black p-2 rounded-lg mb-4 text-center text-lg">
                <AiOutlineFundProjectionScreen className="w-6 h-6 mr-2" /> Projects
              </Link>
              <Link to={"/contact"} onClick={closeMenu} className="flex items-center text-gray-500 hover:bg-blue-400 hover:text-black p-2 rounded-lg mb-4 text-center text-lg">
                <RiContactsLine className="w-6 h-6 mr-2" /> Contact
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
