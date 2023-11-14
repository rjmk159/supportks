import { useState } from "react";
import axios from "axios";
import {
  BsHandThumbsDown,
  BsHandThumbsDownFill,
  BsHandThumbsUp,
  BsHandThumbsUpFill,
} from "react-icons/bs";

const ThumbsForm = ({ handleSubmitFeedback }) => {
  const [selected, setSelected] = useState("");
  const [message, setMessage] = useState("");
  const [showThankyou, setShowThankyou] = useState(false);

  const handleThumbsUp = async () => {
    setSelected("up");
  };

  const handleThumbsDown = async () => {
    setSelected("down");
  };
  const handleSubmitFeedbackCall = () => {
    handleSubmitFeedback(selected, message);

    setTimeout(() => {
      setShowThankyou(true);
    }, 2000);
    setTimeout(() => {
      setShowThankyou(false);
      setSelected("");
      setMessage("");
    }, 2000);
  };
  return !showThankyou ? (
    <>
      <h5 className="text-2xl font-semibold tracking-tight text-gray-700 mb-4">
        Have you submitted your feedback and got the confirmation message
      </h5>
      <div className="flex justify-between">
        <button
          onClick={handleThumbsUp}
          className="bg-green-500 text-white px-2 py-2 rounded-md hover:bg-green-600 focus:outline-none"
        >
          {selected === "up" ? (
            <BsHandThumbsUpFill className="w-7 h-7 mr-2" />
          ) : (
            <BsHandThumbsUp className="w-7 h-7 mr-2" />
          )}{" "}
          Yes, I love my Language
        </button>
        <button
          onClick={handleThumbsDown}
          className="bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-600 focus:outline-none"
        >
          {selected === "down" ? (
            <BsHandThumbsDownFill className="w-7 h-7 mr-2" />
          ) : (
            <BsHandThumbsDown className="w-7 h-7 mr-2" />
          )}{" "}
          Waste of time
        </button>
      </div>
      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-600"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows="4"
          className="mt-1 p-2 border rounded-md w-full focus:outline-none"
          placeholder="Enter your feedback message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div className="mt-4">
        <button
          className="bg-blue-500 text-white px-2 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
          onClick={handleSubmitFeedbackCall}
        >
          Submit
        </button>
      </div>
    </>
  ) : (
    <h5 className="text-2xl font-semibold tracking-tight text-gray-700 mb-4">
      Thank you for your feedback
    </h5>
  );
};

export default ThumbsForm;
