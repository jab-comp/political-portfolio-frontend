import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteContent, getAdminContentsData } from "../../../apis";
import ReactQuill from "react-quill-new";
import { getImage } from "../../../utils";
import ConfirmationModal from "../../../components/ConfirmationModal";
import { MdAutoDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { IoMdEye } from "react-icons/io";
import PreviewContentModal from "../../../components/PreviewContentModal";
import { IoMdAdd } from "react-icons/io";

const Contents = () => {
  const navigate = useNavigate();
  const [contents, setContents] = useState([]);
  const [deleteId, setDeleteId] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);

  const handleView = (content) => {
    setSelectedContent(content); // Set the selected content
    setModalIsOpen(true); // Open the modal
  };

  const fetchContentsData = useCallback(async () => {
    const contents = await getAdminContentsData();

    setContents(contents);
  }, []);

  useEffect(() => {
    fetchContentsData();
  }, [fetchContentsData]);

  const handleAdd = () => navigate("/dashboard/contents/add");

  const handleDelete = async () => {
    const { status } = await deleteContent(deleteId);

    if (status) {
      fetchContentsData();
    }
    setDeleteId("");
  };

  const handleCancel = () => setDeleteId("");

  return (
    <section className="content-section shadow-lg bg-white p-7 rounded-lg">
      <div className="flex justify-between items-end py-3">
        <h2 className="text-2xl font-semibold ">Content Section</h2>
        <button
          onClick={handleAdd}
          className="btn bg-blue-500 text-white px-2 py-2 rounded flex items-center gap-1"
        >
          <IoMdAdd size={20}/>
          Add new Content
        </button>
      </div>
      <table className="w-full table-auto border-collapse border text-center">
        <thead>
          <tr>
            <th className="border p-2">Text</th>
            <th className="border p-2">Is Published</th>
            <th className="border p-2">Order</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((item, index) => (
            <tr key={index}>
              <td className="border p-2">
                <ReactQuill
                  value={`${item.text.substring(0, 200)}${
                    item.text.length > 200 ? "..." : ""
                  }`}
                  readOnly={true}
                  theme="bubble"
                />
              </td>
              <td className="border p-2">
                {item.published ? "Yes" : "No"}
              </td>
              <td className="border p-2">{item.order}</td>
              <td className="border p-2">
                <img
                  src={getImage(item.image)}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md mx-auto"
                />
              </td>
              <td className="border p-2 flex-col justify-center items-center">
                <div className="flex gap-2">
                  <IoMdEye
                    className="cursor-pointer text-green-600"
                    size={20}
                    onClick={() => handleView(item)}
                  />

                  <FaRegEdit
                    className="cursor-pointer text-blue-700"
                    size={20}
                    onClick={() => navigate(`/dashboard/contents/${item._id}`)}
                  />

                  <MdAutoDelete
                    className="cursor-pointer text-red-500"
                    size={20}
                    onClick={() => setDeleteId(item._id)}
                  />
                </div>
              </td>
            </tr>
          ))}
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

export default Contents;
