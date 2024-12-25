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

  return (
    <motion.div
      className="relative w-[80%] mx-auto rounded-2xl  flex items-center justify-center py-5  px-10 bg-gradient-to-r from-[#712a3bbd] via-[#09375d] to-[#2e1de556]  "
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="flex-1">
        <motion.h1
          className="text-5xl font-bold text-[#922044] mb-6 px-3"
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
          className="text-left" // Aligns content to the left
        >
          <ReactQuill
            value={title.text}
            readOnly={true}
            theme=""
            className="custom-quill  text-white"
          />
        </motion.div>
      </div>
      <motion.img
        src={getImage(title.image)}
        alt="Hero Image"
        className="rounded shadow-lg h-96 animate-fadeIn relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
      />
    </motion.div>
  );
};

export default TitleSection;
