import React, { useState, useEffect } from 'react';
import projectsData from '../Assets/data/ProjectData';
import Model from './model';


const Project = () => {
  const [nextItem, setNextItem] = useState(6);
  const [port, setPort] = useState([]);
  const [selectTab, setSelectTab] = useState('all');
  const [showModel, setShowModel] = useState(false);
  const [activeID, setActiveID] = useState(null); // Initialize activeID with null

  const loadMore = () => {
    setNextItem(prev => prev + 3);
  };

  const showModelHandler = id => {
    setShowModel(true);
    setActiveID(id);
  };

  useEffect(() => {
    setPort(projectsData);
  }, []);

  useEffect(() => {
    if (selectTab === 'all') {
      setPort(projectsData);
    } else if (selectTab === 'web-design') {
      const filterData = projectsData.filter(item => item.category === 'Web Design');
      setPort(filterData);
    } else if (selectTab === 'app-design') {
      const filterData = projectsData.filter(item => item.category === 'App Design');
      setPort(filterData);
    }
  }, [selectTab]);

  return (
    <section>
      <div>
        <div className="text-black flex flex-wrap items-center justify-center mt-6 md:mt-24 md:mx-96"> {/* Centering the content */}
          <div className="mb-8 sm:mb-0 text-center"> {/* Centering the text */}
            <p className="text-sm">My Recent Works</p>
            <h2 className="text-4xl text-purple-500 font-bold mb-4">— Projects 💻</h2>
          </div>
          <div className='flex mx-auto gap-3'>
            <button onClick={() => setSelectTab('all')} className='text-red-400 border border-solid border-blue-400 py-2 px-4 rounded-[8px]'>
              All
            </button>
            <button onClick={() => setSelectTab('web-design')} className='text-red-400 border border-solid border-blue-400 py-2 px-4 rounded-[8px]'>
              Web Design
            </button>
            <button onClick={() => setSelectTab('app-design')} className='text-red-400 border border-solid border-blue-400 py-2 px-4 rounded-[8px]'>
              App Design
            </button>
          </div>
        </div>
        <div className='flex md:w-[700px] items-center gap-6 mt-10 mx-4 md:mx-auto flex-wrap justify-center'> {/* Centering the project items */}
          {port.slice(0, nextItem).map((project) => (
            <div key={project.id}
              projects-aos='fade-zoom-in'
              projects-aos-delay='50'
              projects-aos-duration="1000"
              className="group w-full sm:w-[48%] md:w-[31%] lg:w-[31%] relative z-[1]">
              <figure>
                <img className='rounded-lg border w-80 h-48 md:w-full md:h-44 p-4 bg-purple-300 mx-auto' src={project.imgUrl} alt='' /> {/* Centering the image */}
              </figure>

              <div className='w-full h-full bg-purple-500 bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block'>
                <div className='w-full h-full flex items-center justify-center'>
                  <button onClick={() => showModelHandler(project.id)} className='text-white bg-purple-500 px-4 py-2 rounded-md shadow-md font-[500] hover:bg-purple-500 hover:text-white transition duration-300'>
                    See Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='text-center mt-6 mb-2'>
          {nextItem < port.length && projectsData.length > 6 && (
            <button onClick={loadMore} className='text-white hover:bg-purple-700 bg-purple-500 px-4 py-2 rounded-md shadow-md font-[500] hover:text-white transition duration-300'>
              Load More
            </button>
          )}
        </div>
      </div>
      {showModel && <Model setShowModel={setShowModel} activeID={activeID} />}
    </section>
  );
};

export default Project;
