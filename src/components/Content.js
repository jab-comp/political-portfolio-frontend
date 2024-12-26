import React, { useCallback, useEffect, useState } from "react";
import { getContentsData } from "../apis";
import { getImage } from "../utils";
import ReactQuill from "react-quill-new";
import { motion } from 'framer-motion';

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
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {contents.map((item, index) => (
          <motion.div
            key={index} // Added a unique key for React's reconciliation
            className={`flex flex-col items-center`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <img
              src={getImage(item.image)}
              alt={item.text}
              className="w-full md:w-1/2 lg:h-auto max-h-[450px] rounded shadow-md mb-6 md:mb-0"
            />
            <div className=" flex-1">
              <ReactQuill
                value={item.text}
                readOnly={true}
                theme=""
                className="text-grey-600"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>


  )
};

export default ContentSection;
