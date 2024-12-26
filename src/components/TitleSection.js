// TitleSection.js
import { useCallback, useEffect, useState } from "react";
import { getTitlesData } from "../apis";
import { getImage } from "../utils";
import ReactQuill from "react-quill-new";
import { motion } from "framer-motion";

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

  const text = "Hon. Simona Broomes";
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, 
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.1, 
        staggerDirection: -1, 
      },
    },
  };

  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <motion.div
      className="relative xl:w-[80%] lg:w-[85%] w-[90%] mx-auto rounded-2xl lg:flex items-center justify-center py-5 lg:px-10 bg-gradient-to-r from-[#5b5836ac] via-[#23471eb5] to-[#6429286d]"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1">
        <motion.div
          className="lg:text-5xl text-3xl font-bold lg:mb-6 px-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          style={{ textShadow: "2px 2px 1px rgba(0, 0, 0, 0.3)" }}
          variants={container}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {letters.map((letter, index) => (
            <motion.span key={index} variants={letterAnimation}>
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4 }}
          className="text-left" 
        >
          <ReactQuill
            value={title.text}
            readOnly={true}
            theme=""
            className="custom-quill-title !text-white"
            
          />
        </motion.div>
      </div>
      <motion.img
        src={getImage(title.image)}
        alt="Hero Image"
        className="rounded shadow-lg h-96 animate-fadeIn relative hidden lg:block"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
    </motion.div>
  );
};

export default TitleSection;
