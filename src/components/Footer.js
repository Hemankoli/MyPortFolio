import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-400 text-black py-4">
      <div className="container mx-auto flex justify-center font-semibold items-center">
        <p className="text-center">&copy; {new Date().getFullYear()} Hemant Koli. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
