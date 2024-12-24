import { useCallback, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { getAdminTitlesData } from "../../../apis"
import { getImage } from "../../../utils"
import ReactQuill from 'react-quill-new'

const Titles = () => {
  const navigate = useNavigate();
  const [titles, setTitles] = useState([])

  const fetchTitleData = useCallback(async () => {
    const titles = await getAdminTitlesData()

    setTitles(titles)
  }, [])

  useEffect(() => {
    fetchTitleData()
  }, [fetchTitleData])

  const handleAdd = () => navigate('/dashboard/titles/add')

  return (
    <section className="title-section mb-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold mb-4">Title Section</h2>
        <button onClick={handleAdd} className="btn bg-blue-500 text-white px-4 py-2 rounded">Add new Title</button>
      </div>

      <table className="w-full table-auto border-collapse border border-gray-700 text-center">
        <thead>
          <tr>
            <th className="border border-gray-700 p-2">Title</th>
            <th className="border border-gray-700 p-2">Image</th>
            <th className="border border-gray-700 p-2">Is Published?</th>
            <th className="border border-gray-700 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {titles.map((title, index) => {
            const { _id, text, image, active } = title || {};
            return (
              <tr key={index} className="text-center">
                <td className="border border-gray-700 p-2">
                  <ReactQuill
                    value={text}
                    readOnly={true}
                    theme="bubble"
                  />
                </td>
                {/* Image column */}
                <td className="border border-gray-700 p-2">
                  <img
                    src={getImage(image)}
                    alt={`title-image-${index}`}
                    className="w-16 h-16 object-cover rounded-md mx-auto"
                  />
                </td>
                {/* Is Published column */}
                <td className="border border-gray-700 p-2">{active ? 'Yes' : 'No'}</td>
                {/* Actions column */}
                <td className="border border-gray-700 p-2">
                  <button
                    onClick={() => navigate(`/dashboard/titles/${_id}`)}
                    className="bg-white text-black px-4 py-2 rounded-lg"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

    </section >
  )
}

export default Titles;