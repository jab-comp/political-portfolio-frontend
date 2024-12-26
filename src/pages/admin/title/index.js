import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteTitle, getAdminTitlesData } from "../../../apis";
import { getImage } from "../../../utils";
import ReactQuill from "react-quill-new";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { MdAutoDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import PreviewContentModal from "../../../components/PreviewContentModal";
import { IoMdAdd } from "react-icons/io";

const Titles = () => {
  const navigate = useNavigate();
  const [titles, setTitles] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleView = (content) => {
    setSelectedContent(content); // Set the selected content
    setModalIsOpen(true); // Open the modal
  };

  const fetchTitleData = useCallback(async () => {
    const titles = await getAdminTitlesData();

    setTitles(titles);
  }, []);

  useEffect(() => {
    fetchTitleData();
  }, [fetchTitleData]);

  const handleAdd = () => navigate("/dashboard/titles/add");

  const handleDelete = async () => {
    const { status } = await deleteTitle(deleteId);

    if (status) {
      fetchTitleData();
    }
    setDeleteId("");
  };

  const handleCancel = () => setDeleteId("");

  return (
    <section className="title-section mb-8 shadow-lg bg-white p-7 rounded-lg">
      <div className="flex justify-between items-end py-3">
        <h2 className="text-2xl font-semibold">Title Section</h2>
        <button
          onClick={handleAdd}
          className="btn bg-blue-500 text-white px-2 py-2 rounded flex items-center gap-1"
        >
          <IoMdAdd size={20}/>
          Add new Title
        </button>
      </div>

      <table className="w-full table-auto border-collapse border text-center">
        <thead>
          <tr>
            <th className="border p-2">Title</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Is Published?</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {titles.map((title, index) => {
            const { _id, text, image, active } = title || {};
            return (
              <tr key={index} className="text-center">
                <td className="border p-2">
                  <ReactQuill value={text} readOnly={true} theme="bubble" />
                </td>
                {/* Image column */}
                <td className="border p-2">
                  <img
                    src={getImage(image)}
                    alt={`title-image-${index}`}
                    className="w-16 h-16 object-cover rounded-md mx-auto"
                  />
                </td>
                {/* Is Published column */}
                <td className="border p-2">
                  {active ? "Yes" : "No"}
                </td>
                {/* Actions column */}
                <td className="border p-2">
                  {/* <button
                   
                    className="bg-white text-black px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                  <button
                   
                    className="bg-red text-black px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button> */}

                  <div className="flex gap-2">
                    <IoMdEye
                      className="cursor-pointer text-green-600"
                      size={20}
                      onClick={() => handleView(title)}
                    />

                    <FaRegEdit
                      className="cursor-pointer text-blue-700"
                      size={20}
                      onClick={() => navigate(`/dashboard/titles/${_id}`)}
                    />

                    <MdAutoDelete
                      className="cursor-pointer text-red-500"
                      size={20}
                      onClick={() => setDeleteId(_id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {deleteId && (
        <ConfirmationModal
          text="Are you sure you want to delete this item?"
          onConfirm={() => handleDelete()}
          onCancel={handleCancel}
        />
      )}

      <PreviewContentModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        content={selectedContent}
      />
    </section>
  );
};

export default Titles;
