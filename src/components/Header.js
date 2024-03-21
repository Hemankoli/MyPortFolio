import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../images/LOGO1.png'


const Header = () => {

  return (
    <header className=" mx-auto  text-center mt-12">
      <div>
        <Link to={"/"}>
          <img src={Logo} alt="logo"  className='w-80 h-24'/>
        </Link>
      </div>
    </header>
  );
};

export default Header;