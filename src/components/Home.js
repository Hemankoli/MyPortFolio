import React from 'react';
import About from './About';
import Project from './Project';
import Contact from './Contact';
import home from "../images/home-main.svg"
import Type from './Type.js'
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";




const Home = () => {
  return (
    <div>
        <div className=" text-black mb-28 mx-auto mt-20 md:mt-40 flex flex-col md:flex-row items-center justify-center md:justify-center">
          <div className="md:text-left mb-8 md:mb-0 md:p-20">
            <h2 className="text-4xl font-bold mb-4">
              <div className="animate-shake inline-block mb-2">&#x1F44B;</div>, 
              <br></br>I'M<span className='text-purple-500 font-[700]'> HEMANT KOLI</span> 
            </h2>
            <div className='text-red-400 font-bold font-serif text-2xl py-10'>
                <Type />
            </div>
          </div>
            <div className="mb-8 md:mx-20 m-4">
              <img
                src={home}
                alt="Profile"
                className=" w-96 h-96 object-cover"
              />
          </div> 
          
        </div>

      <div>
        <h1 className='text-4xl font-semibold md:mx-60 mx-8 '>KNOW <span className='text-purple-500'>MORE</span> ...</h1>
          <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-10 mt-10'>
            <p className='text-xl font-[600] md:mx-2 mx-2'>
              I guess I've learned something about programming and have fallen in love with it... 🤷‍♂️<br />
              <br />
              I speak old languages like <span className='text-purple-500 italic'> JavaScript and Java with ease.</span><br />
              <br />
              Developing innovative <span className='text-purple-500 italic'>web technologies and products</span> is my area of interest.<br />
              <br />
              I also use my love for <span className='text-purple-500 italic'>Node.js</span>  and <span className='text-purple-500 italic'>modern Javascript libraries</span>  and <span className='text-purple-500 italic'>frameworks</span>, like <span className='text-purple-500 italic'>React.js</span> , <br /> to develop things whenever I can.
            </p>
            <img
              src={"https://img6.arthub.ai/64a007fc-a355.webp"}
              alt='profile'
              className='w-60 md:w-80 h-60 md:h-80 rounded-full'
            />
          </div>
    </div>

    <div className='mt-20 mb-10'>
      <h1 className='text-4xl text-center font-[500] mb-10 mt-10'><span className='text-purple-500'>CONNECT</span> TO ME</h1>
        <div className='items-center justify-center mx-auto flex space-x-4'>
          <a className=' shadow-md shadow-red-400 p-4 rounded-full transition duration-200 ease-in-out transform hover:scale-110 text-blue-700 bg-purple-400' href='https://www.linkedin.com/in/hemant-koli-530080203/'><FaLinkedin /></a>
          <a className=' shadow-md shadow-red-400 p-4 rounded-full transition duration-200 ease-in-out transform hover:scale-110 bg-purple-400' href='https://github.com/Hemankoli'><FaGithubSquare /></a>
          <a className=' shadow-md shadow-red-400 p-4 rounded-full transition duration-200 ease-in-out transform hover:scale-110 text-red-600 bg-purple-400' href='https://www.instagram.com/kl_hmt_07/'><FaSquareInstagram /></a>
        </div>
          
    </div> 
      <About />
      <Project />
      <Contact />
    </div>  
  );
};

export default Home;
