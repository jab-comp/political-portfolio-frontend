import React, { useState } from "react";
import { titleSectionData, contentData } from "../../mockData";

const AdminDashboard = () => {
  const [content, setContent] = useState(contentData);
  const [titleSection, setTitleSection] = useState(titleSectionData);

  // Handle edit functionality for title and content
  const handleEditTitle = () => {
    setTitleSection({ ...titleSection, isEditing: !titleSection.isEditing });
  };

  const handleSaveTitle = (newTitle, newDescription, newImage) => {
    setTitleSection({
      ...titleSection,
      title: newTitle,
      description: newDescription,
      image: newImage,
      isEditing: false,
    });
  };

  const handleEditContent = (index) => {
    const newData = content.map((item, idx) =>
      idx === index ? { ...item, isEditing: !item.isEditing } : item
    );
    setContent(newData);
  };

  const handleSaveContent = (index, newTitle, newDescription, newImage) => {
    const newData = content.map((item, idx) =>
      idx === index
        ? { ...item, title: newTitle, description: newDescription, image: newImage, isEditing: false }
        : item
    );
    setContent(newData);
  };

  const handleDelete = (index) => {
    const newData = content.filter((_, idx) => idx !== index);
    setContent(newData);
  };

  return (
    <div className="dashboard-container bg-black text-white min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h1>

      {/* Title Section */}
      <section className="title-section mb-8">
        <h2 className="text-2xl font-semibold mb-4">Title Section</h2>
        <table className="w-full table-auto border-collapse border border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-700 p-2">Title</th>
              <th className="border border-gray-700 p-2">Description</th>
              <th className="border border-gray-700 p-2">Image</th>
              <th className="border border-gray-700 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              {titleSection.isEditing ? (
                <>
                  <td className="border border-gray-700 p-2">
                    <input
                      type="text"
                      value={titleSection.title}
                      onChange={(e) =>
                        setTitleSection({ ...titleSection, title: e.target.value })
                      }
                      className="w-full p-1 text-black rounded-md"
                    />
                  </td>
                  <td className="border border-gray-700 p-2">
                    <textarea
                      value={titleSection.description}
                      onChange={(e) =>
                        setTitleSection({ ...titleSection, description: e.target.value })
                      }
                      className="w-full p-1 text-black rounded-md"
                    />
                  </td>
                  <td className="border border-gray-700 p-2">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) =>
                        setTitleSection({
                          ...titleSection,
                          image: URL.createObjectURL(e.target.files[0]),
                        })
                      }
                    />
                  </td>
                  <td className="border border-gray-700 p-2">
                    <button
                      onClick={() =>
                        handleSaveTitle(titleSection.title, titleSection.description, titleSection.image)
                      }
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                      Save
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="border border-gray-700 p-2">{titleSection.title}</td>
                  <td className="border border-gray-700 p-2">{titleSection.description}</td>
                  <td className="border border-gray-700 p-2">
                    <img
                      src={titleSection.image}
                      alt="Title"
                      className="w-16 h-16 object-cover rounded-md"
                    />
                  </td>
                  <td className="border border-gray-700 p-2">
                    <button
                      onClick={handleEditTitle}
                      className="bg-white text-black px-4 py-2 rounded-lg"
                    >
                      Edit
                    </button>
                  </td>
                </>
              )}
            </tr>
          </tbody>
        </table>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <h2 className="text-2xl font-semibold mb-4">Content Section</h2>
        <table className="w-full table-auto border-collapse border border-gray-700">
          <thead>
            <tr>
              <th className="border border-gray-700 p-2">Title</th>
              <th className="border border-gray-700 p-2">Description</th>
              <th className="border border-gray-700 p-2">Image</th>
              <th className="border border-gray-700 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item, index) => (
              <tr key={index}>
                {item.isEditing ? (
                  <>
                    <td className="border border-gray-700 p-2">
                      <input
                        type="text"
                        value={item.title}
                        onChange={(e) => {
                          const newData = content.map((data, idx) =>
                            idx === index ? { ...data, title: e.target.value } : data
                          );
                          setContent(newData);
                        }}
                        className="w-full p-1 text-black rounded-md"
                      />
                    </td>
                    <td className="border border-gray-700 p-2">
                      <textarea
                        value={item.description}
                        onChange={(e) => {
                          const newData = content.map((data, idx) =>
                            idx === index ? { ...data, description: e.target.value } : data
                          );
                          setContent(newData);
                        }}
                        className="w-full p-1 text-black rounded-md"
                      />
                    </td>
                    <td className="border border-gray-700 p-2">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const newData = content.map((data, idx) =>
                            idx === index
                              ? { ...data, image: URL.createObjectURL(e.target.files[0]) }
                              : data
                          );
                          setContent(newData);
                        }}
                      />
                    </td>
                    <td className="border border-gray-700 p-2">
                      <button
                        onClick={() => handleSaveContent(index, item.title, item.description, item.image)}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                      >
                        Save
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="border border-gray-700 p-2">{item.title}</td>
                    <td className="border border-gray-700 p-2">{item.description}</td>
                    <td className="border border-gray-700 p-2">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-16 h-16 object-cover rounded-md"
                      />
                    </td>
                    <td className="border border-gray-700 p-2 flex space-x-2">
                      <button
                        onClick={() => handleEditContent(index)}
                        className="bg-white text-black px-4 py-2 rounded-lg"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(index)}
                        className="bg-red-600 text-white px-4 py-2 rounded-lg"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AdminDashboard;
