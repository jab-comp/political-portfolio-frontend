import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { vote, registerVolunteer } from "../apis";
import { toast } from "react-toastify";

const Survey = ({ modalIsOpen, setSurveyModalIsOpen, showButton ,alreadyVoted  , setDataUpdate}) => {
  const [selectedParty, setSelectedParty] = useState("Others");
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const [volunteerFormData, setVolunteerFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    date: "",
    gender: "",
    address: "",
  });

  useEffect(()=>{
    setShowVolunteerForm(showButton)
  },[showButton])

  const parties = ["ALP", "PPP", "PNC", "AFC", "Others"];

  const closeModal = () => setSurveyModalIsOpen(false);

  const handlePartyChange = (event) => {
    setSelectedParty(event.target.value);
  };

  const handleVolunteerFormChange = (event) => {
    const { name, value } = event.target;
    setVolunteerFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitVote = async () => {
    try {
      if (!selectedParty) {
        console.log("IP or party name is missing.");
        alert("Select Party");
        return;
      }
      const response = await vote({ partyName: selectedParty });
      console.log("Failed to submit vote:", response);
      debugger;
      if (response.status == 201) {
        console.log("Vote successfully submitted:", response.data);
        toast.success(response.data.message);
        setDataUpdate((prev)=>!prev)
      } else {
        console.log("Failed to submit vote:", response.message);
      }
    } catch (error) {
      console.error(
        "An error occurred while submitting the vote:",
        error?.response?.data?.message
      );
      toast.error(error?.response?.data?.message);
    } finally {
      setSurveyModalIsOpen(false);
    }
  };

  const handleVolunteerFormSubmit = async (event) => {
    event.preventDefault();
    console.log("Volunteer Form Data:", volunteerFormData);

    try {
      const response = await registerVolunteer(volunteerFormData);
      if(!alreadyVoted){
        submitVote();
      }
      console.log(">>>>>>>>>>>", response);
      toast.success(response.message);
      setDataUpdate((prev)=>!prev)
    } catch (error) {
      console.error("Error registering volunteer:", error);
      toast.error(error?.response?.data?.message);
    }finally {
      setSurveyModalIsOpen(false);
    }
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        contentLabel="Example Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            width: "50%",
            backgroundColor: "transparent",
            border: "none",
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
          <div className="flex justify-end">
            <button
              onClick={closeModal}
              className="bg-gray-200 px-3 py-1 rounded-md"
            >
              Skip
            </button>
          </div>

          {!showButton && (
            <>
              <h2 className="mt-4 font-bold text-xl text-gray-600">
                Select the party you support for the 2025 election:
              </h2>
              <form className="mt-2 flex space-x-4">
                {parties.map((party) => (
                  <label key={party} className="flex items-center">
                    <input
                      type="radio"
                      value={party}
                      checked={selectedParty === party}
                      onChange={handlePartyChange}
                      className="mr-2"
                    />
                    {party}
                  </label>
                ))}
              </form>
           

          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => submitVote()}
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              Submit
            </button>
            <button
              className="bg-green-500 flex justify-center items-center gap-3 text-white px-4 py-2 rounded-md"
              onClick={() => setShowVolunteerForm(!showVolunteerForm)}
            >
              Become a Volunteer
              {showVolunteerForm ? (
                <MdOutlineKeyboardArrowUp size={22} />
              ) : (
                <MdOutlineKeyboardArrowDown size={22} />
              )}
            </button>
          </div>

          </>
          )}

          <AnimatePresence>
            {showVolunteerForm && (
              <motion.div
                className="mt-6 border-t pt-4"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <form
                  className="mt-4 space-y-4"
                  onSubmit={handleVolunteerFormSubmit}
                >
                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-gray-600">First Name</label>
                      <input
                        type="text"
                        name="firstName"
                        value={volunteerFormData.firstName}
                        onChange={handleVolunteerFormChange}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-600">Last Name</label>
                      <input
                        type="text"
                        name="lastName"
                        value={volunteerFormData.lastName}
                        onChange={handleVolunteerFormChange}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-gray-600">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={volunteerFormData.email}
                        onChange={handleVolunteerFormChange}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div className="w-1/2">
                      <label className="block text-gray-600">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={volunteerFormData.phone}
                        onChange={handleVolunteerFormChange}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <div className="w-1/2">
                      <label className="block text-gray-600">Date</label>
                      <input
                        type="date"
                        name="date"
                        value={volunteerFormData.date}
                        onChange={handleVolunteerFormChange}
                        className="w-full border rounded px-3 py-2"
                      />
                    </div>
                    <div className="w-1/2 flex items-center space-x-4">
                      <label className="block text-gray-600">Gender</label>
                      <div className="flex space-x-2">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={volunteerFormData.gender === "male"}
                            onChange={handleVolunteerFormChange}
                            className="mr-2"
                          />
                          Male
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={volunteerFormData.gender === "female"}
                            onChange={handleVolunteerFormChange}
                            className="mr-2"
                          />
                          Female
                        </label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-600">Address</label>
                    <textarea
                      name="address"
                      value={volunteerFormData.address}
                      onChange={handleVolunteerFormChange}
                      className="w-full border rounded px-3 py-2"
                      rows="3"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                  >
                    Submit Volunteer Form
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Modal>
    </div>
  );
};

export default Survey;
