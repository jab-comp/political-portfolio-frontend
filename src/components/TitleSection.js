import React from 'react';

const TitleSection = ({ data }) => {
  return (
    <section className="text-center border-b-2 border-gray-300 py-16 bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
      <img src={data.image} alt="Title Image" className="mx-auto mb-4" />
      <p className="text-lg max-w-2xl mx-auto">{data.description}</p>
    </section>
  );
};

export default TitleSection;
