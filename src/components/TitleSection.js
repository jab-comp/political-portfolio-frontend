/* eslint-disable jsx-a11y/img-redundant-alt */
import { useCallback, useEffect, useState } from "react";
import { getTitlesData } from "../apis";
import { getImage } from "../utils";
import ReactQuill from "react-quill-new";
import { motion } from 'framer-motion';

const TitleSection = () => {
  const [title, setTitle] = useState({
    text: "",
    active: false,
    image: null,
  });

  const fetchTitle = useCallback(async () => {
    const titles = await getTitlesData();
    titles && titles.length && setTitle(titles[0]);
  }, []);

  useEffect(() => {
    fetchTitle();
  }, [fetchTitle]);

  return (
    <motion.div
      className="relative w-full h-screen flex items-center justify-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1 text-center">
        <motion.h1
          className="text-5xl font-bold text-blue-700 mb-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          Hon. Simona Broomes
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
        >
          <ReactQuill
            value={title.text}
            readOnly={true}
            theme=""
            className="custom-quill text-lg mx-auto font-bold"
          />
        </motion.div>
      </div>
      <motion.img
        src={getImage(title.image)}
        alt="Hero Image"
        className="flex-1 rounded shadow-lg w-full h-96  animate-fadeIn"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
    </motion.div>
  );
};

export default TitleSection;
