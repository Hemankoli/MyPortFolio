import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-3 absolute w-full"
    style={{ boxShadow: "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)" }}>
      <div className="max-w-6xl  mx-auto flex flex-col items-center justify-center">
        <p className="text-lg mb-2">&copy; {new Date().getFullYear()} Hemant Koli</p>
      </div>
    </footer>
  );
};

export default Footer;
