import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminContentsData } from "../../../apis";
import ReactQuill from 'react-quill-new'
import { getImage } from "../../../utils";

const Contents = () => {
  const navigate = useNavigate();
  const [contents, setContents] = useState([])

  const fetchContentsData = useCallback(async () => {
    const contents = await getAdminContentsData()

    setContents(contents)
  }, [])

  useEffect(() => {
    fetchContentsData()
  }, [fetchContentsData])

  const handleAdd = () => navigate('/dashboard/contents/add')

  return (
    <section className="content-section">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-4">Content Section</h2>
        <button onClick={handleAdd} className="btn bg-blue-500 text-white px-4 py-2 rounded">Add new Content</button>
      </div>
      <table className="w-full table-auto border-collapse border border-gray-700 text-center">
        <thead>
          <tr>
            <th className="border border-gray-700 p-2">Text</th>
            <th className="border border-gray-700 p-2">Is Published</th>
            <th className="border border-gray-700 p-2">Order</th>
            <th className="border border-gray-700 p-2">Image</th>
            <th className="border border-gray-700 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contents.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-700 p-2">
                <ReactQuill
                  value={`${item.text.substring(0, 100)}${item.text.length > 100 ? '...' : ''}`}
                  readOnly={true}
                  theme="bubble"
                />
              </td>
              <td className="border border-gray-700 p-2">{item.published ? 'Yes' : 'No'}</td>
              <td className="border border-gray-700 p-2">{item.order}</td>
              <td className="border border-gray-700 p-2">
                <img
                  src={getImage(item.image)}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded-md mx-auto"
                />
              </td>
              <td className="border border-gray-700 p-2">
                <button
                  onClick={() => navigate(`/dashboard/contents/${item._id}`)}
                  className="bg-white text-black px-4 py-2 rounded-lg"
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default Contents;