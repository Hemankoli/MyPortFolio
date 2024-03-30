import React, { useState } from 'react';
import ResumePDF from '../Assets/Hemant resume.pdf';

const Resume = () => {
  const [showResume, setShowResume] = useState(false);

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="container mx-auto text-center">
        <p className="mb-4">Click the button below to view/download the resume PDF:</p>
        <button
          onClick={toggleResume}
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
        >
          {showResume ? 'Hide Resume' : 'Show Resume'}
        </button>

        <div className={showResume ? 'block' : 'hidden'}>
          <iframe
            title="Resume"
            src={ResumePDF}
            className="mt-8 w-full"
            style={{ height: 'calc(100vh - 200px)', overflow: 'hidden' }}
          />
        </div>

      </div>
    </div>
  );
};

export default Resume;
