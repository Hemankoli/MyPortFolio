import React from 'react';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { SiGithub, SiInstagram, SiLinkedin } from 'react-icons/si';


const ContactForm = () => {
  return (
    <section id='contact max-w-6xl mx-auto'>
    <div className="text-center text-black mx-auto mt-20 py-24  md:mt-40 md:mb-auto mb-0  flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold text-purple-500 mb-8">— Get in <span className='text-red-400'>Touch</span> 🤝</h2>
      <h3 className="font-bold italic text-2xl mb-12">Love to hear from you, Get in touch 👋</h3>
      <div className="w-80 border shadow-lg shadow-purple-500 items-center justify-center space-y-6 rounded-lg p-6"
      data-aos="zoom-in"
      data-aos-delay="100"
      data-aos-duration="2000"
      >
        <div className="flex items-center space-x-2">
          <HiOutlineLocationMarker className="w-6 border border-purple-400 rounded-lg p-1 h-6 mr-2 text-blue-500" />
          <p className="text-lg">Jalgaon, Maharashtra, India</p>
        </div>
        <div className="flex items-center space-x-2">
          <HiOutlineMail className="w-6 border border-purple-400 rounded-lg p-1 h-6 mr-2 text-blue-500" />
          <a href="mailto:hemankoli1409@gmail.com" className="text-lg">hemankoli1409@gmail.com</a>
        </div>
        <div className="flex items-center space-x-2">
          <HiOutlinePhone className="w-6 border border-purple-400 rounded-lg p-1  h-6 mb-6 mr-2 text-blue-500" />
          <p className="text-lg mb-6">+91 9172137731</p>
        </div>
      </div>
      <div className='mt-14 mb-20'>
        <h3 className='text-2xl font-bold italic'>Follow Me 👇</h3>
        <div className='w-40 flex flex-row border border-purple-600 rounded-lg py-3 px-8 space-x-6 mt-6'>
          <a className='transition duration-200 ease-in-out transform hover:scale-110' href='https://www.linkedin.com/in/hemant-koli-530080203/'><SiLinkedin /></a>
          <a className='transition duration-200 ease-in-out transform hover:scale-110' href='https://github.com/Hemankoli'><SiGithub /></a>
          <a className='transition duration-200 ease-in-out transform hover:scale-110' href='https://www.instagram.com/kl_hmt_07/'><SiInstagram /></a>
        </div>
      </div>
    </div>
    </section>
  );
};

export default ContactForm;
