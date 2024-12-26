import React, { useState } from "react";
import Modal from "react-modal";
import ReactQuill from "react-quill-new";
import { motion } from "framer-motion";

const PreviewContentModal = ({ modalIsOpen, setModalIsOpen, content }) => {
  debugger;
  //   const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "70%",
            backgroundColor :"transparent",
            border:"none"
          },
        }}
      >
        <motion.div
          className="bg-white rounded-lg border shadow p-6 w-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-bold text-2xl text-gray-500">Content Details</h1>
          <ReactQuill value={content?.text} readOnly={true} theme="bubble" />
          <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="bg-red-500 px-3 py-1 rounded-md"
          >
            Close
          </button>
          </div>
        
        </motion.div>
      </Modal>
    </div>
  );
};

export default PreviewContentModal;
