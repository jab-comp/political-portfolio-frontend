import React, { useCallback, useEffect, useState } from "react";
import { getContentsData } from "../apis";
import { getImage } from "../utils";
import ReactQuill from "react-quill-new";

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
    <section className="p-8  text-white bg-gray-800  ">
      <div className=" py-10">
        {contents.map((item, index) => (
          <div
            key={index}
            className={`flex gap-10 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            } items-start mb-8`}
          >
            <div
              className={`w-[40%] ${index % 2 !== 0 ? " " : ""} rounded-lg`}
              style={{
                boxShadow: "15px 15px 20px rgba(255, 255, 255, 0.5)", // White shadow
              }}
            >
              <img
                src={getImage(item.image)}
                alt={item.text}
                className={`rounded-lg w-[450px] h-[400px] `}
              />
            </div>

            <div className={`w-[60%] `}>
              <ReactQuill
                value={item.text}
                readOnly={true}
                theme=""
                style={{
                  fontSize: '24px', // Example font size
                  lineHeight: '1.8', // Example line height
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;
