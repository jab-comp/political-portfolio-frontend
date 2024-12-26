import { useNavigate } from "react-router-dom";
import Form from "./Form";
import { createTitle } from "../../../apis";

const Add = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Form />
    </div>
  );
};

export default Add;
