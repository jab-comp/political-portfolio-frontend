/* eslint-disable jsx-a11y/img-redundant-alt */
import { useCallback, useEffect, useState } from "react";
import { getTitlesData } from "../apis";
import { getImage } from "../utils";
import ReactQuill from "react-quill-new";

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
    <section className="text-center border-b-2 border-gray-300 py-10 w-[80%] mx-auto ">
      <div className=" mx-auto ">
        <img
          src={getImage(title.image)}
          alt="Title Image"
          className=" mb-4 w-32 h-32 rounded-full object-cover"
        />

        <ReactQuill
          value={title.text}
          readOnly={true}
          theme=""
          className="text-2xl  mx-auto font-bold"
        />
      </div>
    </section>
  );
};

export default TitleSection;
