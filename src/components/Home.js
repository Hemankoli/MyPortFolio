
import React from 'react';
import resumePDF from '../Assets/Hemant resume.pdf'; 
import About from './About'
import Project  from './Project';
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <div className="container text-black mx-auto mt-20 md:mt-40 flex flex-col md:flex-row items-center justify-center md:justify-center">
        <div className=" md:text-left mb-8 md:mb-0 md:p-20">
          <h2 className="text-3xl font-bold mb-4">
            <div className="animate-shake inline-block">&#x1F44B;</div> , I'M HEMANT
          </h2>
          <p className="text-lg text-center mt-8 md:mx-0 mx-4 mb-8">   
              I'm a MERN stack developer from <br></br> India,
              deeply enamored with coding <br></br>and delving into various tech  <br></br>
              domains with fervor and curiosity.
          </p>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <a href="https://github.com/Hemankoli"
               target="_blank"
               rel="noopener noreferrer"
               className="mr-4"
            >
            <img src="https://static-00.iconduck.com/assets.00/github-desktop-icon-2046x2048-r5plljad.png" alt="GitHub" className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/hemant-koli-530080203/"
               target="_blank"          
               rel="noopener noreferrer"
            >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="LinkedIn" className="h-8 w-8" />
            </a>
            <div className='mx-8'>
              <a href={resumePDF} 
                 download="HemantKoli_Resume.pdf"
                 className="text-purple-600 font-semibold  text-lg underline "
              >
                    - Download Resume
              </a>
            </div>
          </div>
        </div>
        <div className="mb-8 md:m-0 m-4">
          <img  
            src={"https://img6.arthub.ai/64a007fc-a355.webp"}
            alt="Profile"
            className="rounded-full w-80 h-80 object-cover"
          />      
        </div>
      </div>
      <About />
      <Project />
      <Contact />
    </div>    
  );
};

export default Home;