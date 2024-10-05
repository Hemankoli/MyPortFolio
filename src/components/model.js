import React from 'react';
import projects from '../Assets/data/ProjectData';

const Model = ({ activeID, setShowModel }) => {
  const portfolio = projects.find(item => item.id === activeID);

  return (
    <div className='fixed shadow-lg top-0 left-0 z-[10] w-full h-full p-4  bg-black bg-opacity-30 flex items-center justify-center'>
      <div className='relative max-w-[350px] bg-white rounded-md p-5'>
        <div className='mb-5'>
          <figure>
            <img className='rounded-[8px]' src={portfolio.imgUrl} alt='' />
          </figure>
        </div>
        <div>
          <h2 className='text-2xl text-black font-bold mb-3'>{portfolio.title}</h2>
          <p className='text-sm text-gray-700 mb-4'>{portfolio.description}</p>
          <div className='flex flex-wrap gap-2'>
            <h4 className='text-gray-600 text-sm font-bold'>Technologies:</h4>
            {portfolio.technologies.map((tech, index) => (
              <span key={index} className='bg-gray-300 py-1 px-2 rounded-[5px] text-sm'>{tech}</span>
            ))}
          </div>
          <a href={portfolio.siteUrl}>
            <button className='bg-purple-500 text-white py-2 px-4 mt-5 rounded-md font-semibold hover:bg-purple-700 ease-in duration-300'>
              Live Site
            </button>
          </a>
        </div>
        <button
          onClick={() => setShowModel(false)}
          className='absolute top-6 right-6 w-6 h-6 bg-purple-500 text-white text-lg flex items-center justify-center rounded cursor-pointer'
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default Model;
