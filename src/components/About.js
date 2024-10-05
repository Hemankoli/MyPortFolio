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
      <h1 className="text-4xl font-bold text-center mt-4 text-purple-500 mb-12">— Know Who 
      <span className='text-red-400'> I'M</span> </h1>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-10 lg:space-x-20 mt-10 md:mt-20 mb-8 px-4 md:px-0">
        <div className="mb-8 md:mb-0">
          <img 
            src={profile} 
            alt="profile" 
            className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-md object-cover mx-auto" 
          />
        </div>
        <div className="text-lg w-full max-w-2xl">
          <p className="mb-4 font-mono">
            <span className="text-red-400 text-xl">Welcome !</span> I am a passionate and dedicated professional with a diverse range of skills and experiences.
            Throughout my career journey, I have honed my abilities in various domains, showcasing a strong commitment to 
            excellence and continuous learning.<br/>Looking ahead, I am excited about <span className="text-purple-500 italic">Software Developer</span>, where 
            I plan to leverage my experiences and skills to make meaningful contributions and continue growing both personally and professionally.
          </p>
        </div>
      </div>


      <div className="text-center mt-20">
        <div className="mb-20">
          <h2 className="text-2xl text-red-400 font-bold italic">Skills ⚡</h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-12" data-aos="zoom-in" data-aos-delay="150" data-aos-duration="2000">
          {/* Skill Icons */}
          {[
            { src: html, alt: "HTML", label: "HTML" },
            { src: css, alt: "CSS", label: "CSS" },
            { src: JavaScript, alt: "JavaScript", label: "JavaScript" },
            { src: react, alt: "React", label: "React.Js" },
            { src: Java, alt: "Java", label: "Java" },
            { src: Tailwind, alt: "Tailwind", label: "TailwindCSS" },
            { src: mongodb, alt: "MongoDB", label: "MongoDB" },
            { src: Node, alt: "Node", label: "Node.Js" },
            { src: Express, alt: "Express", label: "Express.Js" },
            { src: mysql, alt: "MySQL", label: "MySQL" },
            { src: git, alt: "Git", label: "Git" }
          ].map((skill, index) => (
          <div key={index} className="relative group">
            <img
              src={skill.src}
              alt={skill.alt}
              className="w-16 h-16 border rounded p-2 cursor-pointer border-purple-600 transition duration-200 ease-in-out transform hover:scale-110 shadow-md shadow-purple-500"
            />
            <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bottom-0 text-white font-semibold rounded-md shadow-lg h-8 bg-purple-500 text-sm  px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {skill.label}
            </span>
          </div>
          ))}
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
                          I completed my B.Tech degree in field of Electronics and Telecommunication Engineering with 8.03 CGPA.
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
