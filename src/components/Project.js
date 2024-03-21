import React from 'react';
import html from '../images/html.png'
import css from '../images/CSS.png'
import JavaScript from '../images/JS.png'
import react from '../images/REACT.png'
import Node from '../images/Node.png'
import Express from '../images/ex.png'
import mongodb from '../images/mongo.png'
import Tailwind from '../images/tailwind.png'
import git from '../images/git.png'


const ProjectsPage = () => {
  
  return (
    <>
      <div className="text-black mb-20 mt-28">
        <div className="mb-20">
        <p className="text-sm  text-center">My Recent Works</p>
          <h2 className="text-4xl text-center font-bold">Projects 💻 </h2>
        </div>
        <div className="grid grid-cols-1 md:mx-40 md:grid-cols-3 gap-4 ">
          <div className="bg-customBlue w-96 mx-auto mb-20 border border-blue-500 shadow-xl shadow-blue-400 p-6 rounded-lg">
            <img src={"https://media.geeksforgeeks.org/wp-content/uploads/20240207113731/Portfolio-Website-Project-Banner.webp"} alt="Project 1" className="w-96 h-60 mb-4 rounded-lg" />
              <h3 className="text-2xl font-bold mb-2">PORTFOLIO</h3>
              <div className='flex md:space-x-6 space-x-6 mt-8 mb-4'>
                <img src={react} alt="react" className="w-8 h-8" />
                <img src={Tailwind} alt="Tailwind" className="w-8 h-8" />
                <img src={css} alt="css" className="w-8 h-8" />
                <img src={git} alt="git" className="w-8 h-8" />
              </div>
              <div className='border mb-4'></div>
            <p>
            Portfolio Website is created using React.Js and Tailwind CSS to showcase your relevant skills and experience. It is a great way of growing your online presence and get noticed. It can be used to get a job or to attract clients to your services.
            </p>
            <div className="mt-4">  
              <a href="https://github.com/Hemankoli/MyPortFolio" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold italic underline text-lg hover:text-blue-700 mr-4">GitHub</a>
              <a href="https://hemantkoliportfolio.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold italic underline text-lg hover:text-green-700">Live Demo</a>
            </div>
          </div>

          <div className="bg-customBlue w-96 mx-auto mb-20 border border-blue-500 shadow-xl shadow-blue-400 p-6 rounded-lg">
            <img src={"https://img.freepik.com/premium-vector/list-icon-with-hand-drawn-text-checklist-task-list-vector-illustration-flat-style-white-background_157943-819.jpg"} alt="Project 2" className="w-96 mb-20 h-60 mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold mb-2">TO-DO WEB</h3>
            <div className='flex md:space-x-6 space-x-6 mt-8 mb-4'>
                <img src={react} alt="react" className="w-8 h-8" />
                <img src={Tailwind} alt="Tailwind" className="w-8 h-8" />
                <img src={mongodb} alt="mongodb" className="w-8 h-8" />
                <img src={git} alt="git" className="w-8 h-8" />
              </div>
              <div className='border mb-4'></div>
            <p>
            A to-do app is a digital tool designed to help users organize and manage their tasks. Users can create, prioritize, and track their tasks with deadlines, set reminders, and categorize items for better organization. These apps often offer features like collaboration, syncing across devices, and notifications to ensure efficient task management.
            </p>
            <div className="mt-4">
              <a href="https://github.com/Hemankoli/todo-app" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold italic underline text-lg  hover:text-blue-700 mr-4">GitHub</a>
              <a href="https://todoalist.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold italic underline text-lg hover:text-green-700">Live Demo</a>
            </div>
          </div>

          <div className="bg-customBlue w-96 mx-auto mb-20 border border-blue-500 shadow-xl shadow-blue-400 p-6 rounded-lg">
            <img src={"https://i.ytimg.com/vi/9FMdYtmVAO8/maxresdefault.jpg"} alt="Project 2" className="w-62 h-60 mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold mb-2">CALCULATOR WEB</h3>
            <div className='flex md:space-x-6 space-x-6 mt-8 mb-4'>
                <img src={html} alt="html" className="w-8 h-8" />
                <img src={css} alt="css" className="w-8 h-8" />
                <img src={JavaScript} alt="javascript" className="w-8 h-8" />
                <img src={git} alt="git" className="w-8 h-8" />
              </div>
              <div className='border mb-4'></div>
            <p>
            JavaScript has a built-in calculator, and mathematical operations can be done directly in the console. We can do some simple addition with numbers, for example adding 10 and 20 , using the plus sign ( + ).
            </p>
            <div className="mt-4">
              <a href="https://github.com/Hemankoli/Calculator" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold italic underline text-lg hover:text-blue-700 mr-4">GitHub</a>
              <a href="https://replit.com/@btsheman/CalculatorApp" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold italic underline text-lg hover:text-green-700">Live Demo</a>
            </div>
          </div>

          <div className="bg-customBlue w-96 mx-auto mb-20 border border-blue-500 shadow-xl shadow-blue-400 p-6 rounded-lg">
            <img src={"https://www.appypie.com/wp-content/uploads/2024/01/An-App-to-Match-Your-Website.png"} alt="Project 2" className="w-62 h-60 mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold mb-2">BLOG WEBSITE</h3>
            <div className='flex md:space-x-6 space-x-6 mt-8 mb-4'>
                <img src={Node} alt="node" className="w-8 h-8" />
                <img src={Tailwind} alt="Tailwind" className="w-8 h-8" />
                <img src={Express} alt="express" className="w-8 h-8" />
                <img src={mongodb} alt="mongodb" className="w-8 h-8" />
                <img src={git} alt="git" className="w-8 h-8" />
              </div>
              <div className='border mb-4'></div>
            <p>
            It allows users to create, edit, and delete blog posts, on existing posts. The Node.js backend handles user authentication and data storage using MongoDB, ensuring secure and efficient management of blog content. Users can also search for specific blog posts, making it a feature-rich platform for bloggers and readers alike.
            </p>
            <div className="mt-4">
              <a href="https://github.com/Hemankoli/BLOGAPPPROJ" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold italic underline text-lg hover:text-blue-700 mr-4">GitHub</a>
              <a href="https://pear-worried-skunk.cyclic.app/login" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold italic underline text-lg hover:text-green-700">Live Demo</a>
            </div>
          </div>

          <div className="bg-customBlue w-96 mx-auto mb-20 border border-blue-500 shadow-xl shadow-blue-400 p-6 rounded-lg">
            <img src={"https://www.shutterstock.com/image-photo/romeitaly-november-4-2021-man-600nw-2069918705.jpg"} alt="Project 2" className="w-62 h-60 mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold mb-2">CRYPTO WEBSITE</h3>
            <div className='flex md:space-x-6 space-x-6 mt-8 mb-4'>
                <img src={react} alt="react" className="w-8 h-8" />
                <img src={Tailwind} alt="Tailwind" className="w-8 h-8" />
                <img src={git} alt="git" className="w-8 h-8" />
              </div>
              <div className='border mb-4'></div>
            <p>
            A React-based crypto app providing real-time market data, portfolio tracking, and secure wallet management. Users can buy, sell, and monitor their favorite cryptocurrencies with intuitive UI/UX. Enjoy a seamless experience with cutting-edge security features.
            </p>
            <div className="mt-4">
              <a href="https://github.com/Hemankoli/CryptoApp" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold italic underline text-lg hover:text-blue-700 mr-4">GitHub</a>
              <a href="https://cryptoapp-heman.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold italic underline text-lg hover:text-green-700">Live Demo</a>
            </div>
          </div>

          <div className="bg-customBlue w-96 mx-auto mb-20 border border-blue-500 shadow-xl shadow-blue-400 p-6 rounded-lg opacity-40">
            <img src={"https://www.elsner.com/wp-content/uploads/2017/10/Initial-preparation-for-an-eCommerce-project-min.jpg"} alt="Project 2" className="w-62 h-60 mb-4 rounded-lg" />
            <h3 className="text-2xl font-bold mb-2">ECOMMERCE APP</h3>
            <div className='flex md:space-x-6 space-x-6 mt-8 mb-4'>
                <img src={react} alt="react" className="w-8 h-8" />
                <img src={Tailwind} alt="Tailwind" className="w-8 h-8" />
                <img src={Node} alt="node" className="w-8 h-8" />
                <img src={Express} alt="express" className="w-8 h-8" />
                <img src={mongodb} alt="mongodb" className="w-8 h-8" />
                <img src={git} alt="git" className="w-8 h-8" />
              </div>
              <div className='border mb-4'></div>
            <p>
            Ecommerce App project details will be added soon. Stay tuned!
            </p>
            <div className="mt-4">
              <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-bold italic underline text-lg hover:text-blue-700 mr-4">GitHub</a>
              <a href="https://project2-live-link.com" target="_blank" rel="noopener noreferrer" className="text-green-500 font-bold italic underline text-lg hover:text-green-700">Live Demo</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectsPage;
