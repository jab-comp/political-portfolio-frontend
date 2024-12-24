import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { createTitle } from "../../../apis";

const Add = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Add New Title</h1>
      <Form />
    </div>
  );
};

export default Add;
