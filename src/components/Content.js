import React, { useCallback, useEffect, useState } from "react";
import { getContentsData } from "../apis";
import { getImage } from "../utils";
import ReactQuill from "react-quill-new";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ContentItem = ({ item }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1 },
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <motion.img
        src={getImage(item.image)}
        alt={item.text}
        className="w-full md:w-1/2 lg:h-auto max-h-[450px] rounded shadow-md mb-6 md:mb-0"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 1.5 }}
      />
      <div className="flex-1 w-full mt-5">
        <ReactQuill value={item.text} readOnly={true} theme="" className="" />
      </div>
    </motion.div>
  );
};

const ContentSection = () => {
  const [contents, setContents] = useState([]);

  const fetchContents = useCallback(async () => {
    const data = await getContentsData();
    if (data && data.length) {
      setContents(data);
    }
  }, []);

  useEffect(() => {
    fetchContents();
  }, [fetchContents]);

  if (!contents || contents.length === 0) {
    return <p>No content available</p>;
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        {contents.map((item, index) => (
          <ContentItem key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
