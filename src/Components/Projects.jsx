import React from 'react';
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import './Project.css';

const project = () => {
  const projects = [
    { id: 1, src: work2 },
    { id: 2, src: work1 },
    { id: 3, src: work2 }
  ];

  return (
    <div className='projects'>
    <div className="project-section">
      <div className="project-container">
        <div className="project-header">
          <p className="project-title">project</p>
          <p className="project-subtitle">These are just demos...Actual works are yet to add on profile</p>
        </div>
        <div className="project-grid">
          {projects.map(({ id, src }) => (
            <div key={id} className="project-item">
              <img src={src} alt={`project item ${id}`} className="project-image" />
              
            </div>
          ))}
        </div>
      </div>
    </div></div>
  );
}

export default project;
