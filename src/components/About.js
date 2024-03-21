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



const About = () => {
  return (
    <div className="container text-black mt-20 mx-auto py-10">  
      <p className="text-sm  text-center">Get To Know More</p>
      <h1 className="text-4xl font-bold text-center mt-4 mb-12">About Me 🧐</h1>
      <div className="flex flex-col md:flex-col items-center justify-between">
        <div className="mb-8 md:mb-8">
          <img src={profile} alt="profile" className="w-40 h-40 md:w-64 md:h-64 rounded-full object-cover mx-auto md:mx-0" />
        </div>
        <div className="text-lg mx-4 text-center md:w-3/4 md:ml-8">
        <p className="mb-4" style={{ maxWidth: '500px', margin: '0 auto' }}>
            A MERN stack developer is a skilled professional proficient in using the MERN
            (MongoDB, Express.js, React, Node.js) technology stack for web development.
            I specialize in building robust and dynamic web applications, leveraging MongoDB
            for database management, Express.js for server-side development, React for creating
            interactive user interfaces, and Node.js for server-side scripting.
          </p>
        </div>
      </div>

      <div className="text-center mt-20">
        <div className="mb-20">
          <h2 className="text-2xl font-bold italic">Skills ⚡</h2>
        </div>
        <div className="md:flex justify-center md:space-x-10">
          {/* First Row */}
          <div className="flex  justify-center space-x-8 mb-12">
            <img src={html} alt="html" className="w-12 h-12" />
            <img src={css} alt="Css" className="w-12 h-12" />
            <img src={JavaScript} alt="JavaScript" className="w-12 h-12" />
            <img src={react} alt="React" className="w-12 h-12" />
          </div>
          {/* Second Row */}
          <div className="flex  justify-center space-x-6 mb-12">
            <img src={Java} alt="Java" className="w-12 h-12" />
            <img src={Tailwind} alt="Tailwind" className="w-12 h-12" />
            <img src={mongodb} alt="mongodb" className="w-12 h-12" />
            <img src={Node} alt="node" className="w-12 h-12" />
          </div>
          <div className="flex  justify-center space-x-6">
          <img src={Express} alt="express" className="w-12 h-12" />
            <img src={mysql} alt="mysql" className="w-12 h-12" />
            <img src={git} alt="git" className="w-12 h-12" />
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="text-center mb-20 mt-20">
        <div className="mb-16">
          <h2 className="text-2xl font-bold italic">Education 👨🏻‍🎓</h2>
        </div>
        <div className="grid grid-cols-1 m-auto md:w-auto w-96 md:grid-cols-3 gap-12">
          <div className="bg-customBlue border border-blue-400  shadow-2xl shadow-blue-400 p-4 md:m-0 m-6 rounded-lg">
            <h4 className="text-lg font-bold">2019 - 2023</h4>
            <h3 className="text-xl font-semibold mb-2">Bachelor's of Technology Degree</h3>
            <p>
              I completed my B.Tech degree in the field of Electronics and Telecommunication
              Engineering (ENTC) in 2019 with 8.03 CGPA, reflecting my dedication and commitment
              to my studies.
            </p>
          </div>

          <div className="bg-customBlue border border-blue-400  shadow-2xl shadow-blue-400 p-4 md:m-0 m-6 rounded-lg">
            <h4 className="text-lg font-bold">2018 - 2019</h4>
            <h3 className="text-xl font-semibold mb-2">Higher Secondary Education (12th)</h3>
            <p>
              I completed my Higher Secondary Certificate (HSC) in 2019 in the Science stream,
              achieving a commendable 64.15% percentage.
            </p>
          </div>

          <div className="bg-customBlue border border-blue-400  shadow-2xl shadow-blue-400 p-4 md:m-0 m-6 rounded-lg">
            <h4 className="text-lg font-bold">2016 - 2017</h4>
            <h3 className="text-xl font-semibold mb-2">Secondary Education (10th)</h3>
            <p>
              I successfully completed my SSC (Secondary School Certificate) in 2017, specializing
              in the science stream. I am proud to have achieved an impressive percentage of 83.80%.
            </p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="text-center mt-28">
        <div className="mb-16">
          <h2 className="text-2xl font-bold italic">Experience 🚀</h2>
        </div>
        <div className="grid grid-cols-1 m-auto md:w-auto w-96 md:grid-cols-3 gap-12">
          <div className="bg-customBlue border border-blue-400   shadow-2xl shadow-blue-400 p-4 md:m-0 m-6 rounded-lg">
            <h4 className="text-lg font-bold">1+ Year</h4>
            <h3 className="text-xl font-semibold mb-2">Front-end Developer</h3>
            <p>
              I possess over 1+ year of valuable experience in frontend development. During this
              time, I have honed my skills in creating visually appealing and user-friendly
              interfaces while staying up-to-date with the latest technologies.
            </p>
          </div>

          <div className="bg-customBlue border border-blue-400  shadow-2xl shadow-blue-400 p-4 md:m-0 m-6 rounded-lg">
            <h4 className="text-lg font-bold">3+ Months</h4>
            <h3 className="text-xl font-semibold mb-2">Back-end Developer</h3>
            <p>
              I possess over 3+ months of valuable experience in backend development, showcasing
              my proficiency in building and maintaining server-side applications.
            </p>
          </div>

          <div className="bg-customBlue border border-blue-400  shadow-2xl shadow-blue-400 p-4 md:m-0 m-6 rounded-lg">
            <h4 className="text-lg font-bold">1+ Month</h4>
            <h3 className="text-xl font-semibold mb-2">MERN Stack Developer</h3>
            <p>
              I possess over one year of valuable experience in backend development, showcasing
              my proficiency in building and maintaining robust server-side applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
