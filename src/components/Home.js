import React from 'react';
import resumePDF from '../Assets/Hemant resume.pdf'; // Import your resume PDF file
import About from './About';
import Project from './Project'
import Contact from './Contact'

const Home = () => {
  return (
    <div>
      <div className="container text-black mx-auto mt-20 flex flex-col md:flex-row items-center justify-center md:justify-center">
        <div className="text-center md:text-left mb-8 md:mb-0 md:p-20">
          <h2 className="text-3xl font-bold mb-4">
            <div className="animate-shake inline-block">&#x1F44B;</div> Hello, I'M HEMANT
          </h2>
          <p className="text-lg mt-8 mb-8">
            I am a passionate MERN stack web developer<br></br> from India, deeply in love with coding <br></br>and exploring various tech domains.
          </p>
          <ul className='mb-8 px-2'>
            <li>🚀  Im currently building Full Stack Projects.</li>
            <li>🎯  Im on a mission to become a Full Stack developer.</li>
            <li>💻  I bring life to designs through lines of code.</li>
          </ul>
          <div className="flex items-center justify-center md:justify-start mb-6">
            <a
              href="https://github.com/Hemankoli"
              target="_blank"
              rel="noopener noreferrer"
              className="mr-4"
            >
              <img src="https://static-00.iconduck.com/assets.00/github-desktop-icon-2046x2048-r5plljad.png" alt="GitHub" className="h-8 w-8" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemant-koli-530080203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png" alt="LinkedIn" className="h-8 w-8" />
            </a>
            <button className='mx-8'>
              <a
                href={resumePDF} // Update this with the correct path to your resume PDF
                download="HemantKoli_Resume.pdf"
                className="bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded inline-block"
              >
                Download Resume
              </a>
            </button>
          </div>
        </div>
        <div className="mb-8">
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
