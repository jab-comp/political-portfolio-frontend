// src/components/ContentSection.js
import React from 'react';

const ContentSection = ({ data }) => {
  if (!data || data.length === 0) {
    return <p>No content available</p>; // Fallback for empty or undefined data
  }

  return (
    <section className="p-8 text-white bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-8">Our Content
      </h2>

      <div>
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start mb-8`}
          >
            {/* Image with dynamic height and aligned to top */}
            <div className={`w-1/2 ${index % 2 !== 0 ? 'p-8 ' : ''}`}>
            <img 
              src={item.image} 
              alt={item.title} 
              className={`rounded-lg w-full  object-cover`}
            />
            </div>
            {/* Text with padding for spacing and aligned to top */}
            <div className={`w-1/2 text-left ${index % 2 === 0 ? 'pl-8' : 'pr-8  pt-8' }`}>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-lg">{item.description}</p>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
