import React from 'react';

const projects = [
  {title: 'Service Title 1', description: 'Service description 1.' },
  {title: 'Service Title 2', description: 'Service description 2.' },
  {title: 'Service Title 3', description: 'Service description 3.' },
  {title: 'Service Title 4', description: 'Service description 4.' },
  {title: 'Service Title 5', description: 'Service description 5.' },
  {title: 'Service Title 6', description: 'Service description 6.' },

];

const ServiceSection = () => (
  <div className="contact py-5 bg-white">
    <div className="container">
      <h2 className="mb-4 text-center">Our Services 我们提供的服务</h2>
      
      <div className="row">
        {projects.map((project, index) => (
          <div key={index} className="col-md-12 mb-12 mb-3">
            <div className="card h-100 shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ServiceSection;
