import React, { useCallback, useEffect, useState } from 'react';
import { getContentsData } from '../apis';
import { getImage } from '../utils';

const ContentSection = () => {
  const [contents, setContents] = useState([]);

  // Only depends on the initial render, doesn't need to depend on `contents`
  const fetchContents = useCallback(async () => {
    const data = await getContentsData();

    if (data && data.length) {
      setContents(data);
    }
  }, []); // Empty dependency array ensures it only runs on mount

  useEffect(() => {
    fetchContents();
  }, [fetchContents]); // Only call fetchContents once when the component mounts

  if (!contents || contents.length === 0) {
    return <p>No content available</p>;
  }

  return (
    <section className="p-8 text-white bg-gray-800">
      <div>
        {contents.map((item, index) => (
          <div
            key={index}
            className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-start mb-8`}
          >
            <div className={`w-1/2 ${index % 2 !== 0 ? 'p-8 ' : ''}`}>
              <img
                src={getImage(item.image)}
                alt={item.text}
                className={`rounded-lg w-100 h-auto mx-auto`} 
              />
            </div>
            <div className={`w-1/2 text-left ${index % 2 === 0 ? 'pl-8' : 'pr-8 pt-8'}`}>
              <p className="text-lg">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
