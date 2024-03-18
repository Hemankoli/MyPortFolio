import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/LOGO1.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="text-white mt-12">
      <div className="container mx-auto flex items-center justify-between">
        <Link to={"/"} className=" px-12 font-bold"><img src={Logo} alt="logo"  className='w-68 h-24'/></Link>
        {/* Mobile menu button */}
        <button
          className="block md:hidden text-3xl px-4 focus:outline-none"
          onClick={toggleMobileMenu}  
        >
          {mobileMenuOpen ? 'X' : '☰'}
        </button>
        {/* Window menu */}
        <nav className="hidden md:flex items-center">
          <ul className="flex font-bold items-center space-x-8">
            <li>
              <Link to="/" className="flex hover:text-orange-500">
                <span className="text-2xl">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="flex hover:text-orange-500">
                <span className="text-2xl">About</span>
              </Link>
            </li>
           
            <li>
              <Link to="/project" className="flex hover:text-orange-500">
                <span className="text-2xl">Projects</span>
              </Link>   
            </li>
            <li>
              <Link to="/contact" className="flex hover:text-orange-500">
                <span className="text-2xl">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
        
        </div>
      {/* Mobile menu */}
      <nav className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bottom-0 left-0 right-0 bg-customBlue py-6 px-8`}>
        <ul className="flex font-bold items-center flex-col space-y-4">
            <li>
              <Link to="/" className="flex hover:text-orange-500">
                <span className="text-lg">Home</span>
              </Link>
            </li>
            <p className='border w-full'></p>
          <li>
            <Link to="/about" className="text-lg text-white hover:text-orange-500" onClick={toggleMobileMenu}>
              About
            </Link>
          </li>
          <p className='border w-full'></p>
          <li>
            <Link to="/project" className="text-lg text-white hover:text-orange-500" onClick={toggleMobileMenu}>
              Projects
            </Link>
          </li>
          <p className='border w-full'></p>
          <li>
            <Link to="/contact" className="text-lg text-white hover:text-orange-500" onClick={toggleMobileMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;