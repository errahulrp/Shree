// ProjectShowcase.js

import React from 'react';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: 'Bridge Construction',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      imageUrl: '/src/images/arina-bondar-qw44fdYtp40-unsplash.jpg',
    },
    {
      id: 2,
      title: 'Road Expansion',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      imageUrl: '/src/images/chua-bing-quan-Sg7eWHKrxrA-unsplash.jpg',
    },
  ];

  return (
    <div className="container mx-auto mt-28 mb-44">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Completed Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white p-4 rounded-md shadow-md transition-transform transform hover:scale-105"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
