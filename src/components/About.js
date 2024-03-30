import React from 'react';
import profile from '../images/logo.jpeg';
import html from '../images/html.png'
import css from '../images/CSS.png'
import JavaScript from '../images/JS.png'
import Java from '../images/java.png'
import react from '../images/REACT.png'
import Node from '../images/Node.png'
import Express from '../images/ex.png'
import mongodb from '../images/mongo.png'
import mysql from '../images/mysql.png'
import Tailwind from '../images/tailwind.png'
import git from '../images/git.png'
import educational from '../images/educatio.png'



const About = () => {

  return (
    <div className="text-black mt-20 md:mt-40 mb-28 mx-auto px-4">
      <p className="text-sm text-center">Get To Know More</p>
      <h1 className="text-4xl font-bold text-center mt-4 text-purple-500 mb-12">— Know Who <span className='text-red-400'>I'M</span> 🧐</h1>

      <div className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-40 mt-10 md:mt-20 mb-8">
        <div className="mb-8 md:mb-0">
          <img src={profile} alt="profile" className="w-40 h-40 md:w-64 md:h-64 rounded-md object-cover mx-auto" />
        </div>
        <div className="text-lg mx-4 text-center w-full max-w-xl">
          <p className="mb-4 font-mono">
            <span className='text-red-400 font-semibold text-xl'>A MERN stack developer </span> is a skilled professional proficient in using the <span className='text-purple-400 italic underline'> MERN
            (MongoDB, Express.js, React, Node.js)</span> technology stack for web development.
            I specialize in building robust and dynamic web applications, leveraging MongoDB
            for database management,<span className='text-purple-400 italic underline'> Express.js for server-side development, React for creating
            interactive user interfaces, and Node.js for server-side scripting. </span>
          </p>
        </div>

      </div>

      <div className="text-center mt-20">
        <div className="mb-20">
          <h2 className="text-2xl text-red-400 font-bold italic">Skills ⚡</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-12" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="2000">
      {/* Skills Icons */}
      <img src={html} alt="html" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={css} alt="Css" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={JavaScript} alt="JavaScript" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={react} alt="React" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={Java} alt="Java" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={Tailwind} alt="Tailwind" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={mongodb} alt="mongodb" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={Node} alt="node" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={Express} alt="express" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={mysql} alt="mysql" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
      <img src={git} alt="git" className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500" />
    </div>  
      </div>

      {/* Education Section */}
      <div className="text-center mb-20 mt-20">
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-red-400 italic">Education 👨🏻‍🎓</h2>
        </div>
        <div className='flex flex-col justify-center  md:m-0 m-4 sm:py-12'>
          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-gray-700  antialiased text-sm font-semibold'>
              {/* vertical line */}
              <div className='hidden absolute w-1 sm:block bg-purple-400 h-full left-1/2 transform -translate-x-1/2'></div>
              {/*left card */}
              <div className='mt-6 sm:mt-0 sm:mb-12 ' data-aos="fade-right" data-aos-deley="300" data-aos-duration="2000">
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2  sm:pr-8'>
                    <div className='w-full py-3 px-2  sm:max-w-xl sm:mx-auto sm:px-0 bg-white p-4 rounded shadow group hover:bg-purple-500 cursor-pointer ease-in duration-150'>
                        <h2 className='text-purple-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl'>Bachelor's of Technology Degree</h2>
                        <h4 className="text-lg font-bold group-hover:text-white group-hover:font-semibold mb-4">(2019 - 2023)</h4>
                        <p className='text-sm text-gray-700    group-hover:text-white group-hover:font-normal'>
                          I completed my B.Tech degree in the field of Electronics and Telecommunication Engineering (ENTC) with 8.03 CGPA.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-purple-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-4 flex items-center justify-center'>
                    <figure>
                      <img src={educational} alt='' className="w-5 h-5" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* right card */}
              <div className='mt-6 sm:mt-0 sm:mb-12' data-aos="fade-left" data-aos-deley="300" data-aos-duration="2000">
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 bg-white p-4 rounded shadow group hover:bg-purple-500 cursor-pointer ease-in duration-150'>
                        <h2 className='text-purple-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl'>Higher Secondary Education (12th)</h2>
                        <h4 className="text-lg font-bold group-hover:text-white group-hover:font-semibold mb-4">(2018 - 2019)</h4>
                        <p className='text-sm text-gray-700 group-hover:text-white group-hover:font-normal'>
                        I completed my Higher Secondary Certificate (HSC) in 2019 in the Science stream,
                        achieving a commendable 64.15% percentage.                        
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-purple-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-4 flex items-center justify-center'>
                    <figure>
                      <img src={educational} alt='' className="w-5 h-5" />
                    </figure>
                  </div>
                </div>
              </div>
              {/* left card */} 
              <div className='mt-6 sm:mt-0 sm:mb-12' data-aos="fade-right" data-aos-deley="300" data-aos-duration="2000">
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 bg-white p-4 rounded shadow group hover:bg-purple-500 cursor-pointer ease-in duration-150'>
                        <h2 className='text-purple-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl'>Secondary Education (10th)</h2>
                        <h4 className="text-lg font-bold group-hover:text-white group-hover:font-semibold mb-4">(2016 - 2017)</h4>
                        <p className='text-sm text-gray-700 group-hover:text-white group-hover:font-normal'>
                        I successfully completed my SSC (Secondary School Certificate) in 2017, specializing
                        in the science stream. I am proud to have achieved an impressive percentage of 83.80%.                        
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-purple-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-4 flex items-center justify-center'>
                    <figure>
                      <img src={educational} alt='' className="w-5 h-5" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Experience Section */}
      <div className="text-center mt-28">
        <div className="mb-16">
          <h2 className="text-2xl font-bold  text-red-400 italic">Experience 🚀</h2>
        </div>
        <div className='flex flex-col justify-center  sm:py-12'>
          <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0'>
            <div className='relative text-gray-700 antialiased text-sm font-semibold'>
              {/* vertical line */}
              <div className='hidden absolute w-1 sm:block bg-purple-400 h-full left-1/2 transform -translate-x-1/2'></div>
              {/*left card */}
              <div className='mt-6 sm:mt-0 sm:mb-12' data-aos="fade-right" data-aos-deley="100" data-aos-duration="2000">
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 bg-white p-4 rounded shadow group hover:bg-purple-500 cursor-pointer ease-in duration-150'>
                        <h2 className='text-purple-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl'>Frontend Developer</h2>
                        <h4 className="text-lg font-bold group-hover:text-white group-hover:font-semibold mb-4">Experience :- 1 Year +</h4>
                       
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-purple-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-4 flex items-center justify-center'>
                    <figure>
                      <img src="https://cdn-icons-png.flaticon.com/512/4387/4387887.png" alt='' className='w-5 h-5'/>
                    </figure>
                  </div>
                </div>
              </div>
              {/* right card */}
              <div className='mt-6 sm:mt-0 sm:mb-12' data-aos="fade-left" data-aos-deley="100" data-aos-duration="2000">
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-end w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pl-8'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 bg-white p-4 rounded shadow group hover:bg-purple-500 cursor-pointer ease-in duration-150'>
                        <h2 className='text-purple-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl'>Backend Developer</h2>
                        <h4 className="text-lg font-bold group-hover:text-white group-hover:font-semibold mb-4">Experience :- 3 Months +</h4>
                        
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-purple-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-4 flex items-center justify-center'>
                    <figure>
                      <img src="https://cdn-icons-png.flaticon.com/512/4387/4387887.png" alt='' className='w-5 h-5'/>
                    </figure>
                  </div>
                </div>
              </div>
              {/* left card */}
              <div className='mt-6 sm:mt-0 sm:mb-12' data-aos="fade-right" data-aos-deley="100" data-aos-duration="2000">
                <div className='flex items-center flex-col sm:flex-row'>
                  <div className='flex justify-start w-full mx-auto items-center'>
                    <div className='w-full sm:w-1/2 sm:pr-8'>
                    <div className='w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0 bg-white p-4 rounded shadow group hover:bg-purple-500 cursor-pointer ease-in duration-150'>
                        <h2 className='text-purple-500 font-bold mb-3 group-hover:text-white group-hover:font-semibold text-2xl'>MERN Stack Developer</h2>
                        <h4 className="text-lg font-bold group-hover:text-white group-hover:font-semibold mb-4">EXP :- 1 Months + </h4>
                        
                      </div>
                    </div>
                  </div>
                  <div className='rounded-full bg-purple-500 border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-4 flex items-center justify-center'>
                    <figure>
                      <img src="https://cdn-icons-png.flaticon.com/512/4387/4387887.png" alt='' className='w-5 h-5'/>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>  
      </div>
    </div>
  );
};

export default About;
