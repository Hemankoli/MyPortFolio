import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-500 font-bold text-black py-3 absolute w-full">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Hemant Koli</p>
      </div>
    </footer>
  );
};

export default Footer;
